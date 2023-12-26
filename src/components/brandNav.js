class BrandNav extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar navbar-dark bg-info">
        <h1 class="navbar-brand ms-3 mb-0 align-items-center fw-bold">Top Comics</h1>
    </nav>
    <div class="container mt-3 d-flex justify-content-end align-items-center text-center">
        <span class="border border-warning rounded p-2 mx-2 time"></span>
        <span class="border border-warning rounded p-2 date"></span>
    </div>
        `;
  }
}

customElements.define("brand-nav", BrandNav);
