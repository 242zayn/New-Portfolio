"use client";
import {
  IconDefinition,
  faTruckLoading,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { setTimeout } from "timers";

interface DownloadCV {
  icon: IconDefinition;
  text: string;
}

export default function CvDownload({ icon, text }: DownloadCV) {
  const [icons, setIcons] = useState(false);
  const handleDownload = () => {
    setIcons(true);
    console.log("firsst");
    setTimeout(() => {
      console.log("second");
      setIcons(false);
      const link = document.createElement("a");
      link.href = "/cv.pdf"; // Path to your CV in the public folder
      link.download = "cv.pdf"; // The name of the file when downloaded
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 5000);
  };

  return (
    <button
      onClick={handleDownload}
      className="flex px-4 justify-center items-center w-full gap-2 py-2 rounded-full bg-light-blue-100 dark:bg-dark-blue-500 dark:hover:bg-dark-blue-200 dark:text-dark-blue-100  hover:bg-light-blue-300 active:scale-95 transition-all text-light-blue-500"
    >
      {!icons ? (
        <FontAwesomeIcon icon={icon} className="size-4" />
      ) : (
        <span className=" animate-spin">
          <FontAwesomeIcon icon={faSpinner} className="size-4" />
        </span>
      )}
      <span>{text}</span>
    </button>
  );
}
