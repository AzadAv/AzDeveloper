package eazidevops.azDeveloper.repository;

import eazidevops.azDeveloper.model.ExploreContent;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ExploreContentRepository extends MongoRepository<ExploreContent,Integer> {
}
