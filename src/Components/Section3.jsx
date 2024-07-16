import Button from "./Button";
import GoldBG from "../assets/vector/goldbackground.svg";
import GlassBG from "./GlassBG";
import ImportIcon from "./ImportIcon";
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
      <div className="mt-[2rem] flex h-[20rem] w-[45rem]">
        <div className="relative h-full w-[15rem] rounded-[1.8rem] border-[1px] border-[#E7D7C9] bg-white after:absolute after:left-[-20%] after:top-[-20%] after:z-[-1] after:h-[140%] after:w-[140%] after:bg-gradient-to-tr after:from-[#FE4040]/15 after:to-[#FF9737]/15 after:blur-[60px] after:content-['']"></div>
        <div className="flex h-full w-[calc(100%_-_15rem)] flex-col items-start justify-center pl-[2.5rem]">
          <p className="text-left text-[2rem] font-bold leading-[2.2rem]">
            Software
            <br /> Development
          </p>
          <p className="mt-[1rem] text-left">
            Very long description here. Insert very long description here,
            please be very descriptive, okay? Put a very long description here.
            Describe the topic thoroughly and please be avoid any...
          </p>
        </div>
      </div>
    </section>
  );
};
export default Section3;
