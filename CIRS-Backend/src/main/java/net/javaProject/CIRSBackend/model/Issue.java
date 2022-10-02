package net.javaProject.CIRSBackend.model;

import lombok.AllArgsConstructor;
import  lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "issues")
public class Issue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    private long id;

    @Column(name = "customer_name")
    private String customerName;

    @Column(name = "issue_Description")
    private String issueDescription;

    @Column(name = "issue_type")
    private String issueType;

    @Column(name = "issue_state")
    private String issueState;




}
