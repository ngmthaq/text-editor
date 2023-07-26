export class DropdownModule {
  protected id: string;
  protected options: DropdownModuleOptionType[];
  protected defaultValue: string;
  protected value: string;
  protected container: HTMLElement;
  protected isOpen: boolean;

  public constructor(configs: DropdownModuleConstructor) {
    this.id = configs.id;
    this.options = configs.options;
    this.defaultValue = configs.defaultValue;
    this.value = configs.defaultValue;
    this.isOpen = false;

    let container = document.createElement("div");
    configs.wrapper?.appendChild(container);
    this.container = container;
    this.container.id = this.id;
    this.createSelectOptionTags();
    this.createSelector();
    this.createOptions();

    window.addEventListener("click", (e: any) => {
      let optionsElement = this.container.querySelector(".custom-dropdown-options");
      let selectorElement = this.container.querySelector(".custom-dropdown-selector");
      if (optionsElement && selectorElement && !container.contains(e.target)) {
        optionsElement.classList.remove("open");
        selectorElement.classList.remove("open");
        this.isOpen = false;
      }
    });
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
    selectTag.addEventListener("click", () => this.onClickSelector());
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
      optionTag.addEventListener("click", (e: any) => {
        this.onClickOption(e.target.getAttribute("data-value"));
      });
      optionTag.setAttribute("data-value", option.value);
      optionTag.classList.add(optionClass);
      optionTag.innerText = option.label;
      if (option.value === this.defaultValue) {
        optionTag.classList.add("active");
      }
    });
  }

  protected onClickSelector() {
    let optionsElement = this.container.querySelector(".custom-dropdown-options");
    let selectorElement = this.container.querySelector(".custom-dropdown-selector");
    if (optionsElement && selectorElement) {
      if (this.isOpen) {
        optionsElement.classList.remove("open");
        selectorElement.classList.remove("open");
        this.isOpen = false;
      } else {
        optionsElement.classList.add("open");
        selectorElement.classList.add("open");
        this.isOpen = true;
      }
    }
  }

  protected onClickOption(value: string) {
    let optionsElement = this.container.querySelector(".custom-dropdown-options");
    let selectorElement = this.container.querySelector(".custom-dropdown-selector");
    let selectElement = this.container.querySelector("select.selector");
    let optionData = this.options.find((opt) => opt.value === value);
    if (selectElement && selectorElement && optionsElement && optionData) {
      this.value = value;
      selectorElement.innerHTML = optionData.label;
      selectElement.querySelectorAll("option").forEach((option) => option.removeAttribute("selected"));
      selectElement.querySelector(`option[value="${value}"]`)?.setAttribute("selected", "selected");
      optionsElement.querySelectorAll(".custom-dropdown-options-item").forEach((item) => item.classList.remove("active"));
      optionsElement.querySelector(`.custom-dropdown-options-item[data-value="${value}"]`)?.classList?.add("active");
      optionsElement.classList.remove("open");
      selectorElement.classList.remove("open");
      this.isOpen = false;
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
