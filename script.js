// ================== CONFIGURATION ==================
// Modifie la date de sortie ici si besoin
const DATE_SORTIE = new Date(2026, 10, 5); // 5 novembre 2026

// ================== CONTENU DES CASES ==================
// Modifie librement ! Chaque case a : date, catégorie, titre, contenu, icône, défi
// Catégories possibles : Blague, Recette, Boisson, Astuce, Lore, Citation, Story Time, Discord, PTSD, Animaux, PNJ, Paysage, Mascotte
const CASES = [
  {
    date: new Date(2026, 8, 27),
    icone: "🎁",
    categorie: "Astuce",
    titre: "Case bonus",
    contenu:
      "Tu as trouvé la case bonus de lancement ! Il n'y a rien dedans... enfin, si : la preuve que le calendrier fonctionne.\n\nAstuce du jour : reviens chaque jour, et ouvre ta case en premier pour frimer dans le discord. 🎁",
    defi: "Partage le calendrier à un ami qui devrait jouer avec nous. Recruter, c'est déjà servir l'Alliance !",
  },
  {
    date: new Date(2026, 8, 28),
    icone: "🍻",
    categorie: "Boisson",
    titre: "Bière de Forgefer",
    contenu:
      "La recette officieuse des nains :\n\n• 50 cl de bière ambrée\n• 1 cuillère de miel\n• 1 pincée de cannelle\n• Une larme de nostalgie pour Khaz Modan\n\nMélanger, lever son pichet et crier : « Pour l'Alliance ! »",
    defi: "Ce soir à 21h, chacun lève son verre où qu'il soit et poste la photo sur le Discord ! La photo la plus originale gagne 1 PO.",
  },
  {
    date: new Date(2026, 8, 29),
    icone: "🕯️",
    categorie: "Blague",
    titre: "Question du jour",
    contenu:
      "Combien de joueurs faut-il pour changer une bougie sur WoW Forever ?\n\nAucune idée, on est toujours dans la file d'attente. 🕯️",
    defi: "Poste ta meilleure blague WoW. La meilleure gagne 1 PO.",
  },
  {
    date: new Date(2026, 8, 30),
    icone: "🍲",
    categorie: "Recette",
    titre: "Salade de Kaldorei",
    contenu:
      "La salade de Darnassus :\n\n• Fraises de Teldrassil\n• Laitue\n• Une poignée de myrtilles\n• Des dés de bleu de Darnassus\n• Jeunes pousses d'épinards\n• Noix torréfiées du bosquet\n\nVinaigrette : miel, citron, huile, une larme de jus de baies de lune. Se déguste sous les étoiles. 🌙",
    defi: "Poste une photo de ton vrai dîner de ce soir. Le plat qui ressemble le plus à la salade de Darnassus gagne 1 PO.",
  },
  {
    date: new Date(2026, 9, 1),
    icone: "🪓",
    categorie: "Story Time",
    titre: "La mort de Grom Hellscream",
    contenu:
      "Les orcs traînaient depuis des années la malédiction du sang de Mannoroth, le seigneur des abîmes.\n\nGrom Hellscream a décidé que ça suffisait. Aux côtés de Thrall, il est allé l'affronter. Une charge, un coup de hache, et l'armure du démon a éclaté.\n\nL'explosion a blessé Grom à mort. En mourant, il a souri : « Je me suis libéré. » Thrall a répondu : «Non vieux camarade, vous nous avez tous libérés »\n\nCe jour-là, la malédiction du sang est morte. Grom aussi. 🪓",
    defi: "Chacun raconte sa mort la plus épique dans WoW. La plus épique gagne 1 PO.",
  },
  {
    date: new Date(2026, 9, 2),
    icone: "🍷",
    categorie: "Boisson",
    titre: "Vin de la Nuit",
    contenu:
      "La boisson des elfes de la nuit :\n\n• 20 cl de jus de raisin noir\n• 5 cl de citron vert\n• Quelques myrtilles\n• Glaçons « éternels » (2h au congélateur, ça compte)\n\nÀ déguster à 2h du matin, comme tous les vrais Kaldorei.",
    defi: "Poste une photo de ton ciel ce soir. Le plus beau gagne 1 PO.",
  },
  {
    date: new Date(2026, 9, 3),
    icone: "🪶",
    categorie: "Citation",
    titre: "Plume",
    contenu:
      "Avec toutes les plumes dans le cul que je lui ai mis il pourra faire la roue comme un paon !\n\nPauline le vendredi 4 Juillet 2025 à 22h21",
    defi: "Trouve une plume et fait une photo avec, la plus originale gagne 1 PO.",
  },
  {
    date: new Date(2026, 9, 4),
    icone: "📜",
    categorie: "Discord",
    titre: "Tard l'époque",
    contenu: "Wow c'est caca.\n\nNathan",
    defi: "A quand date le premier message posté dans le canal discord wow ? Le premier à répondre gagnera 1 PO.",
  },
  {
    date: new Date(2026, 9, 5),
    icone: "🧁",
    categorie: "Recette",
    titre: "Petits pains de Lumière",
    contenu:
      "Les péchés mignons des prêtres :\n\n• 250 g de farine\n• 120 g de beurre fondu\n• 100 g de sucre\n• 1 œuf, levure\n\nFormer des petits soleils dorés. Enfourner 15 min à 180°C. Bénir avant dégustation (optionnel).",
    defi: "Prend toi en photo avec une viennoiserie, la plus originale gagne 1 PO.",
  },
  {
    date: new Date(2026, 9, 6),
    icone: "🤬",
    categorie: "PTSD",
    titre: "Trigger",
    contenu: "Je n'ai plus de mana, pas assez de rage...",
    defi: "Chacun donne sa phrase qui le trigger le plus, la personne qui l'illustre le mieux en photo gagne 1 PO.",
  },
  {
    date: new Date(2026, 9, 7),
    icone: "☕",
    categorie: "Boisson",
    titre: "Chocolat de Sombréclat",
    contenu:
      "La boisson préférée des sorciers affamés :\n\n• 25 cl de lait\n• 2 carrés de chocolat noir\n• 1 pincée de piment (oui, vraiment)\n• Une pincée de sucre vanillé\n\nFaire fondre le chocolat à feu très doux. Invoquer une assiette de cookies pour l'accompagner.",
    defi: "Poste la photo de ta boisson du soir avec un nom d'objet épique inventé. Exemple : « Chocolat de Sombréclat +3 esprit ». La plus originale gagne 1 PO.",
  },
  {
    date: new Date(2026, 9, 8),
    icone: "💡",
    categorie: "Astuce",
    titre: "Règle d'or",
    contenu: "N'oubliez pas de prendre du plaisir en jeu ! 😁",
    defi: "Dis ce qui te fait vibrer pendant que tu joues, toute personne qui répond sincérement gagne 1 PO.",
  },
  {
    date: new Date(2026, 9, 9),
    icone: "🐾",
    categorie: "Animaux",
    titre: "Mouton",
    contenu: "Un mouton ! Parce qu'on est tous un peu mouton...",
    defi: "Poste un selfie avec un mouton d'Elwynn. La photo la plus originale gagne 1 PO.",
  },
  {
    date: new Date(2026, 9, 10),
    icone: "🧙‍♂️",
    categorie: "PNJ",
    titre: "Ton favori",
    contenu: "Jaina Proudmoore, Forever !",
    defi: "Donne ton PNJ préféré et fait un selfie avec lui ! La photo la plus originale gagne 1 PO.",
  },
  {
    date: new Date(2026, 9, 11),
    icone: "🍖",
    categorie: "Recette",
    titre: "Côtelettes de Loch Modan",
    contenu:
      "Pour honorer les nains, aujourd'hui : de la viande, point.\n\n• 4 côtelettes de porc\n• Moutarde, miel, romarin\n• Sel, poivre\n\nMariner 30 min, griller 12 min. Accompagner de bière de Forgefer (voir case du 28 septembre).",
    defi: "Barbecue virtuel : chacun poste la photo de son plat du soir. On vote pour le plus digne d'un nain de Loch Modan, celui qui a le plus de vote gagne 1 PO",
  },
  {
    date: new Date(2026, 9, 12),
    icone: "😄",
    categorie: "Citation",
    titre: "Citation du jour",
    contenu:
      "« Vous n'êtes pas prêts ! » — Illidan Stormrage\n\nÀ se dire devant son réveil chaque matin. Fonctionne aussi devant la file d'attente du serveur.",
    defi: "Dire « Vous n'êtes pas prêts ! » à quelqu'un aujourd'hui (au réveil, à un collègue, à ton chat) et raconter la réaction, la plus originale gagne 1 PO",
  },
  {
    date: new Date(2026, 9, 13),
    icone: "🍹",
    categorie: "Boisson",
    titre: "Punch de Booty Bay",
    contenu:
      "Le mélange interdit des gobelins (version soft) :\n\n• Jus d'ananas 25 cl\n• Jus de goyave 15 cl\n• Un trait de grenadine\n• Rhum arrangé... ou sirop de sucre de canne pour les matelots à la rame\n\nSecouer vigoureusement. Prix : 2 pièces d'argent le verre, marché noir de préférence.",
    defi: "Invente un nom de cocktail pour chaque membre du Discord. Le plus drole-mais-vrai gagne 1 PO.",
  },
  {
    date: new Date(2026, 9, 14),
    icone: "🐾",
    categorie: "Animaux",
    titre: "Mascotte",
    contenu: "Vive les mascottes !",
    defi: "Fais une photo de la plus belle mascotte de WoW selon toi, la plus belle gagnera 1 PO.",
  },
  {
    date: new Date(2026, 9, 15),
    icone: "📖",
    categorie: "Lore",
    titre: "Le savais-tu ?",
    contenu:
      "Les murlocs ne parlent pas une langue inventée. Les développeurs ont réellement enregistré des bruits de gargouillis dans un micro, convaincus que ça ferait le meilleur son de l'histoire du jeu.\n\nIls avaient raison. Mrgglglgl. 🐟",
    defi: "Enregistre ton meilleur « Mrgglglgl » et envoie l'audio sur Discord. Le plus convaincant gagne 1 PO.",
  },
  {
    date: new Date(2026, 9, 16),
    icone: "📜",
    categorie: "Citation",
    titre: "Balles ou Froc",
    contenu:
      "J'aurai eu des balles et Pauline un froc on serait allé au bout !\n\nRémi le Mardi 4 février 2025 à 21h38",
    defi: "Fait une photo avec au moins des balles et un froc dessus, la plus originales gagne 1 PO.",
  },
  {
    date: new Date(2026, 9, 17),
    icone: "🍪",
    categorie: "Recette",
    titre: "Biscuits du Mage Gourmand",
    contenu:
      "Les fameux biscuits de la taverne des mages :\n\n• 200 g de farine\n• 100 g de beurre\n• 80 g de sucre\n• Pépites de chocolat\n\nBref : une recette de cookies normale. La magie, c'est de les faire disparaître avant l'invocation du gateau.",
    defi: "Fais apparaitre des biscuits comme un mage et poste la vidéo/photo avant/après. La plus crédible gagne 1 PO.",
  },
  {
    date: new Date(2026, 9, 18),
    icone: "🕯️",
    categorie: "Blague",
    titre: "Question du jour",
    contenu:
      "Combien de Kobold faut-il pour changer une bougie sur VOUS PAS PRENDRE BOUGIE !",
    defi: "Poste ton meilleur selfie avec des kobolds, celui ou celle qui a le plus de kobolds dans sa photo gagne 1 PO.",
  },
  {
    date: new Date(2026, 9, 19),
    icone: "🍺",
    categorie: "Boisson",
    titre: "Cidre de Gilnéas",
    contenu:
      "Pour les worgens affamés :\n\n• 20 cl de cidre brut\n• 1 trait de caramel\n• Une rondelle de pomme\n\nServi dans un verre en argent massif si possible. Les Gilnéens ne boivent jamais dans du plastique, ils ont trop de style.",
    defi: "Décris ta classe préféré en un seul mot, avec un maximum de style. La plus stylé gagne 1 PO.",
  },
  {
    date: new Date(2026, 9, 20),
    icone: "😁",
    categorie: "Astuce",
    titre: "Le conseil du druide",
    contenu:
      "Inspirer calmement...\n.\n.\n.\n.\n.\nExpirer doucement...\n\nOn s'approche tranquillement 😊",
    defi: "Pas de défi aujourd'hui, on se pose, on prend son temps 😉",
  },
  {
    date: new Date(2026, 9, 21),
    icone: "🦅",
    categorie: "Animaux",
    titre: "Griffon",
    contenu: "Les Griffons sont trop stylés !",
    defi: "Dessine un griffon en 30 secondes chrono et poste le résultat. Le plus laid gagne 1 PO.",
  },
  {
    date: new Date(2026, 9, 22),
    icone: "🦅",
    categorie: "Animaux",
    titre: "Hippogriffe",
    contenu: "Les Hippogriffes sont trop stylés aussi !",
    defi: "Dessine un hippogriffe en 30 secondes chrono et poste le résultat. Le plus laid gagne 1 PO.",
  },
  {
    date: new Date(2026, 9, 23),
    icone: "🥘",
    categorie: "Recette",
    titre: "Soupe des Marécages d'Âpreflange",
    contenu:
      "Recette de survie des expéditions perdues :\n\n• 1 courge butternut\n• 2 carottes, 1 oignon\n• Lait de coco, curry\n\nCouper, bouillir, mixer. Se consomme avec des bottes mouillées et une monture qui nage pas.",
    defi: "Le groupe élit la meilleure soupe qui sera la soupe officielle du lancement. 1 PO pour chaque personne qui en boira le jour J.",
  },
  {
    date: new Date(2026, 9, 24),
    icone: "🌄",
    categorie: "Paysage",
    titre: "Le plus beau lieu",
    contenu: "Azeroth est une terre d'aventure et de voyage !",
    defi: "Fais une photo du plus beau paysage de WoW selon toi, la plus belle gagne 1 PO.",
  },
  {
    date: new Date(2026, 9, 25),
    icone: "🍹",
    categorie: "Boisson",
    titre: "Thé glacé de Darnassus",
    contenu:
      "Pour les elfes stressés par la file d'attente :\n\n• Thé vert refroidi\n• Menthe fraîche\n• Miel, citron\n• Une feuille de laurier « pour la chance » (aucune preuve, mais on y croit)\n\nÀ siroter en attendant le fameux écran « You are 487th in the queue ».",
    defi: "Pronostic : combien de minutes de file d'attente le 5 ? Le plus proche gagne 1 PO.",
  },
  {
    date: new Date(2026, 9, 26),
    icone: "💡",
    categorie: "Astuce",
    titre: "Check-list J-10",
    contenu:
      "Plus que 10 jours ! Vérifie :\n\n✓ Addons à jour\n✓ Discord fonctionnel\n✓ Stock de snacks et boissons\n✓ Personnage planifié\n✓ congé posé (on ne jugera pas)\n\nNon, le ménage ne compte pas comme préparation.",
    defi: "Poste ta check-list cochée en photo. Le plus organisé reçoit 1 PO.",
  },
  {
    date: new Date(2026, 9, 27),
    icone: "📖",
    categorie: "Lore",
    titre: "Le savais-tu ?",
    contenu:
      "Le lion de l'Alliance est inspiré des blasons de chevalerie. Quand Hurlevent s'illumine de bleu et d'or, c'est toute une tradition qui brille.\n\nAujourd'hui, portez du bleu et de l'or. Ordre du calendrier. 🛡️",
    defi: "Porte du bleu et de l'or aujourd'hui et poste la preuve. L'Alliance ne négocie pas. 1 PO pour toutes les personnes qui le font.",
  },
  {
    date: new Date(2026, 9, 28),
    icone: "🗿",
    categorie: "Lore",
    titre: "Le savais-tu ?",
    contenu:
      "Les statues géantes à l'entrée de Hurlevent représentent les héros de la Deuxième Guerre. On passe devant à chaque fois qu'on entre en ville.\n\nAprès toutes ces années, la moitié des joueurs ne les a jamais regardées en face. Corrigeons ça aujourd'hui.",
    defi: "Chacun poste le gif qui représente le mieux son niveau d'impatience.\n\nLe plus drole gagne 1 PO.",
  },
  {
    date: new Date(2026, 9, 29),
    icone: "🎂",
    categorie: "Recette",
    titre: "Sacrécœur de l'Aventure",
    contenu:
      "Le dessert de la dernière semaine ! Un sacrécœur... mais en cake :\n\n• Génoise au chocolat\n• Fourrage framboise\n• Nappage blond (caramel)\n\nDécorer d'une épée en sucre. Manger avec gravité et un minimum de révérence.",
    defi: "Chacun propose le dessert officiel du lancement, on vote. Celles et ceux qui en mangeront le 5 gagnerons 1 PO.",
  },
  {
    date: new Date(2026, 9, 30),
    icone: "😄",
    categorie: "Blague",
    titre: "Fin du mois",
    contenu:
      "Dernière case de septembre ! Un mois entier derrière nous, et tout octobre à déguster.\n\nCe soir, on ne parle plus que de builds, de macros et de qui sera le premier à tomber du lit le 5 novembre. Spoiler : ce sera le druide.",
    defi: "Chacun poste son année et mois de début sur WoW. Le doyen reçoit le respect et 1 PO.",
  },
  {
    date: new Date(2026, 9, 31),
    icone: "🥂",
    categorie: "Boisson",
    titre: "Champagne d'Halloween",
    contenu:
      "Le dernier jour d'octobre — et accessoirement Halloween — protocole officiel :\n\n• Une coupe de champagne (ou de limonade dorée, c'est l'Alliance, on accepte tout le monde)\n• Un toast d'entraînement — le vrai, celui de la veillée, c'est dans quatre jours\n• Se coucher DIRECT après. C'est un ordre.\n\nPour l'Alliance ! 🏰",
    defi: "Déguise ton personnage pour Halloween et poste le résultat. Le plus terrifiant gagne 1 PO.",
  },
  {
    date: new Date(2026, 10, 1),
    icone: "🌅",
    categorie: "Citation",
    titre: "Jour J — 4",
    contenu:
      "« Fait par des nerds, pour des nerds. » — La seule description honnête d'un serveur de guilde\n\nQuatre jours. La Horde ne sait pas ce qui l'attend. Nous non plus, mais avec plus de style.",
    defi: "Chacun poste sa manière de jouer préféré et argumente pourquoi c'est la meilleure, la personne avec les arguments de plus mauvaises foi gagne 1 PO.",
  },
  {
    date: new Date(2026, 10, 2),
    icone: "⚔️",
    categorie: "Citation",
    titre: "Jour J — 3",
    contenu:
      "« Le monde sera brisé, mais pas notre amitié. » (Probablement un nain, enfin j'espère)\n\nTrois jours. Respirez. Les héros se reposent avant la bataille.",
    defi: "Écris un mot gentil sur le discord pour envoyer de bonne onde ! Sans contexte, c'est encore mieux. Tout celles et ceux qui écrivent un mot gentil gagne 1 PO",
  },
  {
    date: new Date(2026, 10, 3),
    icone: "🔥",
    categorie: "Mascotte",
    titre: "Jour J — 2",
    contenu: "On aime les mascotte !",
    defi: "Prend en photo ta mascotte IRL, la plus originale gagne 1 PO.",
  },
  {
    date: new Date(2026, 10, 4),
    icone: "🥂",
    categorie: "Boisson",
    titre: "Jour J — 1 : la Veillée",
    contenu:
      "La veille du grand jour, protocole officiel :\n\n• Une coupe de champagne (ou de limonade dorée, c'est l'Alliance, on accepte tout le monde)\n• Un toast à 23h59\n• Se coucher DIRECT après. C'est un ordre.\n\nPour l'Alliance ! 🏰",
    defi: "À 23h59, photo de ta coupe dans le groupe, tous ensemble, où que vous soyez. Le grand toast de la veillée.",
  },
  {
    date: new Date(2026, 10, 5),
    icone: "🎉",
    categorie: "Citation",
    titre: "🎉 C'EST AUJOURD'HUI ! 🎉",
    contenu:
      "WoW Forever est là. Vous avez patienté comme des champions.\n\nQue vos loot soient légendaires, vos quêtes épiques et vos déconnexions rares.\n\nPOUR L'ALLIANCE ! ⚔️🛡️🏰\n\n(Le calendrier vous salue bien bas et part farm avec vous.)",
    defi: "Le premier screenshot de toutes et tous sur la même image, dans Azeroth. Ce sera notre première épopée, mais pas la dernière !",
  },
];

