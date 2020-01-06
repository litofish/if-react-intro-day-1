# Intro to React - Tweeter Part 1

We'll be making a clone of twitter feed in this exercise.

## Bootstrapped

You're encouraged to look around to familiarize yourself with this repository, but below are your sparknotes.

This starter pack comes with the following:

- webpack config and babel loaders to transpile React
- `npm-start` script to bundle code and start a server that listens for changes in the app
  - runs `webpack --watch` and `live-server`
  - starts server on port 8080 (access through `http://localhost:8080`)
- some helper css under `public/main.css` to style your page
- a stubbed newsfeed data to add to your feed in `client/content/tweets.json`

## Workshop

**Prereq:** If you haven't alreayd, run `npm install` to get all required packages downloaded locally

1. Get your app loaded. Your `public/index.html` is trying to load `./bundle.js`, but where is it?

   - What is your entry point to your React app? How do you mount your React app to your DOM?

2. Once you've mounted your app, time to get started on the feed!

   - You have an `App.jsx` file started for you. Import the tweets from `client/content/tweets.json` into `App.jsx`.
     - Or if you prefer, copy the array of data into your App.jsx file.
   - You'll want to maintain this data as state.
     - But wait! The `<App />` component is currently a functional component. Let's turn this into a class component and assign the array as a property of your state `this.state`.

3. Now that you have this data in your state, render it. Remember, you have access to some helper classes to style your feed.

   - The `map` method might be helpful.
   - Do not worry about rendering out any links for now
   - If a tweet is not liked, render an empty heart
   - If a tweet is liked, render a red heart

4. We want to introduce some interactivity to this page.

   - Can you add some methods to "like" a tweet?
     - This function should toggle the like button and increment/decrement the like counter appropriately.
   - How about some delete functionality?
   - We'll probably need to pass functions as props down to some child components to modify our state. How to we ensure these functions modify the correct state object?
   - Note, if at any point you end up removing all of your tweets, just reload your page!

5. EXTRA: Looks like our tweets might have some comments! Can we render a view where we might be able to see them?
   - You might need to do some refactoring to separate your `<Feed />` and `<Thread />` components
   - Add an event listener to each tweet that will update state to capture the selected tweet into state
   - Add a new piece of state to `App.jsx` that can hold the selected tweet. Your initial state can be an empty object
     `selectedTweet: {}`
   - Create a component that renders the selected tweets and any comments
   - In the header for this component, add an event listener to clear your tweet so that you can go back to your newsfeed
   - In `App.jsx`, conditionally render your view based on whether a tweet has been selected or not
   - Test your workflow! You should be able to navigate between threads and your feed

All done for today! Fantastic work!
