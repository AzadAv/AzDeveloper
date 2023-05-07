package eazidevops.azDeveloper.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "photos")
public class UserPhoto {

    @Id
    private String id;

    private String title;

    private Binary image;

    public UserPhoto(String title){

        this.title=title;
    }
}