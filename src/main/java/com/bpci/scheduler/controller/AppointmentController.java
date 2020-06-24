package com.bpci.scheduler.controller;

import com.bpci.scheduler.model.Appointment;
import com.bpci.scheduler.repository.AppointmentsRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping({"/appointments"})
public class AppointmentController {

    private AppointmentsRepository repository;

    AppointmentController(AppointmentsRepository repos) {
        this.repository = repos;
    }

    @GetMapping
    public Page<Appointment> findAll(
            @RequestParam(name = "doctor", defaultValue = "", required = false) String name,
            @RequestParam(name = "date", defaultValue = "", required = false) String date,
            Pageable p
    ) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("CUSTOMER"))) {
            String username = auth.getName();
            return repository.findAllByDoctor_NameContainsAndCustomerEmail(name, username, p);
        } else {
            return repository.findAllByDoctor_NameContains(name, p);
        }
    }

    @GetMapping(path = {"/{id}"})
    public ResponseEntity<Appointment> findById(@PathVariable long id) {
        return repository.findById(id)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Appointment create(@RequestBody Appointment appointment) {
        return repository.save(appointment);
    }

    @PutMapping(path = {"/{id}"})
    public ResponseEntity<Appointment> update(@PathVariable("id") long id, @RequestBody Appointment appointment) {
        return repository.findById(id)
                .map(record -> {
                    record.setDoctor(appointment.getDoctor());
                    record.setStatus(appointment.getStatus());
                    record.setAppointmentDate(appointment.getAppointmentDate());
                    Appointment updated = repository.save(record);
                    return ResponseEntity.ok().body(updated);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path = {"/{id}"})
    public ResponseEntity<?> delete(@PathVariable("id") long id) {
        return repository.findById(id)
                .map(record -> {
                    repository.deleteById(id);
                    return ResponseEntity.ok().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
