# PublicResturants

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Project information and steps:

used technologies: Angular material, flex-layout, firebase, localstorage

Setup App:

	Angular:
	1. ng new public-restaurants
	2. ng add @angular/material
	3. creating the components, service, module
		ng generate component restaurants-list
		ng generate service restaurant
		ng generate module restaurant

	Firebase:
	create a new project: restaurants-data
	create a new database
	
	download the dependencies from node package manager by running the command: npm install

Run App:

	npm start or ng serve
	or
	Hosted: https://sandeepraju538.github.io/RestaurantsAngularMaterialAppHosted
