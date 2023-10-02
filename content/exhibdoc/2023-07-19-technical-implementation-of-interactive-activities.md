---
pageId: e11ff6f9-6eaa-4cfd-87d5-74029c148db3
layout: blog
type: exhibdoc
title: 6. Technical Implementation of Interactive Activities
date: 2023-07-19T09:28:33.242Z
target-audience:
  - PROFESSIONAL
theme: Technology
exhibdocsection: Digital Exhibitions
license: CC BY 2.0
---
The previous section briefly discussed the content framework H5P which was used to create the interactive components of the ReInHerit Digital Exhibitions. This next section discusses the technical details of how the H5P tools are incorporated into the Digital Exhibition website.

H5P (HTML5 Package) is an open-source content authoring and publishing platform that allows users to create interactive and engaging content for the web. It provides a range of content types and interactive elements that can be easily integrated into websites, learning management systems (LMS), and other digital platforms.

The content is based on HTML5 and JavaScript and can be created using a web-based editor. The content is typically packaged as an embeddable HTML5 file that can be easily inserted into web pages. H5P offers a wide variety of interactive content types, including presentations, quizzes, interactive videos, drag-and-drop activities, timelines, and more. These content types can be customized, configured, and combined to create rich and interactive learning experiences.

 H5P was used for certain models represented in the ReInHerit Digital Exhibitions, and a standalone version of the H5P code was employed instead of the original H5P iframe version. This documentation outlines the process and considerations involved in using the standalone H5P code and the steps taken to upload and display the H5P models in the exhibition.  

The following steps were taken to integrate the standalone version of H5P into the exhibition:

1. **Standalone Code Selection**: Instead of utilizing the iframe version of H5P, a standalone version was chosen for improved performance and greater flexibility in terms of implementation and styling. The specific code used for the standalone H5P version can be found at https://github.com/tunapanda/h5p-standalone.

2. **Uploading to the Digital Collection Server**: The H5P standalone version was uploaded to the server hosting the ReInHerit Digital Collection. This ensures that the necessary files and resources are available for displaying the H5P models within the exhibition independently from the maintenance of the H5P website.

3. **Creation of Index Files**: For each H5P model, a separate index file was created on the server. These index files serve as entry points for each model, facilitating the proper rendering and functioning of the H5P content.

4. **Resource Folder Upload**: Alongside each index file, the corresponding resources folder for each H5P model was uploaded to the server. These resource folders contain the necessary assets and media files required for the H5P models to function correctly.

Displaying H5P Models via iFrame: Once the standalone H5P version and its associated resources were uploaded to the server, the H5P models could be displayed within the exhibition. This was achieved by embedding the H5P models using iframes, allowing visitors to interact with the interactive content seamlessly.