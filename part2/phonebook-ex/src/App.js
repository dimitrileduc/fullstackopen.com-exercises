import {useState} from "react";

const App = () => {
    const [persons, setPersons] = useState([{name: "Arto Hellas", id: 1}]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
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

    const handleNameChange = (event) => {
        console.log(event.target.value);
        setNewName(event.target.value);
    };

    const handleNumberChange = (event) => {
        console.log(event.target.value);
        setNewNumber(event.target.value);
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
            <ul>
                {persons.map((person) => (
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
