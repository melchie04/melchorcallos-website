
import { FaDownload } from "react-icons/fa";

const DownloadButton = () => {
  const handleDownload = () => {
    const cvUrl = "/melchorcalloscv.pdf";
    const filename = cvUrl.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = cvUrl;
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className="fixed bottom-0 right-0 z-50">
      <button
        className="flex items-center font-bold text-primary-light dark:text-primary-dark text-2xl select-none hover:animate-shake mx-4 my-4"
        onClick={handleDownload}
      >
        <FaDownload className="mr-2"/>
        <span className="hidden sm:inline mr-2">DOWNLOAD</span>
        <span>CV</span>
      </button>
    </div>
  );
};

export default DownloadButton;