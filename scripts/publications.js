import articles from './articles.js';
import Splide from "@splidejs/splide";
import { Grid } from '@splidejs/splide-extension-grid';
document.addEventListener("DOMContentLoaded", function() {
    var splide = new Splide(".splide", {
        type: "loop",
        perPage: 3,
        perMove: 1,
        grid: {
            cols: 1,
            rows: 2,
            gap: {
                row: 30,
                col: 30,
            },
            padding: 16
        },
        breakpoints: {
            1279: {
                arrows: false,
                type: "loop",
                perPage: 2,
                perMove: 1,
                grid: {
                    cols: 1,
                    rows: 2,
                    gap: {
                        row: 30,
                        col: 30,
                    },
                    padding: 16
                },
            },
            767: {
                perPage: 1,
                arrows: false,
                type: "loop",
                padding: 16,
                gap: 3,
                grid: false
            },
            rewind: true,
        }
    });
    splide.mount({ Grid });
});

const templateElement = document.querySelector(".template").content;

articles.forEach((item) => {
    const article = templateElement.cloneNode(true);
    article.querySelector(".publications__img").src = item.img;
    article.querySelector(".publications__title").textContent = item.title;
    article.querySelector(".publications__authors").textContent = item.authors;
    article.querySelector(".publications__text").textContent = item.text;
    document.querySelector(".splide__list").append(article);
});
