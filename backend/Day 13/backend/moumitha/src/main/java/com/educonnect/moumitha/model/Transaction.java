package com.educonnect.moumitha.model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_transaction")
public class Transaction {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(nullable = false)
    private float amount;

    @Column(nullable = false)
    private Date date;

    @Column(nullable = false)
    private String transactionType;

    @Column(nullable = false)
    private boolean transactionStatus;

    @OneToOne()
    @JoinColumn(name = "application_id", referencedColumnName = "id")
    private Application application;
}