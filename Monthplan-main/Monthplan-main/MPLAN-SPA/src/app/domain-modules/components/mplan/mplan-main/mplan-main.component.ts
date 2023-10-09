import { Component,OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '../services/form.service';
import { MplanDictionaryService } from '../services/mplan-dictionary.service';
@Component({
  selector: 'app-mplan-main',
  templateUrl: './mplan-main.component.html',
  styleUrls: ['./mplan-main.component.scss']
})
export class MplanMainComponent {
  @ViewChild('tabset', { static: false }) public staticTabs: TabsetComponent;


  constructor(
    public form: FormService,
    private readonly route: ActivatedRoute,
    private title : Title,
    public dictionary : MplanDictionaryService,
  ) { }

  public ngOnInit(): void {
    this.title.setTitle('MPLAN');

  }
}
