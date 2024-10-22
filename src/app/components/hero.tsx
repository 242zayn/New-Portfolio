"use client";
import Image from "next/image";
import external from "../sources/external";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import es from "../sources/es";
import Link from "next/link";
import ToSlug from "../utils/toSlug";
import { HeroImage } from "../images/image";
import hero from "../../../public/image1.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import InternalLink from "./internalLink";
import {
  faBriefcase,
  faShare,
  faCloudDownloadAlt,
} from "@fortawesome/free-solid-svg-icons";
import CvDownload from "./cvDownload";
import Header from "./header";

export default function Hero() {
  const TECH_DIRECTORY = "/techs/";
  const [text] = useTypewriter({
    words: es.hero.words,
    loop: 0,
  });
  return (
    <>
      <Header />
      <section className=" flex items-center flex-col justify-center min-h-screen   relative  Weserves xs:my-0   ">
        <div className="flex flex-col lg:flex-row items-center justify-around w-full h-full   ">
          {/* <div className=" w-[46%] h-[200px] bg-[url('/image1.png')] ">
        </div> */}
          <Image
            className=" w-[50%] lg:w-[50%] xl:w-[46%] h-full grayscale z-[50] "
            src={"/image2.png"}
            alt=""
            quality={100}
            height={800}
            width={300}
          />

          <div className=" z-50 px-1 md:w-[80%] lg:w-[40%] flex flex-col items-center    md:items-start justify-center relative    ">
            {/* Typewriter start here */}
            <div className=" w-full  flex flex-col gap-y-2 justify-center md:justify-start text-center lg:text-start    ">
              <h1 className="font-light text-2xl md:text-3xl lg:text-[40px] leading-normal ">
                {" "}
                Hello ,{" "}
                <span className="text-dark-blue-100 lg:text-3xl  ">
                  I&apos;m
                </span>{" "}
              </h1>
              <h1 className="font-bold text-[32px] md:text-5xl leading-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Sarvesh Sharma
              </h1>
              <h1 className=" font-light text-2xl md:text-3xl lg:text-[40px] leading-normal     ">
                I &apos;m{" "}
                <span className=" text-dark-blue-100 text-2xl md:text-3xl lg:text-3xl ">
                  {text}
                  <Cursor
                    cursorStyle="|"
                    cursorColor="red"
                    cursorBlinking={true}
                  />{" "}
                </span>{" "}
              </h1>
              <p className=" text-lg  leading-[30px] tracking-wider md:pr-10   ">
                {es.hero.description}
              </p>
              <div className=" flex gap-4 mx-auto  my-[25px]  lg:mt-[50px] w-[60%]  ">
                <CvDownload
                  icon={faCloudDownloadAlt}
                  text={es.hero.downloadbtntext}
                />
              </div>
            </div>

            {/* Typewrite end here */}
          </div>
        </div>
      </section>
    </>
  );
}

// git remote add origin https://github.com/242zayn/New-Portfolio.git
// git branch -M master
// git push -u origin master

// 41394212
