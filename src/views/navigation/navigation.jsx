import React, { useState, useContext } from "react";
import styles from "./index.module.scss";
import {CartIcon, LogoIcon} from '../../assets/icons.jsx';
import { IconCounter } from "../../components/icon-counter";
import { NavLink } from "react-router-dom";
import { themeContext } from "../../context/theme";
import cn from 'classnames';

export const Navigation = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const {theme, switchTheme} = useContext(themeContext);


  const onSwitchToggle = () => {
    setIsToggleOn((prev) => !prev);
    switchTheme();
  };

  const getClassName = ({isActive}) => isActive ? styles.active : '';

  return (
    <header className={cn(styles.header, {
      [styles.dark]: theme === 'dark'
    })}>
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
