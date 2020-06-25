package com.bpci.scheduler.controller;

import com.bpci.scheduler.model.Doctor;
import com.bpci.scheduler.repository.DoctorRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@RestController
@RequestMapping({"/api/doctors"})
public class DoctorController {


    private DoctorRepository repository;

    DoctorController(DoctorRepository r) {
        this.repository = r;
    }

    @GetMapping
    public Page<Doctor> findAll(
            @RequestParam(name = "name", defaultValue = "", required = false) String name,
            Pageable page) {
        return repository.findByNameContaining(page, name);
    }

    @GetMapping(path = {"/{id}"})
    public ResponseEntity<Doctor> findById(@PathVariable long id) {
        return repository.findById(id)
                .map(r -> ResponseEntity.ok().body(r))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Doctor> create(@RequestBody Doctor doctor) {
        Optional<Doctor> found = repository.findByEmail(doctor.getEmail());
        if (found.isPresent()) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    String.format("O %s já foi esta em uso!", doctor.getEmail())
            );
        }
        Doctor newDoctor = repository.save(doctor);
        return ResponseEntity.ok().body(newDoctor);
    }

    @PutMapping(value = {"/{id}"})
    public ResponseEntity<Doctor> update(@PathVariable("id") long id, @RequestBody Doctor doctor) {
        return repository.findById(id)
                .map(r -> {
                    r.setEmail(doctor.getEmail());
                    r.setName(doctor.getName());
                    r.setCrm(doctor.getCrm());
                    r.setSpeciality(doctor.getSpeciality());
                    Doctor updated = repository.save(r);
                    return ResponseEntity.ok().body(updated);
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path = {"/{id}"})
    public ResponseEntity<?> delete(@PathVariable("id") long id) {
        return repository.findById(id)
                .map(r -> {
                    repository.deleteById(id);
                    return ResponseEntity.ok().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

}
