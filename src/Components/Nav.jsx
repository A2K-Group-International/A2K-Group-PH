import { useState } from "react";
import { Icon } from "@iconify/react";
import Logo from "./Logo";
import facebook from "../assets/vector/facebook.svg";
import instagram from "../assets/vector/instagram.svg";
import linkedin from "../assets/vector/linkedin.svg";

const Nav = () => {
  const navItem = [
    { id: 1, name: "About us" },
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

        <button className="md:hidden" onClick={toggleNavbar}>
          {isOpen ? (
            <Icon icon="pajamas:close" />
          ) : (
            <Icon icon="fluent:navigation-16-filled" />
          )}
        </button>
      </nav>
      {isOpen && (
        <ul className="flex basis-full flex-col items-center gap-y-3 md:hidden">
          {navItem.map((item) => (
            <li key={item.id}>
              <a href="#">{item.name}</a>
            </li>
          ))}
          {/* Social Media Mobile */}
          <div className="flex gap-x-5">
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
