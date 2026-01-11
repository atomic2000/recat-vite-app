import {useState, useEffect} from 'react'

function App() {
    const [toDo, setTodo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onchange = (event) => setTodo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDos((currentArray) => [toDo, ...currentArray]);
        setTodo("");
    }
    console.log(toDos);
    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="What do you want to do?" onChange={onchange} value={toDo}/>
                <button>Add To Do</button>
            </form>
            <hr/>
            <ul>
                {toDos.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default App
