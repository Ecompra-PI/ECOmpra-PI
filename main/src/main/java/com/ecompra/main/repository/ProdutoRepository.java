package com.ecompra.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecompra.main.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long>{
	
}
