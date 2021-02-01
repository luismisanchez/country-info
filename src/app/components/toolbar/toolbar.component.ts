import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnDestroy {

  public mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {

    this.mobileQuery = media.matchMedia('(max-width: 1320px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);

  }

  // onSearchCountry(event: Event) {
  //   console.log(event);
  //   this.searchCountry = (<HTMLInputElement>event.target).value;
  // }



  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

}
