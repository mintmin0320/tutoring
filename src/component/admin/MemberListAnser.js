import React, { useState } from 'react'
import axios from 'axios';
import "./admin.css"

export default function MemberListAnser() {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [createdAt, setCreatedAt] = useState('');

  const handleOnChange = (e) => {
    e.preventDefault();
    setId(e.target.value);
  }

  const handleGetInfo = async () => {
    const url = `http://50.19.56.144:8080/auth/${id}`
    const res = await axios.get(url, { withCredentials: true });
    console.log(res);
    try {
      setEmail(res.data.email);
      setName(res.data.name);
      setCreatedAt(res.data.createdAt);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container'>
      <div className='memo'>
        <div className='user-id1'>
          진우 아이디 : 642d2773259f2eb2e4bd33d7
        </div>
        <div className='user-id2'>
          유진 아이디 : 642d26fd259f2eb2e4bd33d4
        </div>
      </div>
      <div className="content">
        <div className="block-text">
          <h1>회원정보</h1>
        </div>
        <div className="request-btn">
          <input
            className='block-auth__element-input'
            placeholder='위에 아이디 복사해서 검색'
            type='text'
            onChange={handleOnChange}
            name='id'
          />
          <button
            type='button'
            onClick={handleGetInfo}
          >
            조회
          </button>
        </div>
        <div className='block-info'>
          <div className='info'>
            <div className='info-id'>아이디 : {email}</div>
            <div className='info-name'>이름 : {name}</div>
            <div className='info-date'>가입일 : {createdAt}</div>
          </div>
        </div>
      </div>
    </div>
  )
}