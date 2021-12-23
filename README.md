# bakery-activity
- an example of building a dynamically generated webpage with SSR in node.js

## Requirements
- The main landing page will welcome users to the site and show a navbar of available pages they can navigate to
   - /breads is the main one for right now, 
   - in phase 2 we will have /pastries and /cakes so that our bakery can serve a wider variety of customers so try to make the menu able to include future links

- I think we will need an API (since we will build a mobile app at some point in addition to the website).
   - This API will need to list different breads and their prices as well as images and gluten in case customers have a gluten allergy. 
   - We will also need the ability to persist the different breads somehow? But delivery speed is paramount. We need to be the first bakery to adopt the web in 2022.
   - And in phase 2 we should add the ability to add/edit things with an admin view (so that bakeries can scale without your team having to manage each bakeries menu)

- It's up to your team how to design the first iteration of the website. Let's set up a meeting for after Christmas to discuss your designs and make any improvements before releasing and marketing to customers.

- But the website MUST be lightning fast on loading the content, during our user research we realized customers have slow 2G or 3G speeds on their mobile devices. 
I heard about something called server-side rendering at a tech conference, perhaps your team can take advantage of that?


## Getting Started
- fork & clone the project
- `cd bakery-activity`
- `npm install`
- `npm start`


## Deployment
- this project is deployed to [heroku ](https://tranquil-plateau-02323.herokuapp.com/)
- to deploy merge a PR to `main`
- because our automated CD pipeline goes to production commits to main are restricted to admins, please create PRs for any changes