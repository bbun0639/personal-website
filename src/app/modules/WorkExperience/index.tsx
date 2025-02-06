import React from "react";
import Image from "next/image";
import { workExperience } from "@/app/core/constant";

const WorkExperience = () => {
  const calDuration = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return `${years} years ${months} months`;
  };

  return (
    <div className="flex flex-col gap-6 my-12">
      <div className="text-20 md:text-24 border-b border-gray-200 pb-2 font-500">
        Work Experience
        <div className="text-16 text-gray-500">
          {calDuration("2020-06", "2024-12")}
        </div>
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
