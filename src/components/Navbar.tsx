import styles from '../styles/navbar.module.css'

export function Navbar() {
    return <section className="navbar site-section no-margin">
      <section className="section-container">
        <h1 className="logo">META Network</h1>
        <nav className={styles['navbar-nav']}>
          <a href="#">Blog</a>
          <a href="#">GitHub</a>
      </nav>
      </section>
    </section>
}