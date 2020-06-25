package com.bpci.scheduler.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Customer extends User {
    private String healthInsurance;

    @OneToMany(
            mappedBy = "customer",
            cascade = CascadeType.PERSIST,
            fetch = FetchType.LAZY
    )

    @Column(nullable = true)
    @EqualsAndHashCode.Exclude
    @JsonIgnore
    private List<Appointment> appointments = new ArrayList<>();

    @JsonIgnore
    public void addAppointment(Appointment appointment) {
        appointments.add(appointment);
        appointment.setCustomer(this);
    }
}
