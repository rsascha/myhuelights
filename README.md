# Myhuelights

With this project I'm aiming to learn Angular and related state of the art web technologies.

It would be great to bring additional features to my Hue setup like multi tab [Hue Tab switch](https://www2.meethue.com/en-us/p/hue-tap-switch/046677473365) support.

Contribution, in case we share the same interest, is happily welcome.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help on Angluar CLI

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Development

## Code scaffolding

Use `ng generate <blueprint> <folder>/<name>`

See: [ng generate](https://github.com/angular/angular-cli/wiki/generate)

Sample:
```
$ ng generate pipe pipes/orderby
  create src/app/pipes/orderby.pipe.spec.ts (191 bytes)
  create src/app/pipes/orderby.pipe.ts (203 bytes)
  update src/app/app.module.ts (1707 bytes)
```

## Resources

### Testing

See: [jasmine](https://jasmine.github.io/2.4/introduction.html)

### bootstrap (styling)

This project is using [bootstrap](http://getbootstrap.com/docs/4.0/getting-started/introduction/).

Sample: 
```
<div class="container">
  <!-- Content here -->
</div>
```

### ng-bootstrap (components)

This project is using [ng-bootstrap](https://ng-bootstrap.github.io/#/components/accordion/examples).

Sample: `<a class="btn btn-primary">Button</a>`

### Philips hue developer program

Find resources about the [API](https://www.developers.meethue.com).

Sample:
```
Address	http://<bridge ip address>/api/<username>/lights/1/state
Body	{"hue":46920}
Method	PUT
```
