import twentyLogo from "@/app/assets/logos/twenty-scoops-logo.jpg";
import in2itLogo from "@/app/assets/logos/in2it-logo.jpeg";
import neversleepLogo from "@/app/assets/logos/neversleep-logo.png";
import reactLogo from "@/app/assets/icons/react-icon.png";
import tsLogo from "@/app/assets/icons/ts-icon.png";
import jsLogo from "@/app/assets/logos/js-logo.png";
import pythonLogo from "@/app/assets/logos/python-logo.png";
import cPlusLogo from "@/app/assets/logos/c-plus-logo.png";
import htmlLogo from "@/app/assets/logos/html-logo.png";
import cssLogo from "@/app/assets/logos/css-logo.png";
import nextLogo from "@/app/assets/icons/next-icon.png";
import rxjsLogo from "@/app/assets/logos/rxjs-logo.png";
import tailwindLogo from "@/app/assets/logos/tailwind-logo.png";
import muiLogo from "@/app/assets/logos/mui-logo.png";
import bootstrapLogo from "@/app/assets/logos/bootstrap-logo.png";
import gitLogo from "@/app/assets/logos/git-logo.png";
import githubLogo from "@/app/assets/logos/github-logo.png";
import jiraLogo from "@/app/assets/logos/jira-logo.png";
import figmaLogo from "@/app/assets/logos/figma-logo.png";

import { ITechStack, IWorkExperience } from "../types";

export const workExperience: IWorkExperience[] = [
  {
    position: "Middle Frontend Developer",
    company: {
      name: "20Scoops CNX",
      link: "https://20scoopscnx.com/",
      logo: twentyLogo,
    },
    duration: "Mar 2022 - Dec 2024",
  },
  {
    position: "Junior Frontend Developer",
    company: {
      name: "IN2IT Company Limited",
      link: "https://in2it.co.th/",
      logo: in2itLogo,
    },
    duration: "Oct 2021 - Feb 2022",
  },
  {
    position: "Junior Frontend Developer",
    company: {
      name: "Neversleep",
      link: "https://www.facebook.com/neversleepcoltd/",
      logo: neversleepLogo,
    },
    duration: "Jun 2020 - Sep 2021",
  },
];

export const techStack: ITechStack[] = [
  {
    header: "Languages",
    data: [
      {
        name: "TypeScript",
        logo: tsLogo,
      },
      {
        name: "JavaScript",
        logo: jsLogo,
      },
      {
        name: "Python",
        logo: pythonLogo,
      },
      {
        name: "C/C++",
        logo: cPlusLogo,
      },
    ],
  },
  {
    header: "Frontend",
    data: [
      {
        name: "Next.js",
        logo: nextLogo,
      },
      {
        name: "React.js",
        logo: reactLogo,
      },
      {
        name: "RxJS",
        logo: rxjsLogo,
      },
      {
        name: "TailwindCSS",
        logo: tailwindLogo,
      },
      {
        name: "Material UI",
        logo: muiLogo,
      },
      {
        name: "HTML",
        logo: htmlLogo,
      },
      {
        name: "CSS",
        logo: cssLogo,
      },
      {
        name: "BootstrapCSS",
        logo: bootstrapLogo,
      },
    ],
  },
  {
    header: "Tools",
    data: [
      {
        name: "Git",
        logo: gitLogo,
      },
      {
        name: "Github",
        logo: githubLogo,
      },
      {
        name: "Jira",
        logo: jiraLogo,
      },
      {
        name: "Figma",
        logo: figmaLogo,
      },
    ],
  },
];
