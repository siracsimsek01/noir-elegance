# NOIR ELEGANCE | FULL STACK MERN WEB APPLICATION
![noir-elegance-header](https://github.com/siracsimsek01/noir-elegance/assets/88107978/58d01cd2-9f1a-4628-a553-a058cdaeddba)




This is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It includes a user form that sends data to a MongoDB database.

## Prerequisites

Before running this application, make sure you have the following installed:
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
- MongoDB Compass - [Download & Install MongoDB Compass](https://downloads.mongodb.com/compass/mongodb-compass-1.41.0-darwin-x64.dmg)

## Installation

Clone the repository to your local machine:
```
git clone https://github.com/siracsimsek01/noir-elegance
```
Then:
```
cd noir-elegance
```

## Backend Setup

Navigate to the server directory and install the dependencies:

```
cd server
npm install
```

Start the backend server:

```
npm start
```

The server should now be running on [http://localhost:5000](http://localhost:5050).

## Frontend Setup

Navigate to the client directory from the root of the project and install the dependencies:

```
cd ../client
npm install
npm run build
```

Start the React development server:

```
npm start
```

The application should now be running on [http://localhost:3000](http://localhost:3000).

## Connecting to the MongoDB Database

If you have been granted access to the MongoDB database for this project, you can connect to it using the MongoDB extension in Visual Studio Code. Here's how to set it up:

### Prerequisites

 - MongoDB Compass - [Download & Install MongoDB Compass](https://downloads.mongodb.com/compass/mongodb-compass-1.41.0-darwin-x64.dmg)

## Connecting to MongoDB using MongoDB Compass

1. **Install MongoDB Compass**: If you haven't already installed MongoDB Compass, download it from the [official MongoDB website](https://www.mongodb.com/try/download/compass).

2. **Launch MongoDB Compass**: Open MongoDB Compass on your computer.

3. **Enter the Connection URI**:
   - On the start screen, paste your connection string into the field labeled ‘Paste your connection string’.
   - The connection string typically looks like this:
     ```
     mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority
     ```
     Enter this connection string: ``` mongodb+srv://developmentsimsek:noirpass@cluster-1.ouc5riu.mongodb.net/ ```

4. **Initiate Connection**:
   - Click the 'CONNECT' button to establish a connection with your MongoDB database.

5. **Interact with Your Data**:
   - After connecting, you'll be able to browse databases and collections, as well as view and edit documents within MongoDB Compass.


## Usage

To access the main codes of the project navigate the client/src/pages for frontend, server/app.js for the backend.

With both the frontend and backend servers running, open your web browser to [http://localhost:3000]. Fill out the Reservation form either in end of the page or the link in the Navbar (Reservation) and submit it. The data will be sent to the backend server and stored in MongoDB. To see Reservation folder and files navigate /client/src/components/Reserve





## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Sirac Simsek - [siracsimsek01@gmail.com](mailto:siracsimsek01@gmail.com)

Project Link: [https://github.com/siracsimsek01/noir-elegance](https://github.com/https://github.com/siracsimsek01/noir-elegance)
