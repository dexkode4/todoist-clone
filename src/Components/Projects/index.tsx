import React, { useContext, useState } from 'react'
import { useProjectsValue, useSelectedProjectValue } from '../../context';
import { IProject } from '../../interfaces';
import styles from './Projects.module.scss';
import cx from 'classnames'

type ProjectsType = {
    activeState: string | null
}

export function Projects({ activeState = null }: ProjectsType) {
    const [active, setActive] = useState(activeState);
    const selectedContext = useSelectedProjectValue();
    const projectContext = useProjectsValue();
    return (
        <>
            {projectContext?.projects.map((project: IProject) => (

                <li key={project.projectId}
                    data-doc-id={project.docId}
                    data-testid='project-action'
                    className={cx(active && styles.active, styles.sidebar__project)}
                    onClick={() => {
                        setActive(project.projectId)
                        selectedContext?.setSelectedProject(project.projectId)
                    }}>
                    {JSON.stringify(project)}
                </li>
            ))
            }
        </>
    )

}

