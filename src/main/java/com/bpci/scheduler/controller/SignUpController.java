package com.bpci.scheduler.controller;

import com.bpci.scheduler.exception.UserAlreadyExistsException;
import com.bpci.scheduler.model.Customer;
import com.bpci.scheduler.repository.CustomerRepository;
import com.bpci.scheduler.repository.DoctorRepository;
import com.bpci.scheduler.service.SchedulerUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping(path = "/api")
public class SignUpController {
    @Autowired
    private SchedulerUserService userService;
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private DoctorRepository doctorRepository;

    @PostMapping(path = "/signup")
    public ResponseEntity<Customer> signup(@RequestBody Customer user) {
        try {
            return ResponseEntity.ok().body(userService.addUser(user));
        } catch (UserAlreadyExistsException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Email " + user.getEmail() + " already registered.", e);
        }
    }

    @GetMapping(path = "/me")
    public ResponseEntity<?> userData() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        if (auth != null) {
            String username = auth.getName();
            if (auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_CUSTOMER"))) {
                return customerRepository.findByEmail(username).map(u -> ResponseEntity.ok().body(u))
                        .orElse(ResponseEntity.notFound().build());
            } else {
                return doctorRepository.findByEmail(username).map(u -> ResponseEntity.ok().body(u))
                        .orElse(ResponseEntity.notFound().build());
            }
        }
        return ResponseEntity.noContent().build();
    }
}
