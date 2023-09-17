# Finn Wolfhound: A Review
Tawna Shampo.

A website that reviews the book Finn Wolfhound.

My website [Render Website](https://finn-wolfhound-a-review.onrender.com).

```mermaid
---
title: Finn Wolfhound
---
erDiagram
   Chapters ||--|{ Pages : contains
   Chapters {
    int chapterNum
    string chapterName
   }
   Pages {
    int pageNum
   }
```
