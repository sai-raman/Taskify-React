import Button from "./Button";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const AddTask = ({ onAddTask }) => {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [reminder, setReminder] = useState(false);
    const id = uuidv4();
    return (
        <form className="add-form" onSubmit={(e) => {
            e.preventDefault();
            if (!text) alert('Please enter a task')
            else if (!date) alert('Please select Date & Time')
            else {
                onAddTask({ id, text, date, reminder })
                setText('');
                setDate('');
                setReminder(false);
            }
        }}>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type="datetime-local" placeholder="Add Day & Time" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="checkbox" name="reminder" checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <Button text='Save Task' color='black' />
        </form>
    )
}


export default AddTask;