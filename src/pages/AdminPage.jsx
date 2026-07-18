import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import netlifyIdentity from "netlify-identity-widget";
import { ToastContainer, toast } from "react-toastify";
import { FiLogOut, FiSave, FiPlus, FiTrash2, FiLoader } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";

const FUNCTION_URL = "/.netlify/functions/content";

const humanize = (key) =>
  key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (c) => c.toUpperCase());

const blankLike = (value) => {
  if (typeof value === "string") return "";
  if (typeof value === "number") return 0;
  if (Array.isArray(value)) return [];
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, blankLike(v)]),
    );
  }
  return "";
};

const JsonFieldEditor = ({ value, onChange, fieldKey }) => {
  if (typeof value === "string") {
    const long = value.length > 70;
    return long ? (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        className="w-full bg-transparent rounded-md border-2 border-dark/30 dark:border-light/30
        focus:outline-none focus:ring-2 focus:ring-primary-light focus:dark:ring-primary-dark p-2 text-sm
        text-dark dark:text-light"
      />
    ) : (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent rounded-md border-2 border-dark/30 dark:border-light/30
        focus:outline-none focus:ring-2 focus:ring-primary-light focus:dark:ring-primary-dark p-2 text-sm
        text-dark dark:text-light"
      />
    );
  }

  if (typeof value === "number") {
    return (
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full bg-transparent rounded-md border-2 border-dark/30 dark:border-light/30
        focus:outline-none focus:ring-2 focus:ring-primary-light focus:dark:ring-primary-dark p-2 text-sm
        text-dark dark:text-light"
      />
    );
  }

  if (Array.isArray(value)) {
    return (
      <div className="flex flex-col gap-3">
        {value.map((item, index) => (
          <div
            key={index}
            className="relative bg-dark/5 dark:bg-light/5 border border-dark/15 dark:border-light/15
            rounded-lg p-4"
          >
            <button
              type="button"
              onClick={() => onChange(value.filter((_, i) => i !== index))}
              className="absolute top-3 right-3 text-dark/40 dark:text-light/40 hover:text-red-500
              hover:dark:text-red-400 transition-colors"
              aria-label={`Remove ${fieldKey || "item"} ${index + 1}`}
            >
              <FiTrash2 size={15} />
            </button>
            <JsonFieldEditor
              value={item}
              fieldKey={fieldKey}
              onChange={(updated) => {
                const copy = [...value];
                copy[index] = updated;
                onChange(copy);
              }}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange([...value, blankLike(value[0] ?? "")])}
          className="flex items-center gap-2 self-start text-xs font-semibold px-3 py-2 rounded-lg
          border-2 border-dashed border-primary-light/50 dark:border-primary-dark/50
          text-primary-light dark:text-primary-dark hover:bg-primary-light/10 hover:dark:bg-primary-dark/10
          transition-colors"
        >
          <FiPlus size={14} /> Add{" "}
          {fieldKey ? humanize(fieldKey).replace(/s$/, "") : "item"}
        </button>
      </div>
    );
  }

  if (value && typeof value === "object") {
    const entries = Object.entries(value);
    if (entries.length === 0) return null;
    return (
      <div className="flex flex-col gap-3">
        {entries.map(([key, val]) => (
          <div key={key}>
            <label className="block text-xs font-semibold text-dark/60 dark:text-light/60 mb-1 select-none">
              {humanize(key)}
            </label>
            <JsonFieldEditor
              value={val}
              fieldKey={key}
              onChange={(updated) => onChange({ ...value, [key]: updated })}
            />
          </div>
        ))}
      </div>
    );
  }

  return null;
};

JsonFieldEditor.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  fieldKey: PropTypes.string,
};

const SECTION_ORDER = [
  "pages",
  "socials",
  "home",
  "about",
  "profile",
  "experiences",
  "education",
  "skills",
  "works",
  "projects",
  "contact",
];

const AdminPage = () => {
  const [user, setUser] = useState(null);
  const [content, setContent] = useState(null);
  const [sha, setSha] = useState(null);
  const [loadingContent, setLoadingContent] = useState(false);
  const [saving, setSaving] = useState(false);
  const [activeSection, setActiveSection] = useState("pages");

  useEffect(() => {
    netlifyIdentity.init();
    netlifyIdentity.on("login", (loggedInUser) => {
      setUser(loggedInUser);
      netlifyIdentity.close();
    });
    netlifyIdentity.on("logout", () => setUser(null));
    setUser(netlifyIdentity.currentUser());

    return () => {
      netlifyIdentity.off("login");
      netlifyIdentity.off("logout");
    };
  }, []);

  const fetchContent = useCallback(async () => {
    if (!user) return;
    setLoadingContent(true);
    try {
      const token = await user.jwt();
      const res = await fetch(FUNCTION_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      setContent(data.content);
      setSha(data.sha);
    } catch (error) {
      console.error(error);
      toast.error("Couldn't load content — check the function's GitHub setup.");
    } finally {
      setLoadingContent(false);
    }
  }, [user]);

  useEffect(() => {
    if (user) fetchContent();
  }, [user, fetchContent]);

  const handleSave = async () => {
    setSaving(true);
    try {
      const token = await user.jwt();
      const res = await fetch(FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content, sha }),
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      setSha(data.sha);
      toast.success("Saved! Netlify is rebuilding your site now.");
    } catch (error) {
      console.error(error);
      toast.error(
        "Save failed — someone else may have edited this since you loaded it.",
      );
    } finally {
      setSaving(false);
    }
  };

  // Logged out
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-light dark:bg-dark px-4">
        <h1 className="text-2xl font-bold text-dark dark:text-light mb-2 select-none">
          Site Admin
        </h1>
        <p className="text-sm text-dark/60 dark:text-light/60 mb-6 select-none">
          Log in with your Netlify Identity account to edit your site content.
        </p>
        <button
          onClick={() => netlifyIdentity.open("login")}
          className="text-sm font-semibold px-6 py-3 rounded-lg text-light bg-primary-dark
          shadow-[0_0_10px_2px_rgba(27,160,152,0.55)]
          hover:bg-[#22c4b8] hover:shadow-[0_0_18px_4px_rgba(27,160,152,0.8)]
          transition-all"
        >
          Log In
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light dark:bg-dark">
      <ToastContainer />
      <header className="flex justify-between items-center px-6 py-4 border-b border-dark/10 dark:border-light/10">
        <div>
          <h1 className="text-lg font-bold text-dark dark:text-light select-none">
            Site Admin
          </h1>
          <p className="text-xs text-dark/50 dark:text-light/50 select-none">
            {user.email}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleSave}
            disabled={saving || loadingContent || !content}
            className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg text-light bg-primary-dark
            shadow-[0_0_10px_2px_rgba(27,160,152,0.55)]
            hover:bg-[#22c4b8] hover:shadow-[0_0_18px_4px_rgba(27,160,152,0.8)]
            disabled:opacity-50 disabled:hover:shadow-[0_0_10px_2px_rgba(27,160,152,0.55)]
            transition-all"
          >
            {saving ? (
              <FiLoader className="animate-spin" size={15} />
            ) : (
              <FiSave size={15} />
            )}
            Save & Publish
          </button>
          <button
            onClick={() => netlifyIdentity.logout()}
            className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg
            border-2 border-dark/30 dark:border-light/30 text-dark dark:text-light
            hover:bg-dark/10 hover:dark:bg-light/10 transition-colors"
          >
            <FiLogOut size={15} /> Log Out
          </button>
        </div>
      </header>

      {loadingContent || !content ? (
        <div className="flex justify-center items-center py-24">
          <FiLoader
            className="animate-spin text-primary-light dark:text-primary-dark"
            size={28}
          />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row">
          <nav className="md:w-48 flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-r border-dark/10 dark:border-light/10">
            {SECTION_ORDER.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`text-left text-sm font-medium px-4 py-3 whitespace-nowrap transition-colors select-none ${
                  activeSection === section
                    ? "text-primary-light dark:text-primary-dark bg-primary-light/10 dark:bg-primary-dark/10"
                    : "text-dark/60 dark:text-light/60 hover:bg-dark/5 hover:dark:bg-light/5"
                }`}
              >
                {humanize(section)}
              </button>
            ))}
          </nav>

          <main className="flex-1 p-6 max-w-2xl">
            <h2 className="text-base font-bold text-dark dark:text-light mb-4 select-none">
              {humanize(activeSection)}
            </h2>
            <JsonFieldEditor
              value={content[activeSection]}
              fieldKey={activeSection}
              onChange={(updated) =>
                setContent((prev) => ({ ...prev, [activeSection]: updated }))
              }
            />
          </main>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
