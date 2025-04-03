"use client"
import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'onSubmit', // 폼 제출 시에만 유효성 검사
    reValidateMode: 'onChange' // 사용자가 입력 필드를 변경할 때 재검증
  });
  const [status, setStatus] = useState('');

  const sendEmail = (params) => {
    setStatus('sending...');
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
          setStatus('Success! Email sent.');
          reset(); // 폼 초기화
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus(`Failed: ${error.text}`);
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
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}
    className='max-w-md w-full flex flex-col items-center justify-center space-y-4'
    >
      <input type="text" 
      placeholder="성함" 
      {...register("name", {
        required: "이름을 입력해주세요"
      })}
      className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      {errors.name && <span className='inline-block self-start text-accent'>{errors.name.message}</span>}

      <input type="email" 
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

      <input type="tel" 
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

      <input type="text" 
      placeholder="제목" 
      {...register("title", {
        required: "제목을 입력해주세요"
      })} 
      className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      {errors.title && <span className='inline-block self-start text-accent'>{errors.title.message}</span>}

      <textarea 
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

      <input 
      value="send!"
      className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize'
      type="submit" />
      
      {status && <p className="mt-2 text-accent">{status}</p>}
    </form>
  );
}
