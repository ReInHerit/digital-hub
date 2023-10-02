---
pageId: 2194c702-5bd0-42a2-83cd-2bd7ad79822d
layout: blog
type: exhibdoc
title: 2. Development
date: 2023-07-20T11:10:44.465Z
target-audience:
  - PROFESSIONAL
theme: Technology
exhibdocsection: Tablet
license: CC BY 2.0
---
### **I﻿ntroduction**

The development process for <https://tablet.reinherit-hub.eu/> that displays 3D or 2D models using HTML, JavaScript, and the Three.js library. The website allows users to interact with models, control model rotation, play audio or video files, and switch between different languages. This document outlines the key components and functionality of the website, along with the technologies used.

In addition to the website, we have developed an app called "ReInherit." This app serves as a convenient way to access the website on tablets or phones by displaying it in landscape mode. The app essentially calls the website within its interface, providing users with an optimized mobile experience.

To utilize the ReInherit app effectively, a stable internet connection is required. The app relies on a consistent internet connection to load and display the website's content seamlessly. Therefore, ensuring a reliable and fast internet connection is essential for a smooth user experience when using the app. 

Please note that the ReInherit app is an optional component and not a mandatory requirement for accessing the website. Users can still access the website directly through a web browser on their devices without the need for the app.

### **Requirements**

To work effectively on the website development, you should have a basic understanding of the following technologies:

* **HTML:** Familiarity with HTML syntax, tags, and elements is necessary.
* **JavaScript:** Understand JavaScript fundamentals, DOM manipulation, and asynchronous programming concepts.
* **Three.js:** Gain an introduction to Three.js library, including scenes, cameras, 3D model loading, lighting, and shading.

### **Architecture and Technologies**

The website is built using the following technologies:

* **HTML:** The Hypertext Markup Language is used for structuring the website's content.
* **JavaScript:** This scripting language is employed for implementing interactivity and dynamic behavior such as language switch or playing audio/video files.
* **Three.js:** A JavaScript library that simplifies the creation and rendering of 3D graphics within the web browser.

### **Functionality Overview**

The website offers the following features:

1 Model Grid

* The main interface of the website displays a grid of model options.   
* Each model option is represented as a clickable element.

2 Model Display

* When a model is clicked, the website loads the corresponding GLTF file for display.
* The displayed model rotates continuously to provide an interactive experience.

3 Lighting

* Ambient lighting is set up to enhance the visibility and appearance of the models.

4 Audio and Video Integration

* Mesh cubes are positioned around the model, acting as triggers for audio or video playback.
* These cubes have textures applied to them to provide visual cues.
* Clicking on a mesh cube plays the associated audio or video file.

5 Language Switching

* The website includes a language switcher implemented using basic JavaScript.
* When the language switcher is activated, the website content is updated to the selected language.

### **Development Details**

The website is built using a combination of HTML, JavaScript, and the Three.js library. Each model has its own HTML file, allowing for easy separation of content based on language requirements.

HTML Structure:

* The website's HTML structure follows standard conventions and is organized into separate HTML files for each model.
* Each model's HTML file contains the necessary elements and structure to display the model and associated information.
* The model grid, which displays the available models, is dynamically generated using JavaScript.
* JavaScript populates the HTML elements with model information, allowing for easy maintenance and scalability.

JavaScript Implementation:

* JavaScript is crucial for implementing interactivity and dynamic behavior on the website.
* The Three.js library is imported and utilized for loading and rendering 3D models.
* With the help of Three.js, models in GLTF format can be loaded and displayed on the website.
* Event listeners are employed to handle user interactions, such as selecting models and switching languages.
* The JavaScript code ensures smooth model rotation, creating an interactive and engaging user experience.
* Additionally, JavaScript facilitates the playback of audio or video files associated with the models.
* By utilizing JavaScript, the website's functionality is enhanced and provides a seamless browsing experience.

Custom Lighting and Mesh Cube Placement:

* Depending on the specific model being displayed, different lighting techniques can be implemented using Three.js.
* The development process involves setting up and adjusting various lighting configurations, such as ambient lighting, directional lighting, or point lighting, to achieve the desired visual effect.
* Mesh cubes, acting as triggers for audio or video playback, are positioned at different places around the model.
* The placement of these cubes requires understanding the Three.js API for manipulating object positions within the 3D scene.
* Additionally, the mesh cubes have textures applied to them, which can be customized according to the design requirements of the website.

By incorporating Three.js into the development process, you can leverage its capabilities for loading and rendering 3D models, implementing custom lighting techniques, and positioning objects like mesh cubes. These features enhance the visual appeal and interactive nature of the website, providing users with an immersive experience.