package eazidevops.azDeveloper.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigInteger;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "projects")
public class Project {

    @Id
    private int id;
    private String name;
    private String username;
    private String[] languages;
    private int likes;
    private String description;

    private String databaseType;
    private String style;

    private String link;
}
