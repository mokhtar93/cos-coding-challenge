# CarOnSale

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Web Frontend Challenge

Welcome to the CarOnSale Web Frontend Coding Challenge.

To assess your skills and knowledge about the relevant technologies, we want you to build us a simple user interface for our backend service.

## Your Task:

Build a simple Angular (v7 - v12 or latest) application that includes:
- Login Page to login registered buyers („salesman“ or "buyer" users). If a Non-Buyer registers, an error message should pop up.
- Overview Page (only for logged in buyers) to display all running auctions (updated every 20 seconds), including
   - vehicle image thumbnail (vehicle images may not show actual vehicles cars on our DEV platform, but only test images)
   - basic vehicle information („Erstzulassung“/EZ, Mileage, Fuel Type, Transmission)
   - current highest bid value in Euro
   - remaining time in format „00h:00m:00s“
   - information whether the logged in buyer is the highest bidder on an auction
   
Please fork the repo and create the Angular project in the directory of this README.

Note that the solution must be coded in Angular, as this is the framework we are using internally. 
No previous professional experience with Angular will be consider when checking the results

There is no time constraint for this challenge, you can take as much time as necessary in order to provide a solution that represents you. 
But in order to dedicate internal resources to review your solution, we kindly ask you to send us an estimation of the time to <coding-challenge@caronsale.de>. This way we will be able to reduce the selection process duration.

## Your Resources:

You can find the Swagger documentation of our REST API here (The „Authorize“ feature of Swagger is not working with our API):
https://api-core-dev.caronsale.de/swagger/#/

The base URL of our REST service is <https://api-core-dev.caronsale.de/api/v1>.


## General Hints:

- The „User ID“ for REST calls is not the internal „id“ of a user, but the „mailAddress“.
- You don’t need to register new users, existing test accounts are
   - Buyer User:
      - salesman@random.com (PW: 123test)
   - Seller User:
      - dealership@alwaysAvailable.com (PW: test123)
- The authentication process is part of the challenge, please use any `authentication` endpoint in the "Authentication" section in our Swagger you may consider.
- Once authenticated use any `buyer` endpoint in the "Auctions" section you may consider. This will offer you automatically a set of auctions filtered for this user.

Please send the link to the forked repo to coding-challenge@caronsale.de.

If you have any questions, feel free to contact us via <coding-challenge@caronsale.de>
