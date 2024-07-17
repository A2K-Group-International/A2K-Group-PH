import { useState } from "react";
import { Icon } from "@iconify/react";
import Logo from "./Logo";
import facebook from "../assets/vector/facebook.svg";
import instagram from "../assets/vector/instagram.svg";
import linkedin from "../assets/vector/linkedin.svg";

const Nav = () => {
  const navItem = [
    { id: 1, name: "About Us" },
    { id: 2, name: "Services" },
    { id: 3, name: "Academy" },
    { id: 4, name: "News" },
    { id: 5, name: "Contact" },
  ];
  const socialMediaItem = [
    { id: 1, name: facebook },
    { id: 2, name: instagram },
    { id: 3, name: linkedin },
  ];
  const lineAnimation =
    "relative duration-1000 after:bg-darkGray after:absolute after:bottom-[-5px] after:left-0 after:h-[3px] after:w-0 after:transition-all after:content-[''] hover:after:w-full";

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="flex items-center justify-between max-md:gap-y-5">
        <Logo />

        <ul className="hidden items-center justify-between gap-6 md:flex">
          {navItem.map((item) => (
            <li className={lineAnimation} key={item.id}>
              <a href="#">{item.name}</a>
            </li>
          ))}
        </ul>
        {/* Social Media Mobile */}
        <div className="hidden gap-x-5 md:flex">
          {socialMediaItem.map((item) => (
            <a className={lineAnimation} href="#" key={item.id}>
              <img src={item.name} alt="social media" />
            </a>
          ))}
        </div>
        {/* Mobile View */}
        <button className="md:hidden" onClick={toggleNavbar}>
          {isOpen ? (
            <Icon icon="material-symbols:close" width="40" height="40" />
          ) : (
            <Icon icon="material-symbols:menu" width="40" height="40" />
          )}
        </button>
      </nav>
      {isOpen && (
        <ul className="absolute left-0 z-[1] w-full border-y-2 border-darkGray/20 bg-white text-2xl font-light md:hidden">
          {navItem.map((item) => (
            <li
              className="flex justify-between border-b-2 border-darkGray/30 p-5"
              key={item.id}
            >
              <a href="#">{item.name}</a>
              <span>
                <Icon icon="ic:baseline-plus" width="24" height="24" />
              </span>
            </li>
          ))}
          <div className="flex gap-x-5 p-5">
            {socialMediaItem.map((item) => (
              <a href="#" key={item.id}>
                <img src={item.name} alt="social media" />
              </a>
            ))}
          </div>
        </ul>
      )}
    </>
  );
};
export default Nav;
