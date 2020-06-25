package com.bpci.scheduler.repository;

import com.bpci.scheduler.model.Doctor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

public interface DoctorRepository extends PagingAndSortingRepository<Doctor, Long> {
    Page<Doctor> findByNameContaining(Pageable p, String name);

    Optional<Doctor> findByEmail(String name);
}
