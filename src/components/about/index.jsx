"use client"
import React from 'react';
import ItemLayout from './ItemLayout';



const AboutDetails = () => {
  return (
    <section className='py-20 w-full'>
        <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>

            <ItemLayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
            <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            AI 응용 웹/앱 개발자로 성장하고 싶습니다.
            </h2>
            <p className="font-light text-xs sm:text-sm md:text-base">
            학사와 석사는 국악과 컴퓨터 음악을 전공했지만, 지금은 AI 기술을 실제 서비스에 접목하는 AI 응용 개발자를 꿈꾸고 있습니다. 
            2024년 4월부터 9월까지 총 930시간 동안 Intel AI 전문 교육 과정을 수료하며, AI 모델 개발부터 웹·앱 서비스 구현까지 실무 중심의 프로젝트를 경험했습니다. 
            이 과정 중 2024 AI 무인이동체 산업엑스포 해커톤에 6인 팀으로 참가해 전국 성인부 대상을 수상했고, YOLOv8s 기반의 컴퓨터 비전 모델을 활용한 시각장애인 악기 교육 시스템 논문을 KCI에 등재하는 성과를 이뤘습니다. 
            또한 총 15개 이상의 팀 프로젝트에 참여하며, 협업과 커뮤니케이션 능력을 체계적으로 키워왔습니다. 기술적으로는 Python, Flutter, React, Next.js를 활용해 웹과 모바일 앱을 구축할 수 있으며, 
            사용자 중심의 UI/UX와 데이터 기반 AI 서비스 구현에 관심이 많습니다. 또한 장애인 접근성 IT 회사에 근무하면서 접근성 관련된 프로젝트를 진행하며 접근성 관련 경험을 쌓았습니다.
            저는 끊임없이 배우는 자세와 끈기 있는 문제 해결력을 바탕으로, 사람들의 삶을 더 편리하고 의미 있게 만드는 AI 서비스를 만들어가고 싶습니다! 
            감사합니다.
            </p>
            </ItemLayout>

            {/* Clients */}
            <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
            <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
                신입 <sub className="font-semibold text-base">AI 응용 웹/앱 개발자</sub>
            </p>
            </ItemLayout>

            {/* Years of Experience */}
            <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
            <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
                 +1 <sub className="font-semibold text-base">years of experience</sub>
            </p>
            </ItemLayout>

            {/* Top Languages */}
            <ItemLayout className={'col-span-full sm:col-span-6 md:col-span-4 !p-0'}>
                <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs/?username=kimternet&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" 
                alt="kimternet" loading="lazy" />
            </ItemLayout>

            {/* Github Stats*/}
            <ItemLayout className={'col-span-full md:col-span-8 !p-0'}>
                <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=kimternet&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" 
                alt="kimternet" loading="lazy" />
            </ItemLayout>

            {/* Skills */}
            <ItemLayout className={'col-span-full'}>
                <img className="w-full h-auto" src="https://skillicons.dev/icons?i=react,nextjs,flutter,python,dart,js,html,css,docker,linux,mongodb,mysql,postgres,pytorch" 
                alt="kimternet" loading="lazy" />
            </ItemLayout>


            {/* repository
            <ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
                <img className="w-full h-auto" 
                src="https://github-readme-stats.vercel.app/api/pin/?username=kimternet&repo=myhomepage&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2" 
                alt="kimternet" loading="lazy" />
            </ItemLayout> */}

            


            {/* Notion Blog 링크 */}
            <ItemLayout className={'col-span-full'}>
                <a 
                    href="https://political-pigment-034.notion.site/24-05d25d0e60a64e508d7c1552493c01d7?pvs=4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-accent transition-colors p-8 flex flex-col items-center justify-center w-full h-full hover:bg-background/40 text-center"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-accent mb-4">My Blog</h3>
                    <div className="flex items-center gap-2 mb-2">
                        <svg width="24" height="24" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.898 18.753C24.007 21.414 25.098 21.035 33.7 20.274L81.166 14.825C82.82 14.636 81.639 13.305 80.931 13.026L71.195 9.05C69.415 8.229 66.85 7.506 61.755 8.415L17.715 14.607C15.565 14.992 14.775 16.134 15.2 17.276L20.898 18.753Z" />
                            <path d="M24.25 28.831V78.433C24.25 81.529 25.866 82.584 29.815 82.195L83.75 77.028C87.699 76.639 88.75 74.824 88.75 72.115V22.749C88.75 20.04 87.419 18.562 84.699 18.951L28.301 24.497C25.581 24.886 24.25 26.122 24.25 28.831ZM76.458 33.115C76.835 34.453 76.458 35.79 75.089 36.099L73.337 36.467V65.933C71.214 67.026 69.161 67.574 67.427 67.574C64.428 67.574 63.532 66.597 61.299 63.892L44.628 40.002V62.857L48.132 63.696C48.132 63.696 48.132 67.574 43.285 67.574L32.066 68.551C31.689 67.786 32.066 66.209 33.156 65.74L35.767 64.847V38.669L31.819 38.278C31.442 36.94 32.195 35.025 34.5 34.716L46.661 33.18L63.919 57.342V37.437L59.782 36.667C59.405 35.034 60.629 33.796 62.477 33.573L76.458 33.115Z" />
                        </svg>
                        <span className="text-lg font-medium">Notion DevLog</span>
                    </div>
                    <p className="mt-2 text-sm text-foreground/80">개발 일지와 기술적 인사이트를 기록한 노션 블로그입니다.</p>
                </a>
            </ItemLayout>

            
        </div>
    </section>
  );
};

export default AboutDetails
