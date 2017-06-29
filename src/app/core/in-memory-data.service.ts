import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 1, name: 'Spider-Man' },
      { id: 2, name: 'Captain Marvel' },
      { id: 3, name: 'Hulk' },
      { id: 4, name: 'Thor' },
      { id: 5, name: 'Iron Man' },
      { id: 6, name: 'Luke Cage' },
      { id: 7, name: 'Black Widow' },
      { id: 8, name: 'Daredevil' },
      { id: 9, name: 'Captain America' },
      { id: 10, name: 'Wolverine' },
    ];
    let villains = [
      { id: 1, name: 'Magneto' },
      { id: 2, name: 'Loki' },
      { id: 3, name: 'Venom' },
      { id: 4, name: 'Dr. Doom' },
      { id: 5, name: 'Carnage' },
      { id: 6, name: 'Green Goblin' },
      { id: 7, name: 'Ultron' },
      { id: 8, name: 'Thanos' },
      { id: 9, name: 'Galactus' },
      { id: 10, name: 'Deadpool' },
    ];
    let users = [
      { id: 1, email: 'hero@example.com', password: 'password' },
      { id: 2, email: 'villan@example.com', password: 'password' },
    ];
    return { heroes, villains, users };
  }
}
