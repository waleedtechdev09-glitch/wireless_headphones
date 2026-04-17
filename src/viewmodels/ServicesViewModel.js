import serviceData from "../models/ServiceData";

export class ServicesViewModel {
  constructor() {
    this.data = serviceData;
  }

  getServices() {
    return this.data;
  }
}
