import { PortfolioService } from '../../servicios/portfolio.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-explaboral',
  templateUrl: './explaboral.component.html',
  styleUrls: ['./explaboral.component.css']
})
export class ExplaboralComponent implements OnInit {
workList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.workList = data.trabajo;
  })
}
}
