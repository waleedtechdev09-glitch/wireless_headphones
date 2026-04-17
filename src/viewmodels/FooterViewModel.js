// viewmodels/FooterViewModel.js
import { FooterModel } from "../models/FooterModel";

export class FooterViewModel {
  constructor() {
    this.data = FooterModel;
  }

  getFooterData() {
    return this.data;
  }
}
