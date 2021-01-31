import React, { createContext, useContext } from 'react';
import { useProjects } from '../hooks'
import { IContextValues } from '../interfaces'




export const ProjectContext = createContext<IContextValues | null>(null);



type Propstype = {
    children: React.ReactNode
}

export const ProjectContextProvider = ({ children }: Propstype) => {

    const { projects, setProjects } = useProjects();

    return <ProjectContext.Provider value={{ projects, setProjects }}>
        {children}
    </ProjectContext.Provider>
}



export const useProjectsValue = () => useContext(ProjectContext)