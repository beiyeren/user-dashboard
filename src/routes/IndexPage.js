import React from "react";
//noinspection JSUnresolvedVariable
import styles from "./IndexPage.css";
import {connect} from 'dva';
import MainLayout from '../components/MainLayout/MainLayout'

function IndexPage({location}) {
  return (
    <MainLayout location={location}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.normal}>
        <ul className={styles.list}>
          <div className={styles.welcome}/>
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li><a href="https://github.com/dvajs/dvadocs/blob/master/v1/enus/gettingstarted.md">Getting Started</a></li>
        </ul>
      </div>
    </MainLayout>
);
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
