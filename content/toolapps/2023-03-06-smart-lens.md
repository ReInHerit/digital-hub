---
type: toolapp
pageId: beae4f2a-8f09-4de1-949a-398f8b3626b3
title: Smart Lens
date: 2023-03-06T15:56:57.467Z
target-audience:
  - PROFESSIONAL
linkedWebinars:
  - 034cd93b-1043-42e9-9f2a-835d03a4e1cc____Artificial Intelligence and Computer
    Vision for Cultural Heritage
license: CC BY 2.0
status: draft
thumbnail: https://ucarecdn.com/52c6f7ac-f15b-4d79-a56c-73f1397bf5de/
---
The purpose of this application is to **recognize details of artworks.** The user can employ his mobile phone (or tablet) as if it was a lens to inspect and analyze details of interest that are recognized using a variety of computer vision techniques (CBIR, classification or object detection). As **details are recognized** the app p**rovides multimedia information on** them. The app can be used as a smart guide to a collection or for a set of artworks that are of particular relevance and that can necessitate a thorough analysis. The type of interaction elicited from a user is more active than that of a typical guide, e.g. based on QR codes, since it calls for an active analysis of the exhibition. An additional benefit is that it is possible to collect **anonymized information** on the details and artworks of interest, providing the curators with **statistics** and information on how the exhibitions are experiences by visitors. 

The application allows the recognition of artwork details using **three alternative methods:** 

* **Content-based Image retrieval (CBIR)** 
* **Classification** 
* **Object detection** 

The **Content-based Image retrieval (CBIR)** mechanism allows the recognition of the works and their details through the comparison between the visual features extracted from a dataset of images (the collection of details stored in a database, i.e. in the guide) and those obtained from the frame produced by the user's camera.  To allow the recognition of the details of the works, the features have been extracted not only from the entire work but also from some of its parts obtained through a rigid subdivision as shown in the following figure.

![image subdivision/augmentation used for CBIR ](https://ucarecdn.com/23f84070-626a-4b02-ab6d-55c601dbe8c0/ "image subdivision/augmentation used for CBIR ")

> *Image subdivision/augmentation used for CBIR*

The recognition takes place on the Javascript side by extracting the features on the camera frame with the same network used on the backend side and calculating the minimum distance compared to those present in the database. To avoid that an image is always returned even when a point of interest is not framed, a specific maximum distance has been defined for each work or detail, beyond which no result is returned; i.e. there’s a maximum distance for the nearest neighboring image. 

This second approach allows the recognition of the framed detail / work through a classification network on which a fine-tuning operation has been performed on the paintings and their details present in the dataset. This requires, differently from the previous approach, a retraining of the neural network; it must be noted that typically this retraining can be performed even using CPUs. 

In this version, therefore, the **classification** of the entire frame is performed, which is identified with the most probable class only if the degree of confidence is greater than a specific threshold for each image. 

In this version, the recognition is entrusted to a network for **Object Detection** on which fine tuning has been performed on the details of the work. This retraining is more expensive than the previous one and requires a GPU. In this case, only the details within the work are identified by taking the most probable bounding-box (i.e. a rectangle that most probably contains the object of interest) for each class provided that its degree of confidence exceeds a specific threshold for each detail. 

The interface is entirely made in HTML5 and CSS and has a fluid behavior adapting to the size of any screen (tablet or smartphone).  It is dynamically modified through Javascript scripts that allow you to show the results of the matches with the images framed by the camera in real time. 

In the camera view, the work or detail is framed and the recognition operation is carried out in real time.  MobileNetV3 networks were used for Retrieval and classification and SSD/MobilNetV3 for Detection. This view remains hidden until the networks to be used have been loaded correctly as well as the data from the server. 

For each work or detail is provided a textual description, the relative image and any audio and video content.  If an audio file is not available, the application will allow the text-to-speech of the textual.



![ example of details recognition using the object detection approach: the boxes highlight which part of the image are related to the details. Clicking on the detail icons takes the specific information](https://ucarecdn.com/203386e8-19a8-48f2-a070-fa2fc63eb456/ " example of details recognition using the object detection approach: the boxes highlight which part of the image are related to the details. Clicking on the detail icons takes the specific information")

>  *Example of details recognition using the object detection approach: the boxes highlight which part of the image are related to the details. Clicking on the detail icons takes the specific information*

The following figure shows other examples of how the details recognized using the computer vision system implementing the object detection capabilities are shown.

![Smart lens - examples of details recognition and information presentation (images courtesy of MCA, Graz Museum, BoCCF)](https://ucarecdn.com/017ced9e-adbd-4350-8b87-32a168d27b30/ "Smart lens - examples of details recognition and information presentation (images courtesy of MCA, Graz Museum, BoCCF)")

> *Smart lens - examples of details recognition and information presentation (images courtesy of MCA, Graz Museum, BoCCF)*

Additional work has been done to improve the training of the neural networks that implement object detection and image classification capabilities to the app. This is due to the fact that typically these types of networks are typically trained and fine-tuned on large numbers of classes of images and objects; in this context of artwork details instead we have to deal with entities that are by definition unique. A set of two backend tools has been developed to augment the training data required to implement the fine tuning of the networks. The system has been implemented in Python and from a small set of images that are taken by the museum curators, it generates a large number of variations altering the perspective of the scene, the position and point of view of the objects, their color and luminance to simulate different types of lenses and image sensors, simulating noise and dirt on the lens, rotating the objects to account for users that employ their device in landscape or portrait orientations; examples of such alterations is shown in the following figure. Since the creation of such augmented datasets is time consuming the code has been parallelized to greatly reduce the time needed to train the networks.

![ Smart lens - examples of augmentations of the training data used to recognized details of the Cherry Rage (images courtesy of Graz Museum)](https://ucarecdn.com/e67a915c-ad60-4a95-916f-cbfdb6340c86/ " Smart lens - examples of augmentations of the training data used to recognized details of the Cherry Rage (images courtesy of Graz Museum)")

>  *Smart lens - examples of augmentations of the training data used to recognized details of the Cherry Rage (images courtesy of Graz Museum)*

To ease the use of the training system by non-expert users, a new web-based application has been developed, integrating also the annotation functionalities required to let curators select the details of artworks from a collection. This system uses Javascript to implement the annotation interface and to manage the training of the networks, and Python with Flask and Tensorflow on the backend to run the augmentation and training tasks. Training is launched as an asynchronous process, so that users can continue to work in the interface.

The architecture of the system is the following:

![Smart lens - architecture of the neural network training system](https://ucarecdn.com/7fcd7404-6369-415e-a90b-9d6d68434148/ "Smart lens - architecture of the neural network training system")

> \
> *Smart lens - architecture of the neural network training system*

\
The system also allows to run a trained network on a set of images to provide an immediate feedback to the user to understand if there's a need for further training.

Examples of the interface of the system are shown in the following images. The system allows users to create their sets of concepts and details (the figure in the following shows the sets of COCO dataset concepts used to test the system).

![Smart lens - training system gallery interface](https://ucarecdn.com/4ec0b013-79fe-4788-81ab-2c25ed9b924a/ "Smart lens - training system gallery interface")

> \
> *Smart lens - training system gallery interface*

![Smart lens -training system - detail of the widget for selection of neural network](https://ucarecdn.com/248be84e-b2e5-4669-9171-73bfa68986b0/ "Smart lens -training system - detail of the widget for selection of neural network")

> *Smart lens -training system - detail of the widget for selection of neural network*

![ Smart lens - training system - creation of the annotations of details and metadata for an artwork](https://ucarecdn.com/4b097976-ac53-4d09-b888-e0dcfc91c53a/ " Smart lens - training system - creation of the annotations of details and metadata for an artwork")

>  *Smart lens - training system - creation of the annotations of details and metadata for an artwork*

![Smart lens - examples of automatic (red) and manual (greeen) annotation of details](https://ucarecdn.com/770ed318-ebe5-4699-91ae-3263625b062c/ "Smart lens - examples of automatic (red) and manual (greeen) annotation of details")

> *Smart lens - examples of automatic (red) and manual (greeen) annotation of details*

To speed up the annotation process it is possible to use a pre-trained network, as shown in the above figure, where manual annotation is highlighted in green and the automatica results are highlighted in orange.

The tool can be used, apart fro training the network used in Smart Lens, also to train networks for recognition of objects and visual concepts in cultural heritage in general

**\
Usage example** 

There is a need to use a server to host the backend and the web app itself. A QR code can be used to avoid typing the URL of the web apps. 

 **Guidelines for reuse** 

The application is composed of a backend that maintains information on the details of the artworks. The first step for reuse is to create the guide itself in all the languages that the museum wants to support. 

The types of interaction vary according to the techniques used to recognize the details: using object detection it is possible to analyze artworks also from afar, getting hints at what parts of the artwork are the “hotspots” for which the information is provided. Using the classification network the user must inspect the artwork more thoroughly, mimicking more the use of a magnifying lens. Using CBIR it is possible to create a user experience between those of object detection and classification, reducing the time to create a dataset (no neural network must be retrained) but at the possible cost of having a reduced recognition performance in case of similar artworks or too similar details. 

The app can be used also to perform artwork recognition, without considering the details.