import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ItemsService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get('./assets/items.json')
  }

  getItemById(id: string) {
    return this.http.get('./assets/items.json')
      .map((items:any) => items.filter(
        item => item.id === id)[0] || undefined
      )
  }
}
