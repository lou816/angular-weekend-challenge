import { Component, inject } from '@angular/core';
import { ConfiguratorService } from './configurator.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: "app.component.html",
})
export class AppComponent {
  service = inject(ConfiguratorService);

}
