package eazidevops.azDeveloper.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Content {

    private int id;
    private String header;
    private String description;
    private String answer;
}
