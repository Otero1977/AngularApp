import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { BarnavegacionComponent } from './componentes/barnavegacion/barnavegacion.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { ExplaboralComponent } from './componentes/explaboral/explaboral.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FormacademicaComponent } from './componentes/formacademica/formacademica.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PortfolioService } from './servicios/portfolio.service';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    AcercaComponent,
    BarnavegacionComponent,
    BienvenidaComponent,
    ExplaboralComponent,
    FormacademicaComponent,
    SkillsComponent,
    ProyectosComponent,
    FormacademicaComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#297dd7",
      innerStrokeColor: "#103704",
      animationDuration: 300,
    })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
