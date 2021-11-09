import Head from 'next/head';
import Link from 'next/Link';
import React, { useState } from 'react';
import Modal from 'react-modal';

import Button from '../components/Button';
import Drop from '../components/Drop';
import styles from '../styles/Home.module.css';

export default function Mint() {
  return (
    <div className={styles.article}>
      <Drop />
    </div>
  );
}
