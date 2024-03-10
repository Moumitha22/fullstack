package com.educonnect.moumitha.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educonnect.moumitha.dto.request.PaymentRequest;
import com.educonnect.moumitha.dto.response.MessageResponse;
import com.educonnect.moumitha.exception.NotFoundException;
import com.educonnect.moumitha.service.PaymentService;
import com.educonnect.moumitha.utils.MyConstant;

import lombok.RequiredArgsConstructor;

import static com.educonnect.moumitha.utils.Access.TRANSACTION_READ;


@RestController
@RequestMapping(MyConstant.PAYMENT)
@RequiredArgsConstructor
public class PaymentController {
    private final PaymentService paymentService;
    
    @PostMapping(MyConstant.ADD)
    public ResponseEntity<?> addPayment(@RequestBody PaymentRequest request){
        MessageResponse response = new MessageResponse();
        try{
            response = paymentService.addTransaction(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
        catch(Exception e){
            // return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
             var responseMessage = MessageResponse.builder().message(e.getMessage()).build();
            return new ResponseEntity<>(responseMessage, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping(MyConstant.GET)
    @PreAuthorize(TRANSACTION_READ)
    public ResponseEntity<?> getAll() {
        try{
            paymentService.getAll();
            return new ResponseEntity<>(paymentService.getAll(), HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(new MessageResponse(), HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping(MyConstant.GET+"/{id}")
    public ResponseEntity<?> getById(@PathVariable String id) {
        try {
            var response = paymentService.getById(id);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }  catch (NotFoundException e) {
            return new ResponseEntity<>(new MessageResponse(e.getMessage()), HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(new MessageResponse(), HttpStatus.EXPECTATION_FAILED);
        }
    }

    @DeleteMapping(MyConstant.DELETE + "/{id}")
    public ResponseEntity<?> deleteByEmail(@PathVariable String id) {
        MessageResponse response = new MessageResponse();
        try{
            response = paymentService.deleteById(id);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        } 
    }
}
