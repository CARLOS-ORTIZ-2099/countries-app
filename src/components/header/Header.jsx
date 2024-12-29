/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons"; */
import sun from "../../assets/icons/sun-regular.svg";
import moon from "../../assets/icons/moon-regular.svg";
import { useContext } from "react";
import "./header.css";
import ThemeContext from "../../context/ThemeContext";
import { Link } from "react-router-dom";

export const Header = () => {
  const { state, change, theme } = useContext(ThemeContext);

  return (
    <div className={`header-container ${theme}`}>
      <Link className={`${theme}`} to={`/`}>
        {" "}
        Where in the world?
      </Link>
      <span>
        {!state ? (
          <div>
            <img
              src={moon}
              alt="icon moon"
              className="icon moon"
              onClick={change}
            />
            <div> Dark Mode</div>{" "}
          </div>
        ) : (
          <div>
            <img
              src={sun}
              alt="icon sun"
              className="icon sun"
              onClick={change}
            />
            <div>Light Mode</div>
          </div>
        )}
      </span>
    </div>
  );
};
