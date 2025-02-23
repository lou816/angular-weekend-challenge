import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ConfiguratorService } from '../configurator.service';

export const step2Guard: CanActivateFn = (route, state) => {
  if (inject(ConfiguratorService).currentColor() === undefined || inject(ConfiguratorService).currentCar() === undefined) {
    return false
  }
  return true;
};
