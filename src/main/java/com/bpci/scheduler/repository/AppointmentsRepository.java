package com.bpci.scheduler.repository;

import com.bpci.scheduler.model.Appointment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface AppointmentsRepository extends PagingAndSortingRepository<Appointment, Long> {
    Page<Appointment> findAllByDoctor_NameContainsAndCustomerEmail(String name, String email, Pageable p);

    Page<Appointment> findAllByDoctor_NameContains(String name, Pageable p);

    Page<Appointment> findAllByDoctor(Long id, Pageable pageable);

    Page<Appointment> findAllByCustomer(Long id, Pageable pageable);
}
