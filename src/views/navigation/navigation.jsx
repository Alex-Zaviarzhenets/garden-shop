import React, { useState, useContext } from "react";
import styles from "./index.module.scss";
import {CartIcon, LogoIcon} from '../../assets/icons.jsx';
import { IconCounter } from "../../components/icon-counter";
import { NavLink } from "react-router-dom";
import cn from 'classnames';

export const Navigation = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);


  const onSwitchToggle = () => {
    setIsToggleOn((prev) => !prev);
  };

  const getClassName = ({isActive}) => isActive ? styles.active : '';

  return (
    <header className={styles.header}>
      <div className={styles.iconWrapper}>
        <LogoIcon className={styles.logo}/>
      </div>
      <nav className={styles.navbar}>
        <NavLink to='/' className={getClassName}>Main Page</NavLink>
        <NavLink to='/categories' className={getClassName}>Categories</NavLink>
        <NavLink to='/products' className={getClassName}>All Products</NavLink>
        <NavLink to='/all-sales' className={getClassName}>All Sales</NavLink>

      </nav>
      <div className={styles.heartCartWrapper}>
        <IconCounter count={4} >
          <CartIcon />
        </IconCounter>
      </div>
    </header>
  );
};
