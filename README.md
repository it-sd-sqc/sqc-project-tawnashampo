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
  chapters {
    id SERIAL pk
    title TEXT "Chapter title"
    body TEXT "Chapter text"
  }
  pages {
    id SERIAL pk
    title TEXT "Page Number"
    body TEXT "Page Text"
  }
```
