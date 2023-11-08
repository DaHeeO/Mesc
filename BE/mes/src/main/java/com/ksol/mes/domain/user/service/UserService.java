package com.ksol.mes.domain.user.service;

import java.util.List;

import com.ksol.mes.domain.user.dto.request.LoginReq;
import com.ksol.mes.domain.user.dto.request.SignUpReq;
import com.ksol.mes.domain.user.dto.request.UserReq;
import com.ksol.mes.domain.user.dto.response.UserResponse;
import com.ksol.mes.global.config.jwt.TokenInfo;

import jakarta.servlet.http.HttpServletRequest;

public interface UserService {

	void signUp(SignUpReq signUpReq);

	TokenInfo login(LoginReq loginReq);

	TokenInfo recreateToken(HttpServletRequest request);

	UserResponse findByEmail(String email);

	List<UserResponse> getGroupMembers(UserReq userReq) throws Exception;

	List<UserResponse> getUsers() throws Exception;

	UserResponse findById(Integer userId);

	Integer getUserCount();
}