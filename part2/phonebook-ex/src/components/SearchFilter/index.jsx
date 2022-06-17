import React from "react";

function SearchFilter({handleChangeSearch, valueSearchInput}) {
    return (
        <div>
            <label htmlFor="search">Search by name:</label>
            <input
                id="search"
                onChange={handleChangeSearch}
                value={valueSearchInput}></input>
        </div>
    );
}

export default SearchFilter;
