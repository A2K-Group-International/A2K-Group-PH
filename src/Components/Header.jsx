import a2klogo from "/header-logo.svg";
import facebook from "/facebook.svg";
import instagram from "/instagram.svg";
import linkedin from "/linkedin.svg";

const Header = () => {
  let navList = ["About us", "Services", "Academy", "News", "Contact"];
  let socList = [facebook, instagram, linkedin];
  return (
    <header className="rounded-2xl p-5">
      <nav className="flex flex-col items-center justify-normal sm:flex-row sm:justify-between">
        <a href="#">
          <img src={a2klogo} alt="Logo" />
        </a>
        <ul className="flex items-center gap-6">
          {navList.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-5">
          {socList.map((socialMedia, index) => (
            <a href="#" key={index}>
              <img src={socialMedia} alt="social media" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
