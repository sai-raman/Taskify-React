import { Task } from "./Task";
import { FaInfoCircle } from 'react-icons/fa'


const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <div>
            <FaInfoCircle /> Double click on the task to turn on/off reminder
            <br />
            <ul>
                {
                    tasks.map(task => {
                        return <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
                    })
                }
            </ul>
        </div>
    )
}

export default Tasks;
