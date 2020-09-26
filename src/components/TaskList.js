import React from 'react';
import Task from './Task'

const TaskList = () => {
    return( 
        <div>
            <h1>Lista tasków</h1>
            <Task />
            <Task />
        </div>
    )
}

export default TaskList;