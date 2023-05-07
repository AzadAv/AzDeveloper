package eazidevops.azDeveloper.controller;

import eazidevops.azDeveloper.model.UserPhoto;
import eazidevops.azDeveloper.repository.PhotoRepository;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/photos")
public class PhotoController {

    @Autowired
    private PhotoRepository photoRepo;

    @PostMapping("/photos/add")
    public String addPhoto(String title, MultipartFile file)
            throws IOException {
        UserPhoto photo = new UserPhoto(title);
        return "redirect:/photos/" + photo.getId();
    }


    public UserPhoto getPhoto(String id) {
        return photoRepo.findById(id).get();
    }
}