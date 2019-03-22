## The task

# BuildReactAppUsingRedux


#Task and notes

1. The application will have a single input text box that will take in an alpha numeric value between 1 and 10 characters long. 
 
2. There will be a button which a. will be disabled for invalid input values and b. when clicked will call the following service end-points in the following way: 
 
call     
http://fubar.com/person/$input$ pass the input value in place of $input$ 
 
The service will respond with the following structure { "val1" : "", "val2" : "" } 
 
call 
http://fubar.com/facility/$val1$ pass in val1 from call to person as $val1$ 

returns { "val3" : "", "val4" : "" } 
 
http://fubar.com/exposure/$val2$ pass in val2 from call to person as $val2$ 

returns { "val5" : "" } 
 
3. Upon completion of this chain show an overlay that contains the result of multiplying val3 by val5. 
 
4. You will need to provide your own mock implementation of the service end-points. 
 
5. Feel free to style the page as nicely as you like. 


Inside application folder README.md file will be more for technical information.


## Additional info

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

...