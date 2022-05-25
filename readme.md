# Pusher Money Sending and Receiving WebApp
Created by: Somnaath Singh

# Node Guide
- Build a Nodejs Server for authenticating Private Pusher Channel 
- The server helps in authenticating Private Channel using Socket_id and User

# Sample Code
- const express = require("express");
- const cors = require("cors");
- const Pusher = require("pusher");
- const pusher = new Pusher({
-   appId: "APP_ID",
-   key: "APP_KEY",
-   secret: "APP_SECRET",
-   cluster: "APP_CLUSTER",
-   useTLS: true,
- });
- const app = express();

- app.use(express.json());
- app.use(express.urlencoded({ extended: false }));
- app.use(cors());
- app.post("/pusher/user-auth", (req, res) => {
-  const socketId = req.body.socket_id;
-  const user = {id: 12345}; // Replace this with code to retrieve the actual user id
-  const authResponse = pusher.authenticateUser(socketId, user);
-  res.send(authResponse);
- });

# Vue js
- Start with Building a Home page where in alert prompt pops up asking for username
- Build a router for proceeding with Next URL Pages
- For Building the Router, Install Vue-Router
- After Username is entered, the page redirects to HelloWorld.Vue
- Create a Form for user asking for amount and Time
- Use the form inputs as an object and parse it as a JSON Object to send it through Private Pusher Channel

# Pusher in Vue
- Trigger should be called in the Vue front end
- The channel name here in the Vue frontend is referred using 'this' keyword
- Same goes with the binding function and subscribing the channel
- Private channel name must always start with 'private-'
- Event Name must start with 'client-'

# Resources
- Authenticating Users- https://pusher.com/docs/channels/server_api/authenticating-users/
- Private Channels in Pushers- https://pusher.com/docs/channels/using_channels/private-channels/
- Channel Naming Conventions- https://pusher.com/docs/channels/using_channels/channels/#channel-naming-conventions