// ================== LOGIQUE ==================
const grille = document.getElementById("grille");
const voile = document.getElementById("voile");
const MOIS = [
  "janv.",
  "févr.",
  "mars",
  "avril",
  "mai",
  "juin",
  "juil.",
  "août",
  "sept.",
  "oct.",
  "nov.",
  "déc.",
];

function minuit(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}
function aujourdhui() {
  return minuit(new Date());
}

function cleCase(i) {
  const d = CASES[i].date;
  return d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();
}
function casesOuvertes() {
  try {
    return new Set(
      JSON.parse(localStorage.getItem("wow-avent-ouvertes-v2") || "[]"),
    );
  } catch (e) {
    return new Set();
  }
}
function marquerOuverte(i) {
  const s = casesOuvertes();
  s.add(cleCase(i));
  localStorage.setItem("wow-avent-ouvertes-v2", JSON.stringify([...s]));
}

function construireCompteur() {
  const cible = minuit(DATE_SORTIE);
  let diff = cible - new Date();
  const jours = Math.max(0, Math.floor(diff / 86400000));
  const cont = document.getElementById("compte-a-rebours");
  cont.innerHTML = `
    <div class="compteur-bloc"><div class="compteur-nombre">${jours}</div><div class="compteur-label">jours</div></div>
    <div class="compteur-bloc"><div class="compteur-nombre">${Math.max(0, Math.floor((diff % 86400000) / 3600000))}</div><div class="compteur-label">heures</div></div>
    <div class="compteur-bloc"><div class="compteur-nombre">${Math.max(0, Math.floor((diff % 3600000) / 60000))}</div><div class="compteur-label">minutes</div></div>`;
}

function ouvrirModale(i) {
  const c = CASES[i];
  document.getElementById("m-categorie").textContent = c.categorie;
  document.getElementById("m-titre").textContent = c.titre;
  document.getElementById("m-contenu").textContent = c.contenu;
  document.getElementById("m-defi").textContent = c.defi || "";
  document.getElementById("defi-bloc").style.display = c.defi ? "" : "none";
  voile.classList.add("visible");
  marquerOuverte(i);
  construireGrille();
}

function fermerModale() {
  voile.classList.remove("visible");
}

voile.addEventListener("click", (e) => {
  if (e.target === voile) fermerModale();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") fermerModale();
});
document.getElementById("btn-fermer").addEventListener("click", fermerModale);

function construireGrille() {
  const auj = aujourdhui();
  const ouvertes = casesOuvertes();
  grille.innerHTML = "";
  CASES.forEach((c, i) => {
    const dispo = minuit(c.date) <= auj;
    const el = document.createElement("div");
    el.className =
      "case" +
      (dispo ? "" : " verrouillee") +
      (ouvertes.has(cleCase(i)) ? " ouverte" : "");
    let icone = "";
    if (!dispo) {
      icone = "🔒";
    } else if (ouvertes.has(cleCase(i))) {
      icone = c.icone;
    }
    el.innerHTML = `
      <span class="pastille">✓</span>
      <div class="couvercle"></div>
      <div class="jour">${c.date.getDate()}</div>
      <div class="date">${MOIS[c.date.getMonth()]}</div>
      <div class="icone">${icone}</div>`;
    if (dispo) {
      el.addEventListener("click", () => {
        el.classList.add("ouverture");
        setTimeout(() => ouvrirModale(i), 420);
      });
    } else {
      el.title =
        "Patience, jeune héros... case disponible le " +
        c.date.getDate() +
        " " +
        MOIS[c.date.getMonth()];
    }
    grille.appendChild(el);
  });
}

construireCompteur();
construireGrille();
setInterval(construireCompteur, 60000);

// ================== MINI-JEU : TAPE LE MURLOC ==================
const mjSection = document.getElementById("minijeu");
const mjGrille = document.getElementById("mj-grille");
const mjScoreEl = document.getElementById("mj-score");
const mjTempsEl = document.getElementById("mj-temps");
const mjRecordEl = document.getElementById("mj-record");
const mjMessage = document.getElementById("mj-message");
const mjBouton = document.getElementById("mj-demarrer");
const ongletCalendrier = document.getElementById("onglet-calendrier");
const ongletMurloc = document.getElementById("onglet-murloc");
let mjScore = 0;
let mjSec = 30;
let mjPartie = false;
let mjCompteur = null;
let mjFile = null;

function afficherVue(vue) {
  grille.style.display = vue === "calendrier" ? "grid" : "none";
  mjSection.style.display = vue === "murloc" ? "block" : "none";
  mcSection.style.display = vue === "mots" ? "block" : "none";
  mcSection2.style.display = vue === "mots2" ? "block" : "none";
  ongletCalendrier.classList.toggle("actif", vue === "calendrier");
  ongletMurloc.classList.toggle("actif", vue === "murloc");
  ongletMots.classList.toggle("actif", vue === "mots");
  ongletMots2.classList.toggle("actif", vue === "mots2");
}
ongletCalendrier.addEventListener("click", () => afficherVue("calendrier"));
ongletMurloc.addEventListener("click", () => afficherVue("murloc"));

