---
type: toolcomponent
pageId: 05f95e69-71ff-418c-a7c6-306de11fc4c3
title: Pose recognition
date: 2023-04-17T14:34:21.701Z
target-audience:
  - PROFESSIONAL
linkedWebinars:
  - f2a58e91-3c1a-43c0-baeb-45234da1cbce____Engaging Museum Visitors with
    Gamification Apps
linkedToolkitApps:
  - 5f367b50-4089-4718-9b66-8114962c6596____Strike a Pose
license: CC BY 2.0
---
Pose recognition using deep learning involves training deep neural networks to detect and classify human body poses from images or video data.

[MoveNet](https://www.tensorflow.org/hub/tutorials/movenet) is a deep learning-based pose estimation framework that uses lightweight models optimized for mobile and edge devices. It is designed to perform real-time and accurate human pose estimation from video or image data. MoveNet is built on the EfficientNet backbone and uses a combination of depthwise separable convolutions and skip connections to extract features and estimate human poses.

MoveNet comes in different variants: Lightning, and Thunder. Lightning is intended for latency-critical applications, while Thunder is intended for applications that require high accuracy. In the ReInHerit toolkit app **Strike-a-pose** we have used Lightning to eploit its low-latency, required for a better user interaction in a gamification-based app.

![Example of Movenet applied to  Mona Lisa painting.](https://ucarecdn.com/4d2c90f2-dbbe-40a3-ad56-05170649403f/-/crop/512x524/0,0/-/preview/ "Example of Movenet applied to  Mona Lisa painting.")

Other possible applications of MoveNet in cultural heritage include pose recognition and analysis of historical artworks and sculptures. MoveNet can be used to estimate the poses of figures depicted in ancient art and compare them to known poses from different historical periods. This analysis can provide insights into the cultural and historical contexts of the artwork and help identify its origin and cultural influences.

MoveNet can also be used in virtual and augmented reality applications in cultural heritage. For example, MoveNet can be used to track the movements of users in a virtual museum or exhibition, allowing them to interact with digital artifacts and experience cultural heritage in an immersive and interactive way.