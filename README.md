# Intro to React - Tweeter Part 1

We'll be making a clone of twitter feed in this exercise.

## Bootstrapped

You're encouraged to look around to familiarize yourself with this repository, but below are your sparknotes.

This starter pack comes with the following:

- webpack config and babel loaders to transpile React
- `npm-start` script to bundle code and start a server that listens for changes in the app
  - runs `webpack --watch` and `live-server`
  - starts server on port 8080 by default (access through `http://localhost:8080`)
  - **If you are on a Windows/Linus machine**, note that the compound script defined for npm start may not run for you. A temporary workaround would be to open separate terminals for each script that needs to be run.
    - `npm run build-watch`
    - `npm run watch-client`
- some helper css under `public/main.css` to style your page
- a stubbed newsfeed data to add to your feed in `client/content/tweets.json`

## Workshop Day 1

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

## Workshop Day 2

Day 2 will cover a few more basic principles:

- Conditional rendering
- Life cycle hooks in class components
- Forms, if time allows

1. Looks like our tweets might have some comments! Can we render a view where we might be able to see them?

   - Our `<Feed />` component has already been isolated to its own component in this starter code. We'll want to create a new component for the thread.
   - Add a new piece of state to `App.jsx` that can hold the selected tweet. Your initial state can be an empty object
     `selectedTweet: {}`
   - Create a method in your class that can update this value of state.
   - Optionally, create another method that can clear this value of state and replace the value in it with the empty object again.
   - Add an event listener to each `<Tweet />` that will set the `selectedTweet` property to the tweet clicked on.
   - Create a component that renders the selected tweets and any comments
   - In the header for this component, add an event listener to clear your tweet so that you can go back to your newsfeed. You'll need to pass in this function from the parent.
   - Create a `<Comment/>` component to render any comments attached to the tweet
   - In `App.jsx`, conditionally render your view based on whether a tweet has been selected or not (hint, check for a property that would exist on `selectedTweet` if a tweet was selected, like `id`)
   - You should be able to navigate between threads and your feed

2. We've been working with a file this entire time, but most web pages will fetch data from a web-server.

   - Instead of loading in or hardcoding our tweets, we'll use a lifecycle hook to load our data once our component renders and mounts: `componentDidMount()`
   - Your page should be functioning the same way it was before

3. A newsfeed is kind of boring if you can't contribute and express your thoughts. Let's add a form to the top of our feed so that we can do just that.

   - Add a new form element to the top of your newsfeed.
   - Your form should contain a textarea input and a submit button
   - Add an onSubmit handler function that will trigger a post to your server to add the post
   - When you receive a response from your server, update your tweets array in state to add render this tweet _at the top_ of your feed. Remember, we don't want to mutate state directly.
   - Create an onSubmit listener on the form and supply this function
