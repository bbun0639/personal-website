"use client";
import React from "react";
import Image from "next/image";
import IconReact from "@/app/assets/icons/react-icon.png";
import IconNext from "@/app/assets/icons/next-icon.png";
import IconTs from "@/app/assets/icons/ts-icon.png";
import IconReactNative from "@/app/assets/icons/react-native-icon.png";
import IconApple from "@/app/assets/icons/apple-icon.png";
import IconAndroid from "@/app/assets/icons/android-icon.png";
import IconGithub from "@/app/assets/logos/github-logo.png";
import IconGmail from "@/app/assets/logos/gmail-logo.png";
import ToggleTheme from "../../components/ToggleTheme";
import MySelfie from "@/app/assets/images/my-selfie-1.png";

const PersonalInfos = () => {
  return (
    <div className="relative">
      <div className="w-full flex gap-4 items-center absolute -top-10 justify-end">
        <a href="https://github.com/bbun0639" target="_blank">
          <Image
            src={IconGithub}
            alt="react-icon"
            className="h-6 w-6 object-contain cursor-pointer dark:bg-white dark:rounded-full p-0.5"
          />
        </a>
        <a href="mailto:pathomphob.sun@gmail.com">
          <Image
            src={IconGmail}
            alt="react-icon"
            className="h-6 w-6 object-contain cursor-pointer dark:bg-white dark:rounded-full p-0.5"
          />
        </a>
        <ToggleTheme />
      </div>

      <Image
        src={MySelfie}
        alt="react-icon"
        className="max-h-[160px] max-w-[160px] min-h-[160px] min-w-[160px] md:max-h-[200px] md:max-w-[200px] md:min-h-[200px] md:min-w-[200px] object-cover rounded-full mb-4 transition-all"
      />

      <h1 className="text-36 md:text-48 font-bold">Pathomphob Sunanta</h1>

      <div>
        <p className="text-20 md:text-24 transition-colors dark:text-green-500 text-orange-500 duration-1000">
          Frontend Developer
        </p>
        <p className="text-16 md:text-18">
          Passionate, learner, responsible, eager to learn new technologies.
        </p>
      </div>

      <div className="flex flex-col gap-4 my-6">
        <div className="flex gap-3 md:flex-row flex-col">
          <div className="flex gap-2">
            <Image
              src={IconReact}
              alt="react-icon"
              className="h-6 w-6 object-contain"
            />
            <Image
              src={IconNext}
              alt="next-icon"
              className="h-6 w-6 object-contain"
            />
            <Image
              src={IconTs}
              alt="ts-icon"
              className="h-6 w-6 object-contain"
            />
          </div>
          <p className="text-16">
            Mostly focused React.js, Next.js and Typescript.
          </p>
        </div>
        <div className="flex gap-3 md:flex-row flex-col">
          <div className="flex gap-2">
            <Image
              src={IconApple}
              alt="apple-icon"
              className="h-6 w-6 object-contain bg-white rounded-full p-[2px]"
            />
            <Image
              src={IconAndroid}
              alt="android-icon"
              className="h-6 w-6 object-contain"
            />
            <Image
              src={IconReactNative}
              alt="react-native-icon"
              className="h-6 w-6 object-contain"
            />
          </div>
          <p className="text-16">
            Also mobile application with React Native and Css lovers.
          </p>
        </div>

        {/* <div className="flex">
          <div className="text-36 mr-3 text-gray-600">&quot;</div>
          <p>
            I&apos;m a frontend developer with 4 years of experience in building
            web applications. Proficient in modern frontend technologies such as
            TypeScript, JavaScript, Next.js, React.js, and Tailwind CSS. Thrives
            at creating pixel- perfect designs, responsive design principles,
            and working with cross-browser compatibility issues. Adept at
            providing seamless user experiences with a focus on performance,
            optimization, and scalability.
          </p>
          <div className="text-36 ml-3 relative -bottom-4 flex items-end text-gray-600">
            &quot;
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PersonalInfos;
