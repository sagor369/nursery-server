# Welcom ot Online Nursery product buy Center 
- The nursery server site is a web-based platform designed for nurseries to manage their plant inventory, customer orders, and overall business operations efficiently. This platform aims to provide a seamless experience for both the nursery staff and their customers, facilitating everything from plant care information to e-commerce functionalities.

## Features 
1. Inventory Management
 Plant Catalog: Detailed listings of available plants, including descriptions, care instructions, pricing, and availability status.
Stock Management: Real-time updates on plant stock levels, alerts for low inventory, and tools for adding new plants or updating existing listings.
2. Customer Orders and Management
Order Processing: Functionality to handle customer orders, from cart to checkout, including payment processing and order tracking.
Customer Profiles: Management of customer information, purchase history, and preferences to offer personalized service and marketing.
3. E-commerce Integration
Online Store: A fully functional e-commerce interface where customers can browse, search, and purchase plants.
Payment Gateway Integration: Secure payment processing through popular payment gateways  Stripe or cash on delivary .
4. Search and Filtering
Advanced Search: Enable customers to search for plants by various criteria such as type, care requirements, price range, and availability.
Filtering Options: Filters to refine search results based on categories, name, and other attributes.

## Project use technology 
1) Node.js
2) Express js
3) Typescript 
4) Mongoose
5) Zod validation 
6) Stripe payment gatway
7) Http Status 

## project API endpoint 
* Plants Api 
 - create plant(post)  
 > "/plants/create-plant"
 - get all plants(get) 
 > "/plants"
 - get single plant(get) 
 > "/plants/:id"
 - update plant (patch)
 >"/plants/:id"
 - delete plant (delete)
 >"/plants/:id"

* Categorys Api 
 - create Category(post)  
 > "/category/create-category"
 - get all category(get) 
 > "/category"
 - get single Category(get) 
 > "/category/:id"
 - update Category (patch)
 >"/category/:id"
 - delete Category (delete)
 >"/category/:id"

* Payment Api 
 - create payment(post)  
 > "/category/create-payment"
 - get all category(get) 
 > "/category"
 - get single payment(get) 
 > "/category/:id"
 - update payment (patch)
 >"/category/:id"

