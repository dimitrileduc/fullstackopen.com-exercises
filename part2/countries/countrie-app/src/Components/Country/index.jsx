import React from "react";

function Country({country, isSingle}) {
    console.log(country.capital[0]);
    const countryName = Object.values(country.name)[0];

    if (isSingle === true) {
        var detailsCountry = (
            <div>
                <div>capital : {country.capital[0]} </div>
                <div>area : {country.area} </div>
            </div>
        );

        var languageTitle = <div>Languages</div>;

        var languages = Object.values(country.languages).map(function (
            language,
            index,
        ) {
            return <li key={language}>{language}</li>;
        });

        var flagUrl = country.flags.png;
        var flagImage = <img src={flagUrl} alt="new" />;
    }

    return (
        <>
            <h4>{countryName}</h4>
            {detailsCountry}
            {languageTitle}
            <ul>{languages}</ul>
            {flagImage}
        </>
    );
}

export default Country;
