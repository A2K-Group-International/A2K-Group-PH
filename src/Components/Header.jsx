import a2klogo from "/header-logo.svg";
import facebook from "/facebook.svg";
import instagram from "/instagram.svg";
import linkedin from "/linkedin.svg";

const Header = () => {
  let navList = ["About us", "Services", "Academy", "News", "Contact"];
  let socList = [facebook, instagram, linkedin];
  const lineAnimation =
    "relative duration-1000 after:bg-darkGray after:absolute after:bottom-[-5px] after:left-0 after:h-[3px] after:w-0 after:transition-all after:content-[''] hover:after:w-full";

  return (
    <header className="rounded-2xl">
      <nav className="flex flex-col items-center justify-normal max-md:gap-y-5 sm:justify-between md:flex-row">
        <a href="#">
          <img src={a2klogo} alt="Logo" />
        </a>
        <ul className="flex items-center gap-6">
          {navList.map((item, index) => (
            <li className={lineAnimation} key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-5">
          {socList.map((socialMedia, index) => (
            <a className={lineAnimation} href="#" key={index}>
              <img src={socialMedia} alt="social media" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
