import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public languageDirection = 'ltr';

  constructor(private translate: TranslateService) {
    // this.translate.setDefaultLang("he");
    // this.translate.use("he");

    if (['he', 'arab'].includes(this.translate.currentLang)) {
      this.translate.setDefaultLang("he");
      this.translate.use("he");
      // this.languageDirection = 'rtl';
    }
  }

}
