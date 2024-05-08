# 페이히어 프론트엔드 과제

[🔗 과제 배포 링크](https://payhere-ten.vercel.app)

<img src="/src/assets/readme/preview.png" alt="과제 프리뷰" width="80%" height="80%">

<p>(화면 미리보기)</p>

### [개발 환경]

-   언어 : TypeScript (v5.2.2)
-   라이브러리 : React (v18.2.0)
-   빌드 도구: Vite (v5.1.0)
-   컴파일러 : SWC

### [설치 및 실행]

```
npm install
npm run dev
```

### [디렉토리 구조]

<img src="/src/assets/readme/directory.png" alt="디렉터리 구조" width="50%" height="50%">

### [요구사항 체크 리스트]

-   [x] 캘린더에서 시작일과 종료일을 선택하여, 해당 기간 내의 공휴일 정보를 검색할 수 있어야합니다.

    -   [x] 시작일과 종료일의 간격은 최대 2년입니다.  
             <img src="/src/assets/readme/check-1.png" alt="요구 사항 구현 이미지1" width="80%" height="80%">
    -   [x] 종료일은 최대 2025년까지만 선택할 수 있습니다.  
             <img src="/src/assets/readme/check-2.png" alt="요구 사항 구현 이미지2" width="80%" height="80%">
            <p>(캘린더 버튼 비활성화)</p>

-   [x] 검색 결과 화면에서는 아래의 내용을 확인할 수 있어야합니다.
    -   [x] 시작일과 종료일 사이에 해당하는 공휴일 수를 확인할 수 있어야합니다.
    -   [x] 지정한 시작일과 종료일의 날짜를 확인할 수 있어야합니다.  
             <img src="/src/assets/readme/check-3.png" alt="요구 사항 구현 이미지3" width="80%" height="80%">
-   [x] 검색 결과 화면에 노출된 공휴일의 수를 클릭할 경우, 아래 정보를 확인할 수 있어야합니다.
    -   [x] 지정한 기간에 해당하는 공휴일의 상세 정보를 표시하되, 모든 공휴일을 한 페이지에서 볼 수 있어야 합니다.
    -   [x] 각 공휴일마다 날짜, 공휴일명은 필수로 표시되어야 하며, 그 이외의 데이터 중 필요하다고 생각되는 부분은 추가해주세요.
            <img src="/src/assets/readme/check-4.png" alt="요구 사항 구현 이미지4" width="80%" height="80%">

### [라이브러리 구성 및 선정 이유]

-   #### Vite
    빠른 개발 서버 구동과 ESM을 활용한 HMR을 지원하기 때문에 선택했습니다.
-   #### React
    널리 사용되는 프론트엔드 라이브러리이자 지원 공고에 기재된 라이브러리라 선택했습니다.
-   #### TailwindCSS
    더 익숙하고 빠른 UI 작업에 적합한 건 Chakra UI라고 생각하지만, 커스터마이징이 편리하고 사용 빈도가 높으며 현재 공부중이기 때문에 TailwindCSS 선택했습니다.
-   #### React Query
    연도별 공휴일 정보를 캐싱하여 추가 조회 없이 캘린더에 표시 및 유저가 선택한 기간에 따라 필터링하기 위해 추가했습니다.
-   #### React Calendar
    문서화가 잘 되어있고 사용 경험이 있어 편한 건 React Datepicker이지만 요구사항이 많지 않은 간단한 프로젝트이기 때문에 경량화된 라이브러리인 React Calendar를 사용했습니다.

### [추가 구현 사항]

-   #### 폰트 최적화
    빠른 로드를 위해 WOFF, WOFF2 확장자의 서브셋 폰트 파일을 사용했습니다. 메인 폰트 Preload를 위해 빌드 단계에서 동적으로 추가할까 고민했으나, 간단한 프로젝트이기에 수동으로 html에 link 태그를 추가했습니다.
-   #### 에러바운더리 설정

    <img src="/src/assets/readme/error-boundary.png" alt="추가 구현 사항-에러바운더리" width="50%" height="50%">

    오류 예외처리와 안정적인 사용자 경험을 위해 에러바운더리를 구현했습니다.

-   #### Husky와 Lint Staged를 활용한 Lint 자동화
    코드 일관성을 유지하기 위해 매 커밋마다 Husky를 사용하여 lint-staged 스크립트가 실행되도록 설정하였습니다.
-   #### Github Actions를 사용한 CI/CD Workflow 추가
    'dev' 브랜치에 PR시 빌드 작업을 수행하는 CI workflow를 추가했고, 빌드 실패시 merge를 제한하는 브랜치 규칙을 적용하였습니다.
    'main' 브랜치에 puse되면 Vercel 앱에 배포되며, 자동으로 release와 tag가 추가되도록 설정하였습니다.

### [트러블 슈팅 & 고민했던 부분]

-   #### 데이터 조회 방식에 대한 고민

    데이터 조회 로직 구상 시, 여러 연도의 공휴일 데이터를 useQuery와 useQueries 중 어떤 것을 사용하여 조회할지 고민했습니다. useQuery와 Promise.all을 함께 사용하면 단일 쿼리로 처리되어 상태 관리가 용이하다는 장점이 있고, useQueries를 사용하면 각 쿼리가 독립적으로 실행되어 결과를 빠르게 확인할 수 있다는 장점이 있습니다. useQueries를 사용하면 단일 쿼리에 비해 상태 관리가 복잡해질 수 있다는 단점이 있지만, 에러 바운더리와 서스펜스를 통해 보완할 수 있다고 생각했습니다. 또한, 연도를 Query Key로 사용해 연도 별 캐싱이 가능하다는 이점을 고려하여 최종적으로 useQueries를 선택했습니다.

-   #### TailwindCSS와 일반 CSS 파일을 함께 사용하는 것에 대한 고민
    실제 프로젝트에서 TailwindCSS를 사용해 본 경험이 없었기에, 복잡한 CSS 구현이나 동적 스타일링 적용에 대한 고민이 많았습니다. 특히 React Calendar와 같은 외부 라이브러리를 사용할 때, TailwindCSS의 Utility First 방식은 자식 요소 선택이나 중첩 스타일 적용에 한계가 있다고 느꼈습니다. TailwindCSS도 Selector를 제공하지만, 나중에 코드를 다시 봤을 때 의도를 파악하기 어려울 거 같다는 생각이 들어 CSS 파일을 함께 사용하기로 결정했습니다.
    <img src="/src/assets/readme/tailwind-selector-ex.png" alt="트러블슈팅-TailwindCSS" width="80%" height="80%">
    <p>(TailwindCSS Selector를 사용하는 코드 예시)</p>
    다만 CSS 파일을 함께 사용하되, Button 같은 기본 UI 컴포넌트나 외부 라이브러리 수정에 한정하여 사용했습니다. 또한 '@apply' 디렉티브를 활용해 CSS 내부에서 TailwindCSS 스타일을 적용했고, CSS 파일을 컴포넌트 별로 관리하며 스타일 충돌을 방지하고 프로젝트의 스타일 일관성을 유지하려 노력했습니다.
