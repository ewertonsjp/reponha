import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { SchedulePage } from '../schedule/schedule';
import { FreeWorktimePage } from '../free-worktime/free-worktime';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = SchedulePage;
  tab2Root = FreeWorktimePage;
  tab3Root = ContactPage;

  constructor() {

  }
}
