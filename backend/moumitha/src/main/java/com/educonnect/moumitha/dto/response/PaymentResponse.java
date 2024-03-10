package com.educonnect.moumitha.dto.response;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentResponse {
    private float amount;
    private Date date;
    private String transactionType;
    private boolean transactionStatus;   
}
