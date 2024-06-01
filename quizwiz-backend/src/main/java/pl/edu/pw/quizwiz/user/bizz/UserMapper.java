package pl.edu.pw.quizwiz.user.bizz;

import pl.edu.pw.quizwiz.user.repo.UserDoc;
import pl.edu.pw.quizwiz.user.rest.UserView;

public class UserMapper {
    private UserMapper() {
    }

    public static UserView map(final UserDoc userDoc) {
        final UserView userView = new UserView();
        userView.setId(userDoc.getId());
        userView.setEmail(userDoc.getEmail());
        userView.setUsername(userDoc.getUsername());
        userView.setSavedCardSets(userDoc.getSavedCardSets());
        return userView;
    }
}
