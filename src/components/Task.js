import { FaInfoCircle, FaTimes } from 'react-icons/fa'


export const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className="rowC">
            <div className={task.reminder ? 'task reminder' : 'task'} onDoubleClick={() => onToggle(task.id)}>
                <h3>{task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} /> </h3>
                <h4>{task.time}</h4>
            </div>
        </div>
    )
}
