### 프로젝트 생성
```bash
npx create-next-app nextjs-blog --use-npm
--example "https://github.com/vercel/next-learn/tree/main/basics/learn-starter"
```

### <Link> 컴포넌트와 <a> Tag의 차이
- <Link> 컴포넌트는 Next.js에서 <a> 태그에 최적화 기능이 포함된 페이지 이동 컴포넌트이다.
-- <Link> 컴포넌트는 페이지에 필요한 데이터만 추가적으로 불러온다.
--- <Link> 컴포넌트는 성능을 최적화한다.
---- Client Side Navigate
----- 브라우저에서 URL을 직접 이동하는 것과 달리 JS상에서 page 컴포넌트를 교체한다.
------ 해당 기능을 테스트하기 위해서는 <body> 태그에 background 스타일을 변경하여 테스트한다.
------- <Link> 컴포넌트는 스타일이 변경되지 않고 배경색이 변경되지 않지만 <a> 태그는 스타일이 초기화되고 배경색이 초기화된다.
---- Code Splitting
----- Next.js는 Automatic Code Splitting을 제공한다.
------ 페이지 이동 시 목적지 페이지에 필요한 chunk만 추가 로드한다.
---- Prefetching
----- Viewport에 <Link> 컴포넌트가 노출되었을 때 href로 연결된 페이지의 chunk를 로드한다.
------ 브라우저에 <Link> 컴포넌트가 노출되었을 때 해당 컴포넌트에 필요한 데이터를 로드
-- 외부 링크로 연결할 때는 <a> 태그를 이용해야 한다.
- <a> 태그는 페이지를 다시 불러온다.

### <Image> 컴포넌트
- <Image> 컴포넌트는 성능을 최적화한다.
-- Size Optimization
--- WebP, AVIF 등 최신 이미지 형식을 이용하여 자동으로 제공
-- Faster Page Loads
--- Viewport에포함되었을 때 Prefetching처럼 Lazy load를 한다.
--- <Link> 컴포넌트의 Prefetching 참고
-- 동일한 이미지를 사용하는 경우 하나만 불러옴