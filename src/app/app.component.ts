// src/app/app.component.ts
import { ChangeDetectionStrategy,Component, OnInit } from '@angular/core';
import {NgFor} from '@angular/common';
import { MotosService } from './services/motos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  motos: any[] = [];

  constructor(private motosService: MotosService) {}

  ngOnInit(): void {
    this.motosService.getMotos().subscribe((response) => {
      this.motos = response.listMotos;
    });
  }
}
