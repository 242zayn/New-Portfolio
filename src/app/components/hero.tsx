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

export default function Hero() {
  const TECH_DIRECTORY = "/techs/";
  const [text] = useTypewriter({
    words: es.hero.words,
    loop: 0,
  });
  return (
    <section className="flex items-center flex-col justify-center min-h-screen  dark:bg-black relative bg-white  ">
      <div className="flex  items-center justify-around w-full h-full  ">
        <Image
          className=" w-[46%] grayscale "
          src={"/image1.png"}
          alt=""
          quality={100}
          height={800}
          width={300}
        />

        <div className=" w-full md:w-[40%] flex flex-col items-center   md:items-start justify-center relative    ">
          {/* Typewriter start here */}
          <div className=" w-full  flex flex-col gap-y-2 justify-center md:justify-start     ">
            <h1 className="font-light text-[32px] md:text-5xl leading-normal ">
              {" "}
              Hello , <span className="text-dark-blue-100">I&apos;m</span>{" "}
            </h1>
            <h1 className="font-bold text-[32px] md:text-5xl leading-normal text-dark-blue-100 ">
              Sarvesh Sharma
            </h1>
            <h1 className=" font-light text-[32px] md:text-5xl leading-normal     ">
              I &apos;m{" "}
              <span className=" text-dark-blue-100 ">
                {text}
                <Cursor
                  cursorStyle="|"
                  cursorColor="red"
                  cursorBlinking={true}
                />{" "}
              </span>{" "}
            </h1>
          </div>
          <p className=" text-lg  leading-[30px] tracking-wider md:pr-10 text-center md:text-start  ">
            {" "}
            You can reach out to me if you need any help in making a website or
            web application for you business
          </p>

          <div className=" flex gap-4 items-center justify-center mt-[50px] w-[60%]  ">
            <InternalLink
              href={`#${ToSlug(es.contact.title)}`}
              icon={faCloudDownloadAlt}
              text={es.services.start}
            />
          </div>

          {/* Typewrite end here */}
        </div>
      </div>
    </section>
  );
}

// git remote add origin https://github.com/242zayn/New-Portfolio.git
// git branch -M master
// git push -u origin master

// 41394212