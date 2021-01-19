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

                <div className={styles.setting}>
                    <ul>
                        <li>
                            +
                       </li>
                        <li><FaPizzaSlice /></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
