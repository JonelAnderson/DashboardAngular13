import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../../cargar-script.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _cargaScripts:CargarScriptsService) {
    _cargaScripts.carga(["main"]);
   }

  ngOnInit(): void {
  }

}
