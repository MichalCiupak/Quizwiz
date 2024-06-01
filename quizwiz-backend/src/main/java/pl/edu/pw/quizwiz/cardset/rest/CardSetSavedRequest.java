package pl.edu.pw.quizwiz.cardset.rest;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.LinkedHashSet;

@Data
public class CardSetSavedRequest {
    @NotNull
    private LinkedHashSet<String> ids;
}
