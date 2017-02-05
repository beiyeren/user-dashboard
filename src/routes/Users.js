import React from "react";
import {connect} from "dva";
//noinspection JSUnresolvedVariable
import styles from "./Users.css";
import UsersComponent from "../components/Users/Users";
import MainLayout from "../components/MainLayout/MainLayout";
function Users({location}) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <div className={styles.normal}/>
        <UsersComponent />
      </div>
    </MainLayout>
  );
}

export default connect()(Users);
