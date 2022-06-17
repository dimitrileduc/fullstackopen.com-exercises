import React from "react";
import Country from "../Country";

function CountriesList({listContries}) {
    if (listContries.length > 10) {
        var message = <div>Too many matches. Please specify</div>;
    } else {
        var list = listContries.map(function (country, index) {
            if (listContries.length === 1) {
                //console.log("one country");
                return (
                    <Country
                        key={country.area}
                        country={country}
                        isSingle={true}
                    />
                );
            } else if (index < 10) {
                console.log(index);
                return (
                    <Country
                        key={country.area}
                        country={country}
                        isSingle={false}
                    />
                );
            } else {
                return null;
            }
        });
    }
    return (
        <div>
            <h3>Countries List</h3>
            <ul>{list}</ul>
            <div>{message}</div>
        </div>
    );
}

export default CountriesList;
