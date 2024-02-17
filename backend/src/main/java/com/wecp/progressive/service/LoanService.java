package com.wecp.progressive.service;


import com.wecp.progressive.entity.Loan;
import com.wecp.progressive.repository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoanService {
<<<<<<< HEAD
    private final LoanRepository loanRepository;

    @Autowired
    public LoanService(LoanRepository loanRepository) {
        this.loanRepository = loanRepository;
    }
=======
    @Autowired
    private LoanRepository loanRepository;

    
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e

    public List<Loan> getAllLoans() {
        return loanRepository.findAll();
    }

    public Loan getLoanById(Long id) {
<<<<<<< HEAD
        return loanRepository.findById(id).orElse(null);
=======
        return loanRepository.findById(id).get();
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e
    }

    public Loan createLoan(Loan loan) {
        return loanRepository.save(loan);
    }

    public void updateLoan(Loan loan) {
        loanRepository.save(loan);
    }

    public void deleteLoan(Long id) {
        loanRepository.deleteById(id);
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e
