const vitab=document.querySelector(".vita");
const pittab=document.querySelector(".pitta");
const kaphab=document.querySelector(".kapha");

const vitainfo=document.querySelector(".vitainfo");
const pittainfo=document.querySelector(".pittainfo");
const kaphainfo=document.querySelector(".kaphainfo");

vitab.addEventListener('click',function(){
    vitab.classList.add('dark');
    pittab.classList.remove('dark');
    kaphab.classList.remove('dark');

    vitainfo.style.display="block";
    pittainfo.style.display="none";
    kaphainfo.style.display="none";
})

pittab.addEventListener('click',function(){
    vitab.classList.remove('dark');
    pittab.classList.add('dark');
    kaphab.classList.remove('dark');

    vitainfo.style.display="none";
    pittainfo.style.display="block";
    kaphainfo.style.display="none";
})

kaphab.addEventListener('click',function(){
    vitab.classList.remove('dark');
    pittab.classList.remove('dark');
    kaphab.classList.add('dark');

    vitainfo.style.display="none";
    pittainfo.style.display="none";
    kaphainfo.style.display="block";
})


    // let toggles = document.getElementsByClassName("toggle");
    // let contentDiv = document.getElementsByClassName("content");
    // let icons = document.getElementsByClassName("icon");

    // for (let i = 0; i < toggles.length; i++) {
    //     toggles[i].addEventListener("click", () => {
    //         if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
    //             contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
    //             toggles[i].style.color = "#0084e9";
    //             icons[i].classList.remove("fa-plus");
    //             icons[i].classList.add("fa-minus");
    //         } else {
    //             contentDiv[i].style.height = "0px";
    //             toggles[i].style.color = "#111130";
    //             icons[i].classList.remove("fa-minus");
    //             icons[i].classList.add("fa-plus");
    //         }

    //         for (let j = 0; j < contentDiv.length; j++) {
    //             if (j !== i) {
    //                 contentDiv[j].style.height = 0;
    //                 toggles[j].style.color = "#111130";
    //                 icons[j].classList.remove("fa-minus");
    //                 icons[j].classList.add("fa-plus");
    //             }
    //         }
    //     });
    // }
