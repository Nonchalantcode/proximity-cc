# Installation

Clone this repo and on your local machine, in the folder of where the repo is run:

> npm install

# Running project

This will start the project and have it running on port 3000 by default.

> npm start 

Alternatively, you can view the app running by visiting the following url of an Amazon S3 bucket with the app:

http://proximitychallenge.s3-website.us-east-2.amazonaws.com/

# Overview

This proof-of-concept React App downloads the JSON in the following urls: 

Posts API: https://jsonplaceholder.typicode.com/posts

Comments API: https://jsonplaceholder.typicode.com/comments

The comments coming from the comments API are related to the posts through the `postId` property. So, every comment with the same `postId` property belongs to a post that has an `id` property with the same value. 

After reducing / relating every comment to their corresponding post we're saving the each post object to the redux store.  The objects will have the following shape:

`type Post = { body: string, title: string, comments: Comment[] }`

where each comment will have the following shape:

`type Comment = { body: string, email: string, name: string }`

The redux store for this app was initialized and lives in the `store.js` file.

The functions that relate posts to comments are in the `postsReducer.js` file and are private to that module. 

To create asynchronous actions, I've installed the `redux-thunk` library. The asynchronous action we're dispatching is the fetching of the comments and post data. This action is dispatched by the thunk / action creator `getPosts` in the `postsReducers.js` module. 

We're dispatching the resulting action from `getPosts()` from the `App.js` module inside the `useEffect()` hook to initialize the store. When the store is initialized, it will contain a property `posts`. We will then use the `useSelector()` hook from the `react-redux` package to pull information about each post and display it on the screen.

## How is each post displayed ?

In the main screen of the application, all posts are displayed separately in their own container / box. Each post will mention its title, it will display a 50-character summary of the body / contents of the post, and it will have a `View Post` button to open each post on a modal. The `PostList.js` component takes care of displaying the list of boxes that represents each post. 

To display each post in a modal, the `PostModal.js` component was written. It makes use of the `react-modal` library. Inside `PostModal` we're making use of another component -- `Post.js`. `Post.j` takes care of displaying the information about each post in full.

When the `View Post` button is click for a particular post, a modal will pop up with the title of the post, the full contents of the post, a section displaying the amount of comments associated to that post followed by each comment by author (the email is displayed to indicate each author). 

All custom styles of the app can be found in the `main.scss` file. 