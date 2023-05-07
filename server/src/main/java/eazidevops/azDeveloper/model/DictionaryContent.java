package eazidevops.azDeveloper.model;

import eazidevops.azDeveloper.controller.DictionaryWord;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "dictionary")
public class DictionaryContent {

    @Id
    private String id;
    private DictionaryWord[] words;
}
