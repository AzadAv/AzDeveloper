package eazidevops.azDeveloper.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "explore")
public class ExploreContent {

    @Id
    private int id;
    private String name;
    private String enDesc;
    private String azDesc;
    private String[] enWhatFor;
    private String[] azWhatFor;
    private String[] frameworks;
    private String[] enStatistics;
    private String[] azStatistics;
    private String[] links;

}
