package com.bpci.scheduler.repository;

import com.bpci.scheduler.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
@Transactional
public interface UserRepository extends CrudRepository<User, Long> {
    public Optional<User> findById(Long id);

    public User findByEmail(String email);

    Boolean existsByEmail(String email);

    public void deleteById(Long id);
}