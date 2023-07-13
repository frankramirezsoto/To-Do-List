import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function InputTask(props) {
    //Hook to modify 
    const [input, setInput] = useState('');

    const manageInput = e => {
        setInput(e.target.value);
    }

    const manageAddTask = e => {
        e.preventDefault();

        const newTask = {
            id: uuidv4(),
            text: input,
            isCompleted: false
        }

        props.onSubmit(newTask);
    }

    return (
        <form onSubmit={manageAddTask} className="bg-white rounded-3xl p-5 flex content-between">    
            <input
                className="flex-1 mr-5"
                type="text"
                placeholder="Input your To-Do Task"
                onChange={manageInput}
            />
            <button 
                className="flex-none p-3 rounded-2xl bg-sky-300 hover:bg-sky-200 text-white hover:text-blue-500">
                Add Task
            </button>
        </form>
    );

}


export default InputTask;