import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <a href='/'>
          <img className={styles['navbar-logo']} src="/images/HG-logo.png" alt="Heng Gin Enterprise Logo" />
      </a>
      {/* <Link to="/" className={styles.link}>Home</Link> */}
      <NavLink
        to="/client"
        className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
        Clients
      </NavLink>
      <NavLink
        to="/product"
        className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
        Products
      </NavLink>
      <NavLink
        to="/bom"
        className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
        BOMs
      </NavLink>
      <NavLink
        to="/po"
        className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
        POs
      </NavLink>
      <NavLink
        to="/supplier"
        className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
        Suppliers
      </NavLink>
      <NavLink
        to="/material"
        className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
        Materials
      </NavLink>
    </nav>
  );
};

export default NavBar;
