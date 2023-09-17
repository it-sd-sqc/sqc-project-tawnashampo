# Finn Wolfhound: A Review
Tawna Shampo.

A website that reviews the book Finn Wolfhound.

My website [Render Website](https://finn-wolfhound-a-review.onrender.com).

erDiagram
    BOOK ||--o{ CHAPTER : Contains
    BOOK {
        +ID (PK)
        --
        title
        author
    }

    CHAPTER ||--|{ PAGE : Contains
    CHAPTER {
        +ID (PK)
        --
        title
    }

    PAGE {
        +ID (PK)
        --
        content
    }

