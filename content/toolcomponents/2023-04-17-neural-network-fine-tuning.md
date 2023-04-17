---
type: toolcomponent
pageId: 9de39bcf-0dc4-4248-b1e8-521e0141cf4d
title: Neural Network Fine-tuning
date: 2023-04-17T15:35:02.798Z
target-audience:
  - PROFESSIONAL
linkedWebinars:
  - 034cd93b-1043-42e9-9f2a-835d03a4e1cc____Artificial Intelligence and Computer
    Vision for Cultural Heritage
linkedToolkitApps:
  - beae4f2a-8f09-4de1-949a-398f8b3626b3____Smart Lens
license: CC BY 2.0
---
Fine-tuning a neural network involves taking a pre-trained neural network that has already been trained on a large dataset and using it as a starting point to train on a new, smaller dataset. The pre-trained neural network has already learned to recognize general patterns in the original dataset, and fine-tuning involves adjusting the parameters of the neural network to improve its performance on the new, smaller dataset.

A typical use case in cultural heritage is to improve the performance of networks that are typically trained on photos of real-worlkd objects and not on artistic depictions (e.g. paintings or statues). This may be necessary to recognize objects, perform content-based image retrieval or classify visual content.

![Example of results using fine-tuning](https://ucarecdn.com/90bcb1fa-14de-460f-bdd4-5b18c9d32369/ "Example of results using fine-tuning")

In the ReInHerit toolkit a specific web-based application has been developed to train the neural networks used in the SmartLens application. The image shows how fine tuning an object detection network on paintings helps to recognize many more objects than using a neural network trained on photos of persons !

In general, fine-tuning typically involves two stages:

1. Feature extraction: In this stage, the pre-trained neural network is used as a feature extractor. The input data is passed through the pre-trained neural network, and the output of one or more intermediate layers is used as features for a new, smaller neural network. The new neural network is then trained on the new, smaller dataset to perform a specific task, such as classification or regression.
2. Fine-tuning: In this stage, the pre-trained neural network is further trained on the new, smaller dataset. The weights of one or more layers of the pre-trained neural network are modified, while keeping the weights of the other layers fixed. This allows the pre-trained neural network to adapt to the new dataset and improve its performance on the specific task.

Fine-tuning a neural network has several advantages, including:

1. Reduced training time: Fine-tuning a pre-trained neural network can reduce the amount of time required to train a new neural network from scratch, as the pre-trained network has already learned general features that can be used as a starting point.
2. Improved performance: Fine-tuning a pre-trained neural network can improve its performance on a specific task, as the network has already learned general patterns in the original dataset.
3. Reduced overfitting: Fine-tuning a pre-trained neural network can reduce the risk of overfitting on a small dataset, as the pre-trained network has already learned to generalize from a large dataset.

### Source code

A web-based application for neural network fine tuning is part of the ReInHerit toolkit. The source code is available in the Github of ReInHerit: <https://github.com/ReInHerit/reinherit-webnet-trainer>