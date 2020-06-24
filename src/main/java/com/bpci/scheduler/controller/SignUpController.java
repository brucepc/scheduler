package com.bpci.scheduler.controller;

import com.bpci.scheduler.exception.UserAlreadyExistsException;
import com.bpci.scheduler.model.Customer;
import com.bpci.scheduler.service.SchedulerUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping(path = "/signup")
public class SignUpController {
    @Autowired
    private SchedulerUserService userService;

    @PostMapping
    public ResponseEntity<Customer> signup(@RequestBody Customer user) {
        try {
            return ResponseEntity.ok().body(userService.addUser(user));
        } catch (UserAlreadyExistsException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Email " + user.getEmail() + " already registered.", e);
        }
    }

}
