https://www.youtube.com/watch?v=3dHNOWTI7H8&t=1548s

## Angular Elements

### Modules

* building blocks that provide components/functionality for a particular task
* there are a lot of modules existing, that can be integrated into own project, e.g:
  * ``HttpClientModule`` - built-in angular module for doing HTTP Request
  * ``FontAwesomeModule`` - for using FontAwesome icons
* must be declared in app.modules.ts to use them in own app

### Components

#### Component Databinding

* generally, bindings of external elements into the component html are done with ``[]`` brackets
* outgoing bindings are done with regular brackets: ``()``, e.g binding event handler
  methods:<br/>``<app-task-item (onDeleteTask)="deleteTask(task)" ...``
* bidirectional binding is done with both brackets, e.g. ``<input [(ngModel)]="reminder" ...`` to bind a form input
  value to the angular form Model

### Directives

* either built-in or self-implemented elements that provide functionality within the Angular html code
* referenced with angular brackets (``[ng...]`)
  * example (bult-in): ``[ngStyle]`` - provides possibility to assign CSS style and referencing to component
    properties: ``<button [ngStyle]="{'background-color' : color }" class="btn">{{text}}</button>`` <br/>_(color being a
    property from the ``...component.ts`` file)_

#### Types of directives

* attribute directives (see above)
* structural directives, e.g. for looping etc.
  * referenced in html file with ``*ng[command]``
    Example *ngFor:

``` :javascript
<p *ngFor="let task of tasks">{{task.text}}</p>
```

### Events

* Component events are referenced with regular brackets in the components html file.
  Example: ``<button (click)="onClick()"``
* the event function is then defined in the ``.component.ts`` file of the component.
  * usually, the child component will emit the event to the calling component, so that the actual action can be defined
    from outside. Example:

``` :javascript
  // define Output property in component class
  @Output()
  btnClick = new EventEmitter();

  // emit event, when button is clicked (method called from html file)
  onClick() {
    this.btnClick.emit();
  }
```

### Services

* services can provide data to the components
* can be generated with ``ng generate service [pathToNewService]``
* have the @Injectable annotation, and need to be passed to the component in the constructor method. Example (no need to
  assign anything to component properties, they are automatically
  generated):<br>``constructor(private taskService: TaskService) {}``
* can be used now with ```this```. Example:

``` :javascript
  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }
```

* usually, service would return an Observable, and the component subscribes to it, so that component is updated as soon
  as values in Service change (using the rxjs library. Example:

``` :javascript
  ngOnInit(): void {
    //subscribe to service method
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks; // assign value to component properties, as soon as they are changing
    });
  }
```

### Lifecycle Methods
