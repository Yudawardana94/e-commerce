# Gunpla-E-Commerce
E-commerce yang menjual berbagai macam modelkit. khususnya gundam. sealin itu juga ada tools tool yang bisa digunakan untuk melakukan modifikasi sesuai keingian kalian. 

## API Documentation
before begin to use the API try to  :
```
npm init -y
```
then
```
npm install 
```
fill the .envExample

API e-commerce Documentation

## User Routes

| route   | Method  | Success Response  | Failed Response   | description   |
|---------|---------|-------------------|-------------------|---------------|
|/users/register| POST | status -- 201 | status -- 500 | create a new user in database |
|/users/login | POST | status -- 200 | status -- 500 | to login user that has registered |
|


## Product Routes

| route   | Method  | Success Response  | Failed Response   | description   |
|---------|---------|-------------------|-------------------|---------------|
| /products/all | GET | satus --200 | status -- 500 | get all item without login first |
| /products/one/:id | GET | status -- 200 | status -- 500 | get detail of one item |
| /products/add | POST | status -- 201 | status -- 500 | add new item to website |
| /products/update/:id |  PATCH | status -- 200 | status -- 500 | update an item in website |
| /products/remove/:id | DELETE | status -- 200 | status -- 500 | delet product |

## Cart / History Routes
 
| route   | Method  | Success Response  | Failed Response   | description   |
|---------|---------|-------------------|-------------------|---------------|
| /historys/find | GET | status -- 200 | status -- 500 | find logedin users cart or history|
| /historys/add | POST |  status -- 200 | status -- 500 | checkout array of item to database| 
| /historys/update/:id | PATCH | | status -- 200 | status -- 500 | to update status of ordered item in cart |
| /historys/remove/:id | DELETE |  status -- 200 | status -- 500 | delete transaction from database |