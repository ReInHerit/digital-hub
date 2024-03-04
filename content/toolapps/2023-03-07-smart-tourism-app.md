---
type: toolapp
pageId: 437c8b14-f2c8-4fe6-9162-104d4abbb5b6
title: Smart Tourism App - Description
date: 2023-03-07T12:54:03.959Z
target-audience:
  - PROFESSIONAL
linkedWebinars:
  - 034cd93b-1043-42e9-9f2a-835d03a4e1cc____Artificial Intelligence and Computer
    Vision for Cultural Heritage
  - "05055bcf-561e-48da-b0b5-3b1dc8fc5893____Smart Tourism - Smart Destinations:
    Cultural Heritage, Digitalisation and Sustainability aspects"
  - b85f55db-c231-44b2-8cf6-6912dd3b296b____A Charter for Sustainable Cultural
    Tourism development, management and promotion in Europe, latest developments
    and prospects
linkedToolkitComponents:
  - 755c16fe-ff7b-4635-aede-1919f5c7f28b____Tensorflow Framework
license: CC BY 2.0
status: completed
thumbnail: https://ucarecdn.com/4f495df3-8f37-4899-a5c0-6df7d87f6baa/
chatApps: https://reinherit.zulipchat.com/#narrow/stream/392282-ReInHerit-Applications-and-Toolkit/topic/Smart.20Tourism.20App
---
This application is designed for **cultural smart tourism** and provides functionalities for landmark recognition using **computer vision.** The vision system is able to deal also with large monuments, where only a portion of the landmark is visible, using a specific run-time image augmentation process that is combined with a training-time augmentation.  The smart tourism app is a native **Android app** that provides the basic functionalities. It has been developed as an Android app to overcome the computational limitations of web based systems, that are still not feature complete when using **TensorflowJS** with respect to Tensorflow Lite. Despite this it works also on low and  mid-level devices, since it has been designed to use a set of very fast neural network that can be executed in real-time (based on variations of the MobileNet V3 architecture). The system uses computer vision to recognize **landmarks** and monuments, providing **multimedia information**, and  can be **personalized** to create different tours.

The **end-user application** is complemented by a set of backend tools that create the set of images needed to recognize landmarks, performing an augmentation that is used both at training time and at test time; these tools are to be used by the creators of the smart guides.

The vision system implements a **content-based image retrieval (CBIR),** using techniques that are completely different, because of the nature of the task that is addressing landmarks, from that of the Smart Lens app. In fact when considering the recognition of landmarks a common case is that the user does not frame with the lens the whole object, and that the object itself has **many different and possibly diverse views**. To this end when creating the guide the curators must use a **large number of images.** To cope with the variability of the point of view of the users each image is further split in different parts and zoomed in and out versions are created, as shown in the following figures. All these augmentations result in the creation of a very **large dataset of images** representing the landmarks.

![image splitting augmentation](https://ucarecdn.com/96cde401-f599-4fdd-84a0-da1ce1b0d742/ "image splitting augmentation")

> *Image splitting augmentation*

![image zooming augmentation](https://ucarecdn.com/c7afd79a-b476-490b-8754-3bd4d3ec41f9/ "image zooming augmentation")

> *Image zooming augmentation*

To cope with the large number of images, these are indexed using **FAISS**, an indexing library that allows to perform approximate nearest neighbour retrieval, thus reducing the number of actual image comparisons that are needed to determine the landmark that is framed. This need is exacerbated by the fact that we also implement a test-time augmentation, i.e. the image that is taken with the mobile phone is used to generate two zoomed versions, and each image is further split into 3x3. This test-time augmentation is used **to improve the performance of the CBIR system** in terms of accuracy. For each split of each image obtained during the use of the application is computed a descriptor using the MobileNet network, and using FAISS a nearest neighbor image of the database is retrieved and ranked in terms of visual similarity, selecting the 3 most similar images, as shown in the following figure. A K-NN classifier is used to recognize the landmark based on these retrieved images.

![smart tourism app: landmark recognition](https://ucarecdn.com/b2207fb6-2dbd-4560-b4e0-fef415fa1535/ "smart tourism app: landmark recognition")

> *Smart tourism app: landmark recognition*

To test the performance of the computer vision system, its accuracy performance was tested on the difficult dataset Paris Revisited dataset, developed by the University of Oxford. This dataset is composed of 5000 images of landmarks; we used ⅔ for training and ⅓ for test.

![Revisited Paris dataset](https://ucarecdn.com/51a9476e-b72d-4a5a-ac99-53d77a3b6262/ "Revisited Paris dataset")

> *Revisited Paris dataset: for each query image is provide a set of good (dark green), medium (light green) and hard (yellow) images that are associated. A CBIR system should provide the results in these categories in this order.*

Considering the **computational costs** of the variants of MobileNet V3 tested, the smaller version allows to compute the visual features in 0.006 seconds, making it suitable for low-end devices that do not have much computational capabilities. This at the cost of losing 5 percent points in terms of accuracy. On the other hand mid and high-end devices can use a medium and a large network version, that require 0.023 and 0.038 seconds. Thanks to the use of FAISS, the search of similar images takes a negligible amount of time (0.004 seconds). Once the set of  similar images has been obtained the result of the K-NN classifier is instantaneous. The accuracy of the large network is \~76%, while the medium version obtains \~73% and the smaller one 68%. Using the test-time augmentation improves the performance by 6 points, thus reaching up to 82%, showing the **benefit of this technique.**

The following figure shows screenshots of the **application**, with additional debug information in the first two images, and the recognition of a landmark with the associated information.

![Active exploration: Users interact with the app getting info from the lists of suggested tours, the suggestion adapts based on the clicks of the user and the description of the landmark.  Users are directed to the landmarks of interest and get suggestion on other relevant destinations.](https://ucarecdn.com/975ec430-2cc7-4bb2-b6e2-0069861b7a20/ "Active exploration: Users interact with the app getting info from the lists of suggested tours, the suggestion adapts based on the clicks of the user and the description of the landmark.  Users are directed to the landmarks of interest and get suggestion on other relevant destinations.")

> *Active exploration: Users interact with the app getting info from the lists of suggested tours, the suggestion adapts based on the clicks of the user and the description of the landmark.  Users are directed to the landmarks of interest and get suggestion on other relevant destinations.*

![Active exploration: Users are alerted about their proximity to an interesting landmark  Users can take a photo of something that attracts their interest and get related info](https://ucarecdn.com/8be5bece-e57c-4192-b1bc-47e7d62e690d/ "Active exploration: Users are alerted about their proximity to an interesting landmark  Users can take a photo of something that attracts their interest and get related info")

> *Active exploration: Users are alerted about their proximity to an interesting landmark  Users can take a photo of something that attracts their interest and get related info*
>
> ### Source code
>
> The source code of the app is available on the Github of ReInHerit: <https://github.com/ReInHerit/SmartTourism>
>
> `youtube: https://youtu.be/Mlfbmtp1LKk?si=qUDEJjgsdkhgiXJ-`