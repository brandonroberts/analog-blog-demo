import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideFileRouter } from '@analogjs/router';

import { AppComponent } from './app/app.component';
import { provideContent, withMarkdownRenderer } from '@analogjs/content';

bootstrapApplication(AppComponent, {
  providers: [
    provideFileRouter(),
    provideContent(withMarkdownRenderer())
  ],
});
