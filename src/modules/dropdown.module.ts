export class DropdownModule {
  protected id: string;
  protected options: DropdownModuleOptionType[];
  protected defaultValue: string;
  protected value: string;
  protected container: HTMLElement;
  protected isOpen: boolean;

  public constructor(input: DropdownModuleConstructor) {
    this.id = input.id;
    this.options = input.options;
    this.defaultValue = input.defaultValue;
    this.value = input.defaultValue;
    this.isOpen = false;

    let container = document.createElement("div");
    this.container = container;
    this.container.id = this.id;
    this.createSelectOptionTags();
    this.createSelector();
    this.createOptions();
    input.wrapper?.appendChild(this.container);
  }

  protected getWrapper() {
    let wrapperClass: string = "custom-dropdown";
    let wrapper: Element | null = this.container.querySelector("." + wrapperClass);
    if (wrapper) return wrapper;
    wrapper = document.createElement("div");
    wrapper.classList.add(wrapperClass);
    this.container.appendChild(wrapper);
    return wrapper;
  }

  protected createSelectOptionTags() {
    let selectClass: string = "selector";
    let wrapper = this.getWrapper();
    let selectTag = document.createElement("select");
    wrapper.appendChild(selectTag);
    selectTag.classList.add(selectClass);
    selectTag.style.display = "none";
    this.options.forEach((option) => {
      let optionTag = document.createElement("option");
      selectTag.appendChild(optionTag);
      optionTag.value = option.value;
      optionTag.innerText = option.label;
      if (option.value === this.defaultValue) {
        optionTag.setAttribute("selected", "selected");
      }
    });
  }

  protected createSelector() {
    let selectClass: string = "custom-dropdown-selector";
    let wrapper = this.getWrapper();
    let selectTag = document.createElement("div");
    wrapper.appendChild(selectTag);
    selectTag.classList.add(selectClass);
    let selectedOption = this.options.find((option) => option.value === this.defaultValue);
    if (selectedOption) {
      selectTag.innerText = selectedOption.label;
    }
  }

  protected createOptions() {
    let selectClass: string = "custom-dropdown-options";
    let optionClass: string = "custom-dropdown-options-item";
    let wrapper = this.getWrapper();
    let selectTag = document.createElement("div");
    wrapper.appendChild(selectTag);
    selectTag.classList.add(selectClass);
    this.options.forEach((option) => {
      let optionTag = document.createElement("div");
      selectTag.appendChild(optionTag);
      optionTag.setAttribute("data-value", option.value);
      optionTag.classList.add(optionClass);
      optionTag.innerText = option.label;
      if (option.value === this.defaultValue) {
        optionTag.classList.add("active");
      }
    });
  }

  protected onClickSelector() {
    if (this.isOpen) {
      this.isOpen = false;
    } else {
      this.isOpen = true;
    }
  }
}

export type DropdownModuleConstructor = {
  id: string;
  options: DropdownModuleOptionType[];
  defaultValue: string;
  wrapper?: HTMLElement | Element;
};

export type DropdownModuleOptionType = {
  label: string;
  value: string;
};
