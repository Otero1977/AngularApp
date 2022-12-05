import { PortfolioService } from './../../servicios/portfolio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formacademica',
  templateUrl: './formacademica.component.html',
  styleUrls: ['./formacademica.component.css']
})
export class FormacademicaComponent implements OnInit {
educationList: any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.educationList = data.educacion;
  })
}
}
