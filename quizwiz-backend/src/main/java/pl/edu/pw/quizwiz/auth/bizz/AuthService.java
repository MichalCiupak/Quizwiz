package pl.edu.pw.quizwiz.auth.bizz;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import pl.edu.pw.quizwiz.auth.rest.UserRegisterRequest;
import pl.edu.pw.quizwiz.user.repo.UserDoc;
import pl.edu.pw.quizwiz.user.repo.UserRepository;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public void register(UserRegisterRequest request) throws IllegalArgumentException {
        if (userRepository.findDetailsByUsername(request.getUsername()).isPresent()) {
            throw new IllegalArgumentException("User with username already exists");
        } else {
            final UserDoc user = new UserDoc();
            user.setEmail(request.getEmail());
            user.setPassword(bCryptPasswordEncoder.encode(request.getPassword()));
            user.setUsername(request.getUsername());
            userRepository.save(user);
        }
    }
}
