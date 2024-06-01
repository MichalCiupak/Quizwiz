package pl.edu.pw.quizwiz.cardset.bizz;

import pl.edu.pw.quizwiz.cardset.repo.CardSetDoc;
import pl.edu.pw.quizwiz.cardset.repo.Flashcard;
import pl.edu.pw.quizwiz.cardset.rest.CardSetView;

import java.util.Collections;
import java.util.LinkedHashSet;

public class CardSetMapper {
    private CardSetMapper() {
    }

    public static CardSetView map(final CardSetDoc cardSetDoc) {
        final CardSetView cardSetView = new CardSetView();
        cardSetView.setId(cardSetDoc.getId());
        cardSetView.setName(cardSetDoc.getName());
        cardSetView.setCategory(cardSetDoc.getCategory());
        cardSetView.setKeywords(Collections.unmodifiableSet(cardSetDoc.getKeywords()));
        cardSetView.setFlashcards((LinkedHashSet<Flashcard>) Collections.unmodifiableSet(cardSetDoc.getFlashcards()));
        return cardSetView;
    }
}
