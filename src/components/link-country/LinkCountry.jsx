/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ErrorBusqueda } from "../error-busqueda/ErrorBusqueda";
import { Helmet } from "react-helmet";

export const LinkCountry = ({ error, countries }) => {
  return (
    <>
      {error ? (
        <ErrorBusqueda error={error} />
      ) : (
        <>
          <Helmet>
            {countries.slice(0, 3).map((country) => (
              <link
                key={country.name.common}
                rel="preload"
                as="image"
                href={country.flags.png}
              />
            ))}
          </Helmet>

          {countries.map((countrie, index) => (
            <Link
              className="card"
              to={`/${countrie.name.common}`}
              key={countrie.name.common}
            >
              <figure>
                <img
                  className="country-flag"
                  src={countrie.flags.png}
                  alt={`bandera de ${countrie.name.common}`}
                  loading={
                    index === 0 || index === 1 || index === 2 ? "eager" : "lazy"
                  }
                />
              </figure>
              <div className="contenido">
                <h1>{countrie.name.common}</h1>
                <h2>Population: {countrie.population}</h2>
                <h3>Region: {countrie.region}</h3>
                <h3>Capital: {countrie.capital}</h3>
              </div>
            </Link>
          ))}
        </>
      )}
    </>
  );
};
