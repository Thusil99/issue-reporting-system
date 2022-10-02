package net.javaProject.CIRSBackend;

import net.javaProject.CIRSBackend.repository.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import net.javaProject.CIRSBackend.model.Issue;

@SpringBootApplication
public class CirsBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(CirsBackendApplication.class, args);
	}

	@Autowired
	private IssueRepository issueRepository;
	@Override
	public void run(String... args) throws Exception {
	//	Issue issue = new Issue();
		//	issue.setCustomerName("Thusil");
		//issue.setIssueDescription("dfdsgds");
		//issue.setIssueType("open");
		//issueRepository.save(issue);

		//Issue issue1 = new Issue();
		//issue1.setCustomerName("vish");
		//issue1.setIssueDescription("dkjbkds");
		//issue1.setIssueType("closed");
		//issueRepository.save(issue);
	}
}
