import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptloaderService {
  constructor() { }
/**
 * loadScritp
 */
 
public loadScript(archivos:string[]) {
  // alert('cargando script');
  for(let archivo of archivos)
    {
    let script = document.createElement("script");
    script.src = "./assets/js/"+archivo+".js";
    let body = document.getElementsByTagName("body")[0];
    body.appendChild(script);
    }
  } 
}

