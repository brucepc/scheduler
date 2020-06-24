package com.bpci.scheduler.service;

import com.bpci.scheduler.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class SchedulerUserDetailsService implements UserDetailsService {
    @Autowired
    private SchedulerUserService userService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userService.getUserByEmail(username);
        GrantedAuthority authority = new SimpleGrantedAuthority(user.getRole());
        return new org.springframework
                .security.core.userdetails.User(user.getEmail(), user.getPassword(), Arrays.asList(authority));
    }
}
