import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./home.css"

export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    alert("준비완료??");
    alert("틀리면 각오하세요");
    alert("진짜 시작합니다?");
    alert("진짜!진짜! 시작합니다??");
    navigate('/auth/login');
  }

  return (
    <div className='container3'>
      <div className='content3' onClick={handleClick}>
        시작하기
      </div>
    </div>
  )
}
