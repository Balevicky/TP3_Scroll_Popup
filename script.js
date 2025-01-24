// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 300) {
    navbar.style.height = "40px";
  } else {
    navbar.style.height = "90px";
  }

  if (window.scrollY > 400) {
    imgImprovise.style.opacity = "1";
    imgImprovise.style.transform = "translateX(0px)";
  } else {
    imgImprovise.style.opacity = "0";
    imgImprovise.style.transform = "translateX(-200px)";
  }

  // console.log(window.innerHeight);

  if (!document.getElementById("popup")) {
  } else {
    if (window.scrollY > 1200) {
      popup.style.opacity = "1";
      popup.style.transform = "translateX(0px)";
    }
  }
});
// ============ fermer le pop
window.addEventListener("click", () => {
  popup.remove();
});
