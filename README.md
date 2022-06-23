# ****🎡 크몽(kmong) - 클론코딩****

---

## 🎑 클론코딩으로 크몽을 선택하게 된 목적 & 개발 백그라운드

### 목적 설명

유저 드리븐(User driven)하면서 프로바이더 드리븐(provider driven)한 웹페이지를 제작하고자 크몽을 선택하게 되었습니다. 이는 개발자의 기본적인 역량을 키우려는 것과 동시에 새로운 기능구현을 하는 것을 목표한 결과입니다.

부트캠프 항해99의 처음 한 달이 조금 넘은 시간동안 수강생들은 회원가입, 로그인 그리고 CRUD 기능을 중점적으로 다룹니다. 그렇기에 클론에 대한 목표로 인스타그램, 슬랙, 당근마켓과 같은 유저와 프로바이더가 상호작용하는 서비스를 클론하는 경향이 생깁니다. 이에 대한 참고자료로서 앞선 항해99 수강생들의 작품을 확인할 수 있었습니다. 

팀원들과 기나긴 논의를 끝으로 저희 팀은 이전 수강생들이 하지 않은 클론의 목적으로 ‘크몽'을 선택했습니다. 대서양을 건넜던 콜롬버스의 마음을 가져보기로 한 것입니다. 참고자료 많지 않기에 막막하지만 작은 성공을 꿈꾸기에 크몽은 저희에게 실현 가능한 목표처럼 보였습니다.

### 개발 백그라운드

크몽의 컴포넌트가 많은 관계로 ‘크몽 엔터프라이즈([kmong.com/enterprise](http://kmong.com/enterprise))’을 클론했습니다. 구현된 기능의 간단한 개요는 아래와 같습니다.

1. ‘프로젝트 의뢰하기’ 버튼 클릭 시, 요소 선택 후 등록.
2. 의뢰 된 프로젝트들의 리스트 반환.
3. 회원가입 진행과 로그인.

보다 자세한 사항은 하기 ‘**3. Wireframe - 크몽’**에서 참고하실 수 있습니다.

---

## 👥 **1. 제작 기간 & 팀원 소개**

- 2022년 06월 16일 ~ 2022년 06월 23일

| 이름 | 개인 블로그 링크 | 깃허브 링크 | 프론트&백엔드 |
| --- | --- | --- | --- |
| 조해솔 | https://velog.io/@solpine | https://github.com/sol-pine | 프론트 |
| 한지용 | https://velog.io/@jigom | https://github.com/jigomgom | 프론트 |
| 이가연 | https://2022gygy.tistory.com/ | https://github.com/gygy2022 | 프론트 |
| 이동재 | https://velog.io/@djlesque | https://github.com/Epikoding | 백엔드 |
| 박세열 | https://park-se-yeol.tistory.com/ | https://park-se-yeol.tistory.com/ | 백엔드 |
| 김민지 | https://velog.io/@alswlwkd20 | https://github.com/minji-kim525 | 백엔드 |

> **조원 역할 및 기능 개발 설명**
> 
> 
> > **조해솔**
> > 
> > - Project List view, Detail view, Create view 작업
> > - 프로젝트 의뢰 생성 구현
> > - 프로젝트 의뢰 파일 첨부 및 썸네일 미리보기 구현
> 
> > **한지용**
> > 
> > - Main view 작성
> > - 서버간 통신 테스트 및 사전 가이드라인 작성
> > - 로그인, 회원가입, 의뢰 수정 및 삭제 구현
> 
> > **이가연**
> > 
> > - Login view, SignUp view, MyKmong view  작업
> > - 서버에서 받아오는 데이터를 화면에 뿌리는 작업
> > - 페이지네이션 구현
> 
> > **이동재**
> > 
> > - 로그인 & 회원가입 기능 구현
> > - security 설정
> 
> > **박세열**
> > 
> > - 홈 화면 조회 기능 및 프로젝트 리스트 조회  기능
> > - 파일 업로드 및 검색 기능, 소셜 로그인 기능
> 
> > **김민지**
> > 
> > - 프로젝트 CRUD, 페이징 처리
> > - MVC 패턴 설계

---

## ****🧰**** **2. 사용 기술 및 툴**

### **🌱 Back-end 🌱**

- Java 8
- SpringBoot
- Spring Security
- Gradle
- JPA
- MySQL 8.0
- AWS S3
- JWT
- OAuth2

### **🌱 Front-end 🌱**

- React
- react-router-dom
- Axios
- Redux
- Styeld Component (for es6 and css)
- Fortawesome
- redux-toolkit

### **🌱** 배포 **🌱**

- AWS
- FileZilla

---

## 🖇️ **3. Wireframe - 크몽**

## 메인화면

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ef1980c5-6ebd-4614-9a0c-e58c29f68cfa/Untitled.png)

## 프로젝트 리스트 페이지

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e2593a3-9401-479f-b055-79c6aeb827fe/Untitled.png)

