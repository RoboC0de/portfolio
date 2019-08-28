import React from "react";
import "./Projects.css";
import {
  TimelineMax,
  CSSPlugin,
  ScrollToPlugin,
  Draggable,
  Power2
} from "gsap/all";
import Project1 from "./Project1/Project1";
import Project2 from "./Project2/Project2";
import Project3 from "./Project3/Project3";

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  init() {
    const slides = document.querySelectorAll(".slide");
    const pages = document.querySelectorAll(".page");
    const backgrounds = [
      `radial-gradient(#4e4942, #161616)`,
      `radial-gradient(#3d5a3d, #161616)`,
      `radial-gradient(#61543d, #161616)`
    ];
    //Tracker
    let current = 0;
    let scrollSlide = 0;

    slides.forEach((slide, index) => {
      slide.addEventListener("click", function() {
        changeDots(this);
        nextSlide(index);
        scrollSlide = index;
      });
    });
    function changeDots(dot) {
      slides.forEach(slide => {
        slide.classList.remove("active");
      });
      dot.classList.add("active");
    }
    function nextSlide(pageNumber) {
      const nextPage = pages[pageNumber];
      const currentPage = pages[current];
      const nextLeft = nextPage.querySelector(".hero1 .hero1-left");
      const nextRight = nextPage.querySelector(".hero1 .hero1-right");
      const currentLeft = currentPage.querySelector(".hero1 .hero1-left");
      const currentRight = currentPage.querySelector(".hero1 .hero1-right");
      const nextText = nextPage.querySelector(".details");
      const portofolio = document.querySelector(".portofolio");

      const tl = new TimelineMax({
        onStart: function() {
          slides.forEach(slide => {
            slide.style.pointerEvents = "none";
          });
        },
        onComplete: function() {
          slides.forEach(slide => {
            slide.style.pointerEvents = "all";
          });
        }
      });

      tl.fromTo(currentLeft, 0.3, { y: "-10%" }, { y: "-100%" })
        .fromTo(currentRight, 0.3, { y: "10%" }, { y: "-100%" }, "-=0.2")
        .to(portofolio, 0.3, { backgroundImage: backgrounds[pageNumber] })
        .fromTo(
          currentPage,
          0.3,
          { opacity: 1, pointerEvents: "all" },
          { opacity: 0, pointerEvents: "none" }
        )
        .fromTo(
          nextPage,
          0.3,
          { opacity: 0, pointerEvents: "none" },
          { opacity: 1, pointerEvents: "all" },
          "-=0.6"
        )
        .fromTo(nextLeft, 0.3, { y: "-100%" }, { y: "-10%" }, "-=0.6")
        .fromTo(nextRight, 0.3, { y: "100%" }, { y: "10%" }, "-=0.8")
        .fromTo(nextText, 0.3, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
        .set(nextLeft, { clearProps: "all" })
        .set(nextRight, { clearProps: "all" });

      current = pageNumber;
    }
    document.addEventListener("wheel", this.throttle(scrollChange, 1500));
    document.addEventListener("touchmove", this.throttle(scrollChange, 1500));

    function switchDots(dotNumber) {
      const activeDot = document.querySelectorAll(".slide")[dotNumber];
      slides.forEach(slide => {
        slide.classList.remove("active");
      });
      activeDot.classList.add("active");
    }

    function scrollChange(e) {
      if (e.deltaY > 0) {
        scrollSlide += 1;
      } else {
        scrollSlide -= 1;
      }

      if (scrollSlide > 2) {
        scrollSlide = 0;
      }
      if (scrollSlide < 0) {
        scrollSlide = 2;
      }
      switchDots(scrollSlide);
      nextSlide(scrollSlide);
    }
  }

  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  onComponentLoad() {
    const tl = new TimelineMax();
  }

  componentDidMount() {
    this.init();
  }
  componentDidUpdate() {
    this.init();
  }

  render() {
    return (
      <div className="portofolio">
        <main>
          <div className="pages">
            <div className="page-1">
              <svg
                className="slide active"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="white" />
              </svg>
              <h3>01</h3>
            </div>
            <div className="page-2">
              <svg
                className="slide"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="white" />
              </svg>
              <h3>02</h3>
            </div>
            <div className="page-3">
              <svg
                className="slide"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="white" />
              </svg>
              <h3>03</h3>
            </div>
          </div>
          <Project1 />
          <Project2 />
          <Project3 />
        </main>
      </div>
    );
  }
}

export default Projects;
