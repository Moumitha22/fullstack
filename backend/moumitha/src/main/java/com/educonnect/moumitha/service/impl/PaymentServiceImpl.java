package com.educonnect.moumitha.service.impl;
import java.sql.Date;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.educonnect.moumitha.dto.request.PaymentRequest;
import com.educonnect.moumitha.dto.response.MessageResponse;
import com.educonnect.moumitha.dto.response.PaymentResponse;
import com.educonnect.moumitha.exception.NotFoundException;
import com.educonnect.moumitha.model.Payment;
import com.educonnect.moumitha.repository.PaymentRepository;
import com.educonnect.moumitha.service.PaymentService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class PaymentServiceImpl implements PaymentService{
    
    private final PaymentRepository paymentRepository;
    @Override
    public MessageResponse addTransaction(PaymentRequest request) {
        Payment payment = Payment.builder()
                        .amount(request.getAmount())
                        .date(new Date(System.currentTimeMillis()))
                        .transactionType(request.getTransactionType())
                        .transactionStatus(false)
                        .build();

        paymentRepository.save(payment);
        return MessageResponse.builder().message("Payment successful").build();
    }

    @Override
    public List<PaymentResponse> getAll() {
        List<Payment> payments = paymentRepository.findAll();
        return payments.stream().map(payment -> PaymentResponse.builder()
                        .amount(payment.getAmount())
                        .date(payment.getDate())
                        .transactionType(payment.getTransactionType())
                        .transactionStatus(payment.isTransactionStatus())
                        .build())
                .collect(Collectors.toList());
    }

    @Override
    public PaymentResponse getById(String id) throws NotFoundException {
        Optional<Payment> isPayment = paymentRepository.findById(id);
        
        if(isPayment.isEmpty()){
            throw new NotFoundException("Payment not found with id "+id);
        }
        Payment payment = isPayment.get();
        return PaymentResponse.builder()
                              .amount(payment.getAmount())
                              .date(payment.getDate())
                              .date(payment.getDate())
                              .transactionType(payment.getTransactionType())
                              .transactionStatus(payment.isTransactionStatus())
                              .build();
    }

    @Override
    public MessageResponse deleteById(String id) {
        Optional<Payment> isPayment = paymentRepository.findById(id);
        
        if(isPayment.isEmpty()){
            return MessageResponse.builder().message("Transaction not found").build();
        }
        paymentRepository.delete(isPayment.get());
        return MessageResponse.builder().message("Transaction deleted successfully").build();   
    }
}
