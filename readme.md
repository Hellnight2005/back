# Step:- 1
## first you should type command in terimal
 npm init



# Step:- 2
## we down upload all unessary files and folder for that we use ".gitignore"
# you can dowmload from follow link.
- [gitignore generator](https://www.toptal.com/developers/gitignore)
- it only track the file mention in the givrn file but not add into git repo 


# Step:- 3
## now created .env file.


# Step:- 4
## make a folder "src" (Sorce folder) add some file init 
 - app.js
 - constants.js
 - index.js


# Step:- 5
## Add some line in package.json after description.
 - "type": "module",


# Step:- 6 
## When we run server in node and change something then we should restart the server therfore we used 
## Nodemon
 - npm i -D nodemon

# Step:- 7
## Add script command in package.json
 - "scripts": {
    "dev":"nodemon src/index.js"
  },


# Setp:- 8
## here we can make different types of folder for your project 
 - controllers
 - db (Database)
 - middlewares 
 - models 
 - routes 
 - utils 

# Step:- 9
## install prettier 
### Prettier is a code formatting tool that helps ensure consistent and readable code in software projects. Here's a short explanation of Prettier
 - npm i -D prettier
## make a file(.prettierrc) 
- {
    "singleQuote": false,
    "bracketSpacing": true,
    "tabWidth": 2,
    "trailingComma": "es5",
    "semi": true
  }
## now one more file to prevent to sensitivity file
- /.vscode
- /node_modules
- ./dist
- *.env
- .env
- .env.*
### to not change the setting in this file 