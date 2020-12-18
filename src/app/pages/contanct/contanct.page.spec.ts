import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContanctPage } from './contanct.page';

describe('ContanctPage', () => {
  let component: ContanctPage;
  let fixture: ComponentFixture<ContanctPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContanctPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContanctPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
