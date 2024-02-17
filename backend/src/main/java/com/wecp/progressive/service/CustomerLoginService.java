package com.wecp.progressive.service;

import com.wecp.progressive.entity.Customers;
import com.wecp.progressive.exception.CustomerAlreadyExistsException;
import com.wecp.progressive.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerLoginService implements UserDetailsService {

    private final CustomerRepository customerRepository;

    private final PasswordEncoder passwordEncoder;

    @Autowired
    public CustomerLoginService(CustomerRepository customerRepository, PasswordEncoder passwordEncoder) {
        this.customerRepository = customerRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<Customers> getAllUsers() {
        return customerRepository.findAll();
    }

    public Optional<Customers> getUserById(Integer userId) {
        return customerRepository.findById(userId);
    }
    public Customers getUserByName(String useString)
    {
        Customers oldUser = customerRepository.findByUsername(useString);
        return oldUser;
    }
    public Customers createUser(Customers user) {
        Customers oldUser = customerRepository.findByUsername(user.getUsername());
        if(oldUser != null)
        {
            throw new CustomerAlreadyExistsException("User name Is Unavailable: " + user.getUsername());

        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return customerRepository.save(user);
    }

    public Customers updateUser(Customers user) {
<<<<<<< HEAD
        user.setPassword(passwordEncoder.encode(user.getPassword()));

=======
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e
        return customerRepository.save(user);
    }

    public void deleteUser(Integer id) {
<<<<<<< HEAD
        
=======
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e
        customerRepository.deleteById(id);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Customers user = customerRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
<<<<<<< HEAD
        // ArrayList<String> role = new ArrayList<>();
        // role.add(user.getRole());
=======

>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e
        return new org.springframework.security.core.userdetails.User(
                user.getUsername(),
                user.getPassword(),
                new ArrayList<>()
        );
    }
}