# FEND MY-READS

Project 7 of the [Front-End Web Developer Nanodegree with Udacity](https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001).

## For Users

- The goal of the application is to help you manage the state of your library. You can choose if you want to put it on: **"Currently Reading"**, **"Want to read"** and **"read"** shelf.

- You can see the state of the books in the main page (path: _"/"_).

- You can search for new books in the _"/search"_ page.

- You can rank your book from 1 to 5 stars (halves included).

- **None** allows you remove the book from shelve.

## TL;DR
- Install all the project dependencies with `npm install`
- Start the development server with `npm start`
- You will need [`react-router-dom`](https://www.npmjs.com/package/react-router-dom)
- You will need [`react-stars`](https://www.npmjs.com/package/react-stars)

### Structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── Book.js #
    ├── BookList.js
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```
