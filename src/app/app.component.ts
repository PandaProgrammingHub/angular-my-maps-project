import { Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  mapForm: FormGroup;
  zoom: number = 8;
  lat: number = 19.1173519;
  lng: number = 72.88686489999998;
  draggable: boolean = true;

  constructor(private _formBuilder: FormBuilder) {
    this.mapForm = this._formBuilder.group({
    'search':[''],
    'type':[''],
    'latitude':this.lat,
    'longitude':this.lng
    });
  }


  clickedMarker() {
    console.log('clicked the marker:')
  }

  mapClicked($event: any) {
  this.lat = $event.coords.lat;
  this.lng = $event.coords.lng;
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
      });
      console.log(this.markers);
    }

  markerDragEnd($event: MouseEvent) {
    console.log('dragEnd', $event);
  }

  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: true
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ]
}
// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
