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
thumbnail: https://ucarecdn.com/bde51a50-8ac7-4bf9-aa71-c2699d7c2865/
---

Strike-a-pose is a **web application** which performs analysis and evaluation of human poses compared to poses present in famous paintings or statues. 

Strike-a-Pose can be made available on the visitors' **smartphone**, following the “**Bring Your Own Device” (BYOD**) approach. The system can be used also in a dedicated environment in a gallery, using a standard PC equipped with a large screen and a camera. The same code base is used for the two setups, easing the maintenance of the application. The goal of having the application executing also on mid-level phones means that there’s no need for powerful workstations in case it is used as an installation.  The design of the interface adapts to the two different modalities, providing both a vertical interface suitable for a mobile phone and a horizontal one for installation and desktop.

The application exploits a **gamification paradigm** with the **educational** purpose of getting users interested in works of art using fun. Once registered, the user is challenged to reproduce in sequence the poses of some artworks from the museum's collections. The skeleton of both the artwork and the visitor can be displayed on the screen in order to facilitate the user in matching the various points and segments. **Matching the poses** provides the **descriptions of each artwork**. The poses to be matched are organized in sets of challenges, e.g. challenges to replicate poses using the whole body, using only the torso (e.g. to allow also wheelchair users to interact), or any other type of challenge that is considered interesting by the museum curators (e.g. based on thematic collections). Once all the poses have been matched, the application allows the user to g**enerate a video** that can be saved for any **social sharing**. The video shows the user matching process and the overall interactive experience lived at the museum. The basic application can be adapted to provide variations of the gamification, e.g. introducing a competition between different users. An example of screenshots of the basic app are shown in the following figure.

![Strike a Pose App for smartphone](https://ucarecdn.com/3eb026de-153c-49ef-8b1a-83433189b979/ "Strike a Pose App for smartphone")

> *Strike a Pose App for smartphone. 1) Login. 2-3) The user trying to strike the pose in the painting (playing in “easy" mode, with visible skeletons). 3) Challenge completed: download the video.*

The application has been developed in **JavaScript** on the client side and in **Python** on the server side. Pose detection on the human bodies is achieved using **TensorflowJS** detection API exploiting the pose detection model, **MoveNet**. MoveNet is a very fast and accurate model that detects 17 key points of a body. The model is used in the variant “Lightning” intended for latency-critical applications and runs faster than real time (30+ FPS) on most modern desktops, laptops, and phones. The model runs completely client-side in the browser; this allows us to run the whole computer vision task on the device of the user, providing a better user experience thanks to the reduced latency for the pose analysis. Server-side an SQLLite database is used to store artworks' collections, challenges and artworks' metadata and descriptions. Communication between the knowledge-base and the interface is ensured through RESTful APIs developed in Flask. The video is created server side. 

The base interface, implemented in **HTML** can be adapted by different users, maintaining the computer vision functionalities, so as to allow customization by different museums. An example of such customization is shown in the following figures: