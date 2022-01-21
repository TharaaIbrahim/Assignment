const figures = document.querySelector(".figures");
const references = document.querySelector(".references");
const related = document.querySelector(".related");
const details = document.querySelector(".details");
const allAsideSections = document.querySelectorAll(
  ".main__aside__content__section"
);
const aside = document.querySelector(".main__aside");
const asideIcons = document.querySelectorAll(".main__aside__nav__list__icons");
const asideContent = document.querySelector(".main__aside__content");
const asideList = document.querySelector(".main__aside__nav__list");
const backNav = document.querySelector(".main__aside__nav__back");
const mainArticle = document.querySelector(".main__article");
const mainNav = document.querySelector(".nav-Container");

function aside_Content(content) {
  if (window.getComputedStyle(asideContent).display == "none") {
    aside.classList.toggle("clicked");
    asideList.classList.toggle("hide-List");
    asideContent.classList.toggle("show-Content");
    backNav.classList.toggle("show-Back");
    mainNav.classList.toggle("hide-Article");
    mainArticle.classList.toggle("hide-Article");

    // backNav.style.display = "block";
    // asideList.style.display = "none";
    // aside.style = "width:100%;top:0rem";
  }

  switch (content) {
    case "figures":
      allAsideSections.forEach((section) => {
        section.style.display = "none";
      });
      asideIcons.forEach((icon) => {
        icon.style.borderBottom = "0px";
      });
      document.querySelector(".fig-Icon").style.borderBottom =
        " 3px solid var(--gray-Color)";
      figures.style.display = "block";
      break;
    case "references":
      allAsideSections.forEach((section) => {
        section.style.display = "none";
      });
      asideIcons.forEach((icon) => {
        icon.style.borderBottom = "0px";
      });
      document.querySelector(".ref-Icon").style.borderBottom =
        " 3px solid var(--gray-Color)";
      references.style.display = "block";
      break;
    case "related":
      allAsideSections.forEach((section) => {
        section.style.display = "none";
      });
      asideIcons.forEach((icon) => {
        icon.style.borderBottom = "0px";
      });
      document.querySelector(".rel-Icon").style.borderBottom =
        " 3px solid var(--gray-Color)";
      related.style.display = "block";
      break;
    case "details":
      allAsideSections.forEach((section) => {
        section.style.display = "none";
      });
      asideIcons.forEach((icon) => {
        icon.style.borderBottom = "0px";
      });
      document.querySelector(".det-Icon").style.borderBottom =
        " 3px solid var(--gray-Color)";
      details.style.display = "block";
      break;
    case "none":
      aside.classList.toggle("clicked");
      asideList.classList.toggle("hide-List");
      asideContent.classList.toggle("show-Content");
      backNav.classList.toggle("show-Back");
      mainNav.classList.toggle("hide-Article");
      mainArticle.classList.toggle("hide-Article");
  }
}

// function hide_aside_Content() {
//   // aside.classList.toggle("clicked");
//   // asideList.classList.toggle("hide-List");
//   // asideContent.classList.toggle("main__aside__content");
//   // backNav.classList.toggle("show-Back");

//   asideContent.style.display = "none";
//   backNav.style.display = "none";
//   asideList.style.display = "block";
//   // document.querySelector(".main__aside").style = "width:none;top:9rem";
// }
