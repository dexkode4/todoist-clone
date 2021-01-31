import React from 'react'
import styles from './Header.module.scss';
import { FaPizzaSlice } from 'react-icons/fa';

function Header() {
    return (
        <header className={styles.header} data-testid="header">
            <nav>
                <div className={styles.logo}>
                    <img src="/images/logo.png" alt="todoist" />
                </div>

                <div className={styles.settings}>
                    <ul>
                        <li className={styles.settings__add} data-testid="quick-add-task-action">
                            +
                       </li>
                        <li className={styles.settings__darkmode} data-testid="dark-mode-action"><FaPizzaSlice /></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
