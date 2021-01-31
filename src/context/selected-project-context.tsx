import React, { createContext, useContext, useState } from 'react';
import { ISelectedProjectContextValues } from '../interfaces'




export const SelectedProjectContext = createContext<ISelectedProjectContextValues | null>(null);



type Propstype = {
    children: React.ReactNode
}

export const SelectedProjectContextProvider = ({ children }: Propstype) => {

    const [selectedProject, setSelectedProject] = useState('INBOX');

    return <SelectedProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
        {children}
    </SelectedProjectContext.Provider>
}



export const useSelectedProjectValue = () => useContext(SelectedProjectContext)