export class TextAreaModule {
  public createTextArea(configs: TextAreaType) {
    let div = document.createElement("div");
    div.classList.add("editor-text-area");
    div.id = configs.id;
    div.setAttribute("contenteditable", "");
    div.innerHTML = configs.defaultValue;
    if (configs.wrapper) {
      configs.wrapper.appendChild(div);
    }
  }
}

export type TextAreaType = {
  id: string;
  defaultValue: string;
  wrapper?: HTMLElement | Element;
};
