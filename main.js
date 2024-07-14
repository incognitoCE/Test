function jumpMenu(body, index, element) {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    switch(index) {
        case 1:
            menu.innerHTML = `
                <div class="select-box select-box1">
                    <div class="item">甲</div>
                    <div class="item">乙</div>
                    <div class="item">丙</div>
                    <div class="item">丁</div>
                    <div class="item">戊</div>
                    <div class="item">己</div>
                    <div class="item">庚</div>
                    <div class="item">辛</div>
                    <div class="item">壬</div>
                    <div class="item">癸</div>
                    <div class="item"></div>
                </div>`;
            break;
        case 2:
            menu.innerHTML = `
            <div class="select-box select-box2">
                <div class="item">子</div>
                <div class="item">丑</div>
                <div class="item">寅</div>
                <div class="item">卯</div>
                <div class="item">辰</div>
                <div class="item">巳</div>
                <div class="item">午</div>
                <div class="item">未</div>
                <div class="item">申</div>
                <div class="item">酉</div>
                <div class="item">戌</div>
                <div class="item">亥</div>
                <div class="item"></div>
            </div>`;
            break;
        case 3:
            menu.innerHTML = `
            <div class="select-box select-box3">
                <div class="item">贵</div>
                <div class="item">蛇</div>
                <div class="item">雀</div>
                <div class="item">合</div>
                <div class="item">陈</div>
                <div class="item">龙</div>
                <div class="item">空</div>
                <div class="item">虎</div>
                <div class="item">常</div>
                <div class="item">武</div>
                <div class="item">阴</div>
                <div class="item">后</div>
                <div class="item"></div>
            </div>`;
            break;
    }
    body.appendChild(menu);
    menu.addEventListener("click", (e) => {
        if (e.target.className === "item") {
            element.innerHTML = e.target.innerHTML;
            body.removeChild(menu);
        }
        else if (e.target.className === "menu") {
            body.removeChild(menu);
        }
    });
}

function initClearBtn() {
    const clearBtn = document.querySelector(".clear");
    const allElems = document.querySelectorAll(".element");
    const allParts = document.querySelectorAll(".part");
    const allInputers = document.querySelectorAll(".inputer > input");
    clearBtn.addEventListener("click", () => {
        for (let i = 0; i < allElems.length; i++) {
            allElems[i].innerHTML = "";
        }
        for (let i = 0; i < allParts.length; i++) {
            allParts[i].innerHTML = "";
        }
        for (let i = 0; i < allInputers.length; i++) {
            allInputers[i].value = "";
        }
    });
}

function initPanel(body) {
    const panel = document.querySelector(".panel");
    panel.addEventListener("click", (e) => {
        if (e.target.dataset.id === "GAN") {
            jumpMenu(body, 1, e.target);
        }
        else if (e.target.dataset.id === "ZHI") {
            jumpMenu(body, 2, e.target);
        }
        else if (e.target.dataset.id === "god") {
            jumpMenu(body, 3, e.target);
        }
    })
}


(function main() {
    const body = document.querySelector("body");
    initPanel(body);
    initClearBtn();
})();