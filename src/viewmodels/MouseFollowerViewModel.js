// viewmodels/MouseFollowerViewModel.js
import { MouseFollowerModel } from "../models/MouseFollowerModel";

export class MouseFollowerViewModel {
  constructor(mode = "default") {
    this.settings = MouseFollowerModel[mode] || MouseFollowerModel.default;
  }

  getSettings() {
    return this.settings;
  }
}
