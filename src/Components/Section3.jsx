import Button from "./Button";
import GoldBG from "../assets/vector/goldbackground.svg";
import GlassBG from "./GlassBG";
import ImportIcon from "./ImportIcon";
const Section3 = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-y-3 py-10 text-center">
      <div className="mb-[1rem] flex items-center justify-center mt-[4rem] w-20 h-20 bg-white rounded-2xl relative after:absolute after:w-[140%] after:h-[140%] after:content-[''] after:left-[-20%] after:top-[-20%] after:z-[-1] after:bg-gradient-to-tr after:from-[#FE4040]/60 after:to-[#FF9737]/60 after:blur-[60px]">
        <div className="pt-[4px] flex items-center justify-center w-[60%] h-[60%] fill-[#FF9737]">
          <ImportIcon name={'service-fill'} />
        </div>
      </div>
      <h2 className="text-[2.5rem] md:text-[2.5rem] font-bold leading-[2.7rem]">
        Explore <span className="font-black">A2K GROUP</span><br/> Transformative Services
      </h2>
      <div className="mt-[2rem] w-[45rem] h-[20rem] flex ">
        <div className="h-full w-[15rem] bg-white border-[1px] border-[#E7D7C9] rounded-[1.8rem] relative after:absolute after:w-[140%] after:h-[140%] after:content-[''] after:left-[-20%] after:top-[-20%] after:z-[-1] after:bg-gradient-to-tr after:from-[#FE4040]/15 after:to-[#FF9737]/15 after:blur-[60px]"></div>
        <div className="w-[calc(100%_-_15rem)] flex flex-col h-full justify-center items-start pl-[2.5rem]">
          <p className="text-[2rem] text-left leading-[2.2rem] font-bold">Software<br/> Development</p>
          <p className="mt-[1rem] text-left">Very long description here. Insert very long description here, please be very descriptive, okay? Put a very long description here. Describe the topic thoroughly and please be avoid any...</p>
        </div>
      </div>
    </section>
  );
};
export default Section3;
