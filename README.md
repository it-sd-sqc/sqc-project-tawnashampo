# Finn Wolfhound: A Review
Tawna Shampo.

A website that reviews the book Finn Wolfhound.

My website [Render Website](https://finn-wolfhound-a-review.onrender.com).

erDiagram
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER {
        string name
        string custNumber
        string sector
    }
    ORDER ||--|{ LINE-ITEM : contains
    ORDER {
        int orderNumber
        string deliveryAddress
    }
    LINE-ITEM {
        string productCode
        int quantity
        float pricePerUnit
    }
