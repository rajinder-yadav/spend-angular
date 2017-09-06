import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HowWhyComponent } from './how-why/how-why.component';
import { PricingComponent } from './pricing/pricing.component';
import { HelpComponent } from './help/help.component';
import { ContactComponent } from './contact/contact.component';
import { FreeTrialComponent } from './free-trial/free-trial.component';
import { KeyFeaturesPageComponent } from './key-features-page/key-features-page.component';
import { FooterComponent } from './footer/footer.component';
import { CommonQuestionPageComponent } from './common-question-page/common-question-page.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'how-why', component: HowWhyComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'help', component: HelpComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'free-trial', component: FreeTrialComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HowWhyComponent,
    PricingComponent,
    HelpComponent,
    ContactComponent,
    FreeTrialComponent,
    KeyFeaturesPageComponent,
    FooterComponent,
    CommonQuestionPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
