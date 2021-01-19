import React from 'react'
import styles from './Sidebar.module.scss';
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa'

function Sidebar() {
    return (
        <div className={styles.sidebar} data-testid="sidebar">
            <ul className={styles.sidebar__generic}>
                <li>
                    <span><FaInbox /></span>
                    <span>Inbox</span>
                </li>
                <li>
                    <span><FaRegCalendar /></span>
                    <span>Today</span>
                </li>
                <li>
                    <span><FaRegCalendarAlt /></span>
                    <span>Next 7 days</span>
                </li>

            </ul>
            <div className={styles.sidebar__middle}>
                <span><FaChevronDown /></span>
                <h2>Projects</h2>
            </div>

            <ul className={styles.sidebar__projects}>
                projects will be here
            </ul>
            Add Projects Components Here!!
        </div>
    )
}

export default Sidebar
