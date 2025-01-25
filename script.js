// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
// =====================================
let playonce = true;
let scrollPosition = 0;

window.addEventListener("scroll", () => {
  // =========Navbar========
  console.log(window.scrollY);
  if (window.scrollY > 300) {
    navbar.style.height = "40px";
  } else {
    navbar.style.height = "90px";
  }
  // =========image========
  scrollPosition =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  console.log(scrollPosition);

  if (scrollPosition > 0.5) {
    imgImprovise.style.opacity = "1";
    imgImprovise.style.transform = "none";
  } else {
    imgImprovise.style.opacity = "0";
    imgImprovise.style.transform = "translateX(-200px)";
  }

  // console.log(window.innerHeight);

  // =========popup========

  if (window.scrollY > 0.9 && playonce) {
    popup.style.opacity = "1";
    popup.style.transform = "translateX(0px)";
    playonce = false;
  }
});
// ============ fermer le popup
closeBtn.addEventListener("click", () => {
  // console.log("test");
  popup.style.opacity = "1";
  popup.style.transform = "translateX(600px)";
 
});
