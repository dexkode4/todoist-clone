import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { BsDot } from 'react-icons/bs';
import { useProjectsValue, useSelectedProjectValue } from '../../../context';
import { firebase } from '../../../firebase';
import { IProject } from '../../../interfaces';
import styles from '../Projects.module.scss';

type ProjectProp = {
    project: IProject
}

function Project({ project }: ProjectProp) {
    const selectedContext = useSelectedProjectValue();
    const projectContext = useProjectsValue();
    const [showConfirm, setShowConfirm] = useState(false);

    const deleteProject = (docId: string) => {
        firebase
            .firestore()
            .collection('projects')
            .doc(docId)
            .delete()
            .then(() => {
                projectContext?.setProjects([...projectContext.projects])
                selectedContext?.setSelectedProject('INBOX')
            })
    }

    return (
        <>
            <span className={styles.sidebar__dot}><BsDot /></span>
        </>
    )
}

export default Project
