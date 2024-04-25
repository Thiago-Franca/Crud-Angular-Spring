import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {CoursesService} from "../services/courses.service";
import {FormControl} from "@angular/forms";
import {Observable, of} from "rxjs";
import {map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  myControl = new FormControl();
  courses: Course[] = [];
  displayedColumns = [ 'name', 'category' ];
  filteredOptions: Observable<Course[]> | undefined;

  //coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {
   this.courses = this.coursesService.list();
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): Course[] {
    const filterValue = value.toLowerCase();
    return this.courses.filter(course => course.name.toLowerCase().includes(filterValue));
  }

}
