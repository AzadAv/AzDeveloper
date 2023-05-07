package eazidevops.azDeveloper.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Question {

    @Id
    private int id;
    private String question;
    private String[] answers;
    private String rightAnswer;
}
