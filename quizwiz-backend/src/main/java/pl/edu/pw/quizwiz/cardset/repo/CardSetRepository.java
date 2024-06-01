package pl.edu.pw.quizwiz.cardset.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Collection;
import java.util.List;

public interface CardSetRepository extends MongoRepository<CardSetDoc, String> {
    List<CardSetDoc> findAllByIdIn(Collection<String> ids);

    List<CardSetDoc> findAllByOwnerId(String ownerId);
}
