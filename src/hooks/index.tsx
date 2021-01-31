import { useState, useEffect } from 'react';
import moment from 'moment';
import { firebase } from '../firebase';
import { collatedTasksExist } from '../helpers';
import { Itask, Isnapshot } from '../interfaces';


export const useTasks = (selectedProject: any) => {
    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);

    useEffect(() => {
        let unsubscribe: any = firebase
            .firestore()
            .collection('tasks')
            .where('userId', '==', '805e2239-26ad-44bc-88b7-08b62771cf02');

        unsubscribe =
            selectedProject && !collatedTasksExist(selectedProject)
                ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
                : selectedProject === 'TODAY'
                    ? (unsubscribe = unsubscribe.where(
                        'date',
                        '==',
                        moment().format('DD/MM/YYYY')
                    ))
                    : selectedProject === 'INBOX' || selectedProject === 0
                        ? (unsubscribe = unsubscribe.where('date', '==', ''))
                        : unsubscribe;

        unsubscribe = unsubscribe.onSnapshot((snapshot: Isnapshot) => {
            const newTasks = snapshot.docs.map((task: Itask) => ({
                id: task.id,
                ...task.data(),
            }));

            setTasks(
                selectedProject === 'NEXT_7'
                    ? newTasks.filter(
                        (task: Itask) =>
                            moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                            task.archived !== true
                    )
                    : newTasks.filter((task: Itask) => task.archived !== true)
            );
            setArchivedTasks(newTasks.filter((task: Itask) => task.archived !== false));
        });

        return () => unsubscribe();
    }, [selectedProject]);

    return { tasks, archivedTasks };
};

export interface IProject {
    projectId: string,
    docId: string
}
export const useProjects = () => {
    const [projects, setProjects] = useState<IProject[]>([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('projects')
            .where('userId', '==', '805e2239-26ad-44bc-88b7-08b62771cf02')
            .orderBy('projectId')
            .get()
            .then(snapshot => {
                const allProjects: any = snapshot.docs.map(project => ({
                    ...project.data(),
                    docId: project.id,
                }));

                if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
                    setProjects(allProjects);
                }
            });
    }, [projects]);

    return { projects, setProjects };
};