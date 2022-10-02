import React, { useRef, useState } from "react";
import { addIssue } from "../../services/issue.service";
import styles from "./AddLayout.module.scss";

const DEFAULT_FORM_DATA = {
  customerName: "",
  issueDescription: "",
  issueType: "Bug",
};

export const AddLayout = (props) => {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const formRef = useRef();

  const handleChange = (e) => {
    const d = formData;
    d[e.target.name] = e.target.value;
    setFormData(d);
  };

  const createIssue = async () => {
    try {
      await addIssue({ issueState: "open", ...formData });
      setFormData(DEFAULT_FORM_DATA);
      formRef.current.reset();
      props.onAddIssue();
      window.location.reload();
    } catch (error) {
      console.error("An error occurred while adding the issue");
    }
  };

  return (
    <div className={styles.addLayout}>
      <div className={styles.addForm}>
        <form ref={formRef}>
          <div className={styles.header}>Add Issue</div>
          <div className="label">Name</div>
          <input type="text" name="customerName" onChange={handleChange} />
          <div className="label">Issue</div>
          <input type="text" name="issueDescription" onChange={handleChange} />
          <div className="label">Type</div>
          <select
            className={styles.selectBox}
            name="issueType"
            onChange={handleChange}
          >
            <option>Bug</option>
            <option>Question</option>
            <option>Improvement </option>
          </select>
          <button
            type="button"
            className={styles.addButton}
            onClick={createIssue}
          >
            Add Issue
          </button>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={() => props.onAddIssue()}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};
