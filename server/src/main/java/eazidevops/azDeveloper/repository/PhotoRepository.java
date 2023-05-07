package eazidevops.azDeveloper.repository;

import eazidevops.azDeveloper.model.UserPhoto;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PhotoRepository extends MongoRepository<UserPhoto, String> { }