import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EventsService } from './services/events/events-service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { CapitalizePipe } from './pipe/capitalize-pipe';
import { CommonValueService } from './services/common-value-service/common-value-service';
import { NgClass } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadEvents, loadEventsByCategoria, loadEventsBySport } from './root-store/events-store/event-action';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, MatExpansionModule, MatListModule, MatSidenavModule, CapitalizePipe, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  protected readonly title = signal('Angular Betting');

  commonService = inject(CommonValueService);


  sports = signal<any[]>([]);

  constructor(private eventsService: EventsService,
    private store: Store,
    private router: Router
  ) {

    this.eventsService.getAllSports().subscribe(
      response => {
        this.sports.set(response)
        this.caricaSportCategoriaSpecifico('overview', '');
      });
  }

  caricaSportCategoriaSpecifico(sport: string, categoria: string) {
    this.commonService.sport.update(v => v = sport);
    this.commonService.categoria.update(v => v = categoria);
    
    if (sport === 'overview') { 
      this.router.navigateByUrl('overview');
      this.store.dispatch(loadEvents());
    }
    else if(sport !== '' && categoria === '') {
      this.router.navigateByUrl('sport');
      this.store.dispatch(loadEventsBySport({ sport: sport }));
    }
    else if (sport !== '' && categoria !== '') {
      this.router.navigateByUrl('categoria');
      this.store.dispatch(loadEventsByCategoria({ categoria: categoria }));
    }

  }



  currentOpenedItemId = '';

  public handleOpened(item: string): void {
    this.currentOpenedItemId = item;
  }

}
