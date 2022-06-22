import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

export let languageDirection = 'ltr';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public langDir = languageDirection;

  constructor(private translate: TranslateService) {
    // this.translate.setDefaultLang("he");
    // this.translate.use("he");
    // languageDirection = 'rtl';
    if (['he', 'arab'].includes(this.translate.currentLang)) {
      this.translate.setDefaultLang("he");
      this.translate.use("he");
      languageDirection = 'rtl';

    }
  }

}
