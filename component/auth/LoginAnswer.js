import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./auth.css"

export default function LoginAnser() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const handleOnChange = (params, e) => {
    params === "id"
      ? setUserId(e.target.value)
      : setUserPw(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:80/auth/login`;
    const data = {
      email: userId,
      password: userPw,
    }
    const res = await axios.post(url, data, { withCredentials: true });
    console.log(res);
    try {
      navigate('/admin/answer');
    } catch (error) {
      console.log(error);
    }
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

