import Divisions from "./Divisions";
import GrayBG from "../assets/vector/graybackground.svg";
import AngadDigitalEngineering from "../assets/vector/angad-digital-engineering.svg";
import AngatSolutions from "../assets/vector/angat-solutions.svg";
import KasamaEnterprise from "../assets/vector/kasama-enterprise.svg";

const Section2 = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-y-6 text-center">
      <h2 className="text-lg font-semibold">
        OUR SPECIALIZED DIVISIONS / SUBSIDIARIES
      </h2>
      <div className="flex flex-wrap justify-center gap-x-10">
        <Divisions
          image={AngadDigitalEngineering}
          text="Developing app and hardware solutions for organizations for unmet digitization needs."
        />
        <Divisions
          image={AngatSolutions}
          text="Training students and employees of organizations to learn skills to expand digitization though their efforts."
        />
        <Divisions
          image={KasamaEnterprise}
          text="Funding innovation through competitions and collaborations."
        />
      </div>
      <img
        className="absolute left-1/2 top-[-10rem] z-[-3] -translate-x-1/2 transform object-cover"
        src={GrayBG}
        alt="Gray Background"
      />
    </div>
  );
};
export default Section2;
