class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="text-center footer bg-dark p-3 m-0 text-light">
            <p class="align-items-center m-0">Copyright 2023 Top Comics by Yoel Steady Valentino
            </p>
        </div>
          `;
  }
}

customElements.define("brand-footer", Footer);
