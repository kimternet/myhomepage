"use client"
import React, { useState, useRef } from 'react';
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

export default function Form() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange'
  });
  const [status, setStatus] = useState('');
  const formRef = useRef(null);
  
  // 이메일을 받을 주소 설정
  const emailTo = "ksanzi@naver.com"; // 실제 이메일 주소로 변경하세요
  
  // 폼 데이터가 유효할 때 실행되는 함수
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log("Form data is valid:", data);
    console.log("Form fields:", Object.keys(data));
    setStatus('sending');
    
    // FormData 객체 생성
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('title', data.title);
    formData.append('message', data.message);
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');
    formData.append('_subject', '홈페이지에서 새 문의가 도착했습니다');
    
    // FormSubmit API 호출
    fetch(`https://formsubmit.co/ajax/${emailTo}`, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      setStatus('success');
      reset();
    })
    .catch(error => {
      console.error('Error:', error);
      setStatus('error');
    });
  };
  
  // 폼 제출 실패 시 호출되는 함수
  const onError = errors => {
    console.log("Form validation errors:", errors);
    setStatus('error');
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
      ref={formRef}
      variants={container}
      initial="hidden"
      animate="show"
      onSubmit={handleSubmit(onSubmit, onError)}
      className='max-w-md w-full flex flex-col items-center justify-center space-y-4'
    >
      {/* FormSubmit 히든 필드는 더 이상 필요하지 않음 */}
      <motion.input 
        variants={item}
        type="text" 
        placeholder="성함" 
        {...register("name", {
          required: "이름을 입력해주세요"
        })}
        name="name"
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
        name="email"
        className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      {errors.email && <span className='inline-block self-start text-accent'>{errors.email.message}</span>}

      <motion.input 
        variants={item}
        type="tel" 
        placeholder="연락처" 
        {...register("phone", {
          required: "연락처를 입력해주세요",
          minLength: {
            value: 1,
            message: "연락처를 입력해주세요"
          },
          pattern: {
            value: /^[0-9-]+$/,
            message: "연락처는 숫자만 입력해주세요"
          }
        })}
        name="phone"
        className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      {errors.phone && <span className='inline-block self-start text-accent'>{errors.phone.message}</span>}

      <motion.input 
        variants={item}
        type="text" 
        placeholder="제목" 
        {...register("title", {
          required: "제목을 입력해주세요"
        })}
        name="title"
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
        name="message"
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
