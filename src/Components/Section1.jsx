import Button from "./Button";
import GoldBG from "../assets/vector/goldbackground.svg";
import GlassBG from "./GlassBG";

const Section1 = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-y-3 py-10 text-center">
      <h1 className="text-[2.5rem] md:text-[3rem]">
        WELCOME TO <span className="font-bold">A2K GROUP</span>
      </h1>
      <p className="max-w-[780px]">
        Our international team of mentors and experts stands ready to
        collaborate with you in crafting tailored digital solutions that cater
        to your unique needs. Together we can unlock the potential of
        digitalization, extending its benefits to your people, processes, and
        platforms.
      </p>
      <div className="flex flex-wrap justify-center justify-items-center gap-5 md:grid-cols-3">
        <Button name="See what we do" link="#" />
        <Button name="Learn with us" link="#" />
        <Button name="Work with us" link="#" />
      </div>
      <div className="absolute top-80 z-[-1] mx-2 max-w-full overflow-hidden rounded-xl md:top-56">
        <img
          className="z-0 min-h-[396px] min-w-[100%] object-cover"
          src={GoldBG}
          alt="gold background"
        />
      </div>
      <GlassBG />
    </section>
  );
};
export default Section1;
