import React from 'react';
import { ReactComponent as GoogleIcon } from '../../../svg/google.svg';
import s from './GoogleBtn.module.css';

function GoogleBtn({ href }) {
  return (
    <a className={s.googleBtn} href={href}>
      <GoogleIcon />
    </a>
  );
}

export default GoogleBtn;