function mjRang(score) {
  if (score <= 4) return "les murlocs te prennent pour un poisson. Mrgglgl…";
  if (score <= 9) return "jeune écuyer de l'estran, mais tu bats dans la bonne direction.";
  if (score <= 14) return "chasseur de murlocs certifié, les murlocs t'ont vu venir.";
  if (score <= 19) return "terreur de la côte, les murlocs prononcent ton nom avec peur.";
  return "Leeroy serait fier : charger sans regarder, taper sans demander. 🍗";
}

function mjBordereau() {
  const record = Number(localStorage.getItem("wow-murloc-record") || 0);
  mjScoreEl.textContent = "Score : " + mjScore;
  mjTempsEl.textContent = mjSec + " s";
  mjRecordEl.textContent = "Record : " + record;
}

function mjFlash(texte) {
  mjMessage.textContent = texte;
  setTimeout(() => {
    if (mjMessage.textContent === texte) mjMessage.textContent = "";
  }, 1000);
}

function mjConstruireTrous() {
  mjGrille.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    const trou = document.createElement("div");
    trou.className = "mj-trou";
    trou.innerHTML = '<span class="mj-occupant"></span>';
    trou.addEventListener("click", () => {
      if (!mjPartie || !trou.classList.contains("occupe")) return;
      const occupant = trou.querySelector(".mj-occupant");
      if (trou.dataset.kobold === "1") {
        mjScore = Math.max(0, mjScore - 3);
        occupant.textContent = "🕯️";
        mjFlash("VOUS PAS PRENDRE BOUGIE ! -3");
      } else {
        mjScore += 2;
        occupant.textContent = "💥";
      }
      trou.classList.remove("occupe");
      setTimeout(() => (occupant.innerHTML = ""), 200);
      mjBordereau();
    });
    mjGrille.appendChild(trou);
  }
}

