const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

const sec = document.querySelectorAll(".section");
const imgs = document.querySelector("#img-show");
const inner = document.querySelectorAll(".inner-box h1");

sec.forEach((sec) => {
  sec.addEventListener("mouseenter", function () {
    imgs.style.display = "block";

    let imgg = sec.getAttribute("data-img");

    imgs.style.backgroundImage = `url(${imgg})`;
  });

  sec.addEventListener("mouseout", function () {
    imgs.style.display = "none";
  });
});




inner.forEach((item) => {

   
  let innerbox2 = document.querySelector(".inner-box2")
  item.addEventListener("click", function () {
    let img = item.getAttribute("data-image")
    innerbox2.style.backgroundImage = `url(${img})`;
    console.log(img)
    item.style.fontSize = "100px";
    item.style.top = "32%";
    item.style.left = "15%";
    item.style.opacity = "100%";

    

    inner.forEach((other) => {
        console.log(other)
      if (other !== this) {
        other.style.fontSize = "80px";
                other.style.top = "32%";
                other.style.left = "20%";
                other.style.opacity = "50%";
      }
    });
  });
});


let loader = document.querySelector("#loader")

setTimeout(function(){
   loader.style.top = "-100%"
},5000)