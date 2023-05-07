package eazidevops.azDeveloper.controller;


import eazidevops.azDeveloper.model.Event;
import eazidevops.azDeveloper.repository.EventsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/events")
public class EventsController {

    @Autowired
    private EventsRepository eventsRepository;

    @GetMapping("")
    public List<Event> events(){

        return eventsRepository.findAll();
    }

    @PostMapping("/addevent")
    public String addProject(@RequestBody Event event){

        eventsRepository.save(event);

        return "Event added successfully";
    }

    @PutMapping("/update/{id}")
    public String updateEvent(@PathVariable int id,@RequestBody Event event){

        Optional<Event> eventData = eventsRepository.findById(id);

        if(eventData.isPresent()){

            Event _event = eventData.get();
            _event.setInstructor(event.getInstructor());
            _event.setSubject(event.getSubject());
            _event.setDate(event.getDate());
            _event.setDescription(event.getDescription());
            _event.setParticipantsNumber(event.getParticipantsNumber());
            _event.setZoomLink(event.getZoomLink());
        }

        return "Event updated successfully";
    }

    @DeleteMapping("/deletevent/{id}")
    public String deleteEvent(@PathVariable int id){

        eventsRepository.deleteById(id);

        return "Event deleted successfully";
    }
}
