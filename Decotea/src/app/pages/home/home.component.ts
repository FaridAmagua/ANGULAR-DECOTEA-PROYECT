import { Component } from '@angular/core';
import { ScriptloaderService } from 'src/app/services/scriptloader.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private _cargarscript:ScriptloaderService){
    _cargarscript.loadScript(['home/gallery']);
  }
}
