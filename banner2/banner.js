//슬라이드 크기
const slide = document.querySelector(".slides")
let slideWidth = slide.clientWidth;

// 버튼 선언
const leftBtn = document.querySelector(".slide_button.left");
const rightBtn = document.querySelector("slide_button.right");

// 이미지 요쇼 전체
let slideItems = document.querySelectorAll(".slides_item");
// 최대 슬라이드 갯수
const maxSlide = slideItems.length;

// 슬라이드 위치를 알려주는 변수
let currSlide = 1;

// 하단 동그라미 좌표
const pagination = document.querySelector(".slidecount");
for(let i = 0; i < maxSlide; i++){
    if(i === 0)pagination.innerHTML += `<li class="active">•</li>`;
    else pagination.innerHTML += `<li>•</li>`;
}

//동그라미 총갯수
const paginationItems = document.querySelectorAll(".slidecount > li");

const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];
// 요소생성
const startElem = document.createElement(startSlide.tagname);
const endElem = document.createElement(endSlide.tagname);
//각 요소 동일값 부여
endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;

startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;

// 0번 인덱스 전에 마지막인덱스
// 마지막 인덱스 후에 0번 인덱스
slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);

//슬라이드 전체값 변경
slideItems = document.querySelectorAll(".slides_item");
let offset = slideWidth * currSlide;
slideItems.forEach((i) => {
    i.setAttribute("style", `left: ${-offset}px`);
});

// > 클릭시 함수
function nextMove(){
    currSlide++;
    if (currSlide < maxSlide){
        const offset = slideWidth * currSlide;
        slideItems.forEach((i) => {
            i.setAttribute("style", `left:${-offset}px`);
        });
        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
    }else{
        currSlide = 0;
        let offset = slideWidth * currSlide;
        slideItems.forEach((i) => {
            i.setAttribute("style", `transition: ${0}s; left : ${-offset}px`);
        });
        currSlide++;
        offset = slideWidth * currSlide;
        setTimeout(() => {
            slideItems.forEach((i) => {
                i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
            });
        }, 0);
        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
    }
}
 // < 클릭시 함수
function prevMove(){
    currSlide--;
    if (currSlide > 0){
        const offset = slideWidth * currSlide;
        slideItems.forEach((i) => {
            i.setAttribute("style", `left:${-offset}px`);
        });
        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
    }else{
        currSlide = maxslide + 1;
        let offset = slideWidth * currSlide;
        slideItems.forEach((i) => {
            i.setAttribute("style", `transition: ${0}s; left : ${-offset}px`);
        });
        currSlide--;
        offset = slideWidth * currSlide;
        setTimeout(() => {
            slideItems.forEach((i) => {
                i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
            });
        }, 0);
        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
    }
}

// 좌우버튼 함수지정
rightBtn.addEventListener("click", () => {
    nextMove();
});
leftBtn.addEventListener("click", () => {
    prevMove();
});
window.addEventListener("resize", () => {
    slideWidth = slide.clientWidth;
});

for (let i = 0; i < maxSlide; i++){
    paginationItems[i].addEventListener("click", () => {
        currSlide = i + 1;
        const offset = slideWidth * currSlide;
        slideItems.forEach((i) => {
            i.setAttribute("style", `left: ${-offset}px`);
        });
        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
    });
}

let startPoint = 0;
let endPoint = 0;

slide.addEventListener("mousedown", (e)=>{
    startPoint = e.pageX;
});
slide.addEventListener("mouseup", (e)=>{
    endPoint = e.pageX;
    if(startPoint < endPoint){
        prevMove();
    } else if(startPoint > endPoint){
        nextMove();
    }
});

