import React from "react";

function SearchFilter({handleChangeSearch, filterTerm}) {
    return (
        <div>
            <label htmlFor="search">Search by name:</label>
            <input
                id="search"
                onChange={handleChangeSearch}
                value={filterTerm}></input>
        </div>
    );
}

export default SearchFilter;