function mjApparaitre() {
  if (!mjPartie) return;
  const trous = [...mjGrille.children].filter(
    (t) => !t.classList.contains("occupe"),
  );
  if (trous.length) {
    const trou = trous[Math.floor(Math.random() * trous.length)];
    const kobold = Math.random() < 0.2;
    const occupant = trou.querySelector(".mj-occupant");
    occupant.innerHTML = kobold
      ? '<img src="assets/kobold_icone.jpg" alt="kobold">'
      : '<img src="assets/murloc_icone.jpg" alt="murloc">';
    trou.dataset.kobold = kobold ? "1" : "0";
    trou.classList.add("occupe");
    setTimeout(() => {
      if (trou.classList.contains("occupe")) {
        trou.classList.remove("occupe");
        occupant.innerHTML = "";
      }
    }, 600 + Math.random() * 500);
  }
  const vitesse = Math.max(300, 700 - (30 - mjSec) * 12);
  mjFile = setTimeout(mjApparaitre, vitesse + Math.random() * 400);
}

function mjFin() {
  mjPartie = false;
  clearInterval(mjCompteur);
  clearTimeout(mjFile);
  mjConstruireTrous();
  mjBouton.disabled = false;
  mjBouton.textContent = "Repartir pour 30 secondes !";
  const record = Number(localStorage.getItem("wow-murloc-record") || 0);
  let recordTxt = " Coach : poste ton score sur le Discord !";
  if (mjScore > record) {
    localStorage.setItem("wow-murloc-record", String(mjScore));
    recordTxt = " Nouveau record ! Poste-le sur le Discord ! 🏆";
  }
  mjMessage.textContent = mjScore + " points — " + mjRang(mjScore) + recordTxt;
  mjBordereau();
}

mjBouton.addEventListener("click", () => {
  mjConstruireTrous();
  mjScore = 0;
  mjSec = 30;
  mjPartie = true;
  mjBouton.disabled = true;
  mjBouton.textContent = "Les murlocs déferlent…";
  mjMessage.textContent = "";
  mjBordereau();
  mjApparaitre();
  mjCompteur = setInterval(() => {
    mjSec--;
    mjBordereau();
    if (mjSec <= 0) mjFin();
  }, 1000);
});

mjConstruireTrous();
mjBordereau();

// Prechargement des images pour eviter le retard au premier murloc
["assets/murloc_icone.jpg", "assets/kobold_icone.jpg"].forEach((src) => {
  new Image().src = src;
});

// ================== MOTS CROISÉS ==================
const mcSection = document.getElementById("mots-croises");
const mcSection2 = document.getElementById("mots-croises-2");
const ongletMots = document.getElementById("onglet-mots");
const ongletMots2 = document.getElementById("onglet-mots2");

const MC_MOTS = [
  { num: 1, sens: "horizontal", ligne: 2, col: 3, mot: "TANARIS", indice: "Zone désertique du sud de Kalimdor, décor de la Foire de Sombrelune." },
  { num: 1, sens: "vertical", ligne: 2, col: 3, mot: "THRALL", indice: "Premier chef de guerre de la Horde moderne." },
  { num: 2, sens: "vertical", ligne: 3, col: 2, mot: "MURLOC", indice: "Amphibien au chant inoubliable : mrgglglgl." },
  { num: 3, sens: "vertical", ligne: 3, col: 7, mot: "DEFIAS", indice: "Fraternité au masque rouge qui sévit à Comté-du-l'Ouest." },
  { num: 4, sens: "horizontal", ligne: 4, col: 1, mot: "HURLEVENT", indice: "Capitale de l'Alliance, celle qui a son propre métro." },
  { num: 4, sens: "vertical", ligne: 4, col: 1, mot: "HORDE", indice: "L'autre faction, avec exactement la même amitié." },
  { num: 5, sens: "vertical", ligne: 4, col: 5, mot: "ELUNE", indice: "Déesse lunaire des Kaldorei." },
  { num: 6, sens: "vertical", ligne: 4, col: 9, mot: "TAUREN", indice: "Peuple taureau des plaines de Mulgore." },
  { num: 7, sens: "horizontal", ligne: 7, col: 3, mot: "LUNE", indice: "Ce qu'adorent les Kaldorei, version astronomique." },
];

const MC2_MOTS = [
  { num: 1, sens: "horizontal", ligne: 0, col: 4, mot: "ALLIANCE", indice: "Foi, chevalerie, bleu et or : le camp qui lit ce calendrier." },
  { num: 1, sens: "vertical", ligne: 0, col: 4, mot: "ARCHIMONDE", indice: "Le Corrupteur, grillé par des wisps au mont Hyjal." },
  { num: 2, sens: "horizontal", ligne: 1, col: 2, mot: "KARAZHAN", indice: "La tour de Medivh, celle des fêtes de Moroes." },
  { num: 2, sens: "vertical", ligne: 1, col: 2, mot: "KALIMDOR", indice: "Le grand continent de l'ouest, côté orcs et taurens." },
  { num: 3, sens: "vertical", ligne: 1, col: 3, mot: "AZSHARA", indice: "Impératrice déchue devenue reine des naga." },
  { num: 4, sens: "vertical", ligne: 1, col: 5, mot: "ARGENT", indice: "Métal du tournoi des croisés — pas celui de vos PO." },
  { num: 5, sens: "vertical", ligne: 1, col: 6, mot: "ZANDALAR", indice: "L'île-mère de tout le peuple troll." },
  { num: 6, sens: "vertical", ligne: 1, col: 7, mot: "HOGGER", indice: "Le gnoll qui a fait pleurer des générations de niveaux 10." },
  { num: 7, sens: "vertical", ligne: 1, col: 8, mot: "ARGUS", indice: "Planète natale des draeneï, avant l'exode." },
  { num: 8, sens: "vertical", ligne: 1, col: 9, mot: "NERZHUL", indice: "La moitié d'origine du Roi-Liche, avant la fusion." },
  { num: 9, sens: "horizontal", ligne: 9, col: 4, mot: "EXODAR", indice: "Le « vaisseau » draeneï couché sur les îles Brumeuses." },
];

function creerMotsCroises(cfg) {
  const grilleEl = document.getElementById(cfg.grille);
  const tempsEl = document.getElementById(cfg.temps);
  const recordEl = document.getElementById(cfg.record);
  const messageEl = document.getElementById(cfg.message);
  const horizEl = document.getElementById(cfg.horiz);
  const vertEl = document.getElementById(cfg.vert);

  let champs = [];
  let tempsRestant = cfg.duree;
  let chronoLance = false;
  let compteur = null;
  let termine = false;

  function norm(texte) {
    return texte
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase()
      .replace(/[^A-Z]/g, "")
      .slice(0, 1);
  }

  function format(secondes) {
    const m = Math.floor(Math.max(0, secondes) / 60);
    const r = Math.max(0, secondes) % 60;
    return (m < 10 ? "0" : "") + m + ":" + (r < 10 ? "0" : "") + r;
  }

  function majTemps() {
    tempsEl.textContent = format(tempsRestant);
    tempsEl.classList.toggle("rouge", tempsRestant <= 60);
  }

  function majRecord() {
    const record = localStorage.getItem(cfg.cleRecord);
    recordEl.textContent =
      "Meilleur temps : " + (record ? format(Number(record)) : "—");
  }

  function lancerChrono() {
    if (chronoLance || termine) return;
    chronoLance = true;
    compteur = setInterval(() => {
      tempsRestant--;
      majTemps();
      if (tempsRestant <= 0) echec();
    }, 1000);
  }

  function verifier(bavard) {
    if (termine) return;
    const vides = champs.filter((c) => !c.value).length;
    if (vides > 0) {
      if (bavard) {
        messageEl.textContent =
          "Il manque encore " + vides + " lettre" + (vides > 1 ? "s" : "") + " !";
      }
      return;
    }
    const fausses = champs.filter((c) => c.value !== c.dataset.attendu);
    if (fausses.length === 0) {
      victoire();
    } else if (bavard) {
      fausses.forEach((c) => c.classList.add("fausse"));
      messageEl.textContent =
        fausses.length +
        " lettre" +
        (fausses.length > 1 ? "s" : "") +
        " incorrecte" +
        (fausses.length > 1 ? "s" : "") +
        " — fouille encore !";
      setTimeout(() => {
        fausses.forEach((c) => c.classList.remove("fausse"));
      }, 1800);
    }
  }

  function victoire() {
    termine = true;
    clearInterval(compteur);
    const utilise = cfg.duree - tempsRestant;
    const record = localStorage.getItem(cfg.cleRecord);
    let recordTxt = "";
    if (!record || utilise < Number(record)) {
      localStorage.setItem(cfg.cleRecord, String(utilise));
      recordTxt = " Record battu !";
    }
    majRecord();
    champs.forEach((c) => {
      c.classList.add("juste");
      c.disabled = true;
    });
    messageEl.textContent =
      "🎉 Grille complétée en " +
      format(utilise) +
      " !" +
      recordTxt +
      " Poste ton temps sur le Discord !";
  }

  function echec() {
    if (termine) return;
    termine = true;
    clearInterval(compteur);
    champs.forEach((c) => (c.disabled = true));
    messageEl.textContent =
      "⏳ Temps écoulé ! VOUS N'ÊTES PAS PRÊTS ! Recommence, héros.";
  }

  function construire() {
    clearInterval(compteur);
    chronoLance = false;
    termine = false;
    tempsRestant = cfg.duree;
    majTemps();
    messageEl.textContent = "";
    const attendu = Array.from({ length: cfg.lignes }, () =>
      Array(cfg.colonnes).fill(""),
    );
    const numero = Array.from({ length: cfg.lignes }, () =>
      Array(cfg.colonnes).fill(0),
    );
    cfg.mots.forEach((m) => {
      [...m.mot].forEach((lettre, i) => {
        const r = m.ligne + (m.sens === "vertical" ? i : 0);
        const c = m.col + (m.sens === "horizontal" ? i : 0);
        if (attendu[r][c] && attendu[r][c] !== lettre) {
          console.warn("Conflit mots croisés en " + r + "," + c);
        }
        attendu[r][c] = lettre;
        if (i === 0) numero[r][c] = m.num;
      });
    });
    grilleEl.innerHTML = "";
    champs = [];
    for (let r = 0; r < cfg.lignes; r++) {
      for (let c = 0; c < cfg.colonnes; c++) {
        const caseEl = document.createElement("div");
        caseEl.className = "mc-case";
        if (!attendu[r][c]) {
          caseEl.classList.add("mc-noire");
        } else {
          if (numero[r][c]) {
            const num = document.createElement("span");
            num.className = "mc-num";
            num.textContent = numero[r][c];
            caseEl.appendChild(num);
          }
          const champ = document.createElement("input");
          champ.type = "text";
          champ.maxLength = "1";
          champ.autocomplete = "off";
          champ.className = "mc-input";
          champ.dataset.attendu = attendu[r][c];
          const index = champs.length;
          champ.addEventListener("input", () => {
            if (termine) return;
            champ.value = norm(champ.value);
            champ.classList.remove("fausse");
            lancerChrono();
            verifier(false);
            if (champ.value && index < champs.length - 1) {
              champs[index + 1].focus();
            }
          });
          champ.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && !champ.value && index > 0) {
              e.preventDefault();
              const precedent = champs[index - 1];
              precedent.focus();
              precedent.value = "";
            }
          });
          caseEl.appendChild(champ);
          champs.push(champ);
        }
        grilleEl.appendChild(caseEl);
      }
    }
  }

  function construireIndices() {
    horizEl.innerHTML = "";
    vertEl.innerHTML = "";
    cfg.mots.forEach((m) => {
      const li = document.createElement("li");
      li.innerHTML =
        "<strong>" + m.num + ".</strong> " +
        m.mot.length + " lettres — " +
        m.indice;
      (m.sens === "horizontal" ? horizEl : vertEl).appendChild(li);
    });
  }

  document
    .getElementById(cfg.boutonVerifier)
    .addEventListener("click", () => verifier(true));
  document
    .getElementById(cfg.boutonRecommencer)
    .addEventListener("click", construire);

  construire();
  construireIndices();
  majRecord();
}

creerMotsCroises({
  grille: "mc-grille",
  horiz: "mc-horiz",
  vert: "mc-vert",
  temps: "mc-temps",
  record: "mc-record",
  message: "mc-message",
  boutonVerifier: "mc-verifier",
  boutonRecommencer: "mc-recommencer",
  mots: MC_MOTS,
  duree: 120,
  cleRecord: "wow-mots-record",
  lignes: 10,
  colonnes: 10,
});

creerMotsCroises({
  grille: "mc2-grille",
  horiz: "mc2-horiz",
  vert: "mc2-vert",
  temps: "mc2-temps",
  record: "mc2-record",
  message: "mc2-message",
  boutonVerifier: "mc2-verifier",
  boutonRecommencer: "mc2-recommencer",
  mots: MC2_MOTS,
  duree: 600,
  cleRecord: "wow-mots2-record",
  lignes: 10,
  colonnes: 12,
});

ongletMots.addEventListener("click", () => afficherVue("mots"));
ongletMots2.addEventListener("click", () => afficherVue("mots2"));
