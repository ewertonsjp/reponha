import { Component } from '@angular/core';

import { SchedulePage } from '../schedule/schedule';
import { FreeWorktimePage } from '../free-worktime/free-worktime';
import { SelfSchedulePage } from '../self-schedule/self-schedule';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = SchedulePage;
  tab2Root = FreeWorktimePage;
  tab3Root = SelfSchedulePage;

  constructor() {

  }
}
