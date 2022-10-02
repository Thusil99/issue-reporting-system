package net.javaProject.CIRSBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import  net.javaProject.CIRSBackend.model.Issue;
import org.springframework.stereotype.Repository;


public interface IssueRepository extends JpaRepository<Issue, Long> {
    //all crud database
}
