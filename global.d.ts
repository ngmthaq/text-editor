import { AppModule } from "./src/modules/app.module";

declare global {
  interface Window {
    TextEditor: typeof AppModule;
  }
}
