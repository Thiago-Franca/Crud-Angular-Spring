import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
      {_id: '1', name: 'Course 1', category: 'Category 1'},
      {_id: '2', name: 'Course 2', category: 'Category 2'},
      {_id: '3', name: 'Course 3', category: 'Category 3'},
      {_id: '4', name: 'Course 4', category: 'Category 1'},
      {_id: '5', name: 'Course 5', category: 'Category 2'},
      {_id: '6', name: 'Course 6', category: 'Category 3'},
      {_id: '7', name: 'Course 7', category: 'Category 1'},
      {_id: '8', name: 'Course 8', category: 'Category 2'},
      {_id: '9', name: 'Course 9', category: 'Category 3'},
      {_id: '10', name: 'Course 10', category: 'Category 1'}
      ];
  displayedColumns = [ 'name', 'category' ];

  constructor() {
    // this.courses = [];
  }

  ngOnInit(): void {
  }

}
