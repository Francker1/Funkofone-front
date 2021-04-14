

# Funk-o-Fone React App

## Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install app dependencies

In project root folder, run following command to install all dependencies of project

`
npm i
`

or 

`
npm install
`

The project run in port 3000 of localhost server

<br>

## Start app

To start the app and begin the CRUD of phones, run following command:

`
npm start
`

<br>

## Run lintern

In this project are configured eslint with prettier, using airbnb rules and anothers custom rules, to set lint and show analyze files, you should run this command:

`
npm run lint
`

If you want fix problems that can be resolved automatically, you must run this command:

`
npm run lint:fix
`

<br>

## Run test suite

In this project there are a suites of tests configured in **test** folder. Testing in components, helpers functions and custom hooks. To run tests you must run this command:

`
npm run test
`


<br>

### Use App

You can list, edit, create or delete phones and they are saved in Mongo Database (backend of project). In the start moment, there are 4 phones and you cand edit or delete them. To create a new phone, go to route */new* and set data to new phone. To shorten time, at the moment it is not possible to upload an image from the front, but the backend is ready to use (you can try with Postman, for example).

Also I simulate data from, login by example, and keep in all application with useContext. 

This project not use redux or typescript to short time of develop, but is possible in the future, add it. 

I create a custom hooks to get data from API or set form, but also I develop a traditional way like useEffect in component EditPhone or use *fetch* and *axios* to show two different way to comunicate with API. 