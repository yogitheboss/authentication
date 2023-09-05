import React from "react";
import styles from "./index.module.css";

const handleMouseUp = (e, buttonRef, parentRef) => {
  e.preventDefault();
  const selectionLength = window.getSelection().toString().length;
  if (selectionLength > 0) {
    const parentPosition = parentRef.current.getBoundingClientRect();
    const parentScrollTop = parentRef.current.scrollTop;
    const parentScrollLeft = parentRef.current.scrollLeft;

    const mouseX = e.clientX - parentPosition.left + parentScrollLeft;
    const mouseY = e.clientY - parentPosition.top + parentScrollTop;

    buttonRef.current.style.top = mouseY + "px";
    buttonRef.current.style.left = mouseX + "px";
    buttonRef.current.style.display = "block";
  } else {
    buttonRef.current.style.display = "none";
    return;
  }
};

function About() {
  const buttonRef = React.useRef(null);
  const parentRef = React.useRef(null);
  return (
    <div className={styles.container} ref={parentRef}>
      <h1>About</h1>
      <p onMouseUp={(e) => handleMouseUp(e, buttonRef, parentRef)}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae maxime
        minima assumenda commodi porro quaerat temporibus, eum laborum suscipit
        expedita magnam ducimus mollitia itaque fugiat deserunt voluptas? Nulla
        quidem sit, non totam fugit vel placeat iste vitae ut est dolores quae
        hic eaque nobis, sint dolorem nam. Dolor a officia harum omnis dolorem
        rem. Voluptatibus, vitae alias blanditiis, magni esse, minima fugiat
        praesentium facilis in ex rem. Nulla, voluptas. Consequuntur, aliquid
        dicta tenetur obcaecati cupiditate quod vero, tempore repellendus
        accusantium, eum eius velit temporibus! Aliquam ipsam earum optio
        sapiente dicta molestiae sint aut dolorum, iure laboriosam, veritatis
        labore eos deleniti velit error natus quia voluptate modi. Voluptatem,
        illo recusandae necessitatibus incidunt reprehenderit iste provident
        enim sed ipsum! Est asperiores cupiditate laudantium cum delectus?Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Iure, labore corrupti
        quisquam perspiciatis nemo vero, magni quae eos veritatis minima
        obcaecati doloribus id similique omnis possimus tempora quam, tenetur
        laborum.
      </p>

      <button
        style={{ display: "none", position: "absolute", fontSize: "0.5rem" }}
        ref={buttonRef}
      >
        show after selection
      </button>
    </div>
  );
}

export default About;
