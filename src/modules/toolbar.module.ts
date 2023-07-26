export class ToolbarModule {
  protected container: HTMLElement;
  protected element: HTMLElement;
  protected toolbarClassName: string;
  protected toolbarWrapperClassName: string;
  protected toolbarWrappers: ToolbarWrapper[];

  public constructor(container: HTMLElement) {
    this.toolbarWrappers = [];
    this.container = container;
    this.toolbarClassName = "editor-tool-bar";
    this.toolbarWrapperClassName = "editor-tool-bar-wrapper";
    let div = document.createElement("div");
    div.className = this.toolbarClassName;
    this.element = div;
    this.container.appendChild(div);
  }

  public getToolbarElement() {
    return this.element;
  }

  public createToolbarWrapper(name: string) {
    let div = document.createElement("div");
    div.className = this.toolbarWrapperClassName;
    div.setAttribute("data-name", name);
    this.element.appendChild(div);
    this.toolbarWrappers.push({ name: name, element: div });
  }

  public getToolbarWrapper(name: string) {
    return this.toolbarWrappers.find((wrapper) => wrapper.name === name);
  }
}

export type ToolbarWrapper = {
  name: string;
  element: HTMLElement | Element;
};
