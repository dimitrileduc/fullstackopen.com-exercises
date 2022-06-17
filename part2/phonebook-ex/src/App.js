import {useState} from "react";

const App = () => {
    const [persons, setPersons] = useState([{name: "Arto Hellas"}]);
    const [newName, setNewName] = useState("");

    const addPersons = (event) => {
        event.preventDefault();
        const personObject = {
            name: newName,
            id: persons.length + 1,
        };

        setPersons(persons.concat(personObject));
        setNewName("");
    };

    const handleNameChange = (event) => {
        console.log(event.target.value);
        setNewName(event.target.value);
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPersons}>
                <div>
                    name: <input onChange={handleNameChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
                <div>debug: {newName}</div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons.map((person) => (
                    <li key={person.name}> {person.name}</li>
                ))}
            </ul>
            ...
        </div>
    );
};

export default App;
