#Day 4 Evaluation
## Create a Shopping Cart with React on Frontend and a NodeJS API.



###First Build The Backend API 
- Create an API for list of (all) products. (GET)
- Create an API for the list of products in a cart for a given user (GET, POST)

Database should have 

- a Product table (having details of each product) and 
- a CartProduct table (having details like quantity of items on cart, and relation to product)

Notes: 

- No login, authentication required
- Assume a user with ID 1 is logged in to the system



###Frontend

Build components for the following two 'screens' 

- Product Catalog Page : shows a list of 10 products (show product name, photo, price per item) [Make sure API can serve some seed data]

- Cart Page - list of products on the current user's cart. Shows name, price, quantity, amount (price * qty) and total cart amount.

Interactions 

-  Clicking Add To Cart on Product Page adds the product to cart. 
(if already added, increments quantity)

- On cart, every product should have a + and - button to edit the quantity

Notes: 

- React Router not expected
- for demonstration purpose, you can manually switch rendering of the two pages in the react entry file.  (index.jsx / app.jsx) 


### Parameters
- Design Choices - API, React Component Design, 
(UI Design is not a priority - minor styling => simple & non-ugly is good enough) 
- Code Quality, Commits
-  Time  
-  Big Picture > Finer Details 
- Feature By Feature 
- Documentation, NPM, Config Files


### Instructions
-  (API.zip) First Submission After API Service Is Ready
- (Complete.zip) Second Submission After FrontEnd Service Is Ready


- Send To : ankitmalik@gmail.com
- Subject : <Your Name> <Nagarro>
- Body : 

- Attachment : API.zip (with a different extension)


 API.zip should contain the API Server Code folder

- Second Email : As a Reply To The First Email

- Attachment : Complete.zip (with a different extension)

Complete.zip should contain 

-  API Server Code Folder 
-  Frontend Code Folder
- README.MD (Documentation - spend ~ 10 minutes documenting your code with instructions on how to run this) 