import { useTransition, animated } from "@react-spring/web";
import { useState } from "react";
import SoftDevIMG from "../assets/images/DSC_0899.jpg";
import A2KLab from "../assets/images/DSC_0902.jpg";
import Reception from "../assets/images/DSC_0856.jpg";

const slides = [SoftDevIMG, A2KLab, Reception];
const slideInterval = 5000;
const GlassBG = () => {
  const [index, set] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      set((state) => (state + 1) % slides.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [index]);

  const imageSlider = slides.map((slide, key) => (
    <img
      src={slide}
      key={key}
      alt=""
      className={
        "cover absolute size-full h-full w-full transition duration-1000 " +
        (index == key ? "opacity-100 delay-500" : "opacity-0")
      }
    />
  ));

  return (
    <div className="relative mt-10 h-[260px] w-[290px] rounded-3xl border-[0.5px] border-[#DCDCDC] bg-white p-4 shadow-2xl before:absolute before:left-1/2 before:top-1/2 before:z-[-1] before:min-h-[200px] before:min-w-[350px] before:-translate-x-1/2 before:-translate-y-1/2 before:transform before:rounded-3xl before:border-[0.5px] before:border-[#DCDCDC] before:bg-white/20 before:drop-shadow-sm before:backdrop-blur-sm before:content-[''] after:absolute after:left-1/2 after:top-1/2 after:z-[-1] after:min-h-[235px] after:min-w-[320px] after:-translate-x-1/2 after:-translate-y-1/2 after:transform after:rounded-3xl after:border-[0.5px] after:border-[#DCDCDC] after:drop-shadow-sm after:backdrop-blur-sm after:content-[''] sm:h-[360px] sm:w-[507px] before:sm:h-[262px] before:sm:w-[571px] after:sm:h-[314px] after:sm:w-[539px]">
      {transitions((style, i) => (
        <animated.div
          className="h-full rounded-2xl bg-cover bg-center bg-no-repeat"
          key={index}
          style={{
            ...style,
            backgroundImage: `url(${slides[i]})`,
            backgroundSize: "cover",
          }}
        />
      ))}
    </div>
  );
};
export default GlassBG;
