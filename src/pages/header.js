import { Link } from "react-scroll";
import "./header.css";

const Header = () => {
  return (
    <nav>
      <ul className="header">
        <li>
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Section 1
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Section 2
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Section 3
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="section4"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Section 4
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
