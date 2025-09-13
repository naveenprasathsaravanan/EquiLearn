// src/data/coursesData.js

const courses = [
    {
      id: "1",
      title: "Introduction to Quantum Physics",
      description: "Explore the fundamentals of quantum mechanics, including wave-particle duality and uncertainty principle.",
      materials: [  
      {
        id: "1",
        title: "Quantum Physics Basics",
        type: "PDF",
        date: "2025-06-15",
         content: `
          <h3>Key Features of Quantum Mechanics</h3>
          <ul>
            <li><strong>Linearity of the Equations of Motion:</strong> Quantum systems evolve linearly over time according to the Schrödinger equation.</li>
            <li><strong>Complex Numbers are Essential:</strong> Quantum states and amplitudes use complex numbers to represent phase and interference.</li>
            <li><strong>Loss of Determinism:</strong> Measurement outcomes are probabilistic, not deterministic as in classical physics.</li>
            <li><strong>Quantum Superpositions:</strong> Particles can exist in multiple states simultaneously until measured.</li>
            <li><strong>Entanglement:</strong> Particles can be correlated in such a way that the state of one instantaneously affects the other, regardless of distance.</li>
          </ul>
          <p>This guide outlines the foundational principles that distinguish quantum mechanics from classical physics </p>
        `,
        link: true,
        downloadUrl: "/q1_notes.pdf"
        },
        {
          id: "2",
          title: "Wave Particle Duality",
          type: "PDF",
          date: "2025-06-16",
          content: `
            <h3>Wave-Particle Duality</h3>
            <p>This material provides a set of practice problems focused on key concepts in quantum mechanics:</p>
            <ul>
              <li><strong>Uncertainty Principle</strong> – Understanding Heisenberg's relation and its implications in quantum systems.</li>
              <li><strong>Particle in a Box</strong> – Solving Schrödinger’s equation for a particle confined in a potential well.</li>
              <li><strong>Wave-Particle Nature</strong> – Conceptual and numerical problems involving de Broglie wavelength and photon behavior.</li>
            </ul>
            <p>Use this guide to test your understanding and apply theoretical principles to practical quantum scenarios.</p>
            `,
          link: true,
          downloadUrl: "/wave_particle.pdf"
        }],
      course_image:"/qp.webp",
      videos: [
        { id: "1", title: "Quantum Physics Basics" ,play:"/lecture.mp4",transcript:`Quantum Physics Simplified
Quantum physics, often seen as confusing and mysterious, is actually a well-understood and highly successful scientific theory. It describes the behavior of the universe at the smallest scales—atoms, subatomic particles, and molecules—and has enabled technologies like computers, lasers, and nuclear energy.

Wave Function and Probability
In quantum mechanics, particles like electrons are not visualized as points but as wave functions, which are mathematical constructs. These wave functions don’t represent physical waves but provide probability distributions—regions where a particle is likely to be found. When a measurement is made, the wave function collapses, and the particle appears at a specific location. However, how this collapse happens is still unknown, known as the measurement problem.

Wave-Particle Duality
Particles exhibit both wave and particle properties, a concept called wave-particle duality. The double-slit experiment demonstrates this: when electrons are fired one at a time through two slits, they form an interference pattern—a behavior typical of waves. This means electrons act like waves until measured, where they behave like particles.

Superposition and Entanglement
Quantum physics allows superposition, where particles can exist in multiple states or locations simultaneously. When two particles interact, their wave functions become entangled, forming a single system. A measurement on one instantaneously affects the other, even across vast distances—known as non-locality—though it cannot be used for faster-than-light communication.

Quantum Tunneling
Quantum tunneling allows particles to pass through barriers they shouldn’t be able to cross classically. This phenomenon powers the sun: protons fuse via tunneling to produce energy, making life on Earth possible.

Heisenberg’s Uncertainty Principle
This principle states you cannot know both a particle’s position and momentum with perfect accuracy. A wave with a precise momentum has an uncertain position, and vice versa. This uncertainty is a built-in feature of quantum mechanics.

In essence, quantum mechanics reveals a universe where reality is probabilistic, objects behave like waves, and particles can be mysteriously connected across space.








`,description:`Understanding the bascis of Quantum physics`},
        { id: "2", title: "Wave-Particle Duality",play:"/Quantum 101 Episode 1： Wave Particle Duality Explained.mp4",transcript:`The document titled "Quantum 101 Episode 1: Wave-Particle Duality Explained" introduces the fundamental quantum concept that light and particles can exhibit both wave-like and particle-like behavior.

It explains how light behaves as a wave by bending around objects and interfering when passing through narrow gaps, as demonstrated in the double-slit experiment. Surprisingly, particles like electrons also show this wave-like behavior. When electrons are fired one at a time through the slits, they still form an interference pattern—indicating each electron interferes with itself, revealing its wave nature.

This phenomenon, known as wave-particle duality, means that objects at the quantum level act like waves until they are measured, at which point they behave like particles. The concept applies to all matter, though for larger objects like baseballs, the wave effect is negligible.

The document also mentions fuzzy dark matter, a hypothetical particle much smaller than electrons, with a wave so large it could span galaxies—making it a candidate for explaining dark matter, the unseen mass in the universe.

In essence, wave-particle duality changes how we understand the subatomic world and is central to modern quantum physics.`,description:`Understanding the concept of wave particle duality` },
      ],
      images: [
        { id: "1", title: "Quantum Physics Basics" ,pic:"/qp.webp"},
        { id: "2", title: "Wave-Particle Duality",pic:"/wave.webp" },
      ],
    },

    {
      id: "2",
      title: "Web Development Bootcamp",
      description: "Full stack development with HTML, CSS, JS, React and Node.js.",
      materials: [
          {
          id: "1",
          title: "Introduction to HTML",
          type: "PDF",
          date: "2025-06-16",
          content: `
              <h3>Beginner’s Guide to HTML</h3>
              <ul>
                <li>Getting Started with HTML and What You Need</li>
                <li>Understanding Tags, Attributes, and Elements</li>
                <li>Using Headings, Paragraphs, and Lists</li>
                <li>Creating Links, Working with Images and Tables</li>
                <li>Forms, Inputs, and CSS Basics</li>
              </ul>
             <p>This guide walks beginners through everything from writing basic HTML code to adding styles and interactivity.</p>
            `,
          link: true,
          downloadUrl: "/html.pdf"
        },
        {
          id: "2",
          title: "Introduction to CSS",
          type: "PDF",
          date: "2025-06-17",
          content: `
            <h3>Beginner’s Guide to CSS</h3>
            <ul>
            <li>What is CSS and Why It Matters</li>
            <li>CSS Syntax, Selectors, and Specificity</li>
            <li>Styling Text, Fonts, and Colors</li>
            <li>Box Model, Margins, Padding, and Borders</li>
            <li>Layouts with Flexbox and Grid</li>
            <li>Responsive Design Basics</li>
          </ul>
          <p>This guide introduces core CSS concepts and helps beginners style web pages effectively using modern techniques.</p>
          `,
          link: true,
          downloadUrl: "/materials/css.pdf"
        }

],
      
      course_image:"/web_boot.webp",
      videos: [
        { id: "1", title: "Introduction to HTML",play:"/html.mp4",transcript:`The document provides a beginner-friendly introduction to HTML (HyperText Markup Language), the foundational language used to create the structure of web pages. It explains that HTML uses tags to mark up elements like headings, paragraphs, and tables, which define the layout and content of a webpage. Tags usually come in pairs—a start tag and an end tag—that wrap around content to define how it should appear.
The document walks through the basic structure of an HTML document, highlighting elements such as:
<!DOCTYPE html> – declaration of the document type.
<html> – the root element.
<head> – contains meta-information.
<title> – defines the page title.
<body> – holds the visible content.
<h1> and <p> – used for headings and paragraphs.
It also emphasizes the role of web browsers like Chrome and Firefox, 
which interpret the HTML code and render it visually for users. 
The summary concludes with a brief look at the structure of an HTML page and encourages deeper exploration into HTML after understanding these core concepts.` ,description:`Understanding the basics of HTML`},
        { id: "2", title: "Introduction to CSS",play:"/CSS in 100 Seconds.mp4", transcript:`CSS (Cascading Style Sheets) is a stylesheet language used to define the presentation and layout of HTML elements on a web page. Without CSS, web pages would appear as plain, black-and-white documents, as HTML alone does not define visual styling. CSS allows developers to modify the size, color, position, and overall layout of content, making websites visually appealing and user-friendly. Introduced in 1996, CSS evolved into CSS3 by 1999 and continues to receive updates, although there will never be a CSS4—only additions to the existing language.
A typical CSS rule consists of a selector and a declaration block. The selector targets specific HTML elements, while the declaration block (enclosed in braces) contains properties and values that define the appearance of those elements. Stylesheets cascade, meaning multiple rules can apply to the same element, with more specific rules overriding less specific ones. Additionally, some properties are inherited from parent elements, while others are not, leading to the core concepts of cascade, specificity, and inheritance in CSS.
In CSS, every HTML element is treated as a box composed of content, padding, border, and margin. Developers can customize each part of this box using properties such as padding and margin, which can be set using fixed units like pixels or relative units like percentages. To control how these boxes align and flow within a layout, CSS provides tools like Flexbox and Grid, which enable complex and responsive designs.
CSS also supports interactivity through pseudo-selectors such as :hover, allowing styles to change in response to user actions. It includes features for defining reusable values using variables (custom properties) and supports responsive design with media queries, which apply styles based on screen size or device type. Furthermore, CSS enables animation using transitions and keyframes, making it possible to create dynamic, engaging user experiences.
` ,description:`Understanding the basics of CSS.`},
      ],
      images: [
        { id: "1", title: "Introduction to HTML" ,pic:"/ht.webp"},
        { id: "2", title: "Introduction to CSS",pic:"/css5.webp" },
      ],
    }
  ];

export default courses;
  