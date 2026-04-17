import Data from "../models/HeadphonesData";

export class HeroViewModel {
  constructor() {
    this.ActiveData = Data[0];
    this.Data = Data;
  }

  getActiveData() {
    return this.ActiveData;
  }

  getAllData() {
    return this.Data;
  }

  setActiveData(data, updateState) {
    updateState(data);
    this.ActiveData = data;
  }
}
