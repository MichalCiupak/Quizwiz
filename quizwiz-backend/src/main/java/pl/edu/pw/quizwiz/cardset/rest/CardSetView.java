package pl.edu.pw.quizwiz.cardset.rest;

import lombok.Data;
import pl.edu.pw.quizwiz.cardset.repo.Flashcard;

import java.util.Set;

@Data
public class CardSetView {
    private String id;
    private String name;
    private String category;
    private Set<String> keywords;
    private Set<Flashcard> flashcards;
}
