package eazidevops.azDeveloper.controller;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DictionaryWord {

    @Id
    private int id;
    private String word;
    private String enDescription;
    private String azDescription;

}
