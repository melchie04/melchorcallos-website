const GITHUB_OWNER = process.env.GITHUB_OWNER;
const GITHUB_REPO = process.env.GITHUB_REPO;
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "main";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const FILE_PATH = "src/data/siteContent.json";

const GITHUB_API = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${FILE_PATH}`;

const githubHeaders = {
  Authorization: `Bearer ${GITHUB_TOKEN}`,
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
};

exports.handler = async (event, context) => {
  const user = context.clientContext && context.clientContext.user;
  if (!user) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: "Not authenticated." }),
    };
  }

  if (!GITHUB_OWNER || !GITHUB_REPO || !GITHUB_TOKEN) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error:
          "Missing GITHUB_OWNER, GITHUB_REPO, or GITHUB_TOKEN environment variable in Netlify site settings.",
      }),
    };
  }

  try {
    if (event.httpMethod === "GET") {
      const res = await fetch(`${GITHUB_API}?ref=${GITHUB_BRANCH}`, {
        headers: githubHeaders,
      });
      if (!res.ok) {
        const errText = await res.text();
        return { statusCode: res.status, body: errText };
      }
      const data = await res.json();
      const content = JSON.parse(
        Buffer.from(data.content, "base64").toString("utf-8"),
      );
      return {
        statusCode: 200,
        body: JSON.stringify({ content, sha: data.sha }),
      };
    }

    if (event.httpMethod === "POST") {
      const { content, sha, message } = JSON.parse(event.body);

      if (!content || !sha) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            error: "Missing content or sha in request body.",
          }),
        };
      }

      const encoded = Buffer.from(
        JSON.stringify(content, null, 2) + "\n",
        "utf-8",
      ).toString("base64");

      const res = await fetch(GITHUB_API, {
        method: "PUT",
        headers: { ...githubHeaders, "Content-Type": "application/json" },
        body: JSON.stringify({
          message: message || `Update site content via admin (${user.email})`,
          content: encoded,
          sha,
          branch: GITHUB_BRANCH,
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        return { statusCode: res.status, body: errText };
      }

      const data = await res.json();
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, sha: data.content.sha }),
      };
    }

    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed." }),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
