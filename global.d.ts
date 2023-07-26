import { DropdownModule } from "./src/modules/dropdown.module";
import { EditorModule } from "./src/modules/editor.module";
import { AppModule } from "./src/modules/app.module";

type TextEditorType = {
  App: typeof AppModule;
  Dropdown: typeof DropdownModule;
  Editor: typeof EditorModule;
};

declare global {
  interface Window {
    TextEditor: TextEditorType;
  }
}
