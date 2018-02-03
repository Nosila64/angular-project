import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {Personnage} from "./model-data";

@Injectable()
export class DataService {

  private dataToSend = new Subject<Personnage>()

}
