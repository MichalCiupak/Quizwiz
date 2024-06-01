package pl.edu.pw.quizwiz.auth.rest;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UserRegisterRequest {
    @NotBlank
    private String username;
    @NotBlank
    private String email;
    @NotNull
    @Size(min = 6, max = 20)
    private String password;
}
