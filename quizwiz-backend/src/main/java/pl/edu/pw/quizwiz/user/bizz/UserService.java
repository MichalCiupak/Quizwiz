package pl.edu.pw.quizwiz.user.bizz;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.edu.pw.quizwiz.exception.NotFoundException;
import pl.edu.pw.quizwiz.user.repo.UserDoc;
import pl.edu.pw.quizwiz.user.repo.UserRepository;
import pl.edu.pw.quizwiz.user.rest.UserView;

import java.util.LinkedHashSet;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public UserView getUser(final String id) {
        final UserDoc user = getUserDoc(id);
        return UserMapper.map(user);
    }

    private UserDoc getUserDoc(final String id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("User with id %s not found".formatted(id)));
    }

    public void updateUserSavedCards(final String userId, final LinkedHashSet<String> cardSetIds) {
        final UserDoc user = getUserDoc(userId);
        user.setSavedCardSets(cardSetIds);
        userRepository.save(user);
    }
}
