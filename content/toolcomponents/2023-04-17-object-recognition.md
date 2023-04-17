---
type: toolcomponent
pageId: 3e558c0d-e46e-4a06-ba9a-049caa8f66bb
title: Object recognition
date: 2023-04-17T14:50:27.580Z
target-audience:
  - VISITOR
linkedWebinars:
  - 034cd93b-1043-42e9-9f2a-835d03a4e1cc____Artificial Intelligence and Computer
    Vision for Cultural Heritage
linkedToolkitApps:
  - beae4f2a-8f09-4de1-949a-398f8b3626b3____Smart Lens
license: CC BY 2.0
---
Object recognition is the task of identifying objects in an image or video frame. SSD (Single Shot Detector) and MobileNet are two deep learning-based neural network architectures that can be used for object recognition.

MobileNet is a lightweight neural network architecture designed to run efficiently on mobile and edge devices. It uses depthwise separable convolutions to reduce the number of parameters and computational complexity while maintaining high accuracy. SSD is a single-shot detection neural network architecture that predicts object bounding boxes and class probabilities directly from input images.

When combined, SSD/MobileNet becomes a powerful object recognition system that can run in real-time on mobile and edge devices. The MobileNet backbone is used to extract features from the input image, while the SSD head is used to predict object bounding boxes and class probabilities.

The SSD/MobileNet network is trained on a large dataset of annotated images, which is used to learn the relationships between image features and object classes. During inference, the network takes an input image and outputs a list of predicted object bounding boxes and their corresponding class probabilities.

For these computational capabilities a SSD/Mobilenet object detector has been used in the ReInHerit toolkit Smart Lens app (the app can use also CBIR and image classification) to recognize artwork details.

![Example of object detection in Smart Lens](https://ucarecdn.com/7c6f8edb-150d-4bda-83fa-3fe2d6a2f03a/-/crop/824x1345/4,89/-/preview/ "Example of object detection in Smart Lens")