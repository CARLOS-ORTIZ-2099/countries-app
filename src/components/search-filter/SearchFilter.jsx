/* eslint-disable react/prop-types */
import "./Search-filter.css";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

export const SearchFilter = ({ searchCountries, select }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`busqueda ${theme}`}>
      <label htmlFor="search-input" className="visually-hidden">
        Search for a country
      </label>
      <input
        id="search-input"
        onChange={searchCountries}
        type="text"
        placeholder="Search for a country..."
      />

      <label htmlFor="pais" className="visually-hidden">
        Filter by Region
      </label>
      <select onChange={select} id="pais" name="pais">
        <option value="filtrado">Filter by Region</option>
        <option value="Africa">Afríca</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};
