/*
    npm - global command, comes with node
    npm --version
*/

/*
    local dependency - use it only in this particular project
    npm i <packageName>
*/

/*
    global dependency - use it in any project
    npm install -g <packageName>
    sudo npm install -g <packageName> (ubuntu)
*/

/* 
    package.json - manifest file (stores important info about project/package)
    manual approach (create package.json in the root, create properties etc)
    npm init (step by step, press enter to skip)
    npm init -y (everything default)
*/

/*
    dependencies are managed by package.json
    some projects might need some dependencies
*/

/*
    The dependencies folder is quite big in size. To push the project on a repository,
    add a gitignore file and add the command '/<nodeModuleFolderName>'
*/

/*
    Since we haven't pushed the node modules folder to the repository
    those who try to clone it can get the modules required for the 
    project by running the command 'npm install' which will check for 
    dependencies in the package.json folder and install the dependencies
    mentioned in it
*/

//  Nodemon is a popular tool that is used for the development of applications based on node.js. 
//  It simply restarts the node application whenever it observes the changes in the file present 
//  in the working directory of your project.

/*
    devDependencies are those packages in the package. json file that you 
    need only for project development purposes. Example- Babel, Webpack, etc. 
    You require these packages to test and run your project on the localhost.
    We don't share these dependencies for production and to the users.
*/

/*
    "scripts": {
        "start":"node app.js",
        "dev":"nodemon app.js"
    },
*/

/*
    package-lock.json is necessary because sometimes a particular dependency 
    is dependent on another dependency. We need to make sure the versions of these
    packages remain the same for the user as well otherwise we may face some bugs.
*/

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems + " hi") //[ 1, 2, 3, 4 ]