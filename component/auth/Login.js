import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './auth.css';

export default function Login() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const handleOnChange = (params, e) => {
    params === "id"
      ? setUserId(e.target.value)
      : setUserPw(e.target.value)
  }

  //아래 함수를 작성하시오.
  const handleSubmit = (e) => {
    // 요청보내야 할 주소
    // http://50.19.56.144:8080/auth/login
    // hint : 로그인이니까 무슨 메소드 일까요
    // hint2 : body, Parameter 어떤 방식으로 데이터를 담을까요

    // userId 변수는 email 변수에,
    // userPw 변수는 password 변수에 담아서 서버로 전송하시오

    // 로그인이 완료되면 해당 페이지로 넘어가게
    //(옆에 코드를 그대로 사용하면 됨) navigate('/admin/list');
  };

  return (
    <div className='container2'>
      <div className='memo2'>
        <div className='user-id3'>
          유진 이메일 : yujin@naver.com
          비밀번호 : 1234(string)
        </div>
        <div className='user-id4'>
          진우 이메일 : jinwoo@naver.com
          비밀번호 : 1234(string)
        </div>
      </div>
      <div className='content2'>
        <div className='block-text2'>
          <h2>로그인 페이지</h2>
        </div>
        <form
          className='block-auth2'
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            className='block-auth__element-input2'
            placeholder='아이디 입력'
            required={true}
            type='text'
            onChange={(e) => { handleOnChange("id", e) }}
            name='userId'
          />
          <input
            className='block-auth__element-input2'
            placeholder='비밀번호 입력'
            required={true}
            type='password'
            onChange={(e) => { handleOnChange("pw", e) }}
            name='userPw'
          />
          <button
            className='block-auth__element-btn2'
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  )
}
