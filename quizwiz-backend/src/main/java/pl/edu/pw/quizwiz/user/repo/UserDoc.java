package pl.edu.pw.quizwiz.user.repo;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.LinkedHashSet;

@Getter
@Setter
@Document
public class UserDoc {
    @Id
    private String id;
    private String username;
    private String email;
    private String password;
    private LinkedHashSet<String> savedCardSets;
}
