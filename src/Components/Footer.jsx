import { navItem, socialMediaItem } from "./data";
import Button from "./Button";
import A2KLogo from "../assets/vector/header-logo.svg";
const Footer = () => {
  return (
    <footer className="grid grid-cols-1 justify-items-center gap-y-5 border-t-[.5px] py-5 text-center sm:grid-cols-2 sm:justify-items-start sm:text-start md:grid-cols-4">
      <div>
        <img src={A2KLogo} alt="A2K Group Logo" />
      </div>
      <ul>
        <p className="text-lg font-semibold">Quick Links</p>
        {navItem.map((item) => (
          <li className="py-1" key={navItem.id}>
            <a href="#">{item.name}</a>
          </li>
        ))}
      </ul>
      <ul>
        <p className="text-lg font-semibold">Social Media</p>
        {socialMediaItem.map((item) => (
          <li className="inline-block px-2" key={item.id}>
            <a href="#">
              <img src={item.name} alt="" />
            </a>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">Email Subscription</p>
        <p className="md:text-justify">
          Get the latest updates on tech products, courses, workshops,
          internship opportunities and services.
        </p>
        <div>
          <Button name="Subscribe" link="#" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
