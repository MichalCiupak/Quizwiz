package pl.edu.pw.quizwiz.cardset.repo;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Document
public class CardSetDoc {
    @Id
    private String id;
    private String ownerId;
    private String name;
    private String category;
    private Set<String> keywords;
    private LinkedHashSet<Flashcard> flashcards;
}
