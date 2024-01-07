#NOIR ELEGANCE | FULL STACK MERN WEB APPLICATION

```markdown
![noir-elegance-header](https://github.com/siracsimsek01/noir-elegance/assets/88107978/38c55460-5201-436d-ba7a-5fb1117ecd78)

This is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It includes a user form that sends data to a MongoDB database.

## Prerequisites

Before running this application, make sure you have the following installed:
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
- MongoDB Compass - [Download & Install MongoDB Compass][https://downloads.mongodb.com/compass/mongodb-compass-1.41.0-darwin-x64.dmg]

## Installation

Clone the repository to your local machine:

git clone https://github.com/siracsimsek01/noir-elegance
cd noir-elegance
```

### Backend Setup

Navigate to the server directory and install the dependencies:

```bash
cd server
npm install
```

Start the backend server:

```bash
npm start
```

The server should now be running on [http://localhost:5000](http://localhost:5050).

### Frontend Setup

Navigate to the client directory from the root of the project and install the dependencies:

```bash
cd ../client
npm install
npm run build
```

Start the React development server:

```bash
npm start
```

The application should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

<<<<<<< HEAD
With both the frontend and backend servers running, open your web browser to [http://localhost:3000]. Fill out the Reservation form either at the end of the page or the link in the Navbar (Reservation) and submit it. The data will be sent to the backend server and stored in MongoDB.

In order to access the main codes of the project navigate the client/src/pages for frontend, server/app.js for the backend.
=======
With both the frontend and backend servers running, open your web browser to [http://localhost:3000]. Fill out the Reservation form either in end of the page or the link in the Navbar (Reservation) and submit it. The data will be sent to the backend server and stored in MongoDB. To see Reservation folder and files navigate /client/src/components/Reserve
>>>>>>> 24773478 (update README.md)

## Connecting to the MongoDB Database

If you have been granted access to the MongoDB database for this project, you can connect to it using the MongoDB extension in Visual Studio Code. Here's how to set it up:

### Prerequisites

- **Visual Studio Code**: Ensure you have [Visual Studio Code](https://code.visualstudio.com/download) installed.
- **MongoDB Extension**: Install the [MongoDB for VS Code](https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode) extension from the Visual Studio Code marketplace.

### Steps to Connect

1. **Open the MongoDB Extension**: In VS Code, open the MongoDB extension. You can find it on the sidebar or by searching for "MongoDB" in the extensions view.

2. **Add a New Connection**: Click on "Add Connection" or the "+" icon in the MongoDB extension view. Enter the MongoDB URI provided to you. The format typically looks like this:

The MongoDB URI: mongodb+srv://developmentsimsek:noirpass@cluster-1.ouc5riu.mongodb.net/?retryWrites=true&w=majority

<<<<<<< HEAD
3. **Accessing the Database**:

- To connect to the MongoDB database, first navigate to the /server directory and locate the .env file to get the MongoDB URI.

- Copy the MongoDB URI into the MongoDB extension.
  
- Next, connect to URI and you will see the cluster. Navigate the cluster and open the test folder. Here, you'll find the reservations folder.

- Inside reservations, click on Documents to view all reservation entries with their IDs as entered on the website.

- To test the functionality, create a new reservation on the website. You will then see this new entry reflected in the Documents folder of the database.
=======
You can navigate /server directory and you will find .env file. Copy and paste MongoDB URI to MongoDB extension as a connection string. Then navigate the cluster-1. In the test folder, you should be able to see reservations folder. Click to reservations then in Indexes you should display all the reservations that entered on the website. You can test by creating your own reservation.
>>>>>>> 24773478 (update README.md)


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
