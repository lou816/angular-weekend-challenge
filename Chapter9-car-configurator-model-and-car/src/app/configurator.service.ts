import { inject, Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { CarModel, Color } from './models.type';

@Injectable({
  providedIn: 'root'
})
export class ConfiguratorService {
  selectedModel: WritableSignal<CarModel | null> = signal(null);
  selectedColor: WritableSignal<Color | null> = signal(null);

  private http = inject(HttpClient);
  readonly allModels: Signal<CarModel[]> = toSignal(
    this.http.get<CarModel[]>("models"), { initialValue: [] }
  );

  readonly currentCar = signal<CarModel | undefined>(undefined);
}
