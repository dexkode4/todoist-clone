export interface Itask {
    archived: boolean,
    date: string,
    id: string,
    data: () => any,
    task: string
}


export interface Isnapshot {
    docs: any,
}


export interface Icheckbox {
    id: string
}


export interface IProject {
    projectId: string,
    docId: string
}

export interface IContextValues {
    projects: IProject[],
    setProjects: any
}


export interface ISelectedProjectContextValues {
    selectedProject: any,
    setSelectedProject: (D: string) => void
}
