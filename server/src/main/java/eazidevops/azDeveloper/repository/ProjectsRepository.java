package eazidevops.azDeveloper.repository;

import eazidevops.azDeveloper.model.Project;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProjectsRepository extends MongoRepository<Project,Integer> {
}
