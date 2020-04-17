import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material';
import { TodoTableComponent } from './todo-table.component';

describe('TodoTableComponent', () => {
  let component: TodoTableComponent;
  let fixture: ComponentFixture<TodoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoTableComponent ],
      imports: [MatTableModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
