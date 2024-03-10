package com.educonnect.moumitha.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.educonnect.moumitha.dto.request.UpdateStudentRequest;
import com.educonnect.moumitha.dto.response.MessageResponse;
import com.educonnect.moumitha.dto.response.StudentResponse;
import com.educonnect.moumitha.exception.NotFoundException;
import com.educonnect.moumitha.model.Student;
import com.educonnect.moumitha.repository.StudentRepository;
import com.educonnect.moumitha.service.StudentService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;

    @Override
    public List<StudentResponse> getAll() {
        List<Student> students = studentRepository.findAll();

        return students.stream()
                        .map(student -> StudentResponse.builder()
                            .email(student.getEmail())
                            .fatherName(student.getFatherName())
                            .motherName(student.getMotherName())
                            .dob(student.getDob())
                            .gender(student.getGender())
                            .emisNo(student.getEmisNo())
                            .aadharNo(student.getAadharNo())
                            .nationality(student.getNationality())
                            .tenthBoard(student.getTenthBoard())
                            .twelthBoard(student.getTwelthBoard())
                            .tenthPercentage(student.getTenthPercentage())
                            .twelthPercentage(student.getTwelthPercentage())
                            .build())
                            .collect(Collectors.toList());
    }

    @Override
    public StudentResponse getByEmail(String email) throws NotFoundException {
        Optional<Student> isStudent = studentRepository.findByEmail(email);

        if(isStudent.isEmpty()) {
            throw new NotFoundException("Student not found with the mail id : " + email);
        }

        return StudentResponse.builder()
                                .email(isStudent.get().getEmail())
                                .fatherName(isStudent.get().getFatherName())
                                .motherName(isStudent.get().getMotherName())
                                .dob(isStudent.get().getDob())
                                .gender(isStudent.get().getGender())
                                .emisNo(isStudent.get().getEmisNo())
                                .aadharNo(isStudent.get().getAadharNo())
                                .nationality(isStudent.get().getNationality())
                                .tenthBoard(isStudent.get().getTenthBoard())
                                .twelthBoard(isStudent.get().getTwelthBoard())
                                .tenthPercentage(isStudent.get().getTenthPercentage())
                                .twelthPercentage(isStudent.get().getTwelthPercentage())
                                .build();
    }

    @Override
    public MessageResponse deleteByEmail(String email) {
        Optional<Student> isStudent = studentRepository.findByEmail(email);

        if(isStudent.isEmpty()) {
            return MessageResponse.builder()
                                    .message("Student not found with the mail id : " + email)
                                    .build();
        }

        studentRepository.delete(isStudent.get());

        return MessageResponse.builder()
                                .message("Student deleted successfully")
                                .build();
    }

    @Override
    public MessageResponse updateDetails(UpdateStudentRequest request, String email) {
        Optional<Student> isStudent = studentRepository.findByEmail(email);

        if(isStudent.isEmpty()) {
            return MessageResponse.builder()
                                    .message("Student not found with the mail id : " + email)
                                    .build();
        }
        
        Student student = isStudent.get();
        student.setFatherName(request.getFatherName());
        student.setMotherName(request.getMotherName());
        student.setDob(request.getDob());
        student.setGender(request.getGender());
        student.setEmisNo(request.getEmisNo());
        student.setAadharNo(request.getAadharNo());
        student.setNationality(request.getNationality());
        student.setTenthBoard(request.getTenthBoard());
        student.setTenthPercentage(request.getTenthPercentage());
        student.setTwelthBoard(request.getTwelthBoard());
        student.setTwelthPercentage(request.getTwelthPercentage());

        studentRepository.save(student);
        

        return MessageResponse.builder()
                .message("Student details updated successfully")
                .build();
    }

}