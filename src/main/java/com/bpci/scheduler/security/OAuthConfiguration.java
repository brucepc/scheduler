package com.bpci.scheduler.security;

import com.bpci.scheduler.service.SchedulerUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;

@Configuration
@EnableAuthorizationServer
public class OAuthConfiguration extends AuthorizationServerConfigurerAdapter {

    @Autowired
    @Qualifier("authenticationManagerBean")
    private AuthenticationManager authenticationManager;

    @Autowired
    SchedulerUserDetailsService userDetailsService;

    @Override
    public void configure(final AuthorizationServerSecurityConfigurer oauthServer) throws Exception {
        oauthServer.tokenKeyAccess("permitAll()").checkTokenAccess("isAuthenticated()");
    }

    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
        clients.inMemory()
                .withClient("scheduler-my-awesome-id").secret(bcrypt.encode("scheduler-my-super-secret-key"))
                .authorizedGrantTypes("password", "refresh_token")
                .scopes("read", "write")
                .authorities("ROLE_CLIENT", "ROLE_TRUSTED_CLIENT", "CUSTOMER", "DOCTOR")
                .autoApprove(true);
    }

    @Override
    public void configure(final AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        endpoints.authenticationManager(authenticationManager)
                .tokenStore(tokenStore())
                .accessTokenConverter(defaultAccessTokenConverter())
                .userDetailsService(userDetailsService);
    }

    @Bean
    public JwtTokenStore tokenStore() {
        return new JwtTokenStore(defaultAccessTokenConverter());
    }

    @Bean
    JwtAccessTokenConverter defaultAccessTokenConverter() {
        JwtAccessTokenConverter converter = new JwtAccessTokenConverter();
        converter.setSigningKey("123");
        return converter;
    }

}
