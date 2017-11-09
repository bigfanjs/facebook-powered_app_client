# A Photo Album App Powered By Facebook(Client Side).

The server side code for this client code:
https://github.com/bigfanjs/facebook-powered_app_server

## Overview
This is an application which consumes the Facebook Graph API and shows the user albums and photos.

First Users need to create a new account at the application backend using an email and password. When they register a JSON access token is generated and sent to the client. The JWT token then saved to localstorage and used to authorize private endpoints on our backend. After a successful sign up users would be redirected to the private home page where they are gonna be allowed to login to their Facebook accounts. On the home page a grid of albums would be displayed with the ability to view each album's photos by clicking on the view button.

Already signed up users could sign in to the application with the same email and password, and if they typed in valid credentials they are gonna be redirected to the home page.

## Usage
1. Sign up to the application.
2. Connect to your Facebook account(You might not need this step if you are already connected to Facebook).
3. You could scroll down/up to see your albums.
4. You could view an album's photos by clicking on the VIEW button.
5. Finally you could also log out from the application by clicking on the SIGN OUT button on the navbar.

## Installation
1. clone the repository.
2. run `yarn install` on the project directory.
3. run `yarn start` to start the project.

I believe this won't work with any other facebook account as I need to get the `user_photos` permission application approval. So to get this working I think you need to create a facebook application using the same facebook account you are gonna login with to the photo album app. Get the application ID and then assign in to the `appID` attribute of the `FB.init()` method's options on `src/App.js`.

## Screen Cast
https://www.youtube.com/edit?video_id=xRS4QUPPRAQ&video_referrer=watch