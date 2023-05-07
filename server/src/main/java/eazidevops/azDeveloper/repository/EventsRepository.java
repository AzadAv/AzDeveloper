package eazidevops.azDeveloper.repository;

import eazidevops.azDeveloper.model.Event;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EventsRepository extends MongoRepository<Event,Integer> {
}
