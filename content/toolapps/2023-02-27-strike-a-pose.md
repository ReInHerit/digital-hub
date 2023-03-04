---
type: toolapp
pageId: 5f367b50-4089-4718-9b66-8114962c6596
title: Strike a Pose
date: 2023-02-27T12:39:19.106Z
target-audience:
  - PROFESSIONAL
linkedWebinars:
  - 034cd93b-1043-42e9-9f2a-835d03a4e1cc____Artificial Intelligence and Computer
    Vision for Cultural Heritage
  - f2a58e91-3c1a-43c0-baeb-45234da1cbce____Engaging Museum Visitors with
    Gamification Apps
license: CC BY 2.0
status: completed
thumbnail: https://ucarecdn.com/bde51a50-8ac7-4bf9-aa71-c2699d7c2865/
---
Strike-a-pose is a **web application** which performs analysis and evaluation of human poses compared to poses present in famous paintings or statues. 

Strike-a-Pose can be made available on the visitors' **smartphone**, following the “**Bring Your Own Device” (BYOD**) approach. The system can be used also in a dedicated environment in a gallery, using a standard PC equipped with a large screen and a camera. The same code base is used for the two setups, easing the maintenance of the application. The goal of having the application executing also on mid-level phones means that there’s no need for powerful workstations in case it is used as an installation.  The design of the interface adapts to the two different modalities, providing both a vertical interface suitable for a mobile phone and a horizontal one for installation and desktop.

The application exploits a **gamification paradigm** with the **educational** purpose of getting users interested in works of art using fun. Once registered, the user is challenged to reproduce in sequence the poses of some artworks from the museum's collections. The skeleton of both the artwork and the visitor can be displayed on the screen in order to facilitate the user in matching the various points and segments. **Matching the poses** provides the **descriptions of each artwork**. The poses to be matched are organized in sets of challenges, e.g. challenges to replicate poses using the whole body, using only the torso (e.g. to allow also wheelchair users to interact), or any other type of challenge that is considered interesting by the museum curators (e.g. based on thematic collections). Once all the poses have been matched, the application allows the user to g**enerate a video** that can be saved for any **social sharing**. The video shows the user matching process and the overall interactive experience lived at the museum. The basic application can be adapted to provide variations of the gamification, e.g. introducing a competition between different users. An example of screenshots of the basic app are shown in the following figure.

![Strike a Pose App for smartphone](https://ucarecdn.com/3eb026de-153c-49ef-8b1a-83433189b979/ "Strike a Pose App for smartphone")

> *Strike a Pose App for smartphone. 1) Login. 2-3) The user trying to strike the pose in the painting (playing in “easy" mode, with visible skeletons). 3) Challenge completed: download the video.*

The application has been developed in **JavaScript** on the client side and in **Python** on the server side. Pose detection on the human bodies is achieved using **TensorflowJS** detection API exploiting the pose detection model, **MoveNet**. MoveNet is a very fast and accurate model that detects 17 key points of a body. The model is used in the variant “Lightning” intended for latency-critical applications and runs faster than real time (30+ FPS) on most modern desktops, laptops, and phones. The model runs completely client-side in the browser; this allows us to run the whole computer vision task on the device of the user, providing a better user experience thanks to the reduced latency for the pose analysis. Server-side an SQLLite database is used to store artworks' collections, challenges and artworks' metadata and descriptions. Communication between the knowledge-base and the interface is ensured through RESTful APIs developed in Flask. The video is created server side. 

The base interface, implemented in **HTML** can be adapted by different users, maintaining the computer vision functionalities, so as to allow customization by different museums. An example of such customization is shown in the following figures:

![Customized login screen and challenge selection](https://ucarecdn.com/e33839df-0fef-45ff-878b-062e7e5b94bd/ "Customized login screen and challenge selection")

> *Customized login screen and challenge selection*

![Horizontal interface for installations - customized template | Customized end-game screen with informations about the artworks](https://ucarecdn.com/70e896cc-9511-48f6-bb90-fcd5dc3ab8a5/ "Horizontal interface for installations - customized template | Customized end-game screen with informations about the artworks")

> *Horizontal interface for installations - customized template \ Customized end-game screen with informations about the artworks*



![Strike-a-pose in a competitive setup. ](https://ucarecdn.com/ae137a2b-f721-4f74-8ea7-fcc86b4a00a4/ "Strike-a-pose in a competitive setup. ")

> *Strike-a-pose in a competitive setup. Two users attempt to complete the same challenge in less time || Strike-a-pose in a competitive setup: results of the challenge for each user.*

**Usage Example**\
App requires a server to host the mobile app and to provide the RESTful APIs of the backend. A QR code can be used to avoid typing the URL of the web apps.

The application is composed of a **backend** that manages the challenges and a **front-end** that runs on mobile devices. A schema of the **main components** of the **backend and front end**  is shown in the following figures:

![Main components of the backend and front-end of Strike-a-pose](https://ucarecdn.com/65a51251-857f-413e-9fa6-f1ce4e42dd8b/ "Main components of the backend and front-end of Strike-a-pose")

> *Main components of the backend and front-end of Strike-a-pose*

The interface is completely written in **HTML5**. The computer vision task of matching the pose of the user with the pose of the artworks of the challenge can be implemented completely using the **Tensorflow JS** executed in the browser. The creation of the video produced upon successful completion of the challenge is performed server-side.  The **backend** implements a RESTful API using Flask, and is fully implemented in Python. This eases the integration of several other libraries to access the database of the challenges, using SQLAlchemy and to create the final videos using OpenCV**.** Challenges are maintained in the DB, e.g. allowing to pick poses that require to use only the upper body (e.g. to allow also people with mobility issues to play) or with full body. 

jQuery and Bootstrap are the main components used to design the interface and provide user interaction with the GUI, Webcam Easy JS allows to connect to the webcam through the browser and Tensorflow JS is the workhorse to implement the computer vision functionalities.

**Usage Example**\
App requires a server to host the mobile app and to provide the RESTful APIs of the backend. A QR code can be used to avoid typing the URL of the web apps.

**Guidelines for reuse**\
The simplest type of reuse is substituting the selected sample artworks with those of the collection of the museum/organization that desires to customize the apps, along with the associated information. Setup of the apps is based on Docker, to simplify the installation of the backend. 

It is possible to extend the apps introducing new types of challenges, e.g. combining classes of artworks, creating collections of artworks according to some criterion. The challenges of Strike-a-pose can be changed to follow some other criterion other than using full/upper/lower body parts, e.g. according to styles or time. 

Changing the GUIs is relatively easy, since it is needed to update the HTML5 of Strike-a-pose or the Kivy code of Face-fit.

**Free Codes of the App are available here:**

<https://github.com/ReInHerit/strike-a-pose>

For  more information and support contact [marco.bertini@unifi.it](<>)

`youtube: https://youtu.be/GHgBIRXqKK8`