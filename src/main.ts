import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component_2';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));