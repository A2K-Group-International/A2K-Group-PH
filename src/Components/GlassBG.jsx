import SoftDev from "../assets/images/Software-Development.png";
const GlassBG = () => {
  return (
    <div className="relative h-[260px] w-[290px] rounded-3xl border-[0.5px] border-[#DCDCDC] bg-white shadow-2xl before:absolute before:left-1/2 before:top-1/2 before:z-[-2] before:min-h-[200px] before:min-w-[350px] before:-translate-x-1/2 before:-translate-y-1/2 before:transform before:rounded-3xl before:border-[0.5px] before:border-[#DCDCDC] before:bg-white/20 before:drop-shadow-sm before:backdrop-blur-lg before:content-[''] after:absolute after:left-1/2 after:top-1/2 after:z-[-1] after:min-h-[235px] after:min-w-[320px] after:-translate-x-1/2 after:-translate-y-1/2 after:transform after:rounded-3xl after:border-[0.5px] after:border-[#DCDCDC] after:drop-shadow-sm after:backdrop-blur-lg after:content-[''] sm:h-[360px] sm:w-[507px] before:sm:h-[262px] before:sm:w-[571px] after:sm:h-[314px] after:sm:w-[539px]">
      <div className="flex h-full items-center justify-normal">
        <div className="w-32 basis-1/4 -rotate-90">
          <img className="object-contain" src="/a2klogo.svg" alt="A2K Logo" />
          <p className="whitespace-nowrap text-sm font-bold">
            Software Development
          </p>
        </div>
        <div className="w-max">
          <img src={SoftDev} alt="Software Development" />
        </div>
      </div>
    </div>
  );
};
export default GlassBG;
