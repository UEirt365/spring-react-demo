package ueirt.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ueirt.entities.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {
}