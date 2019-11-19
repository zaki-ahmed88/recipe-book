import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import {ShoppingListService} from './app/shopping-list/shopping-list.service';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

