package eazidevops.azDeveloper.controller;

import eazidevops.azDeveloper.model.DictionaryContent;
import eazidevops.azDeveloper.model.Project;
import eazidevops.azDeveloper.repository.DictionaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/dictionary")
public class DictionaryController {

    @Autowired
    private DictionaryRepository dictionaryRepository;

    @GetMapping("")
    public List<DictionaryContent> dictionary(){

        return dictionaryRepository.findAll();
    }

    @PostMapping("/add-content")
    public String addProject(@RequestBody DictionaryContent content){

        dictionaryRepository.save(content);

        return "Project added successfully";
    }
}
