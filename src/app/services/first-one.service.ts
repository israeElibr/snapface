import { Injectable } from '@angular/core';
import { FirstOne } from '../models/first-one.model';

@Injectable({
  providedIn: 'root',
})
export class FirstOneService {
  Objets: FirstOne[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 0,
    },
    {
      id: 2,
      title: 'Archibald',
      description: 'azer lo !',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'oujda',
    },
    {
      id: 3,
      title: 'Archibfefezfeald',
      description: 'azzdfffffff !',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Nador',
    },
    {
      id: 4,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 0,
    },
  ];
  getAllFaceSnaps(): FirstOne[] {
    return this.Objets;
  }
  firstsById(firstOneId: number): void{
    const firstobj = this.Objets.find(object => object.id === firstOneId);
    if(firstobj){
      firstobj.snaps++;
    }else {
      throw new Error('OBJECT NOT FOUND !!')
    }
  }
}
