import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leaders';
import { Leader } from '../shared/leader';

@Injectable()
export class LeaderService {
	getFeaturedLeader(): Promise<Leader> {
    return new Promise (resolve=> { setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]),2000);});
  }
  constructor() { }

}
