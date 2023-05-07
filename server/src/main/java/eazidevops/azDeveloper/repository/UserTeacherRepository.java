package eazidevops.azDeveloper.repository;

import eazidevops.azDeveloper.model.UserTeacher;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserTeacherRepository extends MongoRepository<UserTeacher,Integer> {
}
