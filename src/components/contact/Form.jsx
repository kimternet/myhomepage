"use client"
import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';



const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: {scale: 0},
  show: {scale: 1},
};

const NavLink = motion(Form);

export default function Form() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'onSubmit', // 폼 제출 시에만 유효성 검사
    reValidateMode: 'onChange' // 사용자가 입력 필드를 변경할 때 재검증
  });
  const [status, setStatus] = useState('');

  const sendEmail = (params) => {
    setStatus('sending');
    emailjs
      .send(process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate: {
            throttle: 5000,
        }
    })
      .then(
        () => {
          console.log('SUCCESS!');
          setStatus('success');
          reset(); // 폼 초기화
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('error');
        },
      );
  };

  const onSubmit = data => {
    console.log("Form data:", data); // 로그 추가

    const templateParams = {
        to_name: "김형운",
        to_email: "kimternet23@gmail.com",
        from_name: data.name,
        reply_to: data.email,
        mobile: data.mobile, // Mobile Number -> mobile로 수정
        title: data.title, // Title -> title로 수정
        message: data.message,
    }

    sendEmail(templateParams)
  };
  
  // 상태에 따른 메시지와 스타일 설정
  const getStatusMessage = () => {
    switch(status) {
      case 'sending':
        return <p className="mt-2 text-accent">전송 중...</p>;
      case 'success':
        return (
          <div className="mt-2 text-green-400 text-center">
            <p>메일이 전송되었습니다!</p>
            <p>빠른 시간내에 답변 드리겠습니다.💕</p>
            <p>감사합니다.😊</p>
          </div>
        );
      case 'error':
        return <p className="mt-2 text-red-400">전송 실패. 다시 시도해 주세요.😥</p>;
      default:
        return null;
    }
  };
  
  return (
    <motion.form
    variants={container}
    initial="hidden"
    animate="show"

    onSubmit={handleSubmit(onSubmit)}
    className='max-w-md w-full flex flex-col items-center justify-center space-y-4'
    >
      <motion.input 
      variants={item}
      type="text" 
      placeholder="성함" 
      {...register("name", {
        required: "이름을 입력해주세요"
      })}
      className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      {errors.name && <span className='inline-block self-start text-accent'>{errors.name.message}</span>}

      <motion.input 
      variants={item}
      type="email" 
      placeholder="이메일" 
      {...register("email", {
        required: "이메일을 입력해주세요",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "이메일 형식이 올바르지 않습니다."
        }
      })} 
      className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      {errors.email && <span className='inline-block self-start text-accent'>{errors.email.message}</span>}

      <motion.input 
      variants={item}
      type="tel" 
      placeholder="연락처" 
      {...register("mobile", {
        required: "연락처를 입력해주세요",
        pattern: {
          value: /^[0-9]{10,11}$/,
          message: "올바른 전화번호 형식이 아닙니다."
        }
      })} 
      className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      {errors.mobile && <span className='inline-block self-start text-accent'>{errors.mobile.message}</span>}

      <motion.input 
      variants={item}
      type="text" 
      placeholder="제목" 
      {...register("title", {
        required: "제목을 입력해주세요"
      })} 
      className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      {errors.title && <span className='inline-block self-start text-accent'>{errors.title.message}</span>}

      <motion.textarea 
      variants={item}
      placeholder='내용'
      {...register("message", {
        required: "내용을 입력해주세요", 
        maxLength: {
          value: 256,
          message: "최대 256자까지 입력 가능합니다."
        }
      })} 
      className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      {errors.message && <span className='inline-block self-start text-accent'>{errors.message.message}</span>}

      <motion.input 
      variants={item}
      value={status === 'sending' ? "전송 중..." : "send!"}
      disabled={status === 'sending'}
      className={`px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
      type="submit" />
      
      {getStatusMessage()}
    </motion.form>
  );
}
