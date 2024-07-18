import ImportIcon from "./ImportIcon";
import RotatedGrayBG from "../assets/vector/rotated-graybackground.svg";
const Section3 = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-y-3 py-10 text-center">
      <div className="relative mb-[1rem] mt-[4rem] flex h-20 w-20 items-center justify-center rounded-2xl bg-white after:absolute after:left-[-20%] after:top-[-20%] after:z-[-1] after:h-[140%] after:w-[140%] after:bg-gradient-to-tr after:from-[#FE4040]/60 after:to-[#FF9737]/60 after:blur-[60px] after:content-['']">
        <div className="flex h-[60%] w-[60%] items-center justify-center fill-[#FF9737] pt-[4px]">
          <ImportIcon name={"service-fill"} />
        </div>
      </div>
      <h2 className="text-[2.5rem] font-bold leading-[2.7rem] md:text-[2.5rem]">
        Explore <span className="font-black">A2K GROUP</span>
        <br /> Transformative Services
      </h2>
      <div className="mt-[2rem] grid max-w-full grid-cols-1 justify-items-center gap-y-5 md:h-[20rem] md:w-[45rem] md:grid-cols-2">
        <div className="relative inline-block h-80 w-full max-w-[280px] rounded-[1.8rem] border-[1px] border-[#E7D7C9] bg-white after:absolute after:left-[-20%] after:top-[-20%] after:z-[-1] after:h-[140%] after:w-[120%] after:bg-gradient-to-tr after:from-[#FE4040]/15 after:to-[#FF9737]/15 after:blur-[60px] after:content-[''] md:h-[20rem] md:w-[15rem] after:md:w-[140%]"></div>
        <div className="flex h-full w-full flex-col justify-center text-center md:items-start md:pl-[2.5rem]">
          <p className="text-center text-[2rem] font-bold leading-[2.2rem] md:text-left">
            Software
            <br /> Development
          </p>
          <p className="mx-auto mt-[1rem] w-[80%] md:w-full md:text-justify">
            Our software team specializes in crafting digitalization tools
            designed to streamline processes and enhance platforms within fully
            digitalized systems. Leveraging the expertise of our international
            professionals, we integrate world-class techniques to develop
            top-notch digital tools that transform intricate systems into
            efficient and capable solutions.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 z-[-3] mx-2 max-w-[952px] overflow-hidden rounded-xl md:top-[40rem]">
        <img
          className="min-h-[1400px] min-w-full object-cover"
          src={RotatedGrayBG}
          alt="Gray Background"
        />
      </div>
    </section>
  );
};
export default Section3;
