React + Redux + Moltin Ecommerce is an app demonstrating the usage of Moltin Javascript API, React + Redux

## Description
- books are retrieved from JSON file via JSON-SERVER technique which watch the JSON file and generate APIs like http://localhost:3001/result
- adding books to cart is handled using Redux store.
- completing order purchase goes through Moltin APIs.

## How to run the app
1. Make sure you have [Create React App](https://github.com/facebookincubator/create-react-app) installed
2. Clone the repository
3. `cd ebook`
4. `npm install`
5. Copy the public ID from your Moltin account and use it in `src/vendor/config.js`
6. `npm start`
7. Locate to db.json inside src `ebook\src`
8. Open Git Bash.
9. Launch JSON-SERVER to watch db.json and generate the corresponding APIs by running following command
    `json-server --watch db.json --port 3001`

## How to compile the SCSS
1. `cd src/styles`
2. `sass --watch scss:css`

The current setup will minify all of the assets including JS and CSS files.

## How to build the project for production
1. `npm run build`
2. Deploy the `/build` directory

## Technologies
 - [Moltin](https://www.moltin.com/)
 - [React](https://facebook.github.io/react/)
 - [Redux](https://github.com/reactjs/redux/)
 - [Create React App](https://github.com/facebookincubator/create-react-app)
 - [SASS](http://sass-lang.com/)
 - [Semantic-ui CSS framework](http://semantic-ui.com/)
