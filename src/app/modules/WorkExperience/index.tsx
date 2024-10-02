import React from "react";
import Image from "next/image";
import { workExperience } from "@/app/core/constant";

const WorkExperience = () => {
  return (
    <div className="flex flex-col gap-6 my-12">
      <div className="text-20 md:text-24 border-b border-gray-200 pb-2 font-500">
        Work Experience
      </div>

      {workExperience.map((entry) => (
        <div key={entry.company.name} className="flex gap-4 items-center">
          <a href={entry.company.link} target="_blank">
            <Image
              src={entry.company?.logo}
              alt={`${entry.company}-logo`}
              className="w-16 md:w-20 h-16 md:h-20 rounded-full grayscale hover:grayscale-0 cursor-pointer transition-all duration-300"
            />
          </a>
          <div>
            <p className="font-500 text-18 md:text-20">{entry.position}</p>
            <p className="text-16 md:text-18">{entry.company.name}</p>
            <p className="text-14 md:text-16 text-gray-500">{entry.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
