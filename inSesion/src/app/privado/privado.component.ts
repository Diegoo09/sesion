import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-privado',
  templateUrl: './privado.component.html',
  styleUrls: ['./privado.component.scss']
})
export class PrivadoComponent implements OnInit {

  constructor(private storage:StorageService) { }

  ngOnInit(): void {

    if(!this.storage.getCurrentUser()){
      window.location.href="/inicio";
    }
  }

  CerrarSession(){
    this.storage.CerrarSession();
 }

}
