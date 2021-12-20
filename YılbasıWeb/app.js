const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")


      if(navToggle) {
          navToggle.addEventListener("click",()=> {
              navMenu.classList.add("show-menu")
          })
      }
      if(navClose) {
          navClose.addEventListener("click" , () =>{
              navMenu.classList.remove("show-menu")
          })
      }

      const navLink = document.querySelectorAll(".nav_link")

      function linkAction() {
          const navMenu = document.getElementById("nav-menu")

          navMenu.classList.remove("show-menu")
      }
      navLink.forEach(n=>n.addEventListener("click",linkAction))

      function scrollHeader() {
          const header = document.getElementById("header")

      if (this.scrollY >= 50) header.classList.add("scroll-header") ;
      
      else header.classList.remove("scroll-header")

      }
      window.addEventListener("scroll",scrollHeader)


      let newSwiper = new Swiper (".new-swiper", {
          spaceBetween: 24,
          loop:"true",
          slidesPerView: "auto",

          pagination: {
              el :".swiper-pagination",
              dynamicBullets:true,
          },
          breakpoints:{
              992:{
                  spaceBetween:80,
              },
          },
      });
      

      const sections = document.querySelectorAll("section[id]")

        function scrollActive(){
            const scrollY = window.pageYOffset

            sections.forEach(current => {
               const sectionHeight = current.offsetHeight,
                    sectionTop = current.offsetTop -58,
                    sectionId = current.getAttribute("id") 


             if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                 document.querySelector(".nav_menu a[href*=' + sectionId + ']').classList.add('active-link")
             }  else {
                document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
             }
            })
        }
        window.addEventListener("scroll",scrollActive)
 
        function scrollUp() {
            const scrollUp = document.getElementById("scroll-up");

            if(this.scrollU >=350) scrollUp.classList.add("show-scroll"); else scrollUp.classList.remove("show-scroll")

        }
        window.addEventListener("scroll",scrollUp)


        const themeButton = document.getElementById("theme-button")
        const darkTheme = "dark-theme"
        const iconTheme = "bx-sun"


        const selectedTheme = localStorage.getItem("selected-theme")
        const selectedIcon = localStorage.getItem("selected-icon")


        const getCurentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light"
        const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun"


        if(selectedTheme) {

            document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
            themeButton.classList[selectedIcon ==="bx bx-moon" ? "add" : "remove"] (iconTheme)
        }

     themeButton.addEventListener("click",() => {

        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)

        localStorage.setItem("selected-theme", getCurentTheme())
        localStorage.setItem("selected-icon",getCurrentIcon())

    })

    const sr = ScrollReveal ({
        origin : "top",
        distance : "60px",
        duration : 2500,
        delay : 400,
    })

    sr.reveal(`.home_img, .nev_container, .footer_container`)
    sr.reveal (`.home_data`,{delay:500})
    sr.reveal(`.giving_content, .gift_card` ,{interval:100})
    sr.reveal (`.celebrate_data , .message_form, .footer_img1` ,{origin: "left"})
    sr.reveal (`.celebrate_img, .message_img, .footer_img2`, {origin: "right"})