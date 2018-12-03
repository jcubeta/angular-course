import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', // <courses> 
    template: `
       <button (click)="onSave($event)" [style.backgroundColor]="isActive ? 'blue' : 'white'" class="btn btn-primary" [class.active]="isActive">Save</button>
    `
})
export class CoursesComponent { 

    isActive = true;
    title = "List of Courses";
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    onSave($event) { 
        console.log("Button was clicked", $event);
    }
}