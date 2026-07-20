---
layout: post
title: "Our paper accepted to IEEE Access"
date: 2025-04-29
---

Congratualtions! 

Our paper has been accepted to the **IEEE Access** (Impact Factor: 4.2) <a href="https://ieeexplore.ieee.org/document/10981835">[LINK]</a>

- **Title**: Leveraging Text Signed Distance Function Map for Boundary-Aware Guidance in Scene Text Segmentation

- **Authors**: Ho Jun Kim and Hak Gu Kim

- **Abstract**: Scene text segmentation is to predict pixel-wise text regions from an image, enabling in-image text editing or removal. One of the primary challenges is to remove noises including non-text regions and predict intricate text boundaries. To deal with that, traditional approaches utilize a text detection or recognition module explicitly. However, they are likely to highlight noise around the text. Because they did not sufficiently consider the boundaries of text, they fail to accurately predict the fine details of text. In this paper, we introduce leveraging text signed distance function (SDF) map, which encodes distance information from text boundaries, in scene text segmentation to explicitly provide text boundary information. By spatial cross attention mechanism, we encode the text-attended feature from the text SDF map. Then, both visual and text-attended features are utilized to decode the text segmentation map. Our approach not only mitigates confusion between text and complex backgrounds by eliminating false positives such as logos and texture blobs located far from the text, but also effectively captures fine details of complex text patterns by leveraging text boundary information. Extensive experiments demonstrate that leveraging text SDF map in scene text segmentation provides superior performances on various scene text segmentation datasets.