package com.educonnect.moumitha.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.educonnect.moumitha.dto.request.UpdateInstituteRequest;
import com.educonnect.moumitha.dto.response.InstituteResponse;
import com.educonnect.moumitha.dto.response.MessageResponse;
import com.educonnect.moumitha.exception.NotFoundException;
import com.educonnect.moumitha.model.Institute;
import com.educonnect.moumitha.repository.InstituteRepository;
import com.educonnect.moumitha.service.InstituteService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class InstituteServiceImpl implements InstituteService {
    
    private final InstituteRepository instituteRepository;

    @Override
    public List<InstituteResponse> getAll() {
        List<Institute> institutes = instituteRepository.findAll();

        return institutes.stream()  
                            .map(institute -> InstituteResponse.builder()
                                .instituteName(institute.getInstituteName())
                                .location(institute.getLocation())
                                .email(institute.getEmail())
                                .mobile(institute.getMobile())
                                .website(institute.getWebsite())
                                .about(institute.getAbout())
                                .noOfCourses(institute.getNoOfCourses())
                                .noOfSeats(institute.getNoOfSeats())
                                .build())
                                .collect(Collectors.toList());
    }

    @Override
    public InstituteResponse getByEmail(String email) throws NotFoundException {
        Optional<Institute> isInstitute = instituteRepository.findByEmail(email);

        if(isInstitute.isEmpty()) {
            throw new NotFoundException("Institute not found with the id : " + email);
        }

        return InstituteResponse.builder()
                            .instituteName(isInstitute.get().getInstituteName())
                            .location(isInstitute.get().getLocation())
                            .email(isInstitute.get().getEmail())
                            .mobile(isInstitute.get().getMobile())
                            .website(isInstitute.get().getWebsite())
                            .about(isInstitute.get().getAbout())
                            .noOfCourses(isInstitute.get().getNoOfCourses())
                            .noOfSeats(isInstitute.get().getNoOfSeats())
                            .build();
    }

    @Override
    public MessageResponse deleteById(String id) {
        Optional<Institute> isInstitute = instituteRepository.findById(id);

        if(isInstitute.isEmpty()) {
            return MessageResponse.builder()
                                    .message("Institute not found with the id : " + id)
                                    .build();
        }

        instituteRepository.deleteById(id);

        return MessageResponse.builder()
                                .message("Institute deleted successfully")
                                .build();
    }

    @Override
    public MessageResponse updateDetails(String email, UpdateInstituteRequest request) {
        Optional<Institute> isInstitute = instituteRepository.findByEmail(email);

        if(isInstitute.isEmpty()) {
            return MessageResponse.builder()
                                    .message("Institute not found with the email id : " + request.getEmail())
                                    .build();
        }

        Institute institute = isInstitute.get();
        institute.setInstituteName(request.getInstituteName());
        institute.setLocation(request.getLocation());
        institute.setEmail(request.getEmail());
        institute.setMobile(request.getMobile());
        institute.setWebsite(request.getWebsite());
        institute.setAbout(request.getAbout());
        institute.setNoOfCourses(request.getNoOfCourses());

        instituteRepository.save(institute);

        return MessageResponse.builder()
                .message("Institute details updated successfully")
                .build();
    }
}
