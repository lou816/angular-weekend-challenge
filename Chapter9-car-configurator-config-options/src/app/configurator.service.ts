import { computed, effect, inject, Injectable, signal, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { CarModel, CarOptions, Color, Config } from './models.type';

@Injectable({
  providedIn: 'root'
})
export class ConfiguratorService {

  private http = inject(HttpClient);
  readonly allModels: Signal<CarModel[]> = toSignal(
    this.http.get<CarModel[]>("models"), { initialValue: [] }
  );

  readonly selectableColors = computed(() => this.currentCar()?.colors);

  constructor() {
    effect(() => {
      const car = this.currentCar();
      this.http.get<CarOptions>(`options/${car?.code}`).subscribe(options => {
        this.currentCarOptions.set(options);
      });
    })
  }
  readonly currentCarOptions = signal<CarOptions | undefined>(undefined);
  readonly currentConfig = signal<Config | undefined>(undefined);
  readonly currentColor = signal<Color | undefined>(undefined);
  readonly currentCar = signal<CarModel | undefined>(undefined);
  readonly currentImage = computed(
    () => {
      const car = this.currentCar();
      const color = this.currentColor();
      if (car && color)
        return `https://interstate21.com/tesla-app/images/${car.code}/${color.code}.jpg`
      else return null;
    }
  );

  selectModel(code: CarModel["code"]) {
    const model = this.allModels().find(model => model.code === code);
    this.currentCar.set(model);
    this.currentColor.set(model?.colors[0]);
  }

  selectColor(code: Color["code"]) {
    const color = this.selectableColors()?.find(color => color.code === code);
    this.currentColor.set(color);
  }

  selectConfig(id: Config["id"]) {
    const config = this.currentCarOptions()?.configs.find(config => config.id === id);
    this.currentConfig.set(config);
  }
}
