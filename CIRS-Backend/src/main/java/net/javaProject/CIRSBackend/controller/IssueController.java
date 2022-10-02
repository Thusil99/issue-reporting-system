package net.javaProject.CIRSBackend.controller;

import net.javaProject.CIRSBackend.exception.ResourceNotFoundException;
import net.javaProject.CIRSBackend.repository.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import net.javaProject.CIRSBackend.model.Issue;

import java.util.List;
import java.util.Map;

@CrossOrigin("*")
@RestController
public class IssueController {

    @Autowired
    private IssueRepository issueRepository;

    @RequestMapping ("/")
    public List<Issue> getAllIssues(){
        return issueRepository.findAll();
    }


    @PostMapping("/")
    public Issue createIssue(@RequestBody Issue issue){
        System.out.println(issue);
        return issueRepository.save(issue);

    }

    @GetMapping("/{id}")
    public ResponseEntity<Issue> getIssueById(@PathVariable("id") long id){
        Issue issue = issueRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Issue not exist with id" + id));
        return ResponseEntity.ok(issue);
    }

    @PostMapping ("/updateState/{id}")
    public ResponseEntity<Issue> updateIssue(@PathVariable long id,  @RequestBody Map<String, Object> payload){
        Issue updateIssue = issueRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Issue not exist with id: " + id));

        //System.out.println(issueState);
        //updateIssue.setCustomerName(issueDetails.getCustomerName());
        //updateIssue.setIssueDescription(issueDetails.getIssueDescription());
        updateIssue.setIssueState(payload.get("newState").toString());

        issueRepository.save(updateIssue);

        return ResponseEntity.ok(updateIssue);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Issue issues = issueRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Issue not exist with id: " + id));

        issueRepository.delete(issues);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}

