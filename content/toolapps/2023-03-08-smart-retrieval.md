---
type: toolapp
pageId: e4a4ac1e-aa66-4664-a582-4055a3138d66
title: Smart Retrieval
date: 2023-03-08T10:45:19.205Z
target-audience:
  - PROFESSIONAL
linkedWebinars:
  - 034cd93b-1043-42e9-9f2a-835d03a4e1cc____Artificial Intelligence and Computer
    Vision for Cultural Heritage
license: CC BY 2.0
status: draft
thumbnail: https://ucarecdn.com/569eb601-3c1a-463d-a66b-995ac7b382a8/
---
This is a **web application** that can be used to provide **advanced** **search functions for multimedia archives.** It provides **content-based image retrieval (CBIR)** facilities, i.e. search images based on their content. Search can be performed in two ways: 

1. use a **textual description** to search images;
2. use a **combination of reference image and associated textual description** to search for images.

The novelty of this application is due to the implementation of the computer vision component, i.e. the **neural network** used to associate text describing the desired content of the image and the pixels of the image. Within ReInHerit, a **novel approach** to perform conditioned image retrieval has been developed, i.e. the second type of search described above, that allows to **search an image** **using an image example (a visual reference**) and an **additional text**, expressed in natural language, that describes a modification w.r.t. the content of the reference image. The first type of image search is implemented using the same type of neural network, used in this case for uni-modal search: text-to-image retrieval (and also image-to-image retrieval). The system can be used also to perform tagging (i.e. image annotation), using a zero-shot learning approach, i.e. an approach where it is not necessary to train explicitly the network to recognize a specific content. This is extremely beneficial for **small museums** that may not have the large resources needed to collect training data required to train explicitly a neural network to recognize a visual concept

Smart retrieval application is **composed of two parts**:

* a system that allows to retrieve multimedia archive materials using a **single modality**, i.e. the user queries that archive using a sample image or a textual description in natural language;
* and a **multimodal approach** where the user combines a sample image and additional text that requires a modification of the visual content in natural language. 

The app is a **server-side application** with a minimal client-side web app that shows how to use it. The server-side app must be integrated by the users.  The tool can be used both by professionals or end users in web applications. This application is designed to be desktop based (using a web interface) to be used as additional search tool in museum websites or to manage, in general, multimedia collections. It provides content-based image retrieval facilities, i.e. search images based on their content.

**Image Classification and Content-Based Image Retrieval (CBIR)** are fundamental tasks for many domains, and have been thoroughly studied by the multimedia and computer vision communities. In the cultural heritage domain, these tasks allow to **simplify the management** of large collections of images, allowing to annotate, search and explore them more easily and with lower costs

Usually the problem of CBIR has been addressed using c**onvolutional neural networks (CNNs)**, that compute visual features representing the visual content of images and videos. Such features are then used to index and search multimedia archives. These networks are typically used in an unimodal fashion, i.e. only one media is used to train and use a network. This may limit the types of application that can be developed and may also reduce the performance of the networks. Several recent works are showing how using multi-modal approaches may improve the performance in several tasks related to visual information. It has been shown that the [CLIP neural network](https://openai.com/research/clip), a model trained using an image-caption objective alignment on a giant dataset made of 400 million (image, text) pairs, obtains impressive results on several downstream tasks. Using only textual supervision, CLIP model learns to perform a wide set of tasks during pre-training including OCR, geo-localization, action recognition and many others. This task learning can be leveraged via natural language prompting to enable zero-shot transfer to many existing dataset.  CLIP was chosen as the backbone of our **smart retrieval app**, to solve two types of CBIR: **unimodal search** (text-to-image or image-to-image) and **multimodal search.** 

**\
UNIMODAL RETRIEVAL**\
For the first type of research, the zero-shot capabilities of CLIP in the artwork domain were exploited. The **NoisyArt dataset**, which is originally designed to support research on **webly-supervised recognition of artworks** and **Zero-Shot Learning (ZSL).** Webly-supervised learning is interesting since it allows to greatly reduce annotation costs required to train deep neural networks, thus allowing cultural institutions to train and develop **deep learning methods** while keeping their budgets for the  curation of their collections rather than the curation of training datasets. In Zero-Shot Learning approaches visual categories are acquired without any training samples, exploiting the alignment of semantic and visual information learned on some training dataset. ZSL in artwork recognition is a problem of instance recognition, unlike the other common ZSL problems that address class recognition. Zero-shot recognition is particularly appealing for cultural heritage and artwork recognition, although it is an extremely challenging problem, since it can be reasonably expected that museums have a set of curated descriptions paired with artworks in their collections. 

To get a better idea of how CLIP behaves in the artworks domain we started with a classification task using a shallow classifier and CLIP as the backbone.  Subsequently, thanks to the descriptions of the artworks in the dataset, we performed experiments in the field of zero-shot classification where CLIP was able to demonstrate its abilities in this task.  To evaluate the performance of our system we performed experiments on the tasks of **artwork-to-artwork** and **description-to-artwork retrieval** obtaining very promising results and superior performance to a ResNet-50 pre-trained on ImageNet, i.e. the method that we developed has a much better performance than that obtainable with neural networks designed for unimodal approaches.  The figure shows a selection of images from the NoisyArt dataset, that comprises 3.120 different classes, 70.474 images for training and 1.355 images for test.

![NoisyArt dataset](https://ucarecdn.com/9208917f-efdb-43e9-8f5f-2ad3e80c70fc/ "NoisyArt dataset")

> *NoisyArt dataset - examples of classes and training images. For each artwork/artist pair we show the seed image obtained from DBpedia, the first two Google Image search results, and first two Flickr searches.*

To understand how CLIP associates text to the parts of the image that refers to an artwork we used a generalization of **gradCAM technique**, that obtains an heat-map visualization showing us the portions of the image that CLIP most closely associated with the description. 

![Examples of such gradCAM visualization](https://ucarecdn.com/fe19bca0-25ae-4aa7-bc87-7355d6aaa407/ "Examples of such gradCAM visualization")

> \
> *Four examples of such gradCAM visualization. We can see how, using the descriptions in the dataset, CLIP places attention to the portions of the image that are associated with the artworks shown. This fact made us confident that CLIP would work very well in the domain of artwork.*

To summarize the CBIR performance of the app we report in the following tables the comparison of several variations of use of the CLIP backbone, using text and images as keys for retrieval.  **Text-to-image search**: this task is akin to Zero-shot classification, we use textual queries to retrieve images, therefore we measure the performance of CLIP in terms of recognition accuracy and mean Average Precision (mAP).  **Image-to-image search:** in this task we compare a baseline using ResNet with variations of combinations of features extracted from CLIP. We also try to use CLIP in a zero-shot learning setup. Since the task is purely a retrieval one we report the performance only in terms of mAP. Again we show that CLIP beats a sensible baseline, but we also show how to greatly improve the basic CLIP performance using the CLIP finetuning component of the developed app, that adapts the CLIP network to datasets in the cultural heritage domain. This component will allow organizations to implement their own CBIR system beating previous state-of-the-art methods. 

**MULTIMODAL RETRIEVAL**\
Considering the impressive results obtained in unimodal search with CLIP, a second type of CBIR has been considered, **combining text and images to express more complex queries**, i.e. allowing users to represent complex visual aspects with image example and then refining their query with high-level expressions using natural language. This type of search is called, in the multimedia and computer vision community, **composed image retrieval**: the unimodal query is extended to an image-language pair. In a small variation, called **conditioned image retrieval**, the additional text may request constraints or add specifications on some attributes of the retrieved results. It must be noted that this type of search is much more complex than standard CBIR, but is receiving more attention by the scientific community since it allows to extend the effectiveness of CBIR systems by adding some form of user feedback and because it has many possible applications in different domains.  The following figure shows the concept of combined/conditioned image retrieval. 

![Example of combined/conditioned retrieval](https://ucarecdn.com/e222a716-171b-4db4-9aac-51091e8bc7a4/ "Example of combined/conditioned retrieval")

> *Example of combined/conditioned retrieval. The text provides a context to the visual query, in this case requesting to change a visual aspect of the reference image*

Since the task is much more complex than the previous one we have developed a novel neural network that combines visual and textual features computed from a CLIP backbone. This network, called **combiner**, learns how to transform the visual features of the reference image using the textual features of the additional query so that they become more similar to the visual features of the objects in the database. In this way, at runtime, there’s need to compute only the textual features, an operation that can be performed also on old portable PCs and run the computationally inexpensive combiner network to compute the most similar images. This approach thus allows to easily scale on large datasets, or in the case of small organizations, allow to use the system also with low power servers, or using free/low cost cloud providers. The following figure provides a gist of the architecture of the system; in order to obtain a further performance improvement we have reused the CLIP finetuning component that was developed to implement the unimodal search function presented in the previous subsection.

![System architecture](https://ucarecdn.com/92bd5203-10d1-4ea5-87dc-2d99c7a20d25/ "System architecture")

> *System architecture of the application used for conditioned image retrieval. The CLIP image and text encoder have been finetuned with the component developed for unimodal search.*

To **evaluate the performance of the system** with respect to competing approaches have been used  two standard datasets employed for this task, CIRR, that contains a large variety of images, and FashionIQ that contains images related to fashion. The selection of these datasets that are commonly used by the scientific community working in this field allow us to evaluate the performance of the system fairly with respect to a large number of competing approaches. The system has the currentstate-of-the-art performance for the task of conditioned/combined image retrieval.  The application has been demonstrated at the *IEEE/CVF Computer Vision and Pattern Recognition Conference 2022,* the premier annual computer vision conference, winning the *[Best Demo Honorable Mention award](https://www.micc.unifi.it/news/acm-multimedia-2022-awards/)*, the most prestigious conference on computer vision.

**WEB APP**\
The following figure shows an example of the web app used to test the multimodal retrieval system. The **frontend** is developed in **Javascript** and **HTML5**, the **backend** that provides the core of the application is implemented in **Python**, using PyTorch to implement the CV component and Flask to implement the REST services that let the interaction between the interface and the CV component.

![Web interface](https://ucarecdn.com/8dde4ea2-5d99-487c-bc4a-d9386e8d85d9/ "Web interface")

>  *Example of the web interface of the smart retrieval app for combined CBIR. The figure shows results obtained on the CIRR dataset considering the case of search of images regarding churches.* 

A new demonstrator, implemented as a web application, has been developed, showing the **text-to-image** and **image-to-image search** capabilities on the Noisy Art dataset . Currently the system has obtained state-of-the-art results on this dataset  These two search modalities complete the text+image to image search available in the previous version of the app. The textual prompt can be expressed in natural language.

The following figures show an example of the **starting page,** sporting a **gallery view** of a collection, followed by two examples of **image-to-image** (i.e. the visual features of a selected image are used to search similar images) and the **text-to-image search,** where the results are retrieved based on how much they correspond to the textual prompt.

![ Smart retrieval - gallery view](https://ucarecdn.com/2f46ae5c-0d07-4bd3-a056-f673226107b9/ " Smart retrieval - gallery view")

>  *Smart retrieval - gallery view*

![Smart retrieval - image-to-image search](https://ucarecdn.com/9708a996-c55f-4e72-873e-37fc064301d2/ "Smart retrieval - image-to-image search")

> *Smart retrieval - image-to-image search*

![Smart retrieval - text-to-image search](https://ucarecdn.com/c67d8c30-4139-40ed-961e-dca3705dd900/ "Smart retrieval - text-to-image search")

> *Smart retrieval - text-to-image search*

The text+image to image search function (i.e. composed image retrieval)  is currently being tested in collaboration with the [Europeana Fashion Heritage Association](https://fashionheritage.eu), which has provided a new dataset of historical images related to fashion.

Another extension of the work has addressed one of the main issues that hampers the development of composed image retrieval systems, i.e. the high effort and cost required for labeling datasets. This issue is particularly relevant in the cultural heritage domain where smaller organizations have difficulty in creating the large datasets required to train the neural networks required to address the task. This work, that has relevant scientific novelty and is currently under submission at one of the foremost conferences on computer vision [(International Conference on Computer Vision, 2023](https://iccv2023.thecvf.com)), extends conditioned image retrieval (CIR) to a zero-shot context, that does not require a labeled training dataset, thus extending the method to any dataset. The method is still based on the CLIP neural network and maps the visual features of the reference image into a pseudo-word token in CLIP token embedding space and integrates it with the relative caption. The method improves on two standard datasets that were used in our previous works (and that were until now the state-of-the-art results per scientific literature, i.e. FashionIQ and the more general CIRR dataset.