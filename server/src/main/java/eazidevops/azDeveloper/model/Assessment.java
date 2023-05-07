package eazidevops.azDeveloper.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//[{id: 0, question 1}, question 2, question 3,question 4]
//[{answer 1,answer 2,answer 3,},{answer 1, answer 2,answer 3}]
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "assessments")
public class Assessment {

    @Id
    private int id;
    private String name;
    private Question[] questions;
    private boolean finished;
    private double grade;

}
