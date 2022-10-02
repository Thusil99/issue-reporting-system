import React from "react";
import styles from "./IssueCard.module.scss";
import eyeIcon from "../../assets/eye.png";
import { updateState } from "../../services/issue.service";
export const IssueCard = (props) => {
  const changeState = async (e) => {
    const newState = e.target.value;
    try {
      await updateState(props.id, newState);
      props.onIssueUpdate();
    } catch (error) {}
  };

  return (
    <div className={styles.issueCard}>
      <div className={styles.topContainer}>
        <div>{props.issueDescription}</div>
        <img src={eyeIcon} className={styles.eyeIcon} />
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.typeWrapper}>
          <div className={styles.type}>{props.issueType}</div>
          <div className={styles.type}>{props.customerName}</div>
        </div>

        <div className={styles.selectContainer}>
          <div className={styles.moveTo}>Move to</div>
          <select onChange={changeState}>
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="waiting">Waiting</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
      </div>
    </div>
  );
};
