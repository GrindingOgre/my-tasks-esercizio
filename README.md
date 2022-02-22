# MyTasks

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Traccia

<p>Creare un'applicazione che gestisca dei task.</p>
I task sono caratterizzati da:
<ul>
<li>Titolo <span class="text-muted">string</span></li>
<li>Descrizione <span class="text-muted">string</span></li>
<li>Scadenza <span class="text-muted">string/Date</span></li>
<li>Urgente <span class="text-muted">boolean</span></li>
<li>Completato <span class="text-muted">boolean</span></li>
</ul>

<p>Mostrare sulla parte sinistra un componente a tab con 2 tab:</p>

<ol>
<li>Tab da fare:<br>In questo tab devono essere mostrati tutti i task ancora da completare. Ogni task può essere completato o eliminato.</li>
<li>Tab completati:<br>In questo tab devono essere mostrati tutti i task completati.</li>
</ol>

<p>
Mostrare sulla parte destra una form che mi permetta di inserire un nuovo task. I task appena creati non sono completati.
</p>

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
