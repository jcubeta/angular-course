import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'white'" (click)="onSave($event)"  >Save</button>
    `
})
export class CoursesComponent {

    title = "List of Courses";
    courses;
    isActive = true;

    constructor(service: CoursesService) { 
        this.courses = service.getCourses();
    }

    onSave($event) { 
        console.log("save clicked", $event);
    }

     

}