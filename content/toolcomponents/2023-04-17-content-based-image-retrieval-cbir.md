---
type: toolcomponent
pageId: d9376609-c121-41cc-b560-cc3b430bf350
title: Content-based image retrieval (CBIR)
date: 2023-04-17T14:18:09.263Z
target-audience:
  - VISITOR
linkedWebinars:
  - 034cd93b-1043-42e9-9f2a-835d03a4e1cc____Artificial Intelligence and Computer
    Vision for Cultural Heritage
linkedToolkitApps:
  - e4a4ac1e-aa66-4664-a582-4055a3138d66____Smart Retrieval
  - beae4f2a-8f09-4de1-949a-398f8b3626b3____Smart Lens
license: CC BY 2.0
---
Content-based image retrieval (CBIR) is a technique used to search and retrieve images from a multimedia database based on their visual content, such as color, texture, shape, or other features. CBIR can be implemented in various ways, depending on the type of data used for the search and the retrieval method.

1. Image-to-Image Retrieval: Image-to-Image retrieval, also known as query-by-example (QBE), is the most common form of CBIR. In this case, a user provides an input image, and the system searches for other images in the database that are similar in terms of visual content. The system extracts the features from the query image, such as color, texture, or shape, and compares them with the features of the other images in the database. The retrieved images are then ranked according to their similarity with the query image.

   ![Example of QBE retrieval](https://ucarecdn.com/bb1bae3c-42a9-40bd-8539-036795aeefd3/-/crop/1325x1081/286,46/-/preview/ "Example of QBE retrieval")
2. Text-to-Image Retrieval: Text-to-Image retrieval involves searching for images in a database based on the text description of the image. In this case, a user provides a text query, such as a keyword or a natural language description, and the system retrieves images that match the query. The system uses natural language processing (NLP) techniques to extract the relevant features from the text query and compares them with the features of the images in the database.

   ![Example of text-to-image retrieval](https://ucarecdn.com/85311be8-da02-429d-a43b-fce95a63249a/ "Example of text-to-image retrieval")
3. Combined Image Retrieval (CIR): Combined Image Retrieval (CIR) is a hybrid approach that combines both image-to-image and text-to-image retrieval techniques. In this case, a user provides both an input image and a text description of the image, and the system searches for images in the database that are similar to both the image and the text query. The system extracts features from both the image and the text query and combines them to retrieve the most relevant images.

The ReInHerit toolkit app implements all these types of retrieval. Actually state-of-the-art results have been obtained in the cultural heritage domain on the [NoisyArt dataset](https://github.com/delchiaro/NoisyArt), and in combined image retrieval on the two most common datasets used in this domain. The following image shows how a neural network sees the parts of the image relted to the description of an artwork: the heatmap shows the parts that are considered more related to the main content of the artwork.

![ the heatmap shows the parts that are considered more related to the main content of the artwork by a neural network.](https://ucarecdn.com/72085274-3f84-4fcc-b052-ba4c6ad10ff0/ " the heatmap shows the parts that are considered more related to the main content of the artwork by a neural network.")

The Smart Lens app uses CBIR as one of the techniques used to recognize artwork details (the other approaches used in Smart Lens are object detection and image classifications)