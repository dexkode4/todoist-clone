import { useState, useEffect } from 'react';
import moment from 'moment';
import { firebase } from '../firebase';

const collatedTasksExist = (selectedProject: any) => true;

export const useTasks = (selectedProject: any) => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        let unsubscribe = firebase.firestore().
            collection('tasks')
            .where('userId', '==', '805e2239-26ad-44bc-88b7-08b62771cf02');

        unsubscribe = selectedProject && !collatedTasksExist(selectedProject) ?
            (unsubscribe = unsubscribe.where('projectId', '==', selectedProject)) : selectedProject === 'TODAY'
                ? (unsubscribe = unsubscribe.where('date', '==', moment().format('DD/MM/YYYY')))
                : selectedProject === 'INBOX' || selectedProject === 0 ?
                    (unsubscribe = unsubscribe.where('date', '==', ''))
                    : unsubscribe;

    }, [tasks])
}