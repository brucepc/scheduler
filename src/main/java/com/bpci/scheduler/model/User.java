package com.bpci.scheduler.model;

import com.bpci.scheduler.views.SchedulerViews;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.codehaus.jackson.map.annotate.JsonView;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonView(SchedulerViews.Short.class)
    private Long id;
    @JsonView(SchedulerViews.Short.class)
    private String name;
    @JsonView(SchedulerViews.Public.class)
    private String email;
    @JsonView(SchedulerViews.Internal.class)
    private String password;
    @JsonView(SchedulerViews.Internal.class)
    private String role;
}
