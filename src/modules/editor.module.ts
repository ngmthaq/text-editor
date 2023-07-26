export class EditorModule {
  protected container: HTMLElement;
  protected element: HTMLElement;
  protected editorClassName: string;

  public constructor(container: HTMLElement) {
    this.container = container;
    this.editorClassName = "text-editor";
    let div = document.createElement("div");
    div.className = this.editorClassName;
    this.element = div;
    this.container.appendChild(div);
  }

  public getEditorElement() {
    return this.element;
  }
}
