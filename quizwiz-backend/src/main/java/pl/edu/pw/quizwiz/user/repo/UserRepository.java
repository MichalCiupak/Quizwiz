package pl.edu.pw.quizwiz.user.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<UserDoc, String> {
    Optional<UserDetailsProjection> findDetailsByUsername(String username);
}
