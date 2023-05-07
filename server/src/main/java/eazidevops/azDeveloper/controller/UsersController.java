package eazidevops.azDeveloper.controller;

import eazidevops.azDeveloper.model.Project;
import eazidevops.azDeveloper.model.User;
import eazidevops.azDeveloper.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    private UserRepository usersRepository;


    @GetMapping("")
    public List<User> users(){

        return usersRepository.findAll();
    }

    @PostMapping("/adduser")
    public String addUser(@RequestBody User user){

        usersRepository.save(user);

        return "User added successfully";
    }
    @PutMapping("/update/{id}")
    public String updateUser(@PathVariable int id,@RequestBody User user ){

        Optional<User> userData = usersRepository.findById(id);

        if(userData.isPresent()){

            User _user = userData.get();
            _user.setName(user.getName());
            _user.setRole(user.getRole());
            _user.setProjects(user.getProjects());
            _user.setCoursesCompletionRates(user.getCoursesCompletionRates());
            _user.setAssessments(user.getAssessments());
            _user.setPhoto(user.getPhoto());
            _user.setMessages(user.getMessages());
            usersRepository.save(_user);
            return "Updated successfully";
        }
        else{

            return "Error";
        }
    }


    @DeleteMapping("/deleteuser/{id}")
    public String deleteUser(@PathVariable int id){

        usersRepository.deleteById(id);

        return "User deleted Successfully";
    }

    @GetMapping("/error")
    public String error(){

        return "Error in AzDeveloper";
    }
}
