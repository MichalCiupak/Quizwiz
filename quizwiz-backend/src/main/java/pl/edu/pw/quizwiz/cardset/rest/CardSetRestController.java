package pl.edu.pw.quizwiz.cardset.rest;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pl.edu.pw.quizwiz.auth.AuthUtil;
import pl.edu.pw.quizwiz.cardset.bizz.CardSetService;
import pl.edu.pw.quizwiz.constants.ApiConstants;
import pl.edu.pw.quizwiz.user.repo.UserDetailsProjection;

import java.util.List;

@RestController
@RequestMapping(ApiConstants.API_V1 + "/cardset")
@RequiredArgsConstructor
@Tag(name = "CardSet")
public class CardSetRestController {
    private final CardSetService cardSetService;

    @GetMapping("/{id}")
    public CardSetView getCardSetById(final @PathVariable String id) {
        return cardSetService.getCardSet(id);
    }

    @PostMapping
    public CardSetView addCardSet(final @RequestBody CardSetRequest request) {
        final UserDetailsProjection user = AuthUtil.getUserFromSecurityContext();
        return cardSetService.addCardSet(user.getId(), request);
    }

    @PutMapping("/{id}")
    public CardSetView updateCardSet(final @PathVariable String id, final @RequestBody CardSetRequest request) {
        final UserDetailsProjection user = AuthUtil.getUserFromSecurityContext();
        return cardSetService.updateCardSet(user.getId(), id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteCardSet(final @PathVariable String id) {
        final UserDetailsProjection user = AuthUtil.getUserFromSecurityContext();
        cardSetService.deleteCardSet(user.getId(), id);
    }

    @GetMapping("/user/{userId}/owned")
    public List<CardSetView> getOwnedCardSets(final @PathVariable String userId) {
        AuthUtil.validateUserFromAuth(userId);
        return cardSetService.getCardSetsOwnedBy(userId);
    }

    @GetMapping("/user/{userId}/saved")
    public List<CardSetView> getSavedCardSets(final @PathVariable String userId) {
        AuthUtil.validateUserFromAuth(userId);
        return cardSetService.getCardSetsSavedBy(userId);
    }

    @PostMapping("/user/{userId}/saved")
    public List<CardSetView> updateSavedCardSets(
            final @PathVariable String userId,
            final @RequestBody CardSetSavedRequest request
    ) {
        AuthUtil.validateUserFromAuth(userId);
        return cardSetService.updateSavedCardSet(userId, request);
    }

}
