# MERN Stack Sample App
This is a sample application to follow the **MERN STACK** tutorial by Traversy Media. this is the [link](https://www.youtube.com/watch?v=PBTYxXADG_k&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE) to the youtube tutorial. The tutorial uses Javascript, I used Typescript instead. 
MERN Stands for **Mongo, Express, React and Node**


## How to Run:
```bash
  npm run client
```
This wil run only the client react App. 
```bash
  npm run server
```
This wil use **nodemon** to run the server, **nodemon** will restart the server whenever there are changes to the server side code. 
```bash
  npm run dev
```
This will run the client and the server using **concurrently**, its equivalent to running both npm run client and npm run server. 

---
## Dependencies
### Server Dependencies:
* **[Bycript](https://www.npmjs.com/package/bycjwt)**: is a password hashing library. We dont store plain text passwords in the db. 
* **[Express](https://www.npmjs.com/package/express)**: It is the backend framework for server side code. 
* **[jsonWebToken](https://www.npmjs.com/package/jsonwebtoken)**: To implement json webtoken Auth. 
* **[moment](https://www.npmjs.com/package/moment)**: Library to manipulate dates. 
* **[mongoose](https://www.npmjs.com/package/mongoose)**: Library to interface with Mongo databases. 
* **[uuid](https://www.npmjs.com/package/uuid)**: Library to generate Unique Identifiers

### Client Dependencies:
* **[axios](https://www.npmjs.com/package/axios)**: this is a library to implement a HttpClient. 
* **[bootrsap](https://www.npmjs.com/package/bootstrap)**: to make the UI pretty. 
* **[react](https://www.npmjs.com/package/react)**: The framework to build the single page application. 
* **[redux](https://www.npmjs.com/package/redux)**: to handle global state management of the application. 
* **[redux-thunk](https://www.npmjs.com/package/redux-thunk)**: to allow the global state to change based on async code (i.e Http calls)
