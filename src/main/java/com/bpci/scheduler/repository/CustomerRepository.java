package com.bpci.scheduler.repository;

import com.bpci.scheduler.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

public interface CustomerRepository extends PagingAndSortingRepository<Customer, Long> {
    Page<Customer> findByNameContaining(String name, Pageable p);

    Optional<Customer> findByEmail(String email);
}