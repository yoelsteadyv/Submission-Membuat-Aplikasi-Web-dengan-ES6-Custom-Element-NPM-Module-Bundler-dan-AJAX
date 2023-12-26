class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = `

        <div class="container row g-3 mt-1 justify-content-end">
            <div class="col-auto">
            <h4 class="form-control-plaintext p-0 mt-0">Find Your Fav Comics</h4>
                
            </div>
            <div class="col-auto">
                <input type="text" class="form-control" id="searchElement" placeholder="Title..">
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-info mb-3" id="searchButtonElement">Search</button>
            </div>
        </div>

        `;

    this.querySelector("#searchButtonElement").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

customElements.define("search-bar", SearchBar);
