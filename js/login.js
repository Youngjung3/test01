const loginForm = document.querySelector("#login_form"),
    loginInputID = document.querySelector("#login_form .user_id input"),
    loginInputPW = document.querySelector("#login_form .user_pw input"),
    loginLi = document.querySelector(".loginLi"),
    logOutLi = document.querySelector(".logOutLi"),
    loginWrap = document.querySelector(".login_wrap"),
    loginWrapOverlay = document.querySelector(".login_wrap_overlay"),
    close = document.querySelector(".close_btn"),
    greeting = document.querySelector(".greeting");

    const HIDDEN_CLASSNAME = "hidden",
        USERID_KEY = "userid", // 로컬스토리지의 userid 키값
        USERPW_KEY = "userpw"; // 로컬스토리지의 userpw 키값

logOutLi.classList.add(HIDDEN_CLASSNAME);

// 닫기 버튼
close.addEventListener("click", function(){
    loginWrap.classList.add(HIDDEN_CLASSNAME);
    loginWrapOverlay.classList.add(HIDDEN_CLASSNAME);
})

// loginSubmit의 기능
function loginSubmit(e){
    e.preventDefault();
    const writeUserID = loginInputID.value,
        writeUserPW = loginInputPW.value;

    loginWrap.classList.add(HIDDEN_CLASSNAME);
    loginLi.classList.add(HIDDEN_CLASSNAME);
    logOutLi.classList.remove(HIDDEN_CLASSNAME);
    loginWrapOverlay.classList.add(HIDDEN_CLASSNAME);

    greeting.innerHTML = `<a href="#" class="text-black"><img src="./img/icon/user.svg" alt=""></a>`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

    localStorage.setItem(USERID_KEY, writeUserID); // 로컬스토리지에 인풋에 작성된 사용자이름을 저장
    localStorage.setItem(USERPW_KEY, writeUserPW); // 로컬스토리지에 인풋에 작성된 사용자이름을 저장
}
// 로그인 버튼 클릭 함수
function loginBtnClick(){
    loginWrap.classList.remove(HIDDEN_CLASSNAME);
    loginWrapOverlay.classList.remove(HIDDEN_CLASSNAME);
}
// 로그아웃 버튼 클릭 함수
function loginOutBtnClick(){
    logOutLi.classList.add(HIDDEN_CLASSNAME);
    loginLi.classList.remove(HIDDEN_CLASSNAME);
    loginWrap.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
}
// 로컬스토리지에 저장된 정보 가져오기
const savedUserID = localStorage.getItem(USERID_KEY),
    savedUserPW = localStorage.getItem(USERPW_KEY);

if(savedUserID === null && savedUserPW === null){
    // 로컬스토리지에 저장된 정보 없을 때
    loginLi.addEventListener("click", loginBtnClick);
    logOutLi.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
}else{
    // 로컬스토리지에 저장된 정보 있을 때
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginLi.classList.add(HIDDEN_CLASSNAME);
    logOutLi.classList.remove(HIDDEN_CLASSNAME);
    logOutLi.addEventListener("click", loginOutBtnClick);
    loginWrapOverlay.classList.add(HIDDEN_CLASSNAME);
}

// 로그인 후 로그아웃 할 때 함수 다시 실행
logOutLi.addEventListener("click", loginOutBtnClick);

