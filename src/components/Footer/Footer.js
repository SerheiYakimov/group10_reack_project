import React from 'react';
import { Link } from 'react-router-dom';
import s from './Footer.module.css';

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footerBox}>
        <Link to="/developers" className={s.link}>
          𝐓𝐄𝐀𝐌
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
