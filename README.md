# exerciseCompass
I make a simple app to respond to your assignment.

# Table of contents
- Why React ?
- Why this structure ?
- Why ccs in js ?
- What are the differents points to improve according to me ?
- Why Material UI?
- Why Jest?
- How to launch ?
- Testing part
- List of my source

# Why React ?
I have chosen React, because:
- I have already used it
- I like the declarative paradigm of React 
- React got a big community
- React is famous
- React IS JS

# Why this structure ?
Architecture of react project general:
- src/  
  - assets/
    - jss/
       - components/
          - fictionalComponentStyle.js
          - etc ....
       - views/
          - fictionalViewStyle.js
          - etc ....
     - images/
        - some_images
   - components/
      - fictionalComponent/
        - FictionalComponent.js
      - templateLayout/
        - TemplateLayout.js
      - etc ...
      - index.js
    - views/
      - fictionalViews/
        - Section/
          - component_which_only_belong_to_this_view
        - index.js
      - etc..
      - index.js
    - plugin/
      - config/
      - yup
      - etc ...
    - store/
      - reducers/
      - action/
    - service/
      - someCall
    - App.js
    - index.js
    
I PUT SOME index to make cleaner my import.
I often create a template for my view.
I often didn't put prop type because I didn't take time to put it.
I differentiate my views from my components, because components create views. In this app, i was pretty rough, i directly put my code in the main layout, SORRY.

# Why ccs in js?
I prefer the js way because:
 - i keep using js
 - i can not make mistake about my stylefile (take the wrong file)

# What are the differents points to improve according to me ?
I have to:
- refactor the code
- add more breakpoint to have better responsiveness
- proptype my components more
- give defaultprops for my components more
- think differently for the sorting algorithm (pretty rough)
- make good import with index
- improve UI (better style)
- use more jest fonctionnality
- use some event testing

# Why Material UI?
I have already used it.
It is pretty good, all of their components are linked so we can customized the root of the style, then all componenents change (pretty cool).
Good doc.

# Why Jest ?
It was recommanded, i have already used it. Good doc.

# How to launch ?
you must install first: node and npm


then you can launch in your terminal: npx create-react-app my-app


this command will install all you need to start your project.
if you want more explanation:
https://reactjs.org/docs/create-a-new-react-app.html

when you have finished. You must enter in your folder my-app.
then you must install some packages because i used some.
IF YOU WANT TO SEE SOME APPLICATION OF THE DIFFERENT LIBRARIES, you can see them in the project OnlyReactJS/DifferentLibraries

You must run:
  - npm install formik (to make form)                            NOT IN THE PROJECT
  - npm install yup (validation form)                            NOT ...........
  - npm install @material-ui/core (ui)                           IN.................
  - npm install @material-ui/icons (ui)                          IN.....................
  - npm install redux (general store)                            IN..............
  - npm install react-redux (general store)                      IN...................
  - npm install redux-thunk (to make some asynchronous storage)  IN...........
  - npm install axios (make some call)                           NOT IN ..........................
  - npm i @crello/react-lottie (animation for lottie)            IN .................
  - npm i @testing-library/react (test)                          IN ..................
  - npm i react-test-renderer  (test)                            IN.........................
  - npm i jest-dom   (test)                                      IN..............
  
When it is done, you run: 
 - npm audit fix
 - npm start
 
 # Testing part
 run: npm test
 
 
 I just create a little component to show you what unit testing look like,
 I could :
 - use more jest fonctionnality
 - use some event
 - ....

# List of my source
- Refactoring Guru      https://refactoring.guru/refactoring
- Design Pattern Guru   https://refactoring.guru/design-patterns
- Databaseanswer        http://www.databaseanswers.org/
- StackOverflow         https://stackoverflow.com/
- Youtube               https://www.youtube.com/
- W3School              https://www.w3schools.com/
- CSSTrick              https://css-tricks.com/
- OpenClassRoom         https://openclassrooms.com/
- MDN                   https://developer.mozilla.org/
- Material UI           https://material-ui.com/
- React Website         https://reactjs.org/
- Symfony Website       https://symfony.com/
- Medium                https://medium.com/
- w3                    https://www.w3.org/
- php                   https://www.php.net/
- Other Forum
- A precious colleague M.TALEB
