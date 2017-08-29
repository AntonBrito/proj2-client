# Migz Collectibles - Font End Client
### By Christian Mignacca

## Introduction

Welcome to the repository for the front end client of Migz Collectibles, my second GA Web Development Immersive project.  It is a web app where user's once they've created a count can user the site to log, track, and edit their video game collection.

## Deployed Link

-**Deployed Client:** https://cmigz.github.io/proj2-client/

## API Links

- **GitHub Repo:** https://github.com/cmigz/proj2-api
- **Herou Deployed:** https://pure-beach-11955.herokuapp.com/

## Technologies Used

- **HTML:**
  - Utilized to build the basic structure of site, including input fields, forms and buttons.
- **SASS:**
  - Was able to use SASS to make the styling process easier through defining re-used colors, fonts, etc.
- **jQuery:**
  - My closest friend, which allowed me to build this project without using a templating engine. I used jQuery for quite a few pieces of functionality ranging from displaying of a user's data to the showing and hiding of error/success messages.
- **AJAX:**
  - Used to enable backend communication without having to reload the client side.
- **JavaScrip:**
  - Primarily used to write a function which loops through a user's data in oder to visualize each piece on the page.

## Planning Process

- Create and deploy repository.
- Build and test API ensuring all routes/action work as intended.
  - Tested using curl scripts.
- Create rough skeleton of html/css so once ajax is created functionality can be tested.
- Build and test all sign in functionality.
  - Using previous projects format create and test each ajax request for user functionality.
  - Follow same guidlines to create requests for a user's games.
- Build in error/success messages and use jQuery to set up DOM manipulation based on the user's actions.
- Re-Deploy and test functionality
- Polish

## Wireframe

![alt text](http://i.imgur.com/VslqQTI.jpg "WireFrame V1")

## Issues

- Having problem getting jumbo-tron image displayed on deployed page.

## User Stories

- As a user I would like a site where I can create and account and be able to login to view my collection
- As a user I would like to see my entire collection upon login.
- As a user I would like to have a wishlist to keep track of games I've yet to obtain.
- As a user I would like to be able to add a item on my wishlist to my collection.
- As a user I would like to be able to edit my collection to add a game, remove a game, or update the status of a game in my collection.
- As a user I would like to be able to export my game collection to a csv as a means of having a local copy.
- As a user I would like to be able to upload a current collection stored into a csv to add to my app list.
