package eazidevops.azDeveloper.controller;

import eazidevops.azDeveloper.model.Content;
import eazidevops.azDeveloper.model.Course;
import eazidevops.azDeveloper.repository.CoursesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/learn/courses")
public class CoursesController {

    @Autowired
    private CoursesRepository coursesRepository;

    @GetMapping("")
    public List<Course> courses(){

        return coursesRepository.findAll();
    }

    @PostMapping("/addcourse")
    public List<Course> addCourse(@RequestBody Course course){


       coursesRepository.save(course);

        return coursesRepository.findAll();
    }
}
