import React from 'react';
import styles from './Header.module.scss';
import { Topbar } from './Topbar';
import { Navbar } from './Navbar';
import { Carousel } from './Carousel';

export function Header() {
  return <div className={styles.Header}>
    <Topbar/>
    <Navbar />
    <Carousel />
  </div>;
};

