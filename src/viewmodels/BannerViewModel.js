// viewmodels/BannerViewModel.js
import { BannerModel } from "../models/BannerModel";

export class BannerViewModel {
  constructor() {
    this.data = BannerModel;
  }

  getBanner() {
    return this.data;
  }
}
