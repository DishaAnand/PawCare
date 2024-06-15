import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logout } from '../components/molecules/auth/firebase';
import styles from './navbar.module.scss';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__title}>PawCare</div>
      <div className={styles.navbar__links}>
        <a href="#home" className={styles.navbar__link}>Home</a>
        <Link to="/contact" className={styles.navbar__link}>Contact</Link>
        <Link to="/about" className={styles.navbar__link}>About Us</Link>
        {user && (
          <button onClick={logout} className={styles.navbar__link}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
