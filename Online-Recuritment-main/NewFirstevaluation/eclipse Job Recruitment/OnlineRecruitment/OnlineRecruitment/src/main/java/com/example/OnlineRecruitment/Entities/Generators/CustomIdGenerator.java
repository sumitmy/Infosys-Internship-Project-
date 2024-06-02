package com.example.OnlineRecruitment.Entities.Generators;

import java.io.Serializable;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SessionImplementor;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.OnlineRecruitment.Entities.Role;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import jakarta.transaction.Transactional;

@Component
public class CustomIdGenerator implements IdentifierGenerator {

	@PersistenceContext
	@Autowired
    private EntityManager entityManager;
	
	
	@Transactional
	@Override
	public Serializable generate(SharedSessionContractImplementor session, Object object) {
		String prefix = "";
        if (object instanceof Role) {
            Role role = (Role) object;
            if ("Graduate".equals(role.getRoleTitle())) {
                prefix = "Graduate";
            } else if ("Employer".equals(role.getRoleTitle())) {
                prefix = "EMP";
            } else {
                throw new IllegalArgumentException("Object is not of type Role or invalid role title");
            }
        
       Query q = entityManager.createQuery("SELECT COUNT(r.id) FROM Role r WHERE r.id LIKE :prefix",Role.class);
           q.setParameter("prefix", prefix + "%");
       
       Long count = (Long) q.getSingleResult();
       
        Long nextNumber = (count == 0) ? 1l : (count + 1);
        
        return prefix + String.format("%04d", nextNumber);
        }
        throw new IllegalArgumentException("Object is not of type Role");
	}
}