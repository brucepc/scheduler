package com.bpci.scheduler.service;

import com.bpci.scheduler.exception.UserAlreadyExistsException;
import com.bpci.scheduler.model.Customer;
import com.bpci.scheduler.model.Doctor;
import com.bpci.scheduler.model.User;
import com.bpci.scheduler.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class SchedulerUserService {

    @Autowired
    private UserRepository userRepository;

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).get();
    }

    public Customer addUser(Customer user) throws UserAlreadyExistsException {
        User found = userRepository.findByEmail(user.getEmail());
        if (found != null) {
            throw new UserAlreadyExistsException();
        }
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        user.setRole("CUSTOMER");
        return userRepository.save(user);
    }

    public Doctor addUser(Doctor user) {
        User found = userRepository.findByEmail(user.getEmail());
        if (found != null) {
            throw new RuntimeException("User already exist.");
        }
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        return userRepository.save(user);
    }

    public User updateUser(Long id, User user) {
        User updated = userRepository.findById(id).get();
        updated.setName(user.getName());
        updated.setEmail(user.getEmail());
        updated.setRole(user.getRole());
        updated.setPassword(user.getPassword());
        return userRepository.save(updated);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public User updatePassword(Long id, User user) throws Exception {
        User updated = userRepository.findById(id).get();
        updated.setPassword(user.getPassword());
        return userRepository.save(updated);
    }

    public User updateRole(Long id, User user) {
        User updated = userRepository.findById(user.getId()).get();
        updated.setRole(user.getRole());
        return userRepository.save(updated);
    }

}
