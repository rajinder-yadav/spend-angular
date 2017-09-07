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
import { SignupPage1Component } from './free-trial/signup-page1/signup-page1.component';
import { SignupPage2Component } from './free-trial/signup-page2/signup-page2.component';
import { WelcomePageComponent } from './free-trial/welcome-page/welcome-page.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'how-why', component: HowWhyComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'help', component: HelpComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'free-trial', component: FreeTrialComponent,
    children: [
      { path: '', component: SignupPage1Component, outlet: 'signup'},
      { path: 'page1', component: SignupPage1Component, outlet: 'signup'},
      { path: 'page2', component: SignupPage2Component, outlet: 'signup'}
    ]
  },
  { path: 'welcome', component: WelcomePageComponent }
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
    CommonQuestionPageComponent,
    SignupPage1Component,
    SignupPage2Component,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
