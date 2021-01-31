import React from 'react';
import { firebase } from '../../firebase';
import { Icheckbox } from '../../interfaces';
import styles from './Tasks.module.scss';

export function Checkbox({ id }: Icheckbox) {
    const archiveTask = () => {
        firebase
            .firestore()
            .collection('tasks')
            .doc(id)
            .update({
                archive: true
            });
    }
    return (
        <div
            className={styles.checkbox_holder}
            data-testid="checkbox-action"
            onClick={() => archiveTask()}
        >
            <span className={styles.checkbox} />
        </div>
    )
}
