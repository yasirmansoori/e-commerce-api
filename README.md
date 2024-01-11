<!-- Intro  -->
<h3 align="center">
        <samp>&gt;Welcome to E-Commerce API! 🛍️</samp>
</h3>

<p align="center"> 
  <samp>
    <a href="https://www.google.com/search?q=yasir+mansoori" target="_blank">「 Google Me 」</a>
    <br>
    「 This is an e-commerce website Api, it's your gateway to a seamless backend integration of shopping experiences. Use this API in your project for testing, personal use at no cost. 」
    <br>
    <br>
  </samp>
</p>

<p align="center">
 <a href="https://github.com/yasirmansoori" target="blank">
  <img src="https://img.shields.io/badge/Website-a09898?style=for-the-badge&logo=github&logoColor=black" alt="yasirmansoori" />
 </a>
 <a href="https://www.linkedin.com/in/yasir-mansoori/" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="yasirmansoori"/>
 </a>
 <a href="https://www.instagram.com/mansoori_yasir786/" target="_blank">
  <img src="https://img.shields.io/badge/Instagram-fe4164?style=for-the-badge&logo=instagram&logoColor=white" alt="yasirmansoori" />
 </a> 
</p>
<br />

## 👩‍💻Tech Stack & Tools
![Javascript](https://img.shields.io/badge/Javascript-F0DB4F?style=for-the-badge&labelColor=black&logo=javascript&logoColor=F0DB4F)
![Nodejs](https://img.shields.io/badge/Nodejs-3C873A?style=for-the-badge&labelColor=black&logo=node.js&logoColor=3C873A)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
![VSCode](https://img.shields.io/badge/Visual_Studio-0078d7?style=for-the-badge&logo=visual%20studio&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-black?style=for-the-badge&logo=github&logoColor=white)
<br/>

## 📦 Getting Started

`To get started with the E-Commerce API, follow these steps:`

### ✅Prerequisites
- Node.js and npm installed
- MongoDB installed and running

### 💻 Installation

- Clone the repository: 
```sh
git gh repo clone yasirmansoori/e-commerce-api
````
- Install dependencies: 
```sh
npm install
````
- Start the development server:
```sh
  npm run dev
```
- Set up `.env` file.
```sh
CONNECTION_URI = <your-mongodb-connection-string>
DATABASE_NAME = <database-name-you-want>
SECRET_KEY = <your-mongodb-connection-string>
ACCESS_TOKEN_SECRET = <generated-access-token-secret>
REFRESH_TOKEN_SECRET = <generated-refresh-token-secret>
```
**NOTE** : You can generate your own access and refresh token secrets by running the following command in your terminal 2 times:
```sh
node -e "console.log(require('crypto').randomBytes(32).toString('hex'));"
```
or you can use the secretGenerator.js file in the directory `src/config` to generate your secrets.

## **📚Schema Overview**
-   ### User

    -   `_id` _(auto-generated-unique)_ 
    -   `name`
    -   `email` _(unique)_
    -   `username` 
    -   `password` _(encrypted)_

-   ### Product

    -   `_id` _(auto-generated-unique)_ 
    -   `name`
    -   `description`
    -   `price`
    -   `category`

-   ### Cart

    -   `_id` _(auto-generated-unique)_ 
    -   `userId`
    -   `items`

## **🚀API Router Endpoints** 

<h1>User Routes -</h1>
<table>
  <tr>
    <th colspan="3" style="text-align:center">User</th>
  </tr>
  <tr>
    <td>Endpoints</td>
    <td>Method</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>/api/user/register</td>
    <td>POST</td>
    <td>Welcome aboard! Register as a new user.</td>
  </tr>
  <tr>
    <td>/api/user/login</td>
    <td>POST</td>
    <td>Dive into the your website. Login and receive a JWT token.</td>
  </tr>
  <tr>
    <td>/api/user/logout</td>
    <td>DELETE</td>
    <td>Time to say goodbye? Logout and expire your JWT.</td>
  </tr>
  <tr>
    <td>/api/user/forgetPassword</td>
    <td>PATCH</td>
    <td>Forget your password? No worries! Get an OTP in your inbox to reset it.</td>
  </tr>
  <tr>
    <td>/api/user/changePassword</td>
    <td>PATCH</td>
    <td>Update your password securely with an OTP and old/new password.</td>
  </tr=>
</table>

<h1>Product Routes -</h1>
<table>
  <tr>
    <th colspan="3"style="text-align:center">Product</th>
  </tr>
  <tr>
    <td>Endpoints</td>
    <td>Method</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>/api/product/products</td>
    <td>POST</td>
    <td>Create a new product.</td>
  </tr>
  <tr>
    <td>/api/product/products</td>
    <td>GET</td>
    <td>Get a list of all products.</td>
  </tr>
  <tr>
    <td>/api/product/products/:productId</td>
    <td>GET</td>
    <td>Get detailed information about a specific product.</td>
  </tr>
  <tr>
    <td>/api/product/products/:productId</td>
    <td>PATCH</td>
    <td>Update a specific product.</td>
  </tr>
  <tr>
    <td>/api/product/products/:productId</td>
    <td>DELETE</td>
    <td>Delete a specific product.</td>
  </tr>
</table>

<h1>Cart Routes -</h1>
<table>
  <tr>
    <th colspan="3"style="text-align:center">Cart</th>
  </tr>
  <tr>
    <td>Endpoints</td>
    <td>Method</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>/api/cart/:userId</td>
    <td>GET</td>
    <td>Get user's cart.</td>
  </tr>
  <tr>
    <td>/api/cart/:userId/add</td>
    <td>POST</td>
    <td>Add item to cart.</td>
  </tr>
  <tr>
    <td>/api/cart/:userId/update/:productId</td>
    <td>PATCH</td>
    <td>Update item quantity in cart.</td>
  </tr>
  <tr>
    <td>/api/cart/:userId/remove/:productId</td>
    <td>DELETE</td>
    <td>Remove item from cart.</td>
  </tr>
</table>


## **API Response Codes**
|                    | `200` | `201`   | `400`       | `401`        | `403`     | `404`     | `500`                 | `503`               |
| ------------------ | ----- | ------- | ----------- | ------------ | --------- | --------- | --------------------- | ------------------- |
| API Response Codes | OK    | Created | Bad Request | Unauthorized | Forbidden | Not Found | Internal Server Error | Service Unavailable |

## **API Response Structure**
|                    | `status`           | `message`                | `data`        | `error`                |
| ------------------ | ------------------ | ------------------------ | ------------- | ---------------------- |
| API Response Codes | HTTP Response Code | Response message Created | Response data | Error message (if any) |

## 📝 License
The E-Commerce API is open-source software licensed under the [MIT License](LICENSE).

## 🎉 Acknowledgments
Explore the usefull E-Commerce API and feel free to enhance it. Share your thoughts if you have any feedback or suggestions!
<div align="center">Made with ❤️</div>