## 회원가입

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a99bf5f0-a35c-4111-bf56-5c41cc995fae/Untitled.png)

## 로그인

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/80dc787d-c06d-46c1-81fe-8b32bfa033ad/Untitled.png)

## 의뢰 생성하기

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/34e13ef3-5981-4e3f-af63-7ecd2937fe8f/Untitled.png)

## 상세 페이지

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b2a4cc2b-e07e-41c6-b4c1-373a6ba7c4e5/Untitled.png)

## 마이크몽

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/309201f7-492b-4b09-a5d2-e1c92acc8a91/Untitled.png)

---

## 🖇️ **4. S.A (Starting Assignment)**

<aside>
🔗 [https://docs.google.com/spreadsheets/d/1xkkSbZWIB8ChC1NRSAErkekziXt4bmB7EdIGHJpftzs/edit#gid=1824601528](https://docs.google.com/spreadsheets/d/1xkkSbZWIB8ChC1NRSAErkekziXt4bmB7EdIGHJpftzs/edit#gid=1824601528)

</aside>

---

## 🖇️ **5. 실행화면 유튜브**

<aside>
🔗 [https://www.youtube.com/watch?v=aTwMly1ICzE](https://www.youtube.com/watch?v=aTwMly1ICzE)

</aside>

---

## 💯 **6. 핵심기능**

- 회원가입, 로그인 & 로그아웃
    - jwt을 사용한 유효성 검사
    - 이메일 양식 정규식으로 유효성 검사
    
- 프로젝트 CRUD
    - 각 프로젝트마다 상세 페이지 구성 후 세부 사항 확인
    - 정렬 기능을 추가하여 키워드 별로 확인 가능
    
- 홈페이지와 프로젝트 리스트 조회
    - 각 상황에 맞는 정보 전달
- 파일 업로드
    - 여러 개의 파일들을 리스트 형태로 전달 받아 s3에 저장
    - 이후 서버에서 s3 URL을 난수화된 파일 이름과 함께 저장
    - 상세 페이지에서 파일 확인 가능
- 파일 업로드(2)
    - 프론트에서 파일을 업로드하기 위해 JSON.stringfy와 Blob으로 2진화 데이터 생성

---

## 🎮 **7. Trouble shooting**

## Front-end

> **Redux의 state( 1 )**
> 
> 
> > **이슈 내용** :  Redux의 state 값을 가져올 때 갱신 전 값을 읽어와 문제가 발생
> > 
> 
> > **해결 방법** :  initialState에 값을 추가하여 관리, useEffect에 dependency를 두어 인자값이 바뀔 때 useState로 값을 인지
> > 

> **Redux의 state( 2 )**
> 
> 
> > **이슈 내용** :  디테일 페이지 로딩과 서버로부터 전달받은 데이터 값이 들어오는 것에 딜레이가 있어 로딩 시, 데이터 배열의 인덱스에 접근하지 못해 에러가 발생
> > 
> 
> > **해결 방법** :  리덕스에 배열의 데이터를 넣고 스토어에서 빼오는 방식으로 해결
> > 

> **Radio button checked 속성**
> 
> 
> > **이슈 내용** :  radio button의 checked 속성을 전달하는 문제
> > 
> 
> > **해결 방법** :  Radio button 으로 묶인 부분은 map을 활용하여 생성하고 useState를 통해 checked 여부를 수정
> > 

> **데이터 parsing**
> 
> 
> > **이슈 내용** :  서버에서 받아온 Data를 추출
> > 
> 
> > **해결 방법** :  dictionary로 묶인 부분을 미리 선언해둔 배열에서 some과 filter를 이용하여 중복되는 부분을 추출하여 활용
> > 

> **파일 업로드**
> 
> 
> > **이슈 내용** :  formdata 내부에 딕셔너리 데이터를 append하여 전달할 때 400 에러가 발생
> > 
> 
> > **해결 방법** :  ****JSON.stringify 로 변환 후 append하여 해결
> > 

## Back-end

> `editProject`에서 `response` 값
> 
> 
> > **이슈 내용** : 수정할 때, 중복체크에서 `String`으로 받은 값을 프론트에 어떻게 `response` 해줄지에 대한 이슈
> > 
> 
> > **해결 방법** :  “,” 로 `split`한 다음, `map`으로 `string(key):true(value)`로 보내는 것으로 결정
> > 

> **modal 접근 불가**
> 
> 
> > **이슈 내용**:  `projects/modal`로 했을 때 접근이 안 되었던 이슈.
> > 
> 
> > **해결 방법** :  `List`는 복수 개의 fetch 가 안됨으로 컬럼 타입 `Set`으로 변경
> > 

> **올바른 jwt 토큰이 아닙니다 에러**
> 
> 
> > **이슈 내용**:  기타 조회 기능들을 사용할 때 500 internal server error 이슈
> > 
> 
> > **해결 방법** :  `skipPathList`에 `GET` 매핑 api 추가
> > 

> **프로젝트 추가 시 파일 제외**
> 
> 
> > **이슈 내용**:  기존에 있던 컨트롤러에서는 파일을 꼭 올려야 했던 이슈
> > 
> 
> > **해결 방법** :  `@RequestPart(value = "files",required = false)  required = false` 추가
> > 

> **검색 기능 관련 키워드 조회 이슈**
> 
> 
> > **이슈 내용**:  JPA 키워드 중 `LIKE(”%KEYWORD%”)`와 같은 역할을 하는 문법 필요 이슈
> > 
> 
> > **해결 방법** :  `findByTitleContainingOrderByCreatedAt(String keyword)` 문법을 통해 해결, Containing 문법이 SQL의 LIKE 역할을 함
> > 

> **존재하지 않는 회원이 로그인을 할 때 500에러가 발생.**
> 
> 
> > **이슈 내용** :  `JpaRepository`를 상속받은 `UserRepository`에서 `Optional`클래스를 사용한 `User`객체를 사용하는 조건에서 존재하지 않는 회원ID로 로그인을 시도할 때 500에러를 발생함.
> > 
> 
> > **해결 방법** :  `UserRepository`에서 `Optional<User>`을 `User`로 변경. 자세한 설명은 하기 ‘8-2.의 Optional 객체’ 참고.
> > 

---

## ⚙️ **8. 주목할 만한 코드**

## 8-1. Front-end

### 데이터 필터링

- `filter` 와 `some` 을 통해 중복된 값을 추출
    
    ```jsx
    const Valuelist = [ { ...action.payload.responseDtoMap } ];
          const keylist = Object.keys ( Valuelist[0] );
    
          let resultRequired = keylist.filter( x1 => RequiredFunction.some(x2=> x1 === x2 ) )[0];
          let resultCommerce = keylist.filter( x1 => Commerce.some(x2=> x1 === x2 ) )[0];
          let resultSites = keylist.filter( x1 => Sites.some(x2=> x1 === x2 ) )[0];
          let resultUserRelated = keylist.filter( x1 => userRelated.some(x2=> x1 === x2 ) )[0];
    ```
    

### Map을 통한 Radio button Checked 활성화

- `checked` 를 확인
    
    ```jsx
    const CurrentStatus = ["아이디어만 있음", "기획서 보유", "디자인 보유", "개발환경 보유"];
    const RequiredFunction = ["갤러리", "게시판", "일정 관리", "SNS 연동"];
    
    { Commerce.map( ( item, index ) => {
                    return (
                      <Select key={index}>
                        <Input
                          type="radio"
                          name="commerceRelatedFunction"
                          value={item}
                          onChange={handleCommerceRelatedFunction}
                          checked={ setCommerce === item }
                        />
                        <span>{item}</span>
                      </Select>
                    );
                })}
    ```
    

### JSON.stringfy와 Blob을 활용한 데이터 2진화 처리

- 객체를 stringfy와 Blob으로 처리
    
    ```jsx
    const formData = new FormData();
        formData.append(
          "projectDto",
          new Blob(
            [JSON.stringify(projectDto, { contentType: "application/json" })],
            {
              type: "application/json",
            }
          )
        );
        formData.append("files", file);
    ```

---

## 📐 9**. API**

| 기능 | MTHD | URL | request | response | 비고 |
| --- | --- | --- | --- | --- | --- |
| 회원가입, signup | POST | /api/signup | {<br>"username": "test1231246",<br>"password": "test",<br>"passwordCheck": "test",<br>"businessPart": "test",<br>"job": "test"<br>} | {<br>’ok’: true, <br>message: ‘회원가입 성공’ <br>}<br>OR<br> {<br>‘ok’: false, <br>message:’회원가입 실패’<br>} |  |
| 로그인, login | POST | /api/login | {<br>”username”: ”username”, <br>”password”: ”password”,<br>} | {<br>’ok’: true, <br>message: ‘로그인 성공’ <br>}<br>OR<br> {<br>‘ok’: false, <br>message:’로그인 실패’<br>} |  |
| 홈페이지 조회 | GET | / |  | [<br>{<br>”project_id”: Long(int),<br>”imageUrl”<br>”title”:”title”,<br>"budget":<br>”description”:,<br>"workingPeriod":<br>”total_len”: int<br>},<br>]  4개 제한 |  |
| 프로젝트 리스트 페이지 모두 조회 | GET | /projects | {<br>"page": (int) page,<br>"size": (int) size,<br>"sortBy” : (String)"createAt" or "budget"or "volunteerValidDate"<br>} | [<br>{<br>”project_id”: Long(int),<br>”imageUrl”:,<br>"progressMethod":,<br>”leftDaysForEnd”:”volunteerValidDate”-”todayDate”,<br>”title”:”title”,<br>"budget":<br>"bigCategory":<br>"smallCategory":<br>”description”:,<br>"WorkingPeriod":,<br>”taxInvoice”:,<br>”progressmethod”<br>},<br>] | 기본값→최신등록순 |
| 마이페이지 프로젝트 조회 | GET | /mypage/projects |  | [<br>{<br>”project_id”: Long(int),<br>”imageUrl”:”서버 내부 저장된 사진”,<br>”title”:”title”,<br>"budget":"budget",<br>"bigCategory":"bigCategory",<br>"smallCategory":"smallCategory"<br>}<br>] |  |
| 게시글 작성 | POST | /projects/project | header : token<br>{<br>"bigCategory":"[string] 상위 카테고리",<br>"smallCategory":"[string] 하위 카테고리",<br>"progressMethod":"(프로젝트 진행 방식)외주",<br>"projectScope":"(500만원 미만)",<br>"title": "[string] 의뢰서비스의 제목",<br>”description”:"[string] 설명",<br>"currentStatus":"[string] 프로젝트 준비상황",<br>"requiredFunction":"[string] 기본기능",<br>"userRelatedFunction":"[string] 회원 관련 기능",<br>"commerceRelatedFunction":"[string] 커머스 관련 기능",<br>"siteEnvironment":"[string] 사이트 환경",<br>"solutionInUse":"df",<br>"reactable":"[string] 반응형 적용 여부",<br>"budget":100000,<br>"taxInvoice":"true",<br>"volunteerValidDate": "dflfke",<br>"dueDateForApplication":"dfdfe",<br>"workingPeriod":30<br>},<br>”files”:[{<br>”fileUrl”:”fileUrl”,<br>”fileName”:”fileName”<br>},]<br>} | {<br>’ok’: true, <br>message: ‘게시글 수정 완료’ <br>}<br>OR <br>{<br>‘ok’: false, <br>message:’게시글 수정 완료’<br>} | 요청 기능은 한글 스트링 그대로 보내시면 됩니다. |
| 게시글 조회 | GET | /projects/{projectId} |  | "progressMethod":"(프로젝트 진행 방식)외주",<br>"projectScope":"(500만원 미만)",<br>"title": "[string] 의뢰서비스의 제목",<br>”description”:"[string] 설명",<br>"currentStatus":"[string] 프로젝트 준비상황",<br>"requiredFunction":"[string] 기본기능",<br>"userRelatedFunction":"[string] 회원 관련 기능",<br>"commerceRelatedFunction":"[string] 커머스 관련 기능",<br>"siteEnvironment":"[string] 사이트 환경",<br>"solutionInUse":"df",<br>"reactable":"[string] 반응형 적용 여부",<br>"budget":100000,<br>"taxInvoice":"true",<br>"volunteerValidDate": "dflfke",<br>"dueDateForApplication":"dfdfe",<br>"workingPeriod":30<br>},<br>”files”:[{<br>”fileUrl”:”fileUrl”,<br>”fileName”:”fileName”<br>},]<br>} | 요청 기능은 한글 스트링 그대로 보내시면 됩니다. |
| 게시글 수정 | PUT | /projects/project/{projectId} | header : token<br>{<br>"bigCategory":"[string] 상위 카테고리",<br>"smallCategory":"[string] 하위 카테고리",<br>"progressMethod":"(프로젝트 진행 방식)외주",<br>"projectScope":"(500만원 미만)",<br>"title": "[string] 의뢰서비스의 제목",<br>”description”:"[string] 설명",<br>"currentStatus":"[string] 프로젝트 준비상황",<br>"requiredFunction":"[string] 기본기능",<br>"userRelatedFunction":"[string] 회원 관련 기능",<br>"commerceRelatedFunction":"[string] 커머스 관련 기능",<br>"siteEnvironment":"[string] 사이트 환경",<br>"solutionInUse":"df",<br>"reactable":"[string] 반응형 적용 여부",<br>"budget":100000,<br>"taxInvoice":"true",<br>"volunteerValidDate": "dflfke",<br>"dueDateForApplication":"dfdfe",<br>"workingPeriod":30<br>} | {<br>"bigCategory":"[string] 상위 카테고리",<br>"smallCategory":"[string] 하위 카테고리",<br>"progressMethod":"(프로젝트 진행 방식)외주",<br>"projectScope":"(500만원 미만)",<br>"title": "[string] 의뢰서비스의 제목",<br>”description”:"[string] 설명",<br>"currentStatus":"[string] 프로젝트 준비상황",<br>"requiredFunction":"[string] 기본기능",<br>"userRelatedFunction":"[string] 회원 관련 기능",<br>"commerceRelatedFunction":"[string] 커머스 관련 기능",<br>"siteEnvironment":"[string] 사이트 환경",<br>"solutionInUse":"df",<br>"reactable":"[string] 반응형 적용 여부",<br>"budget":100000,<br>"taxInvoice":"true",<br>"volunteerValidDate": "dflfke",<br>"dueDateForApplication":"dfdfe",<br>"workingPeriod":30<br>},<br>”files”:[{<br>”fileUrl”:”fileUrl”,<br>”fileName”:”fileName”<br>},]<br>} | 마이페이지 편집 완료를 눌렀을 때 요청해야 할 API |
| 게시글 수정 전 조회 | GET | /modal/{projectId} | token | {<br>"bigCategory":"[string] 상위 카테고리",<br>"smallCategory":"[string] 하위 카테고리",<br>"progressMethod":"(프로젝트 진행 방식)외주",<br>"projectScope":"(500만원 미만)",<br>"title": "[string] 의뢰서비스의 제목",<br>”description”:"[string] 설명",<br>"currentStatus":"[string] 프로젝트 준비상황",<br>"requiredFunction":"[string] 기본기능",<br>"userRelatedFunction":"[string] 회원 관련 기능",<br>"commerceRelatedFunction":"[string] 커머스 관련 기능",<br>"siteEnvironment":"[string] 사이트 환경",<br>"solutionInUse":"df",<br>"reactable":"[string] 반응형 적용 여부",<br>"budget":100000,<br>"taxInvoice":"true",<br>"volunteerValidDate": "dflfke",<br>"dueDateForApplication":"dfdfe",<br>"workingPeriod":30<br>} | 마이페이지에서 편집 버튼을 눌렀을 때의 게시글 조회 |
| 게시글 삭제 | DELET | /projects/project/{projectId} | header: token | {<br>”ok” : true,<br>message : 삭제 완료<br>} |  |
| 전체 게시글 조회 | GET | /projects |  | [<br>{<br>”서버 내부 저장된 사진”<br>”leftDaysForEnd”:”volunteerValidDate”-”todayDate”(자바 현재 시간),<br>”title”:”title”,<br>"budget":<br>"bigCategory":<br>"smallCategory":<br>”description”:,<br>"WorkingPeriod":<br>},<br>] |  |
| 파일 전송 | POST | /projects/project/file | {<br>폼데이터로 파일 보내기<br>} | {<br>’ok’: true, <br>message: ‘파일 업로드 완료’ <br>}<br>OR <br>{<br>‘ok’: false, <br>message:’파일 업로드 실패’<br>} |  |
| 파일 삭제 | DELETE | /projects/project/file/{projectId} |  | {<br>’ok’: true, <br>message: ‘파일 삭제완료’ <br>}<br>OR <br>{<br>‘ok’: false, <br>message:’파일 삭제실패’<br>} |  |

