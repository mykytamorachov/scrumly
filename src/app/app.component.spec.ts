/* tslint:disable:no-unused-variable */

import {TestBed, async, fakeAsync, tick} from '@angular/core/testing';
import { AppComponent } from './app.component';

import { MaterialModule } from '@angular/material';
import { ComponentsModule } from './components/components.module';
import {Router} from "@angular/router";
import {Location, APP_BASE_HREF} from "@angular/common";
import {routing} from "./app-routing.module";

describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        ComponentsModule,
        MaterialModule,
        routing
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    });

    TestBed.compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('navigate to "" redirects you to /', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('');
  }));
  it('navigate to "User Story" redirects you to /user-story', fakeAsync(() => {
    router.navigate(['user-story']);
    tick();
    expect(location.path()).toBe('/user-story');
  }));

  // it(`should have as title 'app works!'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app works!');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});
