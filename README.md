# Finn Wolfhound: A Review
Tawna Shampo.

A website that reviews the book Finn Wolfhound.

My website [Render Website](https://finn-wolfhound-a-review.onrender.com).


## ER Diagrams
```mermaid
---
title: Finn Wolfhound: A Review
---

erDiagram
  chapter ||--o{ page : "contains"

  chapter {
    id SERIAL pk
    title TEXT "Chapter Title"
    description TEXT "Chapter Description"
  }

  page {
    id SERIAL pk
    chapter_id INTEGER fk "Chapter"
    title TEXT "Page Title"
    content TEXT "Page Content"
  }

```