---

## 💏 **10조 한 줄 회고**

> 누군가의 뒷모습이 보이기 시작하는 것은 사랑 때문만이 아니라는 것이 아니라는 것을 배운 한 주였습니다. 지난 삼 주 동안 스프링을 공부하면서  “아 내가 왜 이렇게 어려운 스프링을 선택해서 이렇게 고생하는 것일까?”란 생각이 들었습니다. 자바와 스프링은 가시적이지 않을 뿐더러 MVC과 역할과 책임을 분할하는 수 많은 클래스를 만들어야하고, 보안은 섣불리 손을 대기 어려운 수준이었으니까요.
> 
> 
> 하지만 리액트와 같이 협업을 하고나니 알았습니다. 리액트가 스프링보다 훨씬 더 많은 시간과 노력을 쏟아야 프로젝트가 끝날 수 있다는 것을 말이에요. 스프링이 구조 설계하고 여유가 있을 때도 리액트에서는 머리를 쥐어짜고 코드를 짜고 있는걸 보니 그들의 등이 보이기 시작했습니다. 백엔드의 구조 설계는 끝이 있지만 심미적 요소가 감미된 프론트에서는 그 끝을 정해야 하니까요.
> 
> 한 주 동안 잠을 아껴가며 프로젝트를 마무리 해주셨던 모든 분들에게 감사 인사를 돌립니다. 항해99의 남은 기간 동안 스트레스 없이 원하시는 결과 얻으시길 기도하겠습니다. - ***이동재***
> 

> 클론 코딩 1주일 동안 많은 것들을 배웠던 것 같습니다. 저번 주차가 프론트와 백 간의 협업의 개념을 중심으로 생각하는 관점을 길러주는 주차였다면 이번 주차는 실제 서비스 중인 사이트들이 어떤 방향으로 비즈니스 로직이 구현되어 있는지 알 수 있는 주차였습니다. 스프링에서 특정 로직을 구현하기 위해 어떠한 함수를 써야 하는가, 웹소켓, 스프링 시큐리티,  S3 등등 목적에 맞게 사용하는 기능 함수들은 어떠한 것인가 이런 고민을 많이 하게 된 주간이었습니다.
물론 사정상 프론트와 백 간의 협의 하에 구현하지 못한 기능들이 많았지만 추후 실전 프로젝트에서는 시간을 길게 잡고 구현하지 못한 기능들을 추가해 클론 코딩에서 실제 서비스와 현재 나의 실력 간에 존재하던 괴리를 좁히고 싶습니다. 특히나 고생이 많으셨던 프론트 분들에게 응원의 메세지를 보내고 싶습니다. - ***박세열***
> 

> 실전 프로젝트 전 마지막 팀 프로젝트이다 보니 아쉬움이 꽤나 남는다.
알고는 있었지만 API 설계의 중요성을 다시 한번 느꼈다.  급하게 API 를 설계해서인지 코드를 짜는 중간중간 틈이 보였고 그 틈을 급하게 메꿔가며 코드를 짜다 보니 좀 더 효율적이고 보기 좋은 코드에 대한 고민이 부족했던 것 같다.
CRUD 기능을 맡게 되면서 CRUD 에 더 익숙해지는 시간을 가질 수 있었고, 프론트 분들이 어떤 부분이 왜 필요한지 자세히 설명해주셔서 어떤 재료를 주는 게 더 편할지에 대한 감이 잡혔다. 한 주 동안 함께 힘내주셨던 8조 팀원들에게 감사드립니다. - ***김민지***
> 

