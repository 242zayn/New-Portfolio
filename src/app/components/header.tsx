// import Image from "next/image";
// import en from "../sources/en";
// import techStack from "../sources/techStack";
// import Link from "next/link";

// export default function Header() {
//   const showTech = [
//     techStack.html,
//     techStack.css,
//     techStack.javascript,
//     techStack.nextjs,
//     techStack.php,
//     techStack.mysql,
//     techStack.tailwind,
//   ];

//   return (
//     <header className="fixed w-full top-0 left-0 z-[100] ">
//       <nav className=" w-[90%] mx-auto rounded-full  bg-opacity-30 backdrop-filter backdrop-blur-sm shadow-lg py-4 transition duration-300">
//         <div className="container mx-auto flex justify-center items-center">
//           <ul className="flex space-x-8">
//             <li>
//               <Link href="#home">
//                 <span className="text-white font-semibold hover:text-gray-700 transition duration-300">
//                   Home
//                 </span>
//               </Link>
//             </li>
//             <li>
//               <Link href="#about">
//                 <span className="text-white font-semibold hover:text-gray-700 transition duration-300">
//                   About
//                 </span>
//               </Link>
//             </li>
//             <li>
//               <Link href="#contact">
//                 <span className="text-white font-semibold hover:text-gray-700 transition duration-300">
//                   Contact
//                 </span>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// }

// import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#214a97]/50 bg-[#03001417] backdrop-blur-md z-[52] px-10">
      <div className="w-full h-full  flex  items-center justify-center  px-[10px]">
        <div className="w-[500px]  h-full flex  items-center justify-center ">
          <div className="flex items-center justify-between w-full h-auto border border-[#2156ac61] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="#home">
              <span className="">Home</span>
            </Link>
            <Link href="#home">
              <span className="">About</span>
            </Link>
            <Link href="#home">
              <span className="">Project</span>
            </Link>
            <Link href="#contact">
              <span className="">Contect</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
