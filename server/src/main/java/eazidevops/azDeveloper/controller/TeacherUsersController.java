package eazidevops.azDeveloper.controller;

import eazidevops.azDeveloper.model.UserTeacher;
import eazidevops.azDeveloper.repository.UserTeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/teacher-users")
public class TeacherUsersController {

    @Autowired
    private UserTeacherRepository userTeacherRepository;


    @GetMapping("")
    public List<UserTeacher> teacherUsers(){

        return userTeacherRepository.findAll();
    }

    @PostMapping("/add-user-teacher")
    public String addUserTeacher(@RequestBody UserTeacher teacherUser){

        userTeacherRepository.save(teacherUser);

        return "User Teacher added successfully";
    }
    @PutMapping("/update/{id}")
    public String updateUserTeacher(@PathVariable int id,@RequestBody UserTeacher userTeacher ){

        Optional<UserTeacher> userData = userTeacherRepository.findById(id);

        if(userData.isPresent()){

            UserTeacher _user = userData.get();
            _user.setName(userTeacher.getName());
            _user.setRole(userTeacher.getRole());
            _user.setProjects(userTeacher.getProjects());
            _user.setCoursesCompletionRates(userTeacher.getCoursesCompletionRates());
            _user.setAssessments(userTeacher.getAssessments());
            _user.setPhoto(userTeacher.getPhoto());
            _user.setEvents(userTeacher.getEvents());
            _user.setMessages(userTeacher.getMessages());
            userTeacherRepository.save(_user);
            return "Updated successfully";
        }
        else{

            return "Error";
        }
    }

    @DeleteMapping("/deleteTeacherUser/{id}")
    public String deleteTeacherUser(@PathVariable int id){

        userTeacherRepository.deleteById(id);

        return "Teacher User deleted Successfully";
    }

    @GetMapping("/error")
    public String error(){

        return "Error in AzDeveloper";
    }
}
