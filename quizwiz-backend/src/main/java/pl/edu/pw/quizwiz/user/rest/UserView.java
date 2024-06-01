package pl.edu.pw.quizwiz.user.rest;

import lombok.Data;

import java.util.LinkedHashSet;

@Data
public class UserView {
    private String id;
    private String username;
    private String email;
    private LinkedHashSet<String> savedCardSets;
}
