const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}


function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
}

circleMouseFollower();
firstPageAnim();

document
  .querySelector("#menu")
  .addEventListener("click", function expandMenu() {
    var tl = gsap.timeline();

    tl.to("#menu", {
      x: -10,
      opacity: 0,
      ease: Expo.easeInOut,
      // duration: 1,
    })
      .to("#menutags", {
        opacity: 1,
        duration: 1.5,
        display: "block",
        delay: -1,
        ease: Expo.easeInOut,
      })
 
  });

document.querySelector("#menutags").addEventListener("mouseleave",function(elem){
  elem.style.display="none";
  var t2 = gsap.timeline();

  t2.to("#menu", {
    x: 0,
    opacity: 1,
    ease: Expo.easeInOut,
    // duration: 1,
  });
})




document.querySelectorAll(".linktag").forEach(function(elem){
  elem.addEventListener("mouseenter", function () {
    elem.style.borderBottomColor = "white";
  })
});

document.querySelectorAll(".linktag").forEach(function (elem) {
  elem.addEventListener("mouseleave", function () {
    elem.style.borderBottomColor ="black";
  });
});

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});
