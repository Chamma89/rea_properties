# Property Coding Test :house:

## The Aim

To display the list of properties in a column named "Results" where you can then choose to favourite or save a property and add it to the "Saved" column. You must also be able to remove a saved property from the "Saved" column.

## Design and Implementation

I wanted to use ReactJS for this project since I have been using it a lot within the last 2 weeks. And also figured that this project would be great practice and it also required the code to be separated into modules, which fit perfectly. The Webpack es6 starter i used can be found at https://github.com/epoch/react-hipstarter. 
I decided to split my app into 3 modules, App, Results and Saved. Results and Saved being the child component to App. There was no need for the child components to have a state as all the alterations would be made in the parent component(App).

The JSON data is being fetched through a fake REST API using JSON-Server.

## Improvements

Currently if you hover over the results or saved, all the buttons appear for that column. I would've liked to have had only that particular button appear for the property that is hovered on. I also would've liked to have used an external library to make it look a little prettier. All the SASS/CSS3 at the moment was done by me. 


## Getting Started

In order to run the program, you must follow these steps:

1. Install dependencies using npm or yarn

```
npm install
```
2. Run the following two commands simultaneously, in separate tabs, to initiate the webpack-dev-server and JSON-Server:

```
npm start - which will have the project running at http://localhost:8080/
```
```
npm run json:server - which will have the back-end server running at http://localhost:3000
```

3. To build and deploy with github pages

```
npm run build
```

4. To run tests

```
npm test
```

## Technology

The following Languages and tools were used:

* ReactJs
* Webpack
* JSON Server
* Babel
* SASS
* CSS3


## Challenges

I have been using React for a few weeks now and I always like the challenge of using a language i have had little experience in. 

I have never done any testing with ReactJS prior to this so using Jest/Enzyme was a good learning hurdle and will definitely come in handy in the future. 