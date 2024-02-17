package com.wecp.progressive.repository;

import com.wecp.progressive.entity.Transactions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transactions, Integer> {

    List<Transactions> findByAccountsAccountId(int accountId);
<<<<<<< HEAD
}
=======
}
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e
