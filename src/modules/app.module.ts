import { ButtonModule } from "./button.module";
import { DropdownModule } from "./dropdown.module";
import { EditorModule } from "./editor.module";
import { InputModule } from "./input.module";
import { TextAreaModule } from "./textarea.module";
import { ToolbarModule } from "./toolbar.module";

export class AppModule {
  protected id: string;
  protected container: HTMLElement;
  protected textEditor: EditorModule;
  protected toolbar: ToolbarModule;
  protected button: ButtonModule;
  protected input: InputModule;
  protected textArea: TextAreaModule;

  public constructor(id: string, value: string = "") {
    this.id = id;
    let element = document.getElementById(id);
    if (!element) throw new Error("Cannot find id " + id);
    this.container = element;
    this.button = new ButtonModule();
    this.input = new InputModule();
    this.textArea = new TextAreaModule();
    this.textEditor = new EditorModule(this.container);
    this.toolbar = new ToolbarModule(this.textEditor.getEditorElement());
    this.createToolbarWrapper();
    this.createToolbarItems();
    this.textArea.createTextArea({
      id: this.id + "_text_area",
      defaultValue: value,
      wrapper: this.textEditor.getEditorElement(),
    });
  }

  protected createToolbarWrapper() {
    this.toolbar.createToolbarWrapper("actions");
    this.toolbar.createToolbarWrapper("fontFamily");
    this.toolbar.createToolbarWrapper("fontSize");
    this.toolbar.createToolbarWrapper("fontStyle");
    this.toolbar.createToolbarWrapper("attachment");
    this.toolbar.createToolbarWrapper("alignment");
  }

  protected createToolbarItems() {
    // Undo
    this.button.createButton({
      id: "undo-button",
      icon: "bi bi-arrow-counterclockwise",
      wrapper: this.toolbar.getToolbarWrapper("actions")?.element,
    });

    // Redo
    this.button.createButton({
      id: "redo-button",
      icon: "bi bi-arrow-clockwise",
      wrapper: this.toolbar.getToolbarWrapper("actions")?.element,
    });

    // Print
    this.button.createButton({
      id: "print-button",
      icon: "bi bi-printer",
      wrapper: this.toolbar.getToolbarWrapper("actions")?.element,
    });

    // Zoom
    new DropdownModule({
      id: "zoom-dropdown",
      defaultValue: "100",
      wrapper: this.toolbar.getToolbarWrapper("actions")?.element,
      options: [
        {
          label: "100%",
          value: "100",
        },
        {
          label: "200%",
          value: "200",
        },
      ],
    });

    // Style
    new DropdownModule({
      id: "style-dropdown",
      defaultValue: "1",
      wrapper: this.toolbar.getToolbarWrapper("fontFamily")?.element,
      options: [
        {
          label: "Normal",
          value: "1",
        },
        {
          label: "Heading 1",
          value: "2",
        },
      ],
    });

    // Font Family
    new DropdownModule({
      id: "font-family-dropdown",
      defaultValue: "1",
      wrapper: this.toolbar.getToolbarWrapper("fontFamily")?.element,
      options: [
        {
          label: "Arial",
          value: "1",
        },
        {
          label: "Roboto",
          value: "2",
        },
      ],
    });

    // Decrease font size
    this.button.createButton({
      id: "decrease-font-size-button",
      icon: "bi bi-dash",
      wrapper: this.toolbar.getToolbarWrapper("fontSize")?.element,
    });

    // Font size input
    this.input.createInput({
      id: "font-size-input",
      defaultValue: "12",
      wrapper: this.toolbar.getToolbarWrapper("fontSize")?.element,
    });

    // Increase font size
    this.button.createButton({
      id: "increase-font-size-button",
      icon: "bi bi-plus",
      wrapper: this.toolbar.getToolbarWrapper("fontSize")?.element,
    });

    // Bold
    this.button.createButton({
      id: "bold-button",
      icon: "bi bi-type-bold",
      wrapper: this.toolbar.getToolbarWrapper("fontStyle")?.element,
    });

    // Italic
    this.button.createButton({
      id: "italic-button",
      icon: "bi bi-type-italic",
      wrapper: this.toolbar.getToolbarWrapper("fontStyle")?.element,
    });

    // Underline
    this.button.createButton({
      id: "underline-button",
      icon: "bi bi-type-underline",
      wrapper: this.toolbar.getToolbarWrapper("fontStyle")?.element,
    });

    // Color
    this.button.createButton({
      id: "color-button",
      icon: "bi bi-c-square",
      wrapper: this.toolbar.getToolbarWrapper("fontStyle")?.element,
    });

    // Highlight
    this.button.createButton({
      id: "highlight-button",
      icon: "bi bi-brush",
      wrapper: this.toolbar.getToolbarWrapper("fontStyle")?.element,
    });

    // Link
    this.button.createButton({
      id: "link-button",
      icon: "bi bi-link",
      wrapper: this.toolbar.getToolbarWrapper("attachment")?.element,
    });

    // Image
    this.button.createButton({
      id: "image-button",
      icon: "bi bi-card-image",
      wrapper: this.toolbar.getToolbarWrapper("attachment")?.element,
    });

    // Table
    this.button.createButton({
      id: "table-button",
      icon: "bi bi-table",
      wrapper: this.toolbar.getToolbarWrapper("attachment")?.element,
    });

    // Emoji
    this.button.createButton({
      id: "emoji-button",
      icon: "bi bi-emoji-smile",
      wrapper: this.toolbar.getToolbarWrapper("attachment")?.element,
    });

    // Align
    this.button.createButton({
      id: "align-button",
      icon: "bi bi-justify",
      wrapper: this.toolbar.getToolbarWrapper("alignment")?.element,
    });

    // Line spacing
    this.button.createButton({
      id: "line-spacing-button",
      icon: "bi bi-distribute-vertical",
      wrapper: this.toolbar.getToolbarWrapper("alignment")?.element,
    });

    // Add check list
    this.button.createButton({
      id: "add-check-list-button",
      icon: "bi bi-list-check",
      wrapper: this.toolbar.getToolbarWrapper("alignment")?.element,
    });

    // Add bullet list
    this.button.createButton({
      id: "add-bullet-list-button",
      icon: "bi bi-list-task",
      wrapper: this.toolbar.getToolbarWrapper("alignment")?.element,
    });

    // Add number list
    this.button.createButton({
      id: "add-number-list-button",
      icon: "bi bi-list-ol",
      wrapper: this.toolbar.getToolbarWrapper("alignment")?.element,
    });

    // Outdent
    this.button.createButton({
      id: "outdent-button",
      icon: "bi bi-text-indent-right",
      wrapper: this.toolbar.getToolbarWrapper("alignment")?.element,
    });

    // Indent
    this.button.createButton({
      id: "indent-button",
      icon: "bi bi-text-indent-left",
      wrapper: this.toolbar.getToolbarWrapper("alignment")?.element,
    });
  }
}
