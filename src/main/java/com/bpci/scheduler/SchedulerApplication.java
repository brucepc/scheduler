package com.bpci.scheduler;

import com.bpci.scheduler.model.Appointment;
import com.bpci.scheduler.model.AppointmentStatus;
import com.bpci.scheduler.model.Customer;
import com.bpci.scheduler.model.Doctor;
import com.bpci.scheduler.repository.AppointmentsRepository;
import com.bpci.scheduler.repository.CustomerRepository;
import com.bpci.scheduler.repository.DoctorRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.time.LocalDateTime;
import java.time.Month;
import java.util.Collections;
import java.util.stream.LongStream;

@SpringBootApplication
public class SchedulerApplication {

    public static void main(String[] args) {
        SpringApplication.run(SchedulerApplication.class, args);
    }

    @Bean
    public FilterRegistrationBean<CorsFilter> simpleCorsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.setAllowedOrigins(Collections.singletonList("http://localhost:4200"));
        config.setAllowedMethods(Collections.singletonList("*"));
        config.setAllowedHeaders(Collections.singletonList("*"));
        source.registerCorsConfiguration("/**", config);
        FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(new CorsFilter(source));
        bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
        return bean;
    }

//    @Bean
//    CommandLineRunner init(
//            AppointmentsRepository repository,
//            DoctorRepository doctorRepository,
//            CustomerRepository customerRepository
//    ) {
//        return args -> {
//            repository.deleteAll();
//            doctorRepository.deleteAll();
//            customerRepository.deleteAll();
//            BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
//            LongStream.range(1, 11)
//                    .mapToObj(i -> {
//                        Appointment s = new Appointment();
//                        s.setStatus(AppointmentStatus.BEING_CREATED);
//                        Doctor doctor = new Doctor();
//                        doctor.setCrm("AM-0" + i);
//                        doctor.setName("Doctor " + i);
//                        doctor.setEmail("doctor" + i + "@scheduler.com");
//                        doctor.setPassword(bcrypt.encode("doctor" + i));
//                        doctor.setRole("ROLE_DOCTOR");
//                        s.setDoctor(doctor);
//                        Customer customer = new Customer();
//                        customer.setName("Customer " + i);
//                        customer.setHealthInsurance("Insurance " + i);
//                        customer.setEmail("customer" + i + "@scheduler.com");
//                        customer.setPassword(bcrypt.encode("customer" + i));
//                        customer.setRole("ROLE_CUSTOMER");
//                        s.setCustomer(customer);
//                        s.setAppointmentDate(LocalDateTime.of(2020, Month.JULY, 15, (int) i, 0));
//                        return s;
//                    })
//                    .map(v -> {
//                        customerRepository.save(v.getCustomer());
//                        doctorRepository.save(v.getDoctor());
//                        return repository.save(v);
//                    })
//                    .forEach(System.out::println);
//        };
//    }
//
}
