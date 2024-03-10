package com.educonnect.moumitha.service;

import java.util.List;

import com.educonnect.moumitha.dto.request.PaymentRequest;
import com.educonnect.moumitha.dto.response.MessageResponse;
import com.educonnect.moumitha.dto.response.PaymentResponse;
import com.educonnect.moumitha.exception.NotFoundException;

public interface PaymentService {   
    MessageResponse addTransaction(PaymentRequest request); 
    
    List<PaymentResponse> getAll();

    PaymentResponse getById(String id) throws NotFoundException;

    MessageResponse deleteById(String id);
}
