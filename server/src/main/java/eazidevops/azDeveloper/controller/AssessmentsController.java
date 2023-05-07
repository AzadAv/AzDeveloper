package eazidevops.azDeveloper.controller;


import eazidevops.azDeveloper.model.Assessment;
import eazidevops.azDeveloper.repository.AssessmentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/learn/assessments")
public class AssessmentsController {

    @Autowired
    private AssessmentsRepository assessmentsRepository;

    @GetMapping("")
    public List<Assessment> assessments(){

        return assessmentsRepository.findAll();
    }

    @PostMapping("addAssessment")
    public String addAssessment(@RequestBody Assessment assessment){

        assessmentsRepository.save(assessment);

        return "Added successfully";
    }

}
