const content = "소통과 이해를 겸비한 iOS 개발자를 꿈꾸고 있는 고도현입니다!";
const text = document.querySelector(".title");
let index = 0;

function typing() {
    text.textContent += content[index++];
    if (index > content.length) {
        text.textContent = "\u00a0";
        index = 0;
    }
}

setInterval(typing, 100)