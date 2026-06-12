import { Component, inject, OnInit } from '@angular/core';
import {
  FakeHttpService,
  randomCity,
} from '../../data-access/fake-http.service';
import { CityStore } from '../../data-access/city.store';
import { CardType } from '../../model/card.model';
import { CardComponent } from '../../ui/card/card.component';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  imports: [CardComponent],
})
export class CityCardComponent implements OnInit {
  private http = inject(FakeHttpService);
  private store = inject(CityStore);

  cities = this.store.cities;
  cardType = CardType.CITY;
  imgSrc = 'assets/img/city.png';
  customClass = 'bg-light-blue';

  ngOnInit(): void {
    this.http.fetchCities$.subscribe((s) => this.store.addAll(s));
  }

  protected addNewCity() {
    this.store.addOne(randomCity());
  }

  protected deleteCity(id: number) {
    this.store.deleteOne(id);
  }
}
