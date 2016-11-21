# Portal3 Demo Environment

## Contents

* [Prerequisites](##Prerequisites)
* [Installation](##Installation)
* [Setup](##Setup)
* [Github](###Github)
* [VS Code](###VSCode)

## Prerequisites

Please have the following items setup:

* `Visual Studio Code`
* `Github Desktop App`
* `node 6.9.1`
* `npm 3.10.8` or later.
* `angular-cli 1.0.0-beta.20-4`

## Installation

* [VS Code](https://code.visualstudio.com/docs/?dv=win).
* [Github](https://github-windows.s3.amazonaws.com/GitHubSetup.exe).
* [Node and Npm](https://nodejs.org/dist/v6.9.1/node-v6.9.1-x64.msi).

## Setup

### Github

Once the Github desktop application is successfuly installed on your pc follow these steps:

* Open Github.
* Sign in with your Github user details.
* Select the `+` sign to `Create, Clone or Add` a repository.
* Select the `Clone` tab, then select the `TheNaidy/Portal3_Demo` project and then select ok.
* Select a location as to where you will store your local copy of your project.
* Wait for your project to pull from `Github`.

### VS Code

* Open the `TheNaidy/Portal3_Demo` project in `VS Code`.
* Go to the `Extensions` tab and search for `Terminal`. This is a great command line tool to use within VS Code.
* Run the command `npm run env` in your terminal window. 
Make sure that the current path as to where you run this command has your main project's package.json file present.
This command will install all dependencies locally as well as a global version of `angular-cli`.