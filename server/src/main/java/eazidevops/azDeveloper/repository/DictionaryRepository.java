package eazidevops.azDeveloper.repository;

import eazidevops.azDeveloper.model.DictionaryContent;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DictionaryRepository extends MongoRepository <DictionaryContent,Integer> {
}
