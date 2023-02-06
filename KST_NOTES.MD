## Angular Elements

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

### Lifecycle Methods
