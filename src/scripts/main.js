import DataSource from "./datasource";
import $ from "jquery";
import moment from "moment";

const main = () => {
  const baseUrl = "https://kitsu.io/api/edge";

  const getTrendingManga = async () => {
    try {
      const response = await fetch(`${baseUrl}/trending/manga`);
      const responseJson = await response.json();
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderAllBooks(responseJson.data);
        console.log(responseJson);
      }
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const displayTime = () => {
    moment.locale("en");
    $(".time").text(moment().format("LTS"));
    $(".date").text(moment().format("l"));
  };

  const updateTime = () => {
    displayTime();
    setTimeout(updateTime, 1000);
  };

  const searchElement = document.querySelector("search-bar");
  const mangaListElement = document.querySelector("#searchlist");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchManga(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    mangaListElement.innerHTML = "";
    results.forEach((manga) => {
      const { canonicalTitle, posterImage, serialization } = manga.attributes;
      const mangaElement = document.createElement("div");
      mangaElement.setAttribute("class", "col-sm-3 g-4");

      mangaElement.innerHTML = `
            
                <div class="card">
                    <img class="card-img-top" src=${posterImage.small} alt="" >
                    <div class="card-body rounded-bottom bg-info p-2 ">
                        <div class="title text-center" >
                            <h5 style="margin-bottom: 0;">${canonicalTitle}</h5>
                        </div>
                        <div class="text-center author">
                            <p style="margin-bottom: 0;">${serialization}</p>
                        </div>
                    </div>
                </div>
                `;

      mangaListElement.appendChild(mangaElement);
    });
  };

  const fallbackResult = (message) => {
    mangaListElement.innerHTML = "";
    mangaListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  };

  searchElement.clickEvent = onButtonSearchClicked;

  const renderAllBooks = (books) => {
    const listBookElement = document.querySelector("#listBook");
    listBookElement.innerHTML = "";

    books.forEach((book) => {
      listBookElement.innerHTML += `
            <div class="col-sm-3 g-4">
                <div class="card">
                    <img class="card-img-top" src=${
                      book.attributes.posterImage.small
                    } alt="" >
                        <div class="card-body rounded-bottom bg-info p-2">
                            <div class="title text-center" >
                                <h5 style="margin-bottom: 0;">${
                                  book.attributes.canonicalTitle
                                }</h5>
                            </div>
                            <div class="text-center">
                                <p style="margin-bottom: 0;">&#9733; ${Math.round(
                                  book.attributes.averageRating
                                )}</p>
                            </div>
                            <div class="desc text-center">
                                <p class="text-uppercase" style="margin-bottom: 0;">${
                                  book.attributes.mangaType
                                }</p>
                            </div>
                        </div>
                </div>
            </div>
            `;
    });
  };

  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };

  document.addEventListener("DOMContentLoaded", () => {
    getTrendingManga();
    updateTime();
  });
};

export default main;
