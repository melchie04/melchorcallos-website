import React from "react";
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
    <div className="fixed bottom-0 right-0 z-50 p-4">
      <button
        className="flex items-center font-bold text-primary text-xl hover:animate-shake m-2"
        onClick={handleDownload}
      >
        <img src={contents.loader} className="size-10" />
        <span className="hidden sm:inline mr-2">DOWNLOAD</span>
        <span>CV</span>
      </button>
    </div>
  );
};

export default DownloadButton;
