---
type: toolapp
pageId: c01cc7e5-033c-4d07-a56f-4612f9f210b3
title: Multimedia Chatbot
date: 2023-03-06T13:41:19.149Z
target-audience:
  - PROFESSIONAL
linkedWebinars:
  - 034cd93b-1043-42e9-9f2a-835d03a4e1cc____Artificial Intelligence and Computer
    Vision for Cultural Heritage
license: CC BY 2.0
status: draft
thumbnail: https://ucarecdn.com/c9c5d1cb-997e-4111-ba9c-49d9b1690bf8/
pdf: ""
---
This **web-based application** implements a **chatbot** **system** that can answer questions about visual content of artworks or about their context, e.g. about the author and history of the artwork. The design of this application is motivated by the recent huge interest in chat-based interaction that has been popularized, for example, by ChatGPT.

The application **frontend** is based on **Javascript**, and the interface is based on a reactive design that adapts both to desktop web browsers, allowing to add this functionality to the existing websites of museums, or to a mobile application to provide a new type of smart guide. To ease this latter type of interaction, queries of the users can be performed using speech recognition, so to avoid typing long queries on the small keyboard of the device.

The backend is implemented in **Python**, using **Flask** to provide the REST API to the frontend.

There are **two different versions of the backend;** one implements a set of three neural networks:

* a neural network classifies the type of the query of the user understanding if it is about the visual content or the context of th artwork;
* a neural network for question answering (QA) uses the contextual information of the artwork, stored as JSON data, to answer questions about the the context of the artwork;
* a neural network for visual question answering considers the visual data of the image and the visual description of the artwork, stored as JSON data, to answer questions about the content of the artwork.

The idea of this system is to overcome the limitations of existing visual question answering (VQA) approaches, that take as input an image and a question about the image content and aim to answer correctly to the input question (see following figure). In fact VQA systems are limited in that they:

* are able to answer questions about the **image content (visual questions)** with a few words;
* are not able to answer questions about the image which involve **external information (contextual questions)** not inferable from the image content.     

However, in the Cultural Heritage domain contextual questions are very frequent (when was the painting depicted?... who is the author?...)

The design of the first type of chatbot implemented in the Multimedia chatbot application follows thus the schema represented in the next figure.

![Multimedia chatbot: example of visual question answering (VQA) for cultural heritage, answering a question related to the context of the artwork](https://ucarecdn.com/133da573-fb5b-4438-9973-b1c80e0c12e5/ "Multimedia chatbot: example of visual question answering (VQA) for cultural heritage, answering a question related to the context of the artwork")

> *Multimedia chatbot: example of visual question answering (VQA) for cultural heritage, answering a question related to the context of the artwork*

![multimedia chatbot: example of visual question answering (VQA) for cultural heritage, answering a question related to the content of the artwork](https://ucarecdn.com/1e0e1087-2964-49ce-900c-235bb2475c84/ "multimedia chatbot: example of visual question answering (VQA) for cultural heritage, answering a question related to the content of the artwork")

> *Multimedia chatbot: example of visual question answering (VQA) for cultural heritage, answering a question related to the content of the artwork*

The question classifier network is a network that processes only the textual information given by the question. It has the structure of a **Transformer model** followed by a classification head, and has been trained on questions of both the VQA v22 and OK-VQA3 datasets.

The VQA network extracts the salient region features of the image using Faster-RCNN4 (pretrained on the Visual Genome5 Dataset). It uses an attention mechanism to filter the image regions according to the input question and has been trained on examples of VQA v2 dataset.

The QA network uses an attention mechanism to find the answer to the question in the text. It has the structure of the Transformer models and has been  trained on Squad6 dataset.

The following figures show some qualitative results obtained by the system, highlighting in red the mistakes

![ multimedia chatbot: qualitative results of the question classifier, question answering network and visual question answering network.](https://ucarecdn.com/989fc728-3eda-475b-af05-c10e599baa58/ " multimedia chatbot: qualitative results of the question classifier, question answering network and visual question answering network.")

>  *Multimedia chatbot: qualitative results of the question classifier, question answering network and visual question answering network.*

In addition to this first type of chatbot system, following the emergence and success of neural networks based on **GPT architectures** and training, a second chatbot engine has been added to the backend, using a **GPT-based neural network**. A paper describing the use of this type of neural network has been published in a workshop dedicated to applications of AI and computer vision to cultural heritage in one of the foremost conferences on computer vision (European Conference on Computer Vision 2022) 

This second system allows to create longer answers compared to the first approach, thus creating a more natural interaction. To cope with the fact that **GPT-based system** tend to create texts that sound plausible only from a linguistic point of view, but that are not based on actual knowledge, the system has been designed using prompt-engineering techniques that force the neural network to adhere to the contextual and content-based information provided by the JSON files that contain actual details and information related to the artwork.

Examples of the interface of the multimedia chatbot for mobile devices are shown in the following are shown examples of the web application designed for PC browsers.

![VIOLA multimedia chatbot: landing page and answering questions related to the context of an artwork](https://ucarecdn.com/53ad5186-ae21-4f5c-9f1e-a428d3d03724/ "VIOLA multimedia chatbot: landing page and answering questions related to the context of an artwork")

> *VIOLA multimedia chatbot: landing page and answering questions related to the context of an artwork*