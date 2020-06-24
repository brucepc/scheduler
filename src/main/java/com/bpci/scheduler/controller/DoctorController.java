package com.bpci.scheduler.controller;

import com.bpci.scheduler.model.Doctor;
import com.bpci.scheduler.repository.DoctorRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping({"/doctors"})
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
    public Doctor create(@RequestBody Doctor doctor) {
        return repository.save(doctor);
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
