package eazidevops.azDeveloper.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "users")
public class User {

    @Id
    private int id;
    private String name;
    private Role role;
    private Project[] projects;
    private int[] CoursesCompletionRates;
    private Assessment[]   Assessments;
    private UserPhoto photo;
    private String[] Messages;

}
