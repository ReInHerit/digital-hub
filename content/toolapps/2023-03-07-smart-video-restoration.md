---
type: toolapp
pageId: b17b98c2-fa69-49e0-99e2-0c6111e3ca81
title: Smart Video Restoration
desc: ReInHerit Toolkit | Smart Video Restoration
date: 2023-03-07T11:01:59.057Z
target-audience:
  - PROFESSIONAL
linkedWebinars:
  - 034cd93b-1043-42e9-9f2a-835d03a4e1cc____Artificial Intelligence and Computer
    Vision for Cultural Heritage
linkedToolkitComponents:
  - f682c5c9-46e5-4c15-bf52-21d5f76a935f____PyTorch Framework
license: CC BY 2.0
status: completed
thumbnail: https://ucarecdn.com/69fef94a-4726-4bae-90b9-0e1cfd24429e/
chatApps: https://reinherit.zulipchat.com/#narrow/stream/392282-ReInHerit-Applications-and-Toolkit/topic/Smart.20Video.20Restoration
---
This is an application designed for **historical video** archive professionals that allows to restore analog videos using an **innovative neural network** capable of coping with severe degradations such as tape mistracking. Neural Network AI technology that uses multi - frame approach to restore videos and is able to deal with severe tape mistracking, which results in complete scrambled frames.  Historical videos constitute an important part of the cultural heritage of a society.  This novel architecture for restoring degraded real-world analog videos coming from historical archives. A **web app** lets users **upload videos** with similar system-intrinsic and aging-related types of degradations **and download the restored versions.**

The availability of this video content often is hampered by numerous artifacts and degradations due to technological limitations and aging of the recording support that limit its distribution and fruition by the general public. Normally the **restoration** of these videos is conducted frame by frame by experienced archivists with commercial solutions, thus at **great economic and time cos**t. Analog videos of historical archives often contain severe visual degradation due to the deterioration of their tape supports that require costly and slow manual interventions to recover the original content. We are working on a novel neural network that uses a multi-frame approach and is able to deal also with severe tape mistracking, which results in completely scrambled frames. The network can be used to reduce also other types of tape defects that are less severe than tape mistracking. We think that it may also work on films to reduce scratches and mold. The novelty is in the neural network that reduces these artifacts.

Currently available neural networks for digital video restoration are not capable of addressing severe video degradation. Some works tried to restore historical video archives more rapidly and without human aid. For example, *DeOldify* is an open-source tool for old film restoration addressing in particular colorization of black and white movies. The scientific community working on CV and multimedia has been active, in very recent years, to develop novel solutions for video restoration and this new system has been demonstrated at the ACM Multimedia 2022.

Development of this smart video application has been carried on in collaboration with the *Historical Archive of Istituto Luce*, which has evaluated the results and provided use cases and test materials.  This  is an Italian society responsible for the preservation and distribution of the Archivio Storico Luce, the largest Italian historical video archive dating from throughout the 1900s and comprising a variety of sources, providing some analog videos from this archive. These videos present several system intrinsic and aging-related types of degradations typical of analog video tapes. An example of such degradation is shown in the following figure. This poses a severe risk for the long term maintenance of these types of materials and in the future similar archives risk losing tens of years of archive materials, up to the years in which digital video recording became the common storage support. 

Analyzing the existing approaches for video restoration, they focus on standard structured defects such as scratches and cracks, so they are not capable of restoring the particular types of artifacts that analog video restoration requires. Unfortunately, when considering real-world archive videos, there is no clean high-quality version of them to use as ground truth for supervised learning. Consequently we created a synthetic dataset as similar as possible to the real-world videos to train and evaluate our system. 

Starting from high-quality videos of the Harmonic dataset we used Adobe After Effects to randomly add several types of degradations, such as: 

*  Gaussian noise, resembling the tape noise that is typical of analog videos; 
*  white artifacts simulating tape dropouts; 
* cyan, magenta and green horizontal lines resembling chroma fringing 
* horizontal displacements, similar to tape mistracking artifacts; this is the most complex error that can be encountered. 

As with the real-world videos, all these artifacts vary over time and occur with different intensity, positions and combinations for each frame. The following figure shows an example of the synthetic dataset created to develop the restoration app. On the left the high quality frame, on the right the version with the artifacts generated using After Effects. The combination of frames is used to train the neural network.

![Example of synthetic training dataset](https://ucarecdn.com/5b7f46b1-3cec-4e4d-889d-64245982146d/ "Example of synthetic training dataset")

> *Example of synthetic training dataset. Left) original high-quality image; Right) degraded version created with Adobe AE. The network is trained to obtain the image on the left from the image on the right, used as input*

The novel neural network was designed using Transformer networks and processing a group of consecutive frames so that the restoration of a ruined frame is helped by the contextual data provided by the preceding and following ones (even if they are degraded as well). Given the complexity of the task the computation cannot perform in real-time and must be executed as a batch process. 

The performance of this new method was measured using three standard full-reference visual quality metrics: 1) PSNR; 2) SSIM; 3) LPIPS. The quantitative results are shown in the table below. For a fair comparison, DeOldify was re-trained from scratch using our new training data. The new model performed best by a wide margin.

![ Comparison of the ReInHerit restoration  ](https://ucarecdn.com/cd5a0318-39cd-4b08-adae-8d160ba73a50/ "Comparison of the ReInHerit restoration ")

>  *Comparison of the ReInHerit restoration app w.r.t. DeOldify. Higher values of PSNR and SSIM are better. Lower values of LPIPS are better. Best results are highlighted in bold.*

The following figure shows examples of the results obtained by the neural network. On the left of each image is shown the input frame, on the right the desired output and in the middle the actual output of the network. These examples have been obtained from the synthetic dataset since it is the only way to have “gold standard” frames. 

![Examples of video frames restoration](https://ucarecdn.com/051c0e7a-5798-49ec-9430-d0979b990cb1/ "Examples of video frames restoration")

>  *Examples of video frames restoration: left) input: degraded frames; middle) output of the network; right) ideal result, i.e. original high quality frame used to produce the degraded version.*

When applying the system to real world video archives we cannot rely on high-quality reference images, they simply do not exist and the degraded frames are what is available in the archive. The following figures show what happens when the video restoration system is applied in a real-world usage scenario, showing an example of materials provided by Istituto Luce. 

![Example of results](https://ucarecdn.com/5ccc8405-a26f-47ff-a7fd-0a52d8a341eb/ "Example of results")

> *Example of results obtained by smart video restoration app on real-world archive video. Video courtesy of Istituto Luce.*

The smart video restoration app is **composed of two parts:**

* the **backend**, implemented using PyTorch provides the computer vision functionalities that restore the video using a novel neural network architecture, these CV services are provided to the front-end by a REST API implemented in Flask;
* The **front-end i**s a web app accessible through a browser that allows users to submit degraded videos, start their restoration and then download the restored versions. Screenshots of the web app are presented in the following, showing the whole process to restore a video.

![upload a file](https://ucarecdn.com/cf33d44c-2b65-4f03-ba33-8229684e1f97/ "upload a file")

> *The user can upload a file or choose one of the given examples*

![Overview of the chosen video](https://ucarecdn.com/7ada4b4d-ce2d-41dc-a010-9e114c7ad5c4/ "Overview of the chosen video")

> *An overview of the chosen video provides some information about it, the user can check if the metadata is correct and then can start the restoration process*

![End of the restoration process ](https://ucarecdn.com/b14c796b-5436-4d9c-b7bb-1cd01e05dfae/ "End of the restoration process ")

> *When the restoration process ends, the user can see and download the restored video and the comparison with the degraded one.* 

Since the restoration process is computationally expensive, the CV component must be executed on a server with appropriate GPU. It is also possible to use GPU servers commonly available from cloud providers such as Amazon AWS, Google Cloud, Microsoft Azure. 

The system has been further improved, reconsidering the design of the neural network used to restore videos. A new network was designed based on a Swin-UNet, the architecture used in the first version of the application that exploits both neighboring and reference frames by means of a novel Multi-Reference Spatial Feature Fusion block to restore corrupted frames.  CLIP was employed for zero-shot artifact detection to select the cleanest frames of each video as references. Finally,  contrastive loss was extended to a multi-frame setting to make the results more perceptually accurate. Both quantitative and qualitative experiments show the effectiveness of this novel approach when compared with other state-of-the-art methods. The idea is that even corrupted videos contain some relatively good frames that could be selected based on their quality, and use their visual content to provide additional guidance to the neural network that is performing the restoration. A new scientific paper that describes the novel system is currently under submission  at one of the foremost conferences on computer vision (International Conference on Computer Vision, 2023).

### Source code

The source code of the app is available on Github: <https://github.com/miccunifi/analog-video-restoration>

### Demo Smart Video Restoration

 **Demo** of "Smart Video Restoration"  is available at the following link (the online demo works on photos and not videos, for timing reasons):\
[https://reinherit-image-restor​e.herokuapp.com](https://reinherit-image-restore.herokuapp.com/)

![Smart Video Restoration](https://ucarecdn.com/58c061bd-e99a-4ecd-8c17-b710ac4f1987/ "Smart Video Restoration")