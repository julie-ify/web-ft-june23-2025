## W01D2 - The Development Workflow

### Lecture Outline

- [ ] Intro
- [ ] Writing code incrementally
- [ ] Problem solving tips
- [ ] Review git workflow

### Remote Lecture Format

- Lectures are conducted on Zoom and recorded.
- Please turn on your camera to stay engaged.
- Ask me questions at anytime during the lecture.
- Mute when not speaking.
- You can also drop a qustion in the message box.

### Lecture Goals

- Build effective problem-solving skills
- Understand and apply a developement workflow
- Use Git and GitHub for version control for solo projects
- Learn and practice incremental development
- Do not copy/paste along blindly.
- You’re welcome to take notes, it helps retain and organize knowledge!

### What Are You Here to Learn?

Besides JavaScript, Node.js, and frameworks like Rails, being a great developer means building your:

- Problem Solving skills
- Resilience & Perseverance
- Curiosity & Growth Mindset
- Communication
- Teamwork
- Adaptability & Attitude

### Development Workflow

A web development workflow is the organized process developers follow to plan, build, test, and deploy a web application or website. It includes a sequence of steps, tools, and best practices that help ensure code is clean, functional, and easy to collaborate on.

### Why It Matters

- Keeps your work organized and collaborative
- Makes debugging and updates easier
- Helps you follow industry standards
- Prepares you for real-world developer jobs

### Problem Solving Tips

- Understand the Problem
- Break the Problem Down
- Incremental Development
- Debugging with Errors
- Ask for Help
- Fix or Improve Code Cleanliness

```js
// BAD // no indentation
const printArray = function (arr) {
arr.forEach((element) => {
	console.log(element);
});
};

// GOOD // proper indentation
const printArray = function (arr) {
	arr.forEach((element) => {
		console.log(element);
	});
};
```

### Git & Version Control

- Why Git?
  - Save your progress (commits)
  - Work with others (branches)
  - Roll back mistakes (history)
  - Push backup to GitHub

### Basic Git Workflow for Solo Project

- Initialize Git in your project folder:

```bash
git init
```

- Check status:

```bash
git status
```

- View changes:

```bash
git diff
```

- Stage files:

```bash
git add filename.js
# or add everything
git add .
```

- Commit changes:

```bash
git commit -m "Meaningful commit message"

# Follow proper commit message format (present tense, imperative)
```

> Use short but meaningful commit messages like:
> `Add function that sum command-line arguments`, `Add error handling to login`, etc.

- Push to GitHub:

```bash
git push origin main

# set upstream
git push -u origin main
```

- Set GitHub repo if not already:

```bash
git remote add origin <repo-url>
```

### Final Thoughts

- Mentors are here to help – reach out!
- Practice every day if possible.
- Ask questions early and often.
- Be kind to yourself; the first few weeks might be intense but you will grow fast.
- Keep going. You’re building real developer skills!

### Useful Links

- [Mozilla Developer Network](https://developer.mozilla.org/en-US/)
- [Node Documentation](https://nodejs.org/docs/latest/api/)
- [Python Tutor](https://pythontutor.com/javascript.html#mode=edit)
- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
