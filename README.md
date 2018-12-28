
## Folder structure:
- e2e - folder for end-to-end integration/scripted tests; simulate a real user
- node_modules - 3rd party libraries; purely for dev - never gets deployed...
- src - actual source code for the app
   - assets - static assets for your app: icons, images
   - environments - config settings for different environments
   - main.ts - where the application starts
   - polyfill.js - fills javascript gap for certain browsers
- package.json - all the "imports"/dependencies for the application

## Typescript Overview
- A superset of JS
- TS has additional features on top of JS
- Strong typing
- Advanced OO features
- Compiles down to JS
- Installed w/sudo npm install -g typescript
- tsc - typescript compiler
- use "let" keyword for declaring variables for more OO-type scoping
- "interface" allows you to define shape of an object (properties only - no implementation)

## Angular Fundamentals

### Components
- The building block of an Angular app
- Encapsulates the data, the HTML, and the logic for a view
- The "app" component is the root of an Angular app, with all other components as children to that component
- Modules are a ways to organize components
- Three steps:
   1. Create component - author a .ts file that declares a component class and is decorated with @Component so that Angular knows what it is.
   2. Register component - the component must be registered within a module
   3. Add to HTML markup
- You can use 'ng g c component-name' on command line to auto-generate the boilerplate code for the component
- A component only deals with presentation logic ("the view") - use a service!
- Create with 'ng g s service-name'

- Directives manipulate the DOM

### Data & Events
- "Property Binding" - binding a property of a DOM object to a field in a Angular component.
   - use [] brackets in the HTML: `<img [src]="myAttribute">` binds the "src" property of the img tag to the value of "myAttribute" in your component's class.
   - It only works one way: Component -> DOM. If the DOM changes, tho, Angular won't update the component's field
   - in some cases, it isn't an exact match from DOM property to HTML attribute. In that case, you have to use the "attr." prefix inside of the [] to map to the HTML attr.
- "Class Binding" - `[class.active]="fieldFromClass"` is a condition that, if it evaluates to true, will attach the class to the element.
- "Style Binding" - `[style.backgroundColor={fieldFromClass}]`
- "Event Binding" - binds event on DOM object to method in the class (click)="onSave($event)". The $event object is a DOM event object that is know to Angular
   - DOM events, by default, propgate up the DOM tree from the originating object
   - From angular, you can call $event.stopPropagataion() to stop the event from propagating futher up the tree
- You can declare "template variables" `<input #email>` to simplify code when referencing DOM elements
- Two-way binding - [(ngModel)] - Angular adds this object to the DOM to enable 2-way binding
   - requires to add to the app.module.ts's "imports" and add: import { FormsModule } ...
- "Pipes" help format data
   - Angular provides default pipes for formatting numbers, strings, dates, currency, ...
   - Can build custom pipes
      - create a customname.pipe.ts class
      - import Pipe & PipeTransform from @angular/core
      - export a class that "implements PipeTransform"
      - register it in the app.module.ts "declarations" section

## Building Custom Components
- Components can have input and output properties. 
- Create a public API for a component!
- "Input" decorator can be used to define input properties into your component from the DOM (`@Input() myAttr;`)
- "Output" properties allow you to create custom events
   - Use the "Output" decorator and instantiate a EventEmitter() object. Call `emit()` on this object
     when you want to pass an event from your component.
   - You can define and export an interface for passing a custom object around as an event
- The `<ng-content>` element can be added to your HTML for your component that will allow the user to 
provide custom markup. 

## Directives
- There are both structural and attribute directives:
   - Structural - modify the structure of the DOM itself (prefixed with *)
   - Attribute - modify the attributes of a DOM element
- When to use them depends on the size of the DOM tree underneath of an element. If rendering a div is going
to be costly, it's better to use the Structural directive (like `*ngIf`) to elimiate the hidden structure from the
DOM, improving performance. Otherwise, you can use the `hidden` attribute of the div and it will be part of the DOM. 

### Misc Notes
- The "Injectable" decorator tells Ang that you are allowing that class to be dependency injected 
- Template variables are variable names that you can assign to the HTML tags in your component template TS making accessing the properties of that HTML element more readable.