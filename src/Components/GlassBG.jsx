import { useTransition, animated } from "@react-spring/web";
import React, { useState, useEffect } from "react";
import SoftDevIMG from "../assets/images/DSC_0899.jpg";
import A2KLab from "../assets/images/DSC_0902.jpg";
import Reception from "../assets/images/DSC_0856.jpg";

const slides = [SoftDevIMG, A2KLab, Reception];
const GlassBG = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set((state) => (state + 1) % slides.length);
      }
    },
    exitBeforeEnter: true,
  });
  return (
    <div className="relative mt-10 h-[260px] w-[290px] rounded-3xl border-[0.5px] border-[#DCDCDC] bg-white p-5 shadow-2xl before:absolute before:left-1/2 before:top-1/2 before:z-[-2] before:min-h-[200px] before:min-w-[350px] before:-translate-x-1/2 before:-translate-y-1/2 before:transform before:rounded-3xl before:border-[0.5px] before:border-[#DCDCDC] before:bg-white/20 before:drop-shadow-sm before:backdrop-blur-lg before:content-[''] after:absolute after:left-1/2 after:top-1/2 after:z-[-1] after:min-h-[235px] after:min-w-[320px] after:-translate-x-1/2 after:-translate-y-1/2 after:transform after:rounded-3xl after:border-[0.5px] after:border-[#DCDCDC] after:drop-shadow-sm after:backdrop-blur-sm after:content-[''] sm:h-[360px] sm:w-[507px] before:sm:h-[262px] before:sm:w-[571px] after:sm:h-[314px] after:sm:w-[539px]">
      {transitions((style, i) => (
        <animated.div
          className="h-full bg-contain bg-center bg-no-repeat"
          key={index}
          style={{
            ...style,
            backgroundImage: `url(${slides[i]})`,
          }}
        />
      ))}
    </div>
  );
};
export default GlassBG;
