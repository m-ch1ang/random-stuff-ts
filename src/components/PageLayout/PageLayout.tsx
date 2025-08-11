import React, { ReactNode } from 'react';
import styles from './PageLayout.module.css';
import NavBar from './NavBar';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className={styles.page}>
      <NavBar />
        <div className={styles.main}>
          {children}
        </div>
    </div>
  );
};

export default PageLayout;
