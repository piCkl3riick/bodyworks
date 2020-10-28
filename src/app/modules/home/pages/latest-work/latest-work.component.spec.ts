import { async, ComponentFixture, TestBed }  from '@angular/core/testing';
import { PortfolioComponent } from '../../portfolio/portfolio.component';
import { LatestWorkComponent } from './latest-work.component';

describe('LatestWorkComponent', () => {
let latestWorkComponent: LatestWorkComponent;
let portfolioComponent: PortfolioComponent
let fixture: ComponentFixture<LatestWorkComponent>;

beforeEach(async(() => {
TestBed.configureTestingModule({
  declarations: [
    LatestWorkComponent,
    PortfolioComponent
  ]

})
.compileComponents();
}))



beforeEach(() => {
  fixture = TestBed.createComponent(LatestWorkComponent);
  latestWorkComponent = fixture.componentInstance;
  fixture.detectChanges();
});

it('Should Create Component', () =>{
expect(latestWorkComponent).toBeTruthy();
});

beforeEach(() => {
  fixture = TestBed.createComponent(PortfolioComponent);
  portfolioComponent = fixture.componentInstance;
  fixture.detectChanges();
});

it('Should Create Component', () =>{
expect(portfolioComponent).toBeTruthy();
});
});


