import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  items:any;
  item:any = {
    message:''
  }

  constructor(
    private conexion:ConexionService,
    private servicio:ConexionService,
    public authService: AuthService
  ) {
    this.conexion.publications().subscribe(item => {
      this.items = item;
      console.log(this.items);
    })
   }

  ngOnInit() {
  }
  agregar(){
    this.servicio.addPublications(this.item);
    // this.item.cafe = '';
  }

  eliminar(item){
    this.conexion.delatePublications(item);
  }


}
