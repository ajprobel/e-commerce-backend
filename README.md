# E-Commerce Back End

## Description

E-Commerce (internet retail) plays a huge role in the modern age of today's businesses. When a business--no matter how big or small--is able to sell their products online to an audience around the world, their potential for success is almost limitless. To support that retail space online, it's crucial to have a reliable and flexible back end that's able to support a business as it grows.

This application creates a back end Express.js API, along with Sequelize, to interact with a MySQL database for an example e-commerce business. This is a fully back end focused project - you'll need to clone the repository and start the server via NodeJS to access the API endpoints.

## Installation

1. Clone this repository
2. Open a new terminal in the root directory of the application, and run `npm install` to install all package dependencies
3. Create a `.env` file in the root directory of the application, and enter the following MySQL details:
```md
DB_NAME='ecommerce_db'
DB_USER='root'
DB_PASSWORD='[yourPasswordHere]'
```
4. In the terminal, run `npm run seed` to create/seed the database

## Usage

Please watch the video demonstration found [here!](https://drive.google.com/file/d/1ABIOp7sbomU-V-FfYQBsNwa2z-RS-EtB/view?usp=sharing)

Start by starting the server:
* run `npm start`

Next, access the API endpoints to perform CRUD operations for Products, Categories, and Product Tags

**API Endpoints**

*Categories*
- `/api/categories`
    - GET: retrieve all categories
    - POST: create new category w/ request body

- `/api/categories/:id`
    - GET: retrieve category by ID
    - PUT: modify category by ID with new name via request body
    - DELETE: delete category associated with ID

*Products*
- `/api/products`
    - GET: retrieve all products
    - POST: create new product w/ request body

- `/api/products/:id`
    - GET: retrieve product by ID
    - PUT: modify product by ID with new details via request body
    - DELETE: delete product associated with ID

*Tags*
- `/api/tags`
    - GET: retrieve all tags
    - POST: create new product w/ request body

- `/api/tags/:id`
    - GET: retrieve tag by ID
    - PUT: modify tag by ID with new name via request body
    - DELETE: delete tag associated with ID

**Example Request Bodies for Routes**

*New Category:*
```json
    {
      "category_name": "Jewelry",
    }
```

*New Product:*
```json
    {
      "product_name": "Basketball",
      "price": 200.00,
      "stock": 3,
      "category_id": 1,
      "tagIds": [1, 2, 3, 4]
    }
```

*New Tag:*
```json
    {
      "tag_name": "clearance",
    }
```

## Credits

Application created by me, James Probel, with starter code from the UNC Chapel Hill Programming Boot Camp

Thank you to the Sequelize team for providing documentation (especially for queries): 
https://sequelize.org/docs/v6/core-concepts/model-querying-basics/





