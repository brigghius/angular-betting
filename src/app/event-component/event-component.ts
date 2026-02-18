import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventModel } from '../models/event-model';
import { EventsService } from '../services/events/events-service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-event-component',
  imports: [CommonModule, MatCardModule],
  templateUrl: './event-component.html',
  styleUrl: './event-component.less',
})
export class EventComponent {

  private route = inject(ActivatedRoute);

  evento = signal<EventModel | null>(null);
  constructor(private eventsService: EventsService){
    const idParam = this.route.snapshot.params['id'];
    const id = Number(idParam);
    console.log(id);
    this.eventsService.getEventById(id).subscribe((response) => {
      this.evento.set(response);
    });
  }

}
