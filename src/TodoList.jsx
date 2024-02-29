import { useState } from "react";

function TodoList() {
    const [desc, setDesc] = useState("");
    const [todos, setTodos] = useState([]);
    const [date, setDate] = useState("");

    const updateDescription = (event) => {
        setDesc(event.target.value);
    };
    const updateDate = (event) => {
        setDate(event.target.value);
    };

    const addTodo = () => {
        // varmistetaan, että käyttäjä täyttää molemmat kentät
        if (!desc || !date) {
            alert("Hups, toinen vaadittu tieto puuttuu. Täytäthän molemmat syöttökentät :)")
            return;
        }
        // muunnetaan selaimen päivämäärän esitys muotoon dd/mm/yyyy
        const dateParts = date.split("-");
        const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
        setTodos([...todos, { desc, formattedDate }]);
        setDesc("");
        setDate("");
    };

    return (
        <>
            <h2>Add your plans: </h2>

            <p>Description: <input placeholder="Description" onChange={updateDescription} value={desc} />
                Date: <input placeholder="Date" type="date" onChange={updateDate} value={date} />
                <button onClick={addTodo}>Add</button>
            </p>


            <table>
                <thead>
                    <tr>
                        <div className="input-group">
                            <th>Description</th>
                            <th>Date</th>
                        </div>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.desc}</td>
                            <td>{todo.formattedDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TodoList;