import React from "react";

// Contents
import { contents } from "../assets/contents/loader";

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
        className="flex items-center font-bold text-primary text-xl hover:animate-shake mx-4 my-2"
        onClick={handleDownload}
      >
        <img src={contents.loader} className="h-14" />
        <span className="hidden sm:inline mr-2">DOWNLOAD</span>
        <span>CV</span>
      </button>
    </div>
  );
};

export default DownloadButton;
