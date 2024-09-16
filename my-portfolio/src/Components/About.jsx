import React from 'react';

const About = () => (
  <section id="about" className="bg-gray-100 py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
      <div className="text-lg text-gray-700 space-y-4">
        <p>I graduated from <span className="font-semibold">[University]</span> with a degree in <span className="font-semibold">[Field]</span>. I have <span className="font-semibold">[X]</span> years of experience in web development.</p>
        <p>Proficient in <span className="font-semibold">JavaScript, React, Node.js</span>, and more.</p>
        <p>Started as a junior developer at <span className="font-semibold">[Company]</span>, now working as a senior developer at <span className="font-semibold">[Current Company]</span>.</p>
      </div>
    </div>
  </section>
);

export default About;