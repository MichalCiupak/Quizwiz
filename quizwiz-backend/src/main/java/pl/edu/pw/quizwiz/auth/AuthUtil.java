package pl.edu.pw.quizwiz.auth;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.context.SecurityContextHolder;
import pl.edu.pw.quizwiz.user.repo.UserDetailsProjection;

import java.util.Objects;

public class AuthUtil {

    private AuthUtil() {
    }

    public static UserDetailsProjection getUserFromSecurityContext() {
        return (UserDetailsProjection) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

    public static void validateUserFromAuth(final String userId) throws AccessDeniedException {
        if (!Objects.equals(AuthUtil.getUserFromSecurityContext().getId(), userId)) {
            throw new AccessDeniedException("Access denied: forbidden");
        }
    }
}
