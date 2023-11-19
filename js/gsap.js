// Select the div element to animate
const myDiv = document.querySelector(".right");
const left = document.querySelector(".left");
const titlelao = document.querySelector("#titleLao")

// Create a timeline for the animation
const tl = gsap.timeline();

// Add animations to the timeline
tl.from(myDiv, { duration: 2, x: 900, opacity: -3, ease: "power1.out" }).to(
  myDiv,
  {
    duration: 1,
    y: 50,
    ease: "bounce.out",
  }
);
tl.from(left, {
  duration: 1,
  x: -900,
  opacity: -3,
  ease: "elastic.out(1, 0.3)",
}).to(left, { duration: 1, y: 50, ease: "bounce.out" });

// Play the timeline
tl.play();
AOS.init();

// todo con-3
document.getElementById("next").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").appendChild(lists[0]);
};
document.getElementById("prev").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").prepend(lists[lists.length - 1]);
};
