---
layout: post
title: "Our paper accepted to IEEE Signal Processing Letters"
date: 2025-12-27
---

Congratualtions! 

Our paper has been accepted to the **IEEE Signal Processing Letters (SPL)** (Impact Factor: 3.9) <a href="https://ieeexplore.ieee.org/document/11320277">[LINK]</a>

- **Title**: Unsharp-Inspired Adversarial Point Cloud Perturbation via Low-Rank Approximation

- **Authors**: Kyo Seok Lee, Han-nyoung Lee, and Hak Gu Kim

- **Abstract**: Deep neural networks (DNNs) for 3D point cloud recognition have achieved remarkable performance, but remain highly vulnerable to adversarial perturbations. Existing adversarial methods often suffer from a trade-off between imperceptibility and attack strength, either producing noticeable outliers or requiring excessive point displacements. In this paper, we propose a novel unsharp-inspired adversarial perturbation that leverages low-rank approximation to balance global structure preservation and fine-detail manipulation. Specifically, the point cloud is decomposed via eigenvalue decomposition (EVD) into global and residual components, where the low-rank reconstruction captures the overall shape and the residual highlights salient details. Perturbations are then selectively applied to these fine-detail regions and smoothed according to local magnitude and orientation, ensuring geometric consistency. Extensive experiments on ModelNet40 and ShapeNet-Part using PointNet and DGCNN demonstrate that our method achieves 100\% attack success rate while significantly reducing geometric distortion compared to state-of-the-art methods. These results highlight the effectiveness of spectral-domain low-rank modeling for generating adversarial point clouds that are both strong and imperceptible.