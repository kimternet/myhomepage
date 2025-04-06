# 🚀 Next.js, Three.js, 그리고 Tailwind CSS를 활용한 포트폴리오 웹사이트 만들기🌟

💚 저의 홈페이지 입니다. [홈페이지](https://kimsanzi.com) <br />



## 소개

Next.js, Three.js, 그리고 Tailwind CSS를 이용하여 모바일 반응형 개인 포트폴리오 웹사이트

## 주요 기능 및 기술

*   **핵심 기술 스택**: Next.js, Three.js, Tailwind CSS
*   **모바일 반응형 디자인**
*   **인터랙티브 3D 모델**: Three.js를 이용한 3D 모델 렌더링 및 최적화
*   **AI 기반 이미지 생성**: Playground AI를 이용한 배경 이미지 생성
*   **부드러운 UI 애니메이션**: Framer Motion을 이용한 페이지 로딩, 호버 효과, 스태거링 애니메이션
*   **연락처 양식 및 이메일 통합**: FormSubmit를 이용한 폼 전송 및 이메일 수신
*   **독특한 탐색 인터페이스**: 원형 탐색 버튼 및 호버 시 레이블 표시, 애니메이션 일시 정지
*   **배경 음악 및 사용자 동의**: 배경 음악 추가 및 첫 방문 시 동의 팝업, 로컬 스토리지 설정 저장
*   **프로젝트 쇼케이스**: 프로젝트 목록 표시 및 상세 정보 확인
*   **자기소개 페이지**: 개인 정보, 기술 스택, **동적 GitHub 통계** 표시 (anuraghazra/github-readme-stats 활용 및 자체 호스팅 권장)
*   **아이콘**: Lucid Icons 라이브러리 사용

## 개발 시작

1.  **스타터 코드 저장소 복제**: `git clone [저장소 URL]`
2.  **디렉토리 변경**: `cd [복제된 디렉토리]`
3.  **필요한 라이브러리 설치**: `npm install`
4.  **VS Code에서 프로젝트 열기**: `code .`
5.  **개발 서버 시작**: `npm run dev` (package.json의 스크립트에 따라 다를 수 있습니다.)

## 사용된 주요 라이브러리 및 도구 [2, 3]

*   **react-three-fiber**: Three.js를 위한 React 렌더러
*   **@react-three/drei**: react-three-fiber를 위한 유용한 헬퍼 및 추상화
*   **clsx**: 조건부 클래스 이름 생성을 위한 작은 유틸리티
*   **framer-motion**: 애니메이션 라이브러리
*   **lucide-react**: 아이콘 라이브러리
*   **react-hook-form**: 폼 구현 및 유효성 검사
*   **three**: 3D 모델 렌더링


## 스타일링

*   **Tailwind CSS 설정**: `tailwind.config.js`에서 커스텀 폰트, 색상, 박스 그림자, 애니메이션 추가
*   **전역 스타일**: `global.css`에서 Tailwind 레이어 설정 및 커스텀 CSS 변수, 유틸리티 클래스 정의

## 이미지 생성 (Playground AI 활용)

*   **모델**: Stable Diffusion XL
*   **필터**: Real Vis XL
*   **이미지 크기**: 1024x576
*   **품질**: 30 steps
*   **프롬프트 활용**: 이미지 프롬프트 파일 (`image_prompts`) 참고
*   **Seed 값**: 동일한 이미지를 유사하게 재생성하기 위해 Seed 값 활용

## 3D 모델 최적화 및 통합

*   **Sketchfab** 등에서 3D 모델 다운로드
*   **gltf-jsx** 도구를 이용한 모델 압축 및 React 컴포넌트 변환 (`npx gltf-jsx scene.gltf --transform`)
*   **압축 웹사이트** 활용 (`https://gltf.report/`)
*   `react-three-fiber`의 `<Canvas>` 컴포넌트를 이용하여 모델 렌더링
*   `<Suspense>`를 이용한 비동기 로딩 처리
*   `<Environment>` 컴포넌트를 이용한 조명 및 환경 설정
*   `useFrame` 훅을 이용한 모델 애니메이션

## 탐색 버튼 구현

*   **원형 배치 알고리즘**: 각 버튼의 위치를 원의 방정식에 따라 계산
*   **각도 계산**: 총 각도(360도)를 버튼 개수로 나누어 각 버튼 사이의 각도 계산
*   **라디안 변환**: 각도를 라디안 값으로 변환
*   **좌표 계산**: `Math.cos()`과 `Math.sin()` 함수를 이용하여 x, y 좌표 계산
*   **CSS `transform: translate()`** 속성을 이용하여 버튼 배치
*   **애니메이션**: `animate-spin` 및 `animate-spin-reverse` Tailwind 클래스와 커스텀 키프레임을 이용한 회전 애니메이션
*   **호버 효과**: 그룹 호버를 이용하여 아이콘 색상 변경 및 애니메이션 일시 정지
*   **레이블 표시**: `peer-hover` 및 `peer` 클래스를 이용하여 호버 시 레이블 표시
*   **반응형 처리**: `useScreenSize` 훅과 반응형 컴포넌트를 이용하여 화면 크기에 따라 다른 UI 표시 (원형 배치 vs. 측면 고정)
*   **Framer Motion**: `staggerChildren` 및 `variants`를 이용한 등장 애니메이션

## 연락처 폼 구현 및 이메일 전송

*   **React Hook Form**: 폼 상태 관리, 유효성 검사, 제출 처리
*   **유효성 검사**: 각 필드에 대한 필수 입력, 이메일 형식, 최소/최대 길이 등 유효성 규칙 적용
*   **커스텀 오류 메시지 표시**

## 배경 반딧불 효과

*   **랜덤 생성 함수**: 각 반딧불의 ID, 위치, 애니메이션 지속 시간 랜덤 생성
*   **`useState` 및 `useEffect`**: 주기적으로 새로운 반딧불 상태 추가 및 오래된 반딧불 제거
*   **CSS 키프레임 애니메이션**: `move` 키프레임을 이용하여 반딧불의 움직임 정의
*   **Tailwind CSS `radial-gradient`**: 반딧불 모양의 배경 이미지 생성

## 반응형 디자인

*   **Tailwind CSS Breakpoints**: `tailwind.config.js`에 커스텀 Breakpoint (`exs`) 추가 (480px)
*   **`useScreenSize` 훅**: 현재 화면 너비 감지
*   **`responsiveComponent`**: 화면 크기에 따라 다른 컴포넌트 렌더링
*   화면 크기에 따른 탐색 버튼 배치 및 스타일 변경
*   각 페이지의 3D 모델 크기 및 위치, 텍스트 크기, 레이아웃 조정

## 배경 음악 구현

*   `<audio>` HTML 요소 사용
*   **`useState`**: 음악 재생 상태 관리
*   **`useRef`**: `<audio>` 요소 참조
*   **토글 함수**: 재생/일시 정지 상태 변경 및 `<audio>` 컨트롤
*   **로컬 스토리지**: 사용자 동의 및 동의 시간 저장 (`musicConsent`, `consentTime`)
*   **`useEffect`**: 페이지 로드시 로컬 스토리지에서 동의 여부 확인 및 자동 재생 (사용자 상호작용 필요) 처리
*   **동의 팝업 모달**: 첫 방문 시 또는 일정 기간 후 배경 음악 재생 동의 요청 (`createPortal` 활용)

## 성능 최적화

*   **`next/image` 컴포넌트**: 이미지 최적화 (`priority`, `sizes` 속성 활용)
*   **Dynamic Import**: `next/dynamic`을 이용하여 초기 로딩에 불필요한 모듈 (3D 모델)은 지연 로딩 (`ssr: false`)

## GitHub 통계 및 배포 (추가 정보)

*   **anuraghazra/github-readme-stats**: GitHub 통계 카드 동적 생성 API 활용
*   **자체 호스팅 권장**: GitHub API Rate Limiter (시간당 5,000회 요청) 제한 회피를 위해 Vercel 등에 자체 호스팅하여 사용 권장
*   **다양한 테마 및 설정 옵션 제공**: 통계 카드 스타일 커스터마이징 가능

## 문제 해결

### 1. 아이콘 일관성 문제
* 문제: NavButton 컴포넌트에서 모든 아이콘이 Home 아이콘으로 표시되었습니다.
* 원인: getIcon 함수의 switch 문에서 icon 이름(예: "projects", "resume")과 BtnList의 icon 값이 일치하지 않았습니다.
* 해결방법: NavButton.jsx 파일의 getIcon 함수에서 case 문을 수정하여 data.js의 BtnList에 있는 icon 값과 일치시켰습니다.
### 2. 폼 제출 후 페이지 새로고침 문제
* 문제: 폼을 제출하면 성공 메시지가 표시되지 않고 페이지가 새로고침되었습니다.
* 원인: 기본 HTML 폼 제출 동작이 발생하고 있었습니다.
* 해결방법: onSubmit 함수에 이벤트 객체 e를 매개변수로 추가하고 e.preventDefault()를 호출하여 기본 제출 동작을 방지했습니다.
### 3. FormSubmit API 호출 오류
* 문제: 폼 제출 시 "전송 실패" 메시지가 표시되었습니다.
* 원인: FormSubmit API 호출 방식과 데이터 형식이 올바르지 않았습니다.
* 해결방법:
* API 엔드포인트를 https://formsubmit.co/${emailTo}에서 https://formsubmit.co/ajax/${emailTo}로 변경
* JSON 데이터 대신 FormData 객체를 사용하여 폼 데이터 전송
* 불필요한 Content-Type 헤더 제거
### 4. PDF 파일 표시 문제
* 문제: 이력서 PDF 파일이 웹페이지에서 제대로 표시되지 않았습니다.
* 원인: PDF 파일이 손상되었거나 인코딩에 문제가 있었습니다.
* 해결방법: 로컬 PDF 파일 경로 대신 Google 문서 링크를 사용하여 이력서를 외부 호스팅으로 연결했습니다.
### 5. 다중 링크 버튼 기능 구현
* 문제: 프로젝트 카드에 영상, PDF 등 여러 링크 버튼이 필요했으나 기존 컴포넌트는 단일 링크만 지원했습니다.
* 해결방법:
* ProjectLayout 컴포넌트를 수정하여 여러 링크 버튼(videoLink, pdfLink, demoLink)을 조건부로 렌더링
* 프로젝트 데이터에 각각의 링크 속성 추가
* 없는 링크는 null로 설정하여 해당 버튼이 표시되지 않도록 처리
### 6. 레이아웃 및 텍스트 정렬 문제
* 문제: 텍스트가 왼쪽으로 치우쳐 있어 가독성이 떨어졌습니다.
* 해결방법:
* ItemLayout 컴포넌트의 클래스에 items-center와 text-center 추가
* 텍스트에 text-center 클래스 적용으로 중앙 정렬 구현
### 7. 날짜 형식 표시 문제
* 문제: 프로젝트 날짜가 영어 형식(예: "Thu Jun 01 2024")으로 표시되었습니다.
* 원인: ProjectLayout 컴포넌트에서 JavaScript의 Date 객체와 toDateString() 메소드를 사용하여 날짜를 변환했습니다.
* 해결방법: new Date(date).toDateString() 부분을 제거하고 날짜 문자열을 직접 표시하도록 수정했습니다.

## 끝

Next.js, Three.js, Tailwind CSS, Framer Motion, React Hook Form 등 다양한 기술을 활용하여 포트폴리오 웹사이트를 구축했습니다.

## Resources Used in This Project

#### 3D Models

- ["Tim Mckee - Boy Wizard"](https://skfb.ly/6YATu) by [elbertwithane is licensed under Creative Commons Attribution ](http://creativecommons.org/licenses/by/4.0/).
- ["Stylized wizard hat"](https://skfb.ly/ozxOQ) by [Enkarra is licensed under Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).
- ["Wizard Staff"](https://skfb.ly/6QYZw) by [Toymancer Studio is licensed under Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

#### AI Images

- Created with the help of [Playground AI](https://playgroundai.com/)

#### Github Stats & Details

- [Github ReadMe Stats](https://github.com/anuraghazra/github-readme-stats)
- [Skills Icons](https://github.com/tandpfun/skill-icons)
- [Github Readme Streak Stats](https://github.com/denvercoder1/github-readme-streak-stats)

#### Development Resources

- Fonts from [Google Fonts](https://fonts.google.com/) <br />
- Icons from [Lucide Icons](https://lucide.dev/) <br />
- Notifications from [Sonner](https://sonner.emilkowal.ski/) <br />
- Form created using [react-hook-form](https://react-hook-form.com/) <br />
- Animations using [framer-motion](https://www.framer.com/motion/) <br />
- Emails using [Emailjs](https://www.emailjs.com/) <br />
- Convert 3d models to JSX using [Gltf JSX](https://github.com/pmndrs/gltfjsx)

#### Audio 

- Music by <a href="https://pixabay.com/users/shidenbeatsmusic-25676252/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=20772">Shiden Beats Music</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=20772">Pixabay</a>

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the dependencies and run the development server:

```bash
npm run install # to install all dependencies

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.