package pl.edu.pw.quizwiz.cardset.bizz;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;
import pl.edu.pw.quizwiz.cardset.repo.CardSetDoc;
import pl.edu.pw.quizwiz.cardset.repo.CardSetRepository;
import pl.edu.pw.quizwiz.cardset.rest.CardSetRequest;
import pl.edu.pw.quizwiz.cardset.rest.CardSetSavedRequest;
import pl.edu.pw.quizwiz.cardset.rest.CardSetView;
import pl.edu.pw.quizwiz.exception.NotFoundException;
import pl.edu.pw.quizwiz.user.bizz.UserService;
import pl.edu.pw.quizwiz.user.rest.UserView;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CardSetService {
    private final CardSetRepository cardSetRepository;
    private final UserService userService;

    public CardSetView getCardSet(final String id) {
        return CardSetMapper.map(getCardSetDoc(id));
    }

    private CardSetDoc getCardSetDoc(final String id) {
        return cardSetRepository.findById(id).orElseThrow(
                () -> new NotFoundException("Card set with id %s not found".formatted(id))
        );
    }

    public CardSetView addCardSet(final String userId, final CardSetRequest request) {
        final CardSetDoc cardSet = new CardSetDoc();
        cardSet.setOwnerId(userId);
        return CardSetMapper.map(upsert(cardSet, request));
    }

    public CardSetView updateCardSet(final String userId, final String cardSetId, final CardSetRequest request) {
        final CardSetDoc cardSet = getCardSetDoc(cardSetId);
        if (!Objects.equals(userId, cardSet.getOwnerId())) {
            throw new AccessDeniedException("Access denied: forbidden");
        }
        return CardSetMapper.map(upsert(cardSet, request));

    }

    public void deleteCardSet(final String userId, final String cardSetId) {
        final CardSetDoc cardSet = getCardSetDoc(cardSetId);
        if (!Objects.equals(userId, cardSet.getOwnerId())) {
            throw new AccessDeniedException("Access denied: forbidden");
        }
        cardSetRepository.delete(cardSet);
    }

    private CardSetDoc upsert(final CardSetDoc cardSet, final CardSetRequest request) {
        cardSet.setName(request.getName());
        cardSet.setCategory(request.getCategory());
        cardSet.setKeywords(request.getKeywords());
        cardSet.setFlashcards(request.getFlashcards());
        return cardSetRepository.save(cardSet);
    }

    public List<CardSetView> getCardSetsOwnedBy(final String ownerId) {
        final UserView user = userService.getUser(ownerId);
        final List<CardSetDoc> cardSets = cardSetRepository.findAllByOwnerId(user.getId());
        return cardSets.stream()
                .map(CardSetMapper::map)
                .toList();
    }

    public List<CardSetView> getCardSetsSavedBy(final String userId) {
        final UserView user = userService.getUser(userId);
        final List<CardSetDoc> cardSets = cardSetRepository.findAllByIdIn(user.getSavedCardSets());
        return cardSets.stream()
                .map(CardSetMapper::map)
                .toList();
    }

    public List<CardSetView> updateSavedCardSet(String userId, CardSetSavedRequest request) {
        final Map<String, CardSetDoc> cardSetMap = cardSetRepository.findAllByIdIn(request.getIds()).stream()
                .collect(Collectors.toMap(CardSetDoc::getId, it -> it));
        final List<CardSetView> cardSets = request.getIds().stream()
                .filter(Objects::nonNull)
                .map(it ->
                        Optional.ofNullable(cardSetMap.get(it))
                                .map(CardSetMapper::map)
                                .orElseThrow(() -> new NotFoundException("Card set with id %s not found".formatted(it)))
                )
                .toList();
        userService.updateUserSavedCards(userId, request.getIds());
        return cardSets;
    }
}
