import Task from "./Task"


type Props = {
    listTasks: string[],
    deleteTask: (index: number) => void
}

const ListTasks = ({ listTasks, deleteTask }: Props) => {
    return (
        <div className="taskList">
            {
                listTasks.map((task, index) => (
                    <Task key={index} task={task} deleteTask={() => deleteTask(index)} />
                ))
            }
        </div>
    )
}

export default ListTasks;