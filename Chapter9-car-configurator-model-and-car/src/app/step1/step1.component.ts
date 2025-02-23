import { ConfiguratorService } from './../configurator.service';
import { Component, effect, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss'
})
export class Step1Component {
  configuratorService = inject(ConfiguratorService);
  allModels = this.configuratorService.allModels();
  selectedModelIndex = signal(-1)
  selectedColorIndex = signal(0)

  constructor() {
    effect(() => {
      const selectedModel = this.allModels[this.selectedModelIndex()];
      this.configuratorService.selectedModel.set(selectedModel)
      this.configuratorService.selectedColor.set(selectedModel.colors[this.selectedColorIndex()])
    })
  }
}
