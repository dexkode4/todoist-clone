import { collatedTasks } from '../constants';

export const collatedTasksExist = (selectedProject: any) => {
    return collatedTasks.find(task => task.key === selectedProject);
}