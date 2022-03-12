# My Basket App

This a demo app to demonstrate the use of React and Typescript in building simple components for the e-commerce sector. 

The component in question is a simple basket component that fetches fake store items from the [fakestoreapi](https://fakestoreapi.com/) and allow the user to either remove them or modify their quantity before proceeding to checkout.

## Getting Started

Here is how to get started with the project:

- Clone the repo locally
- Open the project in your favorite IDE (i.e. [VSCode](https://code.visualstudio.com/))
- Add the https://fakestoreapi.com url to the .env.example file and rename it as .env
- Run the command `yarn` in the project directory to install all dependencies
- Run the command `yarn start` in the project directory to launch the app
- You're good to go :)

The app will run in development mode at [http://localhost:3000](http://localhost:3000) and the browser will automatically reload if you make any changes to the code.

## Usage

- Load the app to automatically fetch three fake items
- Use the input field next to each item to modify its quantity
- Notice how the item's total price changes automatically
- Use the `x` button next to each item to remove the item
- Use the `Clear` button at the bottom of the card to reset all items' quantities
- Notice how the items' total price changes automatically
- Use the `Checkout` button to get a toast confirming a successfull checkout

## Error Handling
- User won't be allowed to input non numerical values or values below zero as quantity
- Any error from the getItems() api call will result in an empty basket and an error toast

## Dependencies

This project relies on the following dependencies:

- [Create React App Typescript](https://create-react-app.dev/docs/adding-typescript/)
- [Styled Components](https://styled-components.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction/)
- [ENV CMD](https://www.npmjs.com/package/env-cmd) 
- [Axios](https://axios-http.com/) 
