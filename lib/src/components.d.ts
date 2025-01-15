import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    HzyButton: typeof components.Button;
    HzyIcon: typeof components.Input;
  }
}
export {};