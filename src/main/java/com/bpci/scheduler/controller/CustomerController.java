package com.bpci.scheduler.controller;

import com.bpci.scheduler.model.Customer;
import com.bpci.scheduler.repository.CustomerRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = {"/customers"}, produces = "application/json")
public class CustomerController {
    private CustomerRepository repository;

    CustomerController(CustomerRepository r) {
        this.repository = r;
    }

    @GetMapping
    public Page<Customer> findAll(
            @RequestParam(name = "name", defaultValue = "", required = false) String name,
            Pageable page
    ) {
        return repository.findByNameContaining(name, page);
    }

    @PostMapping
    public Customer create(@RequestBody Customer customer) {
        return repository.save(customer);
    }

    @PutMapping(path = {"/{id}"})
    public ResponseEntity<Customer> update(@PathVariable("id") long id,
                                           @RequestBody Customer customer) {
        return repository.findById(id)
                .map(r -> {
                    r.setEmail(customer.getEmail());
                    r.setName(customer.getName());
                    Customer updated = repository.save(r);
                    return ResponseEntity.ok().body(updated);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") long id) {
        return repository.findById(id)
                .map(r -> {
                    repository.deleteById(id);
                    return ResponseEntity.ok().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
