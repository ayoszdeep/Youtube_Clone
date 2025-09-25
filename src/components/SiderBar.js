import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../styles/Sidebar.module.scss'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  if (!isMenuOpen) return null

  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.section}>
          <li><Link to="/">Home</Link></li>
          <li>Shorts</li>
          <li>Video</li>
          <li>Live</li>
        </ul>

        <h4 className="font-bold mb-2 text-slate-800">Subscriptions</h4>
        <ul className={styles.section}>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>

        <h4 className="font-bold mb-2 text-slate-800">Watch Later</h4>
        <ul className={styles.section}>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
