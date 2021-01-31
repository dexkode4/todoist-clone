import React from 'react'
import styles from './Tasks.module.scss';
import { Itask } from '../../interfaces';
import { Checkbox } from './Tasks.components';
import { useTasks } from '../../hooks';

export function Tasks() {
    const { tasks } = useTasks('1');
    console.log(tasks);
    
    const projectName = "";
    return (
        <div className={styles.tasks} data-testid="tasks">
            <h2 data-testid="project-name">{projectName}</h2>
            <ul>
                {
                    tasks.map((task: Itask) => (
                        <li key={task.id}>
                            <Checkbox id={task.id} />
                            <span>{task.task}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

