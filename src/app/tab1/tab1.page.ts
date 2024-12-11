import { Component, signal } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  /* Importe los componentes de la UI */
  IonFab, IonFabButton, IonIcon, IonCard,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

/* Importe la función y el ícono */
import { addIcons } from 'ionicons';
import { cloudUploadOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,
    /* Registre los componentes de la UI */
    IonFab, IonFabButton, IonIcon, IonCard,
  ],
})
export class Tab1Page {

  imageReady = signal(false)
  imageUrl = signal("")

  constructor() {
    /* Registre el ícono */
    addIcons({ cloudUploadOutline });
  }

  /* El método onSubmit para enviar los datos del formulario mediante el servicio */
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      const reader = new FileReader();

      // Convertir el archivo a una URL base64 para mostrarlo en el html
      reader.onload = () => {
        this.imageUrl.set(reader.result as string)
        this.imageReady.set(true)
    };

      reader.readAsDataURL(file); // Leer el archivo como base64
    }
  }


}
