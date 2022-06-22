import {Component, OnInit, QueryList, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscriber} from 'rxjs';
import {IProperty} from '../../../interfaces/property.interface';
import {CategoryEnum} from '../../../enums/categoryEnum';
import {NextToEnum} from '../../../enums/nexto.num';
import {FLATICON_PATH, ICON_PATH, IMAGE_PATH} from '../../../../../global';
import {PropertyState} from '../../../enums';
import {DayOfTheWeekEnum, IVisit} from '../../../interfaces/visit.interface';
import {KitchenEnum} from '../../../enums/kitchen.enum';
import {CommonAmenitiesEnum, SafetyAmenitiesEnum} from '../../../enums/amenities.enum';
import {FacilitiesEnum} from '../../../enums/facilities.enum';
import {BathEnum} from '../../../enums/bath.enum';

enum PropertyDetailsTabs {
  DETAILS = "DETAILS",
  LOCATION = 'LOCATION',
  ROOMS = 'ROOMS',
  AGREEMENT = 'AGREEMENT'
}

@Component({
  selector: 'mx-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss'],
})
export class PropertyDetailsComponent implements OnInit {


  @ViewChild('player') videoPlayers: QueryList<any>;
  currentPlaying = null;
  public ICON_PATH = ICON_PATH;
  public FLATICON_PATH = FLATICON_PATH;
  public house$: Subscriber<IProperty>
  public propertyDetailsTabs = PropertyDetailsTabs;
  public selectedTab: PropertyDetailsTabs = PropertyDetailsTabs.DETAILS;
  public selectedPhotosOrVideo: string = 'PHOTOS';
  public tabs = Object.keys(PropertyDetailsTabs);
  public nextToList = Object.values(NextToEnum);
  public amenities = Object.values(CommonAmenitiesEnum);
  public kitchenAmenities = Object.values(KitchenEnum);
  public safetyAmenitiesList = Object.values(SafetyAmenitiesEnum);
  public facilitiesList = Object.values(FacilitiesEnum);
  public additionalBath = Object.values(BathEnum);
  public property: IProperty = {
    authorID: 0,
    id: null,
    category: CategoryEnum.Land,
    description: '',
    facilities: [],
    floor: 12,
    priceUp: true,
    priceDown: false,
    geoHash: '',
    isApproved: false,
    lastFloor: false,
    latitude: '',
    longitude: '',
    newConstruction: false,
    open_doors: undefined,
    place: '',
    price: 12220202,
    arnona: 1200,
    updatedAt: new Date(),
    createdAt: new Date(2021),
    state: [PropertyState.Selling, PropertyState.Renting],
    title: '',
    type: undefined,
    images: ['https://picsum.photos/400/200', 'https://picsum.photos/400/200', 'https://picsum.photos/400/200'],
    videoURLs: '',
    bathroom: 3,
    bedroom: 2,
    nextTo: [NextToEnum.Airport, NextToEnum.Train, NextToEnum.Mall, NextToEnum.Subway],
    address: 'Avenue 123, NY',
    square: 231,
    audio: 'file'
  };
  public slideOpts = { // https://swiperjs.com/swiper-api
    initialSlide: 1,
    speed: 400
  };

  public openDoors: IVisit[] = [{
    timeFrom: '18:00',
    date: new Date(),
    day: DayOfTheWeekEnum.Monday
  }, {
    timeFrom: '11:00',
    date: new Date(),
    day: DayOfTheWeekEnum.Wednesday
  }, {
    timeFrom: '9:00',
    date: new Date(),
    day: DayOfTheWeekEnum.Friday
  }, {
    timeFrom: '20:00',
    date: new Date(),
    day: DayOfTheWeekEnum.Sunday
  }, {
    timeFrom: '13:30',
    date: new Date(),
    day: DayOfTheWeekEnum.Wednesday
  }];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private service: PropertyService
  ) {
  }

  ngOnInit() {
    const houseId = this.route.snapshot.paramMap.get('id');
    // this.house$ = this.service.getHouse(houseId);
  }

  public detailsTabChanged($event) {
    this.selectedTab = PropertyDetailsTabs[$event.detail.value];
    switch ($event.detail.value) {
      case PropertyDetailsTabs.DETAILS:
        break;
      case PropertyDetailsTabs.LOCATION:
        break;
      case PropertyDetailsTabs.AGREEMENT:
        break;
    }
  }

  public openFullScreen(el) {
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.webkitEnterFullscreen) {
      el.webkitEnterFullscreen();
      el.enterFullscreen();
    }
  }

  public didScroll() {
    if (this.currentPlaying && this.isElementInViewport(this.currentPlaying)) {
      return;
    } else if (this.currentPlaying && !this.isElementInViewport(this.currentPlaying)) {
      // Item is out of view , pause it
      this.currentPlaying.pause();
      this.currentPlaying = null;
    }


    this.videoPlayers?.forEach(player => {

      if (this.currentPlaying) {
        return;
      }

      const nativeElement = player.nativeElement;
      const inView = this.isElementInViewport(nativeElement);

      if (inView) {
        this.currentPlaying = nativeElement;
        this.currentPlaying.muted = true;
        this.currentPlaying.play();
      }
    });
  }

  public enrollOpenEvent($event) {

  }

  public isElementInViewport(el): boolean {
    const rect = el.getBuildingClientRect();
    return (rect.top >= 0 && rect.left >= 0
      && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      && rect.right <= (window.innerWidth || document.documentElement.clientWidth))
  }

  public favoriteClicked() {

  }

  public shareClicked() {

  }

}
