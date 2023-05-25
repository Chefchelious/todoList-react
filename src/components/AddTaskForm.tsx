import React from 'react';

interface IAddTaskForm {
    onAddTodo: React.FormEventHandler;
    onChangeValue: React.ChangeEventHandler;
    value: string
}

const AddTaskForm: React.FC<IAddTaskForm> = props => {
    return (
        <form className="mainForm" onSubmit={props.onAddTodo}>
            <input className="todoInput"  type="text" placeholder='введите текст задачи' onChange={props.onChangeValue} value={props.value} />
            <button type="submit" disabled={props.value.trim() === ''}>Add Task</button>
        </form>
    );
};

export default AddTaskForm;