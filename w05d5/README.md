# Mid-term Project Kickoff

## Pick a Project

- Wiki Map
- Quiz App
- Story Creator
- Decision Maker
- PasswordKeepR
- Smart TODO List
- Resource Wall
- Buy/Sell Listing Website
- Schoodle
- Food Pick-up Ordering

## User Stories

- User stories describe how users will interact with your application and why.

- They follow this format:
  As a [type of user], I want to [do something], because [reason].

  - Example:
    As a user, I want to be able to create posts, because I want to share my tought.
    As a user, I want to be able to save posts, because I want to review them later.

- User stories can also express restrictions:

  - Example:
    As a user, I shouldn’t be able to edit other users’ posts, because I don’t own those posts.

- planning/user-stories.md


## ERD (Entity Relationship Diagram)

- Extract nouns from your user stories.
- These nouns become your database entities (e.g., users, posts, favourites).
- Use them to design your tables and relationships.
- planning/erd.png

## Wireframes

- Sketch out the structure of your web pages
- This will make it much easier to build out these pages later
- This is also a great opportunity to get input from all of the team members
- Design matters... however you are a developer, not a designer
- It’s okay to take inspiration from real websites.
- planning/wireframe.png

## Tech Choices

- We have made all the tech choices for you
- Back End: Node and Express, Postgresql
- Front End: HTML, CSS, SCSS, JS, jQuery, Bootstrap

## The Mid-term Skeleton

- Use the provided node-skeleton as a template for your project
- This will get you up and running quickly

## SPA vs Multi-page App

- Single Page App (SPA) and Multi-page App are not mutually exclusive.
- Choose based on what fits your user experience.
- You can combine both if needed.

## Routes

- Define your routes based on the resources/entities you’ve identified.
- Map out the BREAD (Browse, Read, Edit, Add, Delete) operations.
- Stick to RESTful conventions — it keeps things clean and predictable.
- Restful routes

BREAD
Browse GET /products
Read GET /products/:id
Edit POST /products/:id
Add POST /products
Delete POST /products/:id/delete

## MVP vs. MVD

- There is a concept in development of an MVP, the Minimum Viable Product
- An MVP has just enough features to be useful to a user
- This concept helps streamline the development process and help keep the team on target
- For mid-terms, we want to focus on the MVD, the Minimum Viable Demo
- If you aren't going to demo it, don't build it

## User Login

- Don’t build full login/registration from scratch.
- We know that you know how to register and login users

```js
// do this instead
app.get('/login/:id', (req, res) => {
	// or using plain-text cookies
	res.cookie('user_id', req.params.id);

	// using encrypted cookies
	req.session.user_id = req.params.id;


	// send the user somewhere
	res.redirect('/');
});
```

## Splitting up the work

- Vertical Split: One person builds full-stack features (FE + BE + DB).
- Horizontal Split: One person handles a single layer (e.g., backend only).
- Pair Programming: Two people work on the same part together.

## Communication

- Scrum channel
- Make sure to communicate with your team members
- Use tools like Discord, Google Hangouts, etc., just make sure that everyone is on the same pag

