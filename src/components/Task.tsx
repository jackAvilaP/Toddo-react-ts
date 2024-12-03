

type Props = {
    task: string,
    deleteTask: () => void
}

function Task({ task, deleteTask }: Props) {
    return (
        <div className="task">
            <span>{task}</span>
            <button type="button" title='delte_task' onClick={deleteTask}>
                Delete Task
            </button>
        </div>
    )
}

export default Task