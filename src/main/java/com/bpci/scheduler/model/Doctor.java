package com.bpci.scheduler.model;


import com.bpci.scheduler.views.SchedulerViews;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.codehaus.jackson.map.annotate.JsonView;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Doctor extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonView(SchedulerViews.Short.class)
    private Long id;
    @JsonView(SchedulerViews.Public.class)
    private String crm;
    @JsonView(SchedulerViews.Public.class)
    private String speciality;

    @OneToMany(
            mappedBy = "doctor",
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
        appointment.setDoctor(this);
    }

}
