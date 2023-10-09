import { Component, OnDestroy,OnInit } from '@angular/core';
import { NavigationStart,Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Languages } from 'src/app/translate/languages.enum';
import { environment } from 'src/environments/environment';
import { SiteMapNode, siteMap } from 'src/core/navigation';
import { CountryFormComponent } from './domain-modules/components/mplan/mplan-main/components/country-form/country-form.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
  public menu: SiteMapNode[];
  public toggle = false;
  public disablePointers = false;
  private route$: Subscription;
  public showHeader = true;
  public cargoUrl: string = environment.cargoUrl();

  constructor(private router: Router,private translateService: TranslateService){}

  public ngOnInit(): void {
    this.menu= siteMap;
    this.route$= this.router.events.subscribe((val) => {
      if(val instanceof NavigationStart) {
        this.disablePointers = true;
        setTimeout(() => {
          this.disablePointers = false;
        }, 100);
      }
    });
  }
  public ngOnDestroy(): void {
    this.route$.unsubscribe();
  }

  public isActiveLink(item: SiteMapNode): boolean{
    if(item.children) {
      for( const child of  item.children) {
        if(this.router.url.includes(child.routerLink)) {
          return true;
        }
        if(child.children){
          return this.isActiveLink(child);
        }
      }
      return false;
    }
    return false;
  }
  

public changeLang(lang: Languages): void {
    this.translateService.use(lang);
}

public checkLang(lang: Languages): boolean {
    return this.translateService.currentLang === lang;
}


}
