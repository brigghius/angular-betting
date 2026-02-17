import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { EventsService } from './services/events/events-service';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatExpansionModule, MatListModule, MatSidenavModule],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  protected readonly title = signal('Angular Betting');


  sports = signal<any[]>([]);

  constructor(private eventsService: EventsService) {
    this.eventsService.getAllSports().subscribe(
      response => {
        this.sports.set(response)
        console.log(this.sports());
      });

  }
}
