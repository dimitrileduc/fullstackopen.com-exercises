import {useState, useEffect} from "react";
import CountriesList from "./Components/CountriesList";
import SearchFilter from "./Components/SearchFilter";
import axios from "axios";

function App() {
    const [listContries, setListCountries] = useState([]);
    const [filterTerm, setFilterTerm] = useState("belgium");

    useEffect(() => {
        setListCountries([]);
        console.log("effect");

        const url = "https://restcountries.com/v3.1/name/" + filterTerm;

        console.log(url);
        axios
            .get(url)
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error", error.message);
                }
                console.log(error.config);
            })

            .then((response) => {
                if (response) {
                    console.log(response.data);
                    setListCountries(response.data);
                }
            });
    }, [filterTerm]);

    const handleChangeSearch = (event) => {
        console.log(event.target.value);
        setFilterTerm(event.target.value);
    };

    return (
        <div>
            <h1>Countries App</h1>
            <SearchFilter
                handleChangeSearch={handleChangeSearch}
                filterTerm={filterTerm}
            />
            <CountriesList listContries={listContries} />
        </div>
    );
}

export default App;
