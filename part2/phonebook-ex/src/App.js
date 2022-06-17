import {useState} from "react";

const App = () => {
    const [persons, setPersons] = useState([
        {name: "Arto Hellas", number: "123-1234567", id: 1},
        {name: "Ada Lovelace", number: "123-1234567", id: 2},
        {name: "Dan Abramov", number: "123-1234567", id: 3},
        {name: "Mary Poppendieck", number: "123-1234567", id: 4},
    ]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [showAll, setShowAll] = useState(true);
    const [valueSearchInput, setValueSearchInput] = useState("");
    let objectExist = false;

    const addPersons = (event) => {
        event.preventDefault();

        if (newName === "") {
            objectExist = true;
        } else {
            Object.keys(persons).forEach(function (key) {
                console.log(persons[key].name);
                if (persons[key].name === newName) {
                    alert(newName + " is already addede to phonebook");
                    objectExist = true;
                }
            });
        }

        if (!objectExist) {
            const personObject = {
                name: newName,
                number: newNumber,
                id: persons.length + 1,
            };

            setPersons(persons.concat(personObject));
        }
        setNewName("");
    };

    const personsToShow = showAll
        ? persons
        : persons.filter((person) => {
              if (
                  person.name
                      .toLowerCase()
                      .includes(valueSearchInput.toLowerCase())
              ) {
                  return person;
              }
              return null;
          });

    const handleNameChange = (event) => {
        console.log(event.target.value);
        setNewName(event.target.value);
    };

    const handleNumberChange = (event) => {
        console.log(event.target.value);
        setNewNumber(event.target.value);
    };

    const handleChangeSearch = (event) => {
        setShowAll(false);
        console.log(event.target.value);
        setValueSearchInput(event.target.value);
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPersons}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <label htmlFor="phone">Enter a phone number:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="123-1234567"
                    pattern="[0-9]{3}-[0-9]{7}"
                    required
                    onChange={handleNumberChange}></input>
                <small>Format: 123-4567898</small>
                <div>
                    <button type="submit">add</button>
                </div>
                <div>debug: {newName}</div>
            </form>
            <h2>Numbers</h2>
            <label htmlFor="search">Search by name:</label>
            <input
                id="search"
                onChange={handleChangeSearch}
                value={valueSearchInput}></input>
            <ul>
                {personsToShow.map((person) => (
                    <li key={person.id}>
                        {" "}
                        {person.name} number : {person.number}
                    </li>
                ))}
            </ul>
            ...
        </div>
    );
};

export default App;
