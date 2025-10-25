**Ed Tech - Online Learning Platform Frontend**

This repository contains the frontend code for the Ed Tech website, a modern, responsive online learning platform designed to provide accessible and engaging courses.

**Description**

Ed Tech offers a user-friendly interface for browsing courses, learning through video lectures and study materials, and tracking progress. The design is dark-themed, modern, and includes subtle animations to enhance the user experience.

**Features**

+ **Homepage (index.html):** Introduces the platform, showcases popular courses, displays learning tools, includes testimonials, and has a contact form. Features animations like code typing and element fade-ins.

+ **Course Catalog (catalog.html):** Displays available courses (Web Development, Data Science, C++, Python, Java) with descriptions and links to course detail pages. Includes login redirection for viewing courses.

+ **Course Overview Pages (webdev.html, datascience.html, cpp.html, python.html, java.html):** Provide detailed information about each course, including curriculum, learning outcomes, prerequisites, and enrollment buttons.

+ **Course Content Pages (webdev11.html, datas11.html, cpp1.html, python1.html, java1.html):** Structured layout with a sidebar for module navigation and a main area displaying video lectures (embedded from YouTube), study material links (W3Schools, MDN, etc.), and interactive quizzes.

+ **About Us Page (about.html):** Information about the platform's mission, vision, founding story, and key statistics.

+ **Contact Page (contact.html):** Includes contact information, a team showcase, an embedded map, and a working contact form (requires Formspree setup).

+ **Login & Sign Up Pages (login.html, signup.html):** Simple, styled forms for user authentication. The sign-up form uses Formspree, and the login form redirects to the appropriate course page after submission (if accessed via catalog).

+ **Learn More Page (learnmore.html):** Provides additional details about the platform's benefits and features, linking to the catalog.

**Responsive Design:** Built with Tailwind CSS to ensure compatibility across various devices (desktops, tablets, mobiles).

**Animations:** Subtle fade-in effects, glowing elements, interactive carousels, and animated counters enhance user engagement.

**Interactive Elements:** Functional mobile menu, scroll-to-top button, interactive quizzes.

**Technologies Used**

**HTML5:** Structure and content.

**Tailwind CSS:** Styling and responsiveness (via CDN).

**JavaScript (Vanilla):** Interactivity, animations (Intersection Observer), carousel logic, form handling, content switching, and redirects.

**Formspree:** Used for backend handling of contact and sign-up forms (requires user setup).

**Project Structure**

**The project consists of multiple standalone HTML files, each representing a different page of the website:**

+ index.html (Homepage)

+ catalog.html

+ about.html

+ contact.html

+ learnmore.html

+ login.html

+ signup.html

+ webdev.html / webdev11.html

+ datascience.html / datas11.html

+ cpp.html / cpp1.html

+ python.html / python1.html

+ java.html / java1.html

**(Note: CSS and JavaScript are embedded within each HTML file using <style> and <script> tags, leveraging Tailwind CSS via CDN).**

**How to Run**

* Clone or download this repository.

* Open the index.html file in your web browser.

* Navigate through the different pages using the header/footer links and buttons.

**Form Setup (Important)**

* The contact form (contact.html) and sign-up form (signup.html) rely on Formspree endpoints. To make them functional:

* Create free accounts on formspree.io.

* Create two separate forms in your Formspree dashboard.

* Replace the placeholder action URLs in the <form> tags within contact.html and signup.html with your unique Formspree endpoint URLs.

* Confirm your email address with Formspree.

* Ensure the hidden _next input in signup.html points to the desired redirect page (index.html#catalog-section).

**Contributing**

Contributions, issues, and feature requests are welcome. Feel free to check the issues page if you want to contribute.

**This README was generated based on the project structure and features as of October 25, 2025.**
