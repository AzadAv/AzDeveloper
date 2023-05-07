package eazidevops.azDeveloper.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "events")
public class Event {

    @Id
    private int id;
    private String instructor;
    private String subject;
    private String date;
    private String description;
    private int participantsNumber;
    private String zoomLink;

}
