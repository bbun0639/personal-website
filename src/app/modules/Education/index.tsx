import React from "react";

const Education = () => {
  return (
    <div className="flex flex-col gap-6 my-12">
      <div className="text-20 md:text-24 border-b border-gray-200 pb-2 font-500">
        Education
      </div>
      <div className="flex flex-col">
        <p className="font-500 text-18 md:text-20">
          Bachelor of Computer Engineering,
        </p>
        <p className="text-16 md:text-18 font-400">Chiang Mai University</p>
        <p className="text-14 text-gray-500">
          Chiang Mai, Thailand | 2016 - 2020
        </p>
      </div>
    </div>
  );
};

export default Education;
