package eazidevops.azDeveloper.controller;


import eazidevops.azDeveloper.model.ExploreContent;
import eazidevops.azDeveloper.repository.ExploreContentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/explore")
public class ExploreContentController {

    @Autowired
    private ExploreContentRepository exploreContentRepository;

    @GetMapping("")
    public List<ExploreContent> exploreTopics() {

        return exploreContentRepository.findAll();
    }

    @PostMapping("addContent")
    public String addContent(@RequestBody ExploreContent exploreContent){

        exploreContentRepository.save(exploreContent);

        return "Content added successfully";
    }

    @GetMapping("/error")
    public String error(){

        return "Error in AzDeveloper";
    }
}
