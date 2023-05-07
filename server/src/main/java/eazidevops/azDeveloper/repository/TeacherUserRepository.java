package eazidevops.azDeveloper.repository;

import eazidevops.azDeveloper.model.UserTeacher;
import org.springframework.data.mongodb.core.aggregation.ArrayOperators;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TeacherUserRepository extends MongoRepository<UserTeacher, Integer> {
}
