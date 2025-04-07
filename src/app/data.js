/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "[AI 응용]CCTV & UAV 연계형 AI 응급 대응 시스템시각장애인을 위한 AI 악기 교육 시스템",
    description: "팀 프로젝트, ECG 데이터로 CNN 모델 구축 담당, 2024년 무인이동체 산업엑스포 해커톤 '대상' 수상팀 프로젝트",
    date: "2024.06",
    videoLink: null,
    pdfLink: "https://drive.google.com/file/d/1dSbabmVKIVrdNTneNAES7ynuh1iAzJrM/view?usp=drive_link",
    demoLink: "https://github.com/kimternet/AI_Project/tree/main/ECG_PROJECT",
  },
  {
    id: 2,
    name: "[AI 응용]시각장애인을 위한 AI 악기 교육 시스템",
    description: "팀 프로젝트, 데이터셋, 컴퓨터 비전 모델 구축 담당, 한국시각장애교육재활학회 논문 등재",
    date: "2024.07",
    videoLink: "https://drive.google.com/file/d/1Sxd2A_agDa55q1tcveLcchVf_hDj8jhL/view?usp=sharing",
    pdfLink: "https://drive.google.com/file/d/1aUJvPngJ7cr2EE9wSj3rIMXoU78OGyBD/view?usp=drive_link",
    demoLink: "https://github.com/kimternet/AI_Project/tree/main/Vision",
  },
  {
    id: 3,
    name: "[AI 응용, Flutter]LLM 활용한 상황별 영어 대화 생성 앱",
    description: "팀 프로젝트, 상황별 영어 대화 생성 앱, whisper, GPT API 활용, FLUTTER 앱 구축 담당",
    date: "2024.09",
    videoLink: "https://drive.google.com/file/d/1sRq2VjXOopbgJh2GMVhiEMN9ne-e4nzt/view?usp=sharing",
    pdfLink: null,
    demoLink: null,
  },
  {
    id: 4,
    name: "[AI 응용] RAG를 활용한 Health Chatbot",
    description: "개인프로젝트, Next.js 14, LangChain, Puppeteer, RAG, GPT 4o API 활용",
    date: "2025.04.08",
    videoLink: null,
    pdfLink: null,
    demoLink: "https://health-rag-chatbot.vercel.app/",
  },
  {
    id: 5,
    name: "[WEB]Learning Management",
    description: "개인 프로젝트, TypeScript, CSS, React, Node.js, DynamoDB 활용",
    date: "2025.01",
    videoLink: null,
    pdfLink: null,
    demoLink: "https://github.com/kimternet/Learning_Management",
  },
  {
    id: 6,
    name: "[WEB]상품을 거래 풀스택 웹 애플리케이션",
    description: "개인 프로젝트, React, Node.js, MongoDB, Render 배포",
    date: "2025.03",
    videoLink: null,
    pdfLink: null,
    demoLink: "https://github.com/kimternet/fullstackproject",
  },
  {
    id: 7,
    name: "[Flutter]Flutter와 FastAPI를 이용한 음악 스트리밍 App 프로젝트",
    description: "개인 프로젝트, MVVM (Model-View-ViewModel) 아키텍처를 기반으로 사용자 인증부터 백그라운드 음악 재생까지 다양한 기능을 구현",
    date: "2025.04",
    videoLink: null,
    pdfLink: null,
    demoLink: "https://github.com/kimternet/MusicApp",
  },
  {
    id: 8,
    name: "[WEB]3D 포트폴리오 홈페이지 만들기",
    description: "개인 프로젝트, React, Next.js, Three.js, Tailwind CSS 활용",
    date: "2025.04",
    videoLink: null,
    pdfLink: null,
    demoLink: "https://github.com/kimternet/myhomepage",
  },
  {
    id: 9,
    name: "[AI 응용]RangChain, RAG, LLM모델을 활용한 요약ChatBot",
    description: "개인 프로젝트, 교육 커리큘럼 학습 추천 시스템, LLM, RAG, RangChain 활용",
    date: "2024.08",
    videoLink: "https://drive.google.com/file/d/11PiTTPEfIcayRo5igcOWotKybyoxJ5f0/view?usp=sharing",
    pdfLink: "https://drive.google.com/file/d/1fer4K5_HXNTHCMnhQCrZN1wfInFbhDXe/view?usp=sharing",
    demoLink: "https://github.com/kimternet/AI_Project/tree/main/RAG_RangChain_LLM",
  },
  {
    id: 10,
    name: "진행중",
    description: "Meditation and mindfulness app",
    date: "2025",
    videoLink: null,
    pdfLink: null,
    demoLink: null,
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "projects", link: "/projects", icon: "projects", newTab: false },
  { label: "contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/kimternet",
    icon: "Github",
    newTab: true,
  },
  /* 나중에 필요하면 추가할 링크
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/codebucks",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://www.x.com/code_bucks",
    icon: "twitter",
    newTab: true,
  },
  */
  {
    label: "resume",
    link: "https://docs.google.com/document/d/1RNTLb0oH7ijuE3vzw0X88gtbGEb3dbzO88JNHl_AKxg/edit?usp=drive_link",
    icon: "resume",
    newTab: true,
    download: false
  },
];


