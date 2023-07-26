export class ButtonModule {
  public createButton(configs: ButtonType) {
    let btn = document.createElement("button");
    btn.classList.add("editor-button");
    btn.id = configs.id;
    let i = document.createElement("i");
    i.className = configs.icon;
    btn.appendChild(i);
    if (configs.wrapper) {
      configs.wrapper.appendChild(btn);
    }
  }
}

export type ButtonType = {
  id: string;
  icon: string;
  wrapper?: HTMLElement | Element;
};
