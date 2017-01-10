import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';


@Component({
  selector: 'my-app',
  template: `
  <p align="center"><img src="/logo/logo.jpg" width="150" height="150"></p>
  <h1 align="center">{{name}}</h1>
  
<ul id="nav">
            <li><a href="#">Pacientes</a>
                <ul>
                    <li><a href="#">Consultar Paciente</a></li>
                    <li><a href="#">Añadir Paciente</a></li>
                    <li><a href="#">Modificar Paciente</a></li>
                </ul>
            </li>
            <li><a href="#">Citas</a>
                <ul>
                    <li><a href="#">Agendar Cita</a></li>
                    <li><a href="#">Modificar Cita</a></li>
                    <li><a href="#">Calendario</a></li>
                </ul>
            </li>
        </ul>
        <script src="/menu/js/script.js"></script>

  `
})
export class AppComponent  { name = 'Mis Dientes Limpios S.A.S'; }
