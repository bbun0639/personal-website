import React from "react";
import Image from "next/image";
import { techStack } from "@/app/core/constant";

const TechStack = () => {
  return (
    <div className="flex flex-col gap-6 my-12">
      <div className="text-20 md:text-24 border-b border-gray-200 pb-2 font-500">
        Tech Stack
      </div>

      {techStack.map((entry) => (
        <div key={entry.header}>
          <div className="text-18 md:text-20">{entry.header}</div>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {entry.data.map((detail) => (
              <div key={detail.name} className="flex items-center gap-1">
                <div className="relative">
                  <Image
                    src={detail.logo}
                    alt={`${detail.name}-logo`}
                    className="w-12 h-12 object-contain p-3"
                  />
                  <div className="bg-white w-10 h-10 rounded-full absolute -z-10 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
                </div>
                <p className="font-500 text-14 md:text-16">{detail.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
