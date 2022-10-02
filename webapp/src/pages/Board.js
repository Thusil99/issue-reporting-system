import React, { useEffect, useState } from "react";
import { IssueCard } from "../components/IssueCard/IssueCard";
import { getAllIssues } from "../services/issue.service";
import styles from "./Board.module.scss";

export const STATES = {
  open: "open",
  inProgress: "in_progress",
  waiting: "waiting",
  resolved: "resolved",
};

export const Board = () => {
  const [issues, setIssues] = useState([]);

  const loadIssues = async () => {
    try {
      const res = await getAllIssues();
      setIssues(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    loadIssues();
  }, []);

  return (
    <div className={styles.board}>
      <div className={styles.column}>
        <div className={styles.columnHeader}>Open Issues</div>
        <div className={styles.issueContainer}>
          {issues
            .filter((issue) => issue.issueState === STATES.open)
            .map((issue, index) => (
              <IssueCard {...issue} key={index} onIssueUpdate={loadIssues} />
            ))}
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.columnHeader}>In Progress Issues</div>
        <div className={styles.issueContainer}>
          {issues
            .filter((issue) => issue.issueState === STATES.inProgress)
            .map((issue, index) => (
              <IssueCard {...issue} key={index} onIssueUpdate={loadIssues} />
            ))}
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.columnHeader}>Waiting On Client Issues</div>
        <div className={styles.issueContainer}>
          {issues
            .filter((issue) => issue.issueState === STATES.waiting)
            .map((issue, index) => (
              <IssueCard {...issue} key={index} onIssueUpdate={loadIssues} />
            ))}
        </div>
      </div>
      <div className={styles.noBorderColumn}>
        <div className={styles.columnHeader}>Resolved Issues</div>
        <div className={styles.issueContainer}>
          {issues
            .filter((issue) => issue.issueState === STATES.resolved)
            .map((issue, index) => (
              <IssueCard {...issue} key={index} onIssueUpdate={loadIssues} />
            ))}
        </div>
      </div>
    </div>
  );
};
