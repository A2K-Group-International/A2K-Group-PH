import Divisions from "./Divisions";
import GrayBG from "../assets/vector/graybackground.svg";
import AngadDigitalEngineering from "../assets/vector/angad-digital-engineering.svg";
import AngatSolutions from "../assets/vector/angat-solutions.svg";
import KasamaEnterprise from "../assets/vector/kasama-enterprise.svg";

const Section2 = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-y-6 text-center">
      <h2 className="text-lg font-semibold">
        OUR SPECIALIZED DIVISIONS / SUBSIDIARIES
      </h2>
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-5">
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
      <div className="absolute top-[46rem] z-[-3] mx-2 max-w-[952px] overflow-hidden rounded-xl md:top-[40rem]">
        <img
          className="min-h-[1400px] min-w-full object-cover"
          src={GrayBG}
          alt="Gray Background"
        />
      </div>
    </section>
  );
};
export default Section2;
