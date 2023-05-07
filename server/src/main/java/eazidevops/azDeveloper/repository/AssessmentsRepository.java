package eazidevops.azDeveloper.repository;

import eazidevops.azDeveloper.model.Assessment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AssessmentsRepository extends MongoRepository<Assessment,Integer> {
}
