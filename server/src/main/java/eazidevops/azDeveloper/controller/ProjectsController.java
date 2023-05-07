package eazidevops.azDeveloper.controller;

import eazidevops.azDeveloper.model.Project;
import eazidevops.azDeveloper.repository.ProjectsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/projects")
public class ProjectsController {

    @Autowired
    private ProjectsRepository projectsRepository;

    @GetMapping("")
    public List<Project> projects(){

        return projectsRepository.findAll();
    }

    @PostMapping("/addproject")
    public String addProject(@RequestBody Project project){

        projectsRepository.save(project);

        return "Project added successfully";
    }

    @PutMapping("/update/{id}")
    public String updateProject(@PathVariable int id,@RequestBody Project project ){

        Optional<Project> projectData = projectsRepository.findById(id);

        if(projectData.isPresent()){

            Project _project = projectData.get();
            _project.setUsername(project.getUsername());
            _project.setName(project.getName());
            _project.setDatabaseType(project.getDatabaseType());
            _project.setLikes(project.getLikes());
            _project.setLanguages(project.getLanguages());
            _project.setDescription(project.getDescription());
            _project.setDatabaseType(project.getDatabaseType());
            _project.setStyle(project.getStyle());
            projectsRepository.save(_project);
            return "Updated successfully";
        }
        else{

            return "Error";
        }
    }

    @DeleteMapping("/deleteproject/{id}")
    public String deleteProject(@PathVariable int id){

      projectsRepository.deleteById(id);

        return "Project deleted Successfully";
    }

    @GetMapping("/error")
    public String error(){

        return "Error in AzDeveloper";
    }
}
