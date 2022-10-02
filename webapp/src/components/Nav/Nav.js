import React, { useState } from "react";
import { AddLayout } from "../addLayout/AddLayout";
import styles from "./Nav.module.scss";

export const Nav = () => {
  const [showAddLayout, setShowAddLayout] = useState(false);

  const onAddIssue = () => {
    setShowAddLayout(false);
  };

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.header}>Customer Issue Reporting System</div>
        <button className="button-white" onClick={() => setShowAddLayout(true)}>
          Add Issue
        </button>
      </div>
      {showAddLayout && <AddLayout onAddIssue={onAddIssue} />}
    </>
  );
};
