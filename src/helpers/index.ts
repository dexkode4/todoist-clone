import { collatedTasks } from '../constants';

export const collatedTasksExist = (selectedProject: any) => {
    collatedTasks.find(task => task.key === selectedProject);
}