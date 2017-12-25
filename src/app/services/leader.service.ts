import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leaders';
import { Leader } from '../shared/leader';

@Injectable()
export class LeaderService {
	getFeaturedLeader(): Leader {
    return LEADERS.filter((leader) => leader.featured)[3];
  }
  constructor() { }

}
