// viewmodels/AnimationViewModel.js
import { AnimationModel } from "../models/AnimationModel";

export class AnimationViewModel {
  static fadeUp(delay = 0) {
    return AnimationModel.fadeUp(delay);
  }
}
