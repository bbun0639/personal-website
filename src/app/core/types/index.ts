import { StaticImageData } from "next/image";

export interface IWorkExperience {
  position: string;
  company: {
    name: string;
    link: string;
    logo: StaticImageData;
  };
  duration: string;
}

export interface ITechStack {
  header: string;
  data: {
    name: string;
    logo: StaticImageData;
  }[];
}
