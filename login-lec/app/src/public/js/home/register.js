"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", register);

function register() {
    if(!id.value) return alert("아이디를 입력해주십시오.");
    if(psword.value !==confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");
    

    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
    };
    

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(req)
    })
        .then((res) => res.json()) // 24강에 설명
        .then((res) => {
            if (res.success) {
                location.href = "/";
            }   else {
                    alert(res.msg);
                
            }
        })
        .catch((err) => {
            console.error(new Error("회원가입 중 에러 발생"));
        });
        
}