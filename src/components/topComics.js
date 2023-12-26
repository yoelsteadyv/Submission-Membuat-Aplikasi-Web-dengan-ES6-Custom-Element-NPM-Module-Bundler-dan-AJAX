class TopComics extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h1 class="card-title p-3 text-center fw-bold">Top Comics</h1>
        <div  class=" row text-dark mx-2" id="listBook" style="padding-bottom: 80px"></div>
        `;
  }
}

customElements.define("top-comics", TopComics);
