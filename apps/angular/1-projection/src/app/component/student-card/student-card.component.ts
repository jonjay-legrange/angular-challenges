import { Component, inject, OnInit } from '@angular/core';
import {
  FakeHttpService,
  randStudent,
} from '../../data-access/fake-http.service';
import { StudentStore } from '../../data-access/student.store';
import { CardType } from '../../model/card.model';
import { CardComponent } from '../../ui/card/card.component';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  imports: [CardComponent],
})
export class StudentCardComponent implements OnInit {
  private http = inject(FakeHttpService);
  private store = inject(StudentStore);

  students = this.store.students;
  cardType = CardType.STUDENT;
  imgSrc = 'assets/img/student.webp';
  customClass = 'bg-light-green';

  ngOnInit(): void {
    this.http.fetchStudents$.subscribe((s) => this.store.addAll(s));
  }

  protected addNewStudent() {
    this.store.addOne(randStudent());
  }

  protected deleteStudent(id: number) {
    this.store.deleteOne(id);
  }
}
