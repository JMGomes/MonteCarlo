# MonteCarlo

This project is divided in 2 sections, FE and BE

FE:
 - User inputs a number N and request N random points from Backend
 - Calculates PI

BE: 
 - Generate N random points and return to frontend



## BE

How to run server:
``` node server.js ```

This is a simple http server running on port 8080. Serves requests by expecting some header `numberstogenerate` and creates N random points depending on that request.

To note that maximum points to generate are 1000000.


## FE

How to run server:
``` npm start ```

Simple page with one input and one button running on port 3000.
Input is expecting a number and calculating will start once the button is clicked.

FE is aware that max number of points to generate 1000000 and for numbers superior to this value will do batch processing.

Some indication that value is being calculated is displayed to the user and the final results are displayed on the page. Also there are some mid-process results being dumped into the browser console.

### Structure
App.tsx -> MonteCarloComponents.tsx (1)

(1) calls MonteCarloService (2) - that is responsible for batch processing and PI calculation

(2) calls MonteCarloAPI to get points from BE


# DEMO

![demotogif3](https://user-images.githubusercontent.com/33399876/202865263-20bef198-3e84-483c-9f48-5bdfb5876cc8.gif)
