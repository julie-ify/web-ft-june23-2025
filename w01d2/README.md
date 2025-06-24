## W01D2 - The Dev Workflow

### Lecture Outline

- [x] Intro
- [x] Writing code incrementally
- [x] Problem solving tips
- [x] Review git workflow

### Remote Lecture Format

- Lectures are conducted on Zoom and recorded.
- Please turn on your camera to stay engaged.
- Use Alt + Y to raise your hand
- Mute when not speaking.
- Drop a quation in the message box too

### Lecture Goals

- Build effective problem-solving skills
- Understand and apply a developer workflow
- Use Git and GitHub for version control
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

  - Clarify requirements.
  - Rephrase the problem in your own words.

- Break the Problem Down

  - Divide into small, manageable parts
  - Write pseudocode (plain English logic) if you prefer.

- Incremental Development

  - Work one small step at a time.
  - Test each part as you build.
  - Use Node REPL for experimentation

- Debugging with Errors

  - Let errors guide your progress.
  - Check for syntax or runtime errors.
  - Use `console.log()` for insight into what's happening.
  - Learn to read and Google error messages effectively.
  - Chrome DevTools: `chrome://inspect`

- Ask for Help

  - Use the 15-minute rule. (If you’ve been stuck on a problem for 15 minutes and haven’t made progress, it’s time to ask for help.)
  - Google > StackOverflow > MDN Docs > W3S > Mentors
  - Ask thoughtful questions.

- Fix or Improve Code Cleanliness
  - Apply bug fixes or refactor.
  - Use proper formatting and indentation.
  - Don't copy/paste type and understand
  - Avoid unnecessary repetition.

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
> `Fix bug in printArray`, `Add error handling to login`, etc.

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
- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
