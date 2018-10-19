# CHATBOT SETUP

## Download and install tools
- [NodeJS](https://nodejs.org/en/download/).
- [Visual Studio Code](https://visualstudio.microsoft.com).
- [Git](https://git-scm.com/downloads).
- [Yarn](https://yarnpkg.com/en/docs/install#windows-stable).

````
## Configuration (prerequisite)
- To ensure EOF is LF, run the command:
````
git config --global core.autocrlf input
````

## Install dependencies
- Change working directory to downloaded folder path and run the following command:
````
npm install
````

## Run && Build
- Production build
````
npm build
```` 
- For frontend developer
````
npm start
````
- For backend developer
````
npm start:dev
````
- Run in production mode
````
npm start:prod
````
- Check eslint
````
npm lint
````
- Run UT test
````
npm test
````

# Git Flow
- Step 1: Clone source code
```bash
git clone https://github.com/thangnvse/ChatbotDemo.git
```
- Step 2: Change working directory to F500.ChatBot
```
cd M35.WF.BE
```
- Step 3: Initialize git flow
```
git flow init
```
- Step 4: Create new feature branch to develop
```
git flow feature start Login
```
*** Note: *** change `Login` to your task id
- Step 5: After coding is done, commit and push source code
```
git add .
git commit -m "message to describe commiting code"
git push origin feature/Login
```
*** Note: *** change `Login` to your task id
- Step 6: merge develop before create Pull Request
```
git pull origin develop
```
While you are merging, please resolve conflict if you catch any conflict.
After you resolved all conficts, create new commit
```
git add .
git commit -m "message to describe resolve conflict"
```
*** Note: *** you can rollback merging by command:
```
git merge --abort
```
- Step 7: Push source to origin after finish merging.
```
git push origin feature/Login
```
- Step 8: Create Pull Request in GitLab