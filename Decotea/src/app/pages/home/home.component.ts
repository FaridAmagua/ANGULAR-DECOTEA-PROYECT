import { Component } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { ScriptloaderService } from 'src/app/services/scriptloader.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  faChevronLeft=faChevronLeft;
  faChevronRight=faChevronRight;
  constructor(private _cargarscript:ScriptloaderService){
    _cargarscript.loadScript(['home/gallery']);
  }
}
