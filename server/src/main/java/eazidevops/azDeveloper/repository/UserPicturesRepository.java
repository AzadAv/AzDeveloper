package eazidevops.azDeveloper.repository;

import eazidevops.azDeveloper.model.UserPicture;
import org.springframework.data.mongodb.core.aggregation.ArrayOperators;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserPicturesRepository extends MongoRepository<UserPicture, Integer> {
}
