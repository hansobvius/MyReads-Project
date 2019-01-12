# MyReads Project

This is the master template for the final assessment project for Udacity's React Fundamentals course. This project has the purpose of offering the user a catalog of books through google api. In addition the user can choose the book apar directs it to the shelf of his preference. In addition, the prohete has a page that shows the details of the books of the catalog

Of course, you are free to start this project from scratch if you wish! Just be sure to use [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project.

To get started just follow the steps:

* install node.js 
* install all project dependencies with `npm install` or `yarn install`
* start the development server with `npm start` or `yarn start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    │   └── BookMain # used to be the root of main components  and distribute the props to the components
    │       ├── BookSearch # This component is user to query user search's
    │       ├── BookShelves # This component display the books tha already are on the shelves
    │       └── BookDetails # This component dispay the details from selected book
    │               └── Books # display the book component wich is used by the three component's above
    │                   ├── BooksCover # used for display the book cover
    │                   ├── BooksInfo # display info  like the title, author, release date and description(the last both for details component)
    │                   └── BookOprions # display the choose options for the preference shelfe managment
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
