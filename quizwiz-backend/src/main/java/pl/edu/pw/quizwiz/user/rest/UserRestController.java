package pl.edu.pw.quizwiz.user.rest;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pw.quizwiz.auth.AuthUtil;
import pl.edu.pw.quizwiz.constants.ApiConstants;
import pl.edu.pw.quizwiz.user.bizz.UserService;
import pl.edu.pw.quizwiz.user.repo.UserDetailsProjection;

@RestController
@RequestMapping(ApiConstants.API_V1 + "/user")
@RequiredArgsConstructor
@Tag(name = "User")
public class UserRestController {
    private final UserService userService;

    @GetMapping
    public UserView getCurrentUser() {
        final UserDetailsProjection user = AuthUtil.getUserFromSecurityContext();
        return userService.getUser(user.getId());
    }

    @GetMapping("/{id}")
    public UserView getUser(final @PathVariable String id) {
        return userService.getUser(id);
    }

}
