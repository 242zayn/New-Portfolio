import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const external = {
  sourceCode: "https://github.com/davidquintr/portfolio",
  domain: "https://davidquintr.com/",
  curriculum: "CVDavidQuintanilla",
  social_media: [
    {
      name: "GitHub",
      icon: faGithub,
      link: "https://github.com/davidquintr",
    },
    {
      name: "LinkedIn",
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/david-quintanilla-ruiz-a41044231/",
    },
  ],
  social_api: [
    {
      name: "Facebook",
      icon: faFacebook,
      url: "https://www.facebook.com/sharer/sharer.php?u=",
    },
    {
      name: "Twitter",
      icon: faTwitter,
      url: "https://twitter.com/intent/tweet?text=",
    },
    {
      name: "LinkedIn",
      icon: faLinkedin,
      url: "https://www.linkedin.com/sharing/share-offsite/?url=",
    },
  ],
  tech_media: [
    {
      name: "mongo",
      src: "mongo.png",
      duration: 7900,
    },
    {
      name: "express",
      src: "express.png",
      duration: 9800,
    },
    {
      name: "react",
      src: "react.png",
      duration: 8900,
    },
    {
      name: "node js",
      src: "node.png",
      duration: 10100,
    },
  ],
};

export default external;
