import React from 'react';
import musr from '../img/garbage.png';

interface ITaskProps {
    todoText: string;
    onDeleteTodo: React.MouseEventHandler;
    markTask: React.ChangeEventHandler<HTMLInputElement>;
    className: string;
    status: boolean
}
const Task: React.FC<ITaskProps> = props => {
    return (
        <div className="todoWrap">
            <p className={props.className}>{props.todoText}</p>
            <div className="btnWrap">
                <input type="checkbox" onChange={props.markTask} checked={props.status === true} />
                <button onClick={props.onDeleteTodo}><img src={musr} alt="муср"/></button>
            </div>

        </div>
    );
};

export default Task;