import React, { useState } from 'react'
import styles from './Sidebar.module.scss';
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa'
import { useProjects, useTasks } from '../../../hooks';
import { useSelectedProjectValue } from '../../../context';
import { Projects } from '../../Projects';

function Sidebar() {
    const state = useSelectedProjectValue();
    const [active, setActive] = useState('inbox');
    const [showProjects, setShowProjects] = useState(true);
    return (
        <div className={styles.sidebar} data-testid="sidebar">
            <ul className={styles.sidebar__generic}>
                <li
                    data-testid="inbox"
                    className={styles.inbox}>
                    <span><FaInbox /></span>
                    <span>Inbox</span>
                </li>
                <li
                    data-testid="today"
                    className={styles.today}>
                    <span><FaRegCalendar /></span>
                    <span>Today</span>
                </li>
                <li
                    data-testid="next_7"
                    className={styles.next_7}>
                    <span><FaRegCalendarAlt /></span>
                    <span>Next 7 days</span>
                </li>

            </ul>
            <div className={styles.sidebar__middle}>
                <span><FaChevronDown /></span>
                <h2>Projects</h2>
            </div>

            <ul className={styles.sidebar__projects}>
                {showProjects && <Projects activeState={active} />}
            </ul>
        </div>
    )
}

export default Sidebar
