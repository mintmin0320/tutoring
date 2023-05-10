import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import "./home.css"
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    toast.warn('준비완료??', {
      position: "top-left",
      autoClose: 6500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    toast.success('틀리면 각오하세요', {
      position: "top-right",
      autoClose: 6500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    toast.error('진짜!진짜! 시작합니다??', {
      position: "top-center",
      autoClose: 6500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    toast.info('로그인, 게시물조회 예제', {
      position: "bottom-left",
      autoClose: 6500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    toast.warn('한솥도시락', {
      position: "bottom-right",
      autoClose: 6500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    toast.success('곧 시작됩니다.', {
      position: "bottom-center",
      autoClose: 6500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setTimeout(() => {
      navigate('/auth/login');
    }, 7000);
  }

  return (
    <div className='container3'>
      <div className='content3' onClick={handleClick}>
        시작하기
      </div>
      <ToastContainer />
    </div>
  )
}