> 짧았던 클론코딩이지만, 여러 CSS 속성을 알 수 있었습니다. 시간이 짧아 많은 부분을 공부하진 못했지만 기회가 된다면 좀 더 다듬을 수 있는 시간을 만들 수 있으면 좋겠습니다. 이번에 기능 구현이 많이 늦어져서 많은 기능을 담을 수 없었던 부분에 대해 백엔드 분들께 사과의 말씀 드리고 싶습니다.  - ***한지용***
> 

> 클론 프로젝트를 하면서 실제 사이트가 얼마나 꼼꼼하고 세밀하게 설계가 되었는지 알 수 있었습니다. 평소에는 그저 이용하기만 했던 사이트를 클론하기 위해 구조를 살피고 만드는 과정에서 사용자가 편리하게 사용할수록 뒤에서 개발자들은 더 일을 많이 해야하는 것이구나! 를 깨달았습니다. 저희가 앞에서 작업할 때 편하게 데이터를 받아서 쓸 수 있도록 같이 열심히 하신 백엔드 분들도 모두 수고하셨습니다! ***-이가연***
> 

> 실전 프로젝트 전 기본 CRUD 기능에 대해 완벽하게 정리할 수 있었던 시간이었습니다. 실제 서비스가 페이지에 그려지는 것을 잠시나마 경험해보니 프론트 개발자로서 UX 적으로 얼마나 디테일하고 치밀하게 접근해야하는 지를 알게 되었습니다.
뒤에서 든든하게 받쳐주시는 백 분들 덕분에 마음 편히 프론트들은 앞만 보고 달릴 수 있었습니다. 한 주동안 너무 고생많으셨고 감사했습니다! 남은 항해 시간도 크몽이들 순항하세요🛳 - ***조해솔***
>
