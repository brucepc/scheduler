package com.bpci.scheduler.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id"
)
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "America/Manaus")
    private LocalDateTime appointmentDate;

    @ManyToOne
    @JoinColumn(name = "doctor_id", referencedColumnName = "id")
    @EqualsAndHashCode.Exclude
    private Doctor doctor;

    private AppointmentStatus status;

    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "id")
    @EqualsAndHashCode.Exclude
    private Customer customer;

}
