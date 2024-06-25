import React from "react";
import Location from "../components/Location/Location";
const About = () => {
  return (
    <div className="container pt-14">
      <div className="py-10">
        <h1
          className="my-8 border-l-8
        border-primary/50 py-2 pl-2 text-3xl
        font-bold"
        >
          About us
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ab
          facilis dicta dolores est quisquam qui doloribus necessitatibus
          molestias esse saepe sit, deserunt numquam possimus non. Repellat ab
          recusandae sint ad, et explicabo saepe. Corporis ratione debitis
          quibusdam vitae, praesentium adipisci eius veniam earum dolorum sint
          totam omnis cupiditate tenetur eveniet aliquam. Quam perferendis,
          ratione consectetur itaque at quaerat ipsam?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ab
          facilis dicta dolores est quisquam qui doloribus necessitatibus
          molestias esse saepe sit, deserunt numquam possimus non.
        </p>
      </div>
      <Location />
    </div>
  );
};

export default About;
