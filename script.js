const section4 = document.querySelector('.section-4')

const section4Left1 = document.querySelector('.section-4-left-1')
const section4Left2 = document.querySelector('.section-4-left-2')
const section4Left3 = document.querySelector('.section-4-left-3')
const section4Left4 = document.querySelector('.section-4-left-4')

const section4RightImg = document.querySelector('.section-4-right-img')

const section4RightImg1 = "https://www.nihan.care/wp-content/uploads/2020/12/Nihan-Telehealth-791x1024.png";
const section4RightImg2 = "https://www.nihan.care/wp-content/uploads/2020/12/Nihan-Telehealth-791x1024.png";
const section4RightImg3 = "https://www.nihan.care/wp-content/uploads/2020/12/Nihan-Telehealth-791x1024.png";
const section4RightImg4 = "https://www.nihan.care/wp-content/uploads/2020/12/Nihan-Telehealth-791x1024.png";

// add scroll event listener
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY
    const section4OffsetTop = section4.offsetTop
    const section4Height = section4.clientHeight

    if ((scrollPosition > section4OffsetTop) && (scrollPosition < section4Height + section4OffsetTop)) {
        if (scrollPosition > section4OffsetTop && scrollPosition < section4OffsetTop + 450) {
            section4Left1.style.opacity = 1
            section4Left1.style.transition = 'opacity 0.4s ease-in-out'
        } else if (scrollPosition > section4OffsetTop + 550 && scrollPosition < section4OffsetTop + innerHeight + 650) {
            section4Left2.style.opacity = 1
            section4Left2.style.transition = 'opacity 0.4s ease-in-out'
        } else if (scrollPosition > section4OffsetTop + innerHeight * 2 - 550 && scrollPosition < section4OffsetTop + innerHeight * 2 + 650) {
            section4Left3.style.opacity = 1
            section4Left3.style.transition = 'opacity 0.4s ease-in-out'
        } else if (scrollPosition > section4OffsetTop + innerHeight * 3 - 550  && scrollPosition < section4OffsetTop + innerHeight * 3 + 650) {
            section4Left4.style.opacity = 1
            section4Left4.style.transition = 'opacity 0.4s ease-in-out'
        } else {
            section4Left1.style.opacity = 0
            section4Left2.style.opacity = 0
            section4Left3.style.opacity = 0
            section4Left4.style.opacity = 0
        }

        if (scrollPosition > section4OffsetTop && scrollPosition < section4OffsetTop + innerHeight) {
            section4RightImg.src = section4RightImg1
            section4RightImg.style.transition = 'opacity 0.4s ease-in-out'
        } else if (scrollPosition > section4OffsetTop + innerHeight && scrollPosition < section4OffsetTop + innerHeight * 2) {
            section4RightImg.src = section4RightImg2
            section4RightImg.style.transition = 'opacity 0.4s ease-in-out'
        } else if (scrollPosition > section4OffsetTop + innerHeight * 2 && scrollPosition < section4OffsetTop + innerHeight * 3) {
            section4RightImg.src = section4RightImg3
            section4RightImg.style.transition = 'opacity 0.4s ease-in-out'
        } else if (scrollPosition > section4OffsetTop + innerHeight * 3 && scrollPosition < section4OffsetTop + innerHeight * 4) {
            section4RightImg.src = section4RightImg4
            section4RightImg.style.transition = 'opacity 0.4s ease-in-out'
        } else {
            section4RightImg.src = section4RightImg1
        }
    }
})