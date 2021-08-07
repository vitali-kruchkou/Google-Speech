# Innowise Lab Internship: Level 1: Google Speech

This project was created with React and Firebase.

[Demo](https://vitali-kruchkou.github.io/Innowise-Lab-Internship-Level-1-Google-Speech/)

## Available Scripts

1. Clone the develop branch.

`$ git clone https://github.com/vitali-kruchkou/Innowise-Lab-Internship-Level-1-Google-Speech -b develop`

2. Go to the directory

`$ cd Innowise-Lab-Internship-Level-2-Mini-paint`

3. Install the npm modules

`$ npm install`

4. **For working locally add .env file with firebase API keys.**

Create .env file by type

`REACT_APP_API_KEY=your API key`

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
App is ready to be deployed!

## Architecture solution

### Component folder

Component folder usually contains 2 files: .tsx and .ts ; there files and the folder are named with component name (f.e.
PageContent /
PageContent.tsx
StyledPageContent.ts
)

## Database snapshot

    └──users
        └──userId
    	    ├──displayName
    	    ├──email
            ├──score
            └──uid

## Application stack

List of packages I used for this app

### React-router-dom

Used to add routing

### Styled components

Used for style components

### React-hot-toast

Use to add Toast messages

### Redux & React-Redux

Used to provide the data

### React-app-rewire-alias

Used to add alias in our application

### Redux Saga

Used to asynchronous operations  in our application

### React-i18next

Used for localization in our application

### React-speech-recognition

Used for peech recognition in our application

## Folders structure

    └──src
        ├──core
            ├──constants                  #App Constants
            ├──firebase                   #Contains firebase init script
            ├──i18n                       #i18n files
            ├──routes                     #Routing files
            ├──store    
                ├──actions                #Actions component
                ├──reducers               #Reducers component
                ├──sagas                  #Sagas component
                └──index.ts               #Store
            └──type                           #Contains the main types
        ├──modules
            ├──Authentication
                ├──components
                    ├──PasswordReset          #Password reset components
                    ├──SignIn                 #Sign In components
                    ├──SignUp                 #Sign Up components
                └──Authentication.tsx
            ├──HomePage
                ├──MainPage                   #MainPage components
                ├──Score                      #Score components
                ├──SpeechRecording            #ScpeechRecording components
                ├──StatisticsPage             #Statistics components
                ├──WordsList                  #WordsList components
                └──HomePage.tsx
## Styling

We use styled-components and ant design to work with styles in our application;

## Code formatting

This project contains .prettierrc file and .eslintrc.js file; it describes rules for Prettier code formatter and ESlint; according to these rules we are able to keep Code formatting the same for every project developer;
