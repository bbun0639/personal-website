import Education from "./modules/Education";
import PersonalInfos from "./modules/PersonalInfos";
import TechStack from "./modules/TechStack";
import WorkExperience from "./modules/WorkExperience";

export default function Home() {
  return (
    <div className="min-h-screen max-w-[768px] flex flex-col mx-auto">
      <div className="p-8 w-full mt-8">
        <PersonalInfos />
        <WorkExperience />
        <TechStack />
        <Education />
      </div>
    </div>
  );
}
