"use client"
import React, { useEffect, useState } from 'react'

const VisitorCounter = () => {
  const [count, setCount] = useState({ today: 0, total: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 로컬 스토리지에서 방문자 수 정보 가져오기
    const getVisitorCount = () => {
      try {
        // 현재 날짜를 YYYY-MM-DD 형식으로 변환
        const today = new Date().toISOString().split('T')[0];
        
        // 로컬 스토리지에서 데이터 가져오기
        const storedData = localStorage.getItem('visitorData');
        const data = storedData ? JSON.parse(storedData) : { lastDate: null, today: 0, total: 0 };
        
        // 새 날짜인 경우 today 카운트 리셋
        if (data.lastDate !== today) {
          data.lastDate = today;
          data.today = 1;
          data.total += 1;
        } else {
          // 브라우저 세션 기록 확인
          const visited = sessionStorage.getItem('visited');
          if (!visited) {
            data.today += 1;
            data.total += 1;
            sessionStorage.setItem('visited', 'true');
          }
        }
        
        // 로컬 스토리지에 업데이트된 데이터 저장
        localStorage.setItem('visitorData', JSON.stringify(data));
        
        // 상태 업데이트
        setCount({ today: data.today, total: data.total });
        setLoading(false);
      } catch (error) {
        console.error('방문자 카운트 에러:', error);
        setLoading(false);
      }
    };
    
    getVisitorCount();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-background/80 backdrop-blur-sm border border-accent/30 rounded-lg px-4 py-3 shadow-glass-sm z-10">
      <div className="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
        
        <div className="flex flex-col">
          <span className="text-xs text-foreground/70">방문자</span>
          {loading ? (
            <div className="h-5 animate-pulse">로딩 중...</div>
          ) : (
            <div className="flex items-center text-sm">
              <span className="font-medium">오늘 <span className="text-accent">{count.today}</span></span>
              <span className="mx-1">•</span>
              <span className="font-medium">전체 <span className="text-accent">{count.total}</span></span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default VisitorCounter 