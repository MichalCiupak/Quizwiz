package pl.edu.pw.quizwiz.auth.rest;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.edu.pw.quizwiz.auth.bizz.AuthService;
import pl.edu.pw.quizwiz.constants.ApiConstants;

import java.util.Map;

@RestController
@RequestMapping(ApiConstants.API_V1 + "/auth")
@RequiredArgsConstructor
@Tag(name = "Auth")
public class AuthController {
    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> register(@Valid @RequestBody UserRegisterRequest userRegisterRequest) {
        try {
            authService.register(userRegisterRequest);
            return ResponseEntity.status(HttpStatus.OK).body(Map.of("status", "Registration successful"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("status", "error", "message", e.getMessage()));
        }
    }

    @GetMapping("/login")
    public Map<String, String> login() {
        return Map.of("status", "Login successful");
    }
}
