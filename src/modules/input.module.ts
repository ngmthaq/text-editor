export class InputModule {
  public createInput(configs: InputType) {
    let input = document.createElement("input");
    input.type = "number";
    input.classList.add("editor-input");
    input.id = configs.id;
    input.value = configs.defaultValue;
    if (configs.wrapper) {
      configs.wrapper.appendChild(input);
    }
  }
}

export type InputType = {
  id: string;
  defaultValue: string;
  wrapper?: HTMLElement | Element;
};
