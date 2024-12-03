import { useState } from "react";
import ListTasks from "./ListTask";



const TodoApp = () => {

    const [newTask, setnewTask] = useState<string>('');
    const [listTasks, setListTasks] = useState<string[]>([]);

    const handleAddTask = () => {
        if (newTask.trim() === '') return;

        setListTasks((backTask) => [...backTask, newTask]);
        setnewTask('')
    }

    const handleDeleteTask = (index: number) => {
        setListTasks(tasks => tasks.filter((_, i) => i !== index))
    }

    return (
        <div>
            <h1>Task list</h1>
            <div>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setnewTask(e.target.value)}
                    placeholder="New tak"
                />
                <button
                    type="button"
                    title="add_task"
                    onClick={handleAddTask}
                >
                    add task
                </button>
            </div>
            <ListTasks listTasks={listTasks} deleteTask={handleDeleteTask} />
        </div>
    )
}

export default TodoApp;