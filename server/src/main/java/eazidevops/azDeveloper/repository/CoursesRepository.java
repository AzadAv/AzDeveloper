package eazidevops.azDeveloper.repository;

import eazidevops.azDeveloper.model.Content;
import eazidevops.azDeveloper.model.Course;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface CoursesRepository extends MongoRepository<Course,Integer> {
}
