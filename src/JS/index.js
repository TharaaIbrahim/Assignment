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

function icons_styling(iconClass) {
  document.querySelector(iconClass).style.borderBottom =
    " 3px solid var(--gray-Color)";
}

function asideSmall_toggle() {
  /*toggle between show and hide aside for small devices*/
  aside.classList.toggle("clicked");
  asideList.classList.toggle("hide-List");
  asideContent.classList.toggle("show-Content");
  backNav.classList.toggle("show-Back");
  mainNav.classList.toggle("hide-Article");
  mainArticle.classList.toggle("hide-Article");
}

function aside_Content(content) {
  //onClick on any asideNav icons
  if (
    //Just For Small Devices to show aside content
    window.getComputedStyle(asideContent).display == "none"
  ) {
    asideSmall_toggle();
  }
  /*Hide all conetnet sections and icons underline*/
  allAsideSections.forEach((section) => {
    section.style.display = "none";
  });
  asideIcons.forEach((icon) => {
    icon.style.borderBottom = "0px";
  });

  switch (content /*show the content according to clicked icon*/) {
    case "figures":
      icons_styling(".fig-Icon");
      figures.style.display = "block";
      break;
    case "references":
      icons_styling(".ref-Icon");
      references.style.display = "block";
      break;
    case "related":
      icons_styling(".rel-Icon");
      related.style.display = "block";
      break;
    case "details":
      icons_styling(".det-Icon");
      details.style.display = "block";
      break;
  }
}
