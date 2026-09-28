// ================== CONFIGURATION ==================
// Modifie la date de sortie ici si besoin
const DATE_SORTIE = new Date(2026, 10, 5); // 5 novembre 2026

// ================== CONTENU DES CASES ==================
// Modifie librement ! Chaque case a : date, catégorie, titre, contenu, icône, défi
// Catégories possibles : Blague, Recette, Boisson, Astuce, Lore, Défi, Citation
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
    defi: "Ce soir à 21h, chacun lève son verre où qu'il soit et poste la photo sur le Discord. « Pour l'Alliance ! » obligatoire.",
  },
  {
    date: new Date(2026, 8, 29),
    icone: "🧀",
    categorie: "Blague",
    titre: "Question du jour",
    contenu:
      "Combien de joueurs faut-il pour changer une bougie sur WoW Forever ?\n\nAucune idée, on est toujours dans la file d'attente. 🕯️",
    defi: "Poste ta blague WoW la plus nulle. Le gémissement collectif désigne le perdant du jour.",
  },
  {
    date: new Date(2026, 8, 30),
    icone: "🍲",
    categorie: "Recette",
    titre: "Ragoût de Kaldorei",
    contenu:
      "D'après les traqueurs de Darnassus :\n\n• 500 g de bœuf en cubes\n• 3 carottes, 2 pommes de terre\n• 1 oignon, thym, laurier\n• 25 cl de bouillon\n\nMijoter 2h. Servir sous un arbre géant, en mode furtif pour que la Horde ne sente pas l'odeur.",
    defi: "Poste une photo de ton vrai dîner de ce soir. Le groupe vote pour le plat le plus digne d'un traqueur de Darnassus.",
  },
  {
    date: new Date(2026, 9, 1),
    icone: "💡",
    categorie: "Astuce",
    titre: "Le vieux réflexe",
    contenu:
      "Astuce de vétéran : quand WoW Forever sortira, ne courez pas sur le premier serveur affiché.\n\nRepérez où vos amis iront AVANT le lancement, ou vous passerez 3 heures dans une file comme tout le monde. 😅",
    defi: "Écris sur un papier le serveur où tu atterriras le 5 novembre et garde-le sous scellé. On vérifie qui avait raison le jour J.",
  },
  {
    date: new Date(2026, 9, 2),
    icone: "🍷",
    categorie: "Boisson",
    titre: "Vin de la Nuit",
    contenu:
      "La boisson des elfes de la nuit :\n\n• 20 cl de jus de raisin noir\n• 5 cl de citron vert\n• Quelques myrtilles\n• Glaçons « éternels » (2h au congélateur, ça compte)\n\nÀ déguster à 2h du matin, comme tous les vrais Kaldorei.",
    defi: "Poste une photo de ton ciel ce soir. Le plus beau gagne le titre de « Kaldorei d'or ».",
  },
  {
    date: new Date(2026, 9, 3),
    icone: "📖",
    categorie: "Lore",
    titre: "Le savais-tu ?",
    contenu:
      "Le « pigeon » de Hurlevent, c'est en fait un jeune dragon. Certains fans soupçonnent depuis 15 ans que les deux gamins qui l'observent savaient tout. Théorie non confirmée, espoir intact. 🐣",
    defi: "Va observer le pigeon-dragon de Hurlevent et compte les gamins autour. Poste ton rapport d'enquête.",
  },
  {
    date: new Date(2026, 9, 4),
    icone: "🚋",
    categorie: "Lore",
    titre: "Le savais-tu ?",
    contenu:
      "Il existe un tram qui relie Hurlevent à Forgefer en passant SOUS la mer. Les nains ont creusé un tunnel géant et installé un vrai train.\n\nPersonne n'a jamais expliqué pourquoi ils n'ont pas simplement fait un portail. Les nains répondent : « Un portail, ça n'a pas de klaxon. »",
    defi: "Écris dans le groupe ta classe principale et une seule raison pour laquelle tu la joues.\n\nInterdit de dire « parce que c'est la meilleure ». Spoiler : tout le monde va le dire quand même.",
  },
  {
    date: new Date(2026, 9, 5),
    icone: "🧁",
    categorie: "Recette",
    titre: "Petits pains de Lumière",
    contenu:
      "Les péchés mignons des prêtres :\n\n• 250 g de farine\n• 120 g de beurre fondu\n• 100 g de sucre\n• 1 œuf, levure\n\nFormer des petits soleils dorés. Enfourner 15 min à 180°C. Bénir avant dégustation (optionnel).",
    defi: "Promets une viennoiserie à celui qui aura le plus de mal à se lever le 5. Contrat oral, sanction réelle.",
  },
  {
    date: new Date(2026, 9, 6),
    icone: "😄",
    categorie: "Blague",
    titre: "Vocabulaire",
    contenu:
      "Un nouveau joueur demande : « C'est quoi un wipe ? »\n\nLe raid, en chœur : « Une tradition. »\n\nRésurrection du blotter : 40 pièces d'or, la dignité : priceless.",
    defi: "Chacun définit le mot donné par le joueur précédent, SANS utiliser sa vraie définition. On commence par « aggro ».",
  },
  {
    date: new Date(2026, 9, 7),
    icone: "☕",
    categorie: "Boisson",
    titre: "Chocolat de Sombréclat",
    contenu:
      "La boisson préférée des sorciers affamés :\n\n• 25 cl de lait\n• 2 carrés de chocolat noir\n• 1 pincée de piment (oui, vraiment)\n• Une pincée de sucre vanillé\n\nFaire fondre le chocolat à feu très doux. Invoquer une assiette de cookies pour l'accompagner.",
    defi: "Poste la photo de ta boisson du soir avec un nom d'objet épique inventé. Exemple : « Chocolat de Sombréclat +3 sagesse ».",
  },
  {
    date: new Date(2026, 9, 8),
    icone: "💡",
    categorie: "Astuce",
    titre: "Règle d'or",
    contenu:
      "Au lancement d'une extension : les quêtes valent souvent plus d'XP que le farm de mobs.\n\nEn clair : lisez les quêtes, vivez l'histoire, et vous serez max level avant les farmeurs acharnés. 😌",
    defi: "Fais la liste des quêtes que tu as VRAIMENT lues dans ta vie de joueur. Spoiler : personne n'en aura trois.",
  },
  {
    date: new Date(2026, 9, 9),
    icone: "📖",
    categorie: "Lore",
    titre: "Le savais-tu ?",
    contenu:
      "Les éleveurs de moutons de Elwynn n'ont jamais eu de nom. Ils sont juste là, éternels, à regarder les héros sauver le monde sans jamais perdre un seul mouton. Heroes locaux.",
    defi: "Poste un selfie avec un éleveur de moutons d'Elwynn. Bonus si un mouton apparaît sur la photo.",
  },
  {
    date: new Date(2026, 9, 10),
    icone: "🏊",
    categorie: "Blague",
    titre: "Question du jour",
    contenu:
      "Pourquoi les tanks ne savent-ils pas nager ?\n\nParce que de toute leur vie, ils n'ont jamais eu à fuir. Certains y voient une philosophie.",
    defi: "Dessine (ou décris avec 3 mots) le mascot de la guilde de vos rêves.\n\nLe plus absurde gagne le droit de choisir le premier tabard.",
  },
  {
    date: new Date(2026, 9, 11),
    icone: "🍖",
    categorie: "Recette",
    titre: "Côtelettes de Loch Modan",
    contenu:
      "Pour honorer les nains, aujourd'hui : de la viande, point.\n\n• 4 côtelettes de porc\n• Moutarde, miel, romarin\n• Sel, poivre\n\nMariner 30 min, griller 12 min. Accompagner de bière de Forgefer (voir case du 28 septembre — non, pas la peine d'attendre, on ne dira rien).",
    defi: "Barbecue virtuel : chacun poste la photo de son plat du soir. On vote pour le plus digne d'un nain de Loch Modan.",
  },
  {
    date: new Date(2026, 9, 12),
    icone: "😄",
    categorie: "Citation",
    titre: "Citation du jour",
    contenu:
      "« Vous n'êtes pas préparés ! » — Illidan Hurlorage\n\nÀ se dire devant son réveil chaque matin. Fonctionne aussi devant la file d'attente du serveur.",
    defi: "Dis « Vous n'êtes pas préparés ! » à quelqu'un aujourd'hui (au réveil, à un collègue, à ton chat) et raconte la réaction.",
  },
  {
    date: new Date(2026, 9, 13),
    icone: "🍹",
    categorie: "Boisson",
    titre: "Punch de Booty Bay",
    contenu:
      "Le mélange interdit des gobelins (version soft) :\n\n• Jus d'ananas 25 cl\n• Jus de goyave 15 cl\n• Un trait de grenadine\n• Rhum arrangé... ou sirop de sucre de canne pour les matelots à la rame\n\nSecouer vigoureusement. Prix : 2 pièces d'argent le verre, marché noir de préférence.",
    defi: "Invente un nom de cocktail pour chaque membre du groupe. Le plus insultant-mais-affectueux gagne.",
  },
  {
    date: new Date(2026, 9, 14),
    icone: "💡",
    categorie: "Astuce",
    titre: "Prépare ton stuff",
    contenu:
      "Un mois avant le lancement, c'est le bon moment pour : nettoyer tes addons, vérifier ta connexion, et prévoir des snacks.\n\nLe vrai endgame, c'est la logistique. Un raid a vaincu une seule fois par la faim du raid leader. Vrai (presque).",
    defi: "Poste la liste de tes snacks prévus pour le jour J. Le groupe jugera, et il ne sera pas tendre.",
  },
  {
    date: new Date(2026, 9, 15),
    icone: "📖",
    categorie: "Lore",
    titre: "Le savais-tu ?",
    contenu:
      "Les murlocs ne parlent pas une langue inventée. Les développeurs ont réellement enregistré des bruits de gargouillis dans un micro, convaincus que ça ferait le meilleur son de l'histoire du jeu.\n\nIls avaient raison. Mrgglglgl. 🐟",
    defi: "Enregistre ton meilleur « Mrgglglgl » et envoie l'audio. Le plus convaincant est exempté de défi demain.",
  },
  {
    date: new Date(2026, 9, 16),
    icone: "🏠",
    categorie: "Lore",
    titre: "Le savais-tu ?",
    contenu:
      "La pierre de foyer est sans doute l'objet le plus utilisé d'Azeroth : un retour gratuit vers l'auberge, toutes les heures, sans condition.\n\nDes héros l'ont utilisée des milliers de fois. D'autres l'ont posée par terre par erreur. Tous ont fini par l'adorer.",
    defi: "Envoie dans le groupe une capture d'écran de ton plus beau moment WoW (ou de ta plus grosse honte).\n\nBonus : points pour celui qui retrouve l'écran « déconnexion en plein boss à 2% ».",
  },
  {
    date: new Date(2026, 9, 17),
    icone: "🍪",
    categorie: "Recette",
    titre: "Biscuits du Mage Gourmand",
    contenu:
      "Les fameux biscuits de la taverne des mages :\n\n• 200 g de farine\n• 100 g de beurre\n• 80 g de sucre\n• Pépites de chocolat\n\nBref : une recette de cookies normale. La magie, c'est de les faire disparaître avant l'invocation du gateau.",
    defi: "Fais disparaître des biscuits comme un mage et poste la photo avant/après. Aucune explication demandée.",
  },
  {
    date: new Date(2026, 9, 18),
    icone: "😄",
    categorie: "Blague",
    titre: "Énigme",
    contenu:
      "Quel est le point commun entre un voleur et un pingouin ?\n\n.\n.\n.\nIls passent leur temps à furtivement voler du poisson... euh, attendez, on a perdu le fil. Le vrai voleur, lui, farme des heures sans rien dire. 🐧🗡️",
    defi: "Poste une énigme WoW dont tu connais la réponse. Premier qui la résout gagne le respect éternel (ou presque).",
  },
  {
    date: new Date(2026, 9, 19),
    icone: "🍺",
    categorie: "Boisson",
    titre: "Cidre de Gilnéas",
    contenu:
      "Pour les worgens affamés :\n\n• 20 cl de cidre brut\n• 1 trait de caramel\n• Une rondelle de pomme\n\nServi dans un verre en argent massif si possible. Les Gilnéens ne boivent jamais dans du plastique, ils ont trop de style.",
    defi: "Décris ta classe en un seul mot, avec un maximum de style. Les Gilnéens jugent la prestance.",
  },
  {
    date: new Date(2026, 9, 20),
    icone: "💡",
    categorie: "Astuce",
    titre: "Le conseil du druide",
    contenu:
      "La veille du lancement : dors tôt, hydrate-toi, mets ton réveil.\n\nNon, jouer 14h d'affilée le jour 1 n'est pas une bonne stratégie. Oui, tout le monde va le faire quand même. Y compris moi. 🦉",
    defi: "Programme ton réveil pour le 5 et poste la capture de l'alarme. Le premier à « oublier » paiera en cookies.",
  },
  {
    date: new Date(2026, 9, 21),
    icone: "📖",
    categorie: "Lore",
    titre: "Le savais-tu ?",
    contenu:
      "Les griffons de Hurlevent ne se posent jamais à l'état sauvage dans les jeux. Les développeurs disent que c'est pour des raisons de « dignité animale ». On respecte. 🦅",
    defi: "Dessine un griffon en 30 secondes chrono et poste le résultat. Plus c'est laid, plus tu gagnes.",
  },
  {
    date: new Date(2026, 9, 22),
    icone: "🐻",
    categorie: "Blague",
    titre: "Histoire vraie",
    contenu:
      "Un druide rentre à la taverne, commande une bière, discute avec le patron, paie l'addition.\n\nC'est à la sortie qu'on ose enfin lui dire qu'il n'a jamais quitté sa forme d'ours. Le tavernier trouvait juste étrange qu'un ours paie avec le sourire.",
    defi: "Vote à la majorité : quelle sera la première zone explorée ensemble ?\n\nLe perdant doit écrire un poème sur le perdant d'avant.",
  },
  {
    date: new Date(2026, 9, 23),
    icone: "🥘",
    categorie: "Recette",
    titre: "Soupe des Marécages d'Âpreflange",
    contenu:
      "Recette de survie des expéditions perdues :\n\n• 1 courge butternut\n• 2 carottes, 1 oignon\n• Lait de coco, curry\n\nCouper, bouillir, mixer. Se consomme avec des bottes mouillées et une monture qui nage pas.",
    defi: "Le groupe élit la soupe officielle du lancement. La perdante sera bannie d'Azeroth à vie.",
  },
  {
    date: new Date(2026, 9, 24),
    icone: "😄",
    categorie: "Citation",
    titre: "Citation du jour",
    contenu:
      "« Fear breaks on damage. » — Le prêtre, pendant que le raid leader hurle.\n\nUn classique qui n'a jamais cessé d'être drôle en 20 ans.",
    defi: "Raconte ta pire déconnexion en raid. La plus dramatique reçoit le trophée du Lag.",
  },
  {
    date: new Date(2026, 9, 25),
    icone: "🍹",
    categorie: "Boisson",
    titre: "Thé glacé de Darnassus",
    contenu:
      "Pour les elfes stressés par la file d'attente :\n\n• Thé vert refroidi\n• Menthe fraîche\n• Miel, citron\n• Une feuille de laurier « pour la chance » (aucune preuve, mais on y croit)\n\nÀ siroter en attendant le fameux écran « You are 487th in the queue ».",
    defi: "Pronostic : combien de minutes de file d'attente le 5 au soir ? Le plus proche gagne le choix du premier spot de farm.",
  },
  {
    date: new Date(2026, 9, 26),
    icone: "💡",
    categorie: "Astuce",
    titre: "Check-list J-10",
    contenu:
      "Plus que 10 jours ! Vérifie :\n\n✓ Addons à jour\n✓ Discord fonctionnel\n✓ Stock de snacks et boissons\n✓ Personnage planifié\n✓ congé posé pour le 5 (on ne jugera pas)\n\nNon, le ménage ne compte pas comme préparation.",
    defi: "Poste ta check-list cochée en photo. Le plus organisé reçoit le titre d'« Intendant de la guilde ».",
  },
  {
    date: new Date(2026, 9, 27),
    icone: "📖",
    categorie: "Lore",
    titre: "Le savais-tu ?",
    contenu:
      "Le lion de l'Alliance est inspiré des blasons de chevalerie. Quand Hurlevent s'illumine de bleu et d'or, c'est toute une tradition qui brille.\n\nAujourd'hui, portez du bleu et de l'or. Ordre du calendrier. 🛡️",
    defi: "Porte du bleu et de l'or aujourd'hui et poste la preuve. L'Alliance ne négocie pas.",
  },
  {
    date: new Date(2026, 9, 28),
    icone: "🗿",
    categorie: "Lore",
    titre: "Le savais-tu ?",
    contenu:
      "Les statues géantes à l'entrée de Hurlevent représentent les héros de la Deuxième Guerre. On passe devant à chaque fois qu'on entre en ville.\n\nAprès toutes ces années, la moitié des joueurs ne les a jamais regardées en face. Corrigeons ça aujourd'hui.",
    defi: "Chacun poste le gif qui représente le mieux son niveau d'impatience.\n\nCelui qui poste un gif de murloc gagne automatiquement, on ne fait pas les règles, on les respecte.",
  },
  {
    date: new Date(2026, 9, 29),
    icone: "🎂",
    categorie: "Recette",
    titre: "Sacrécœur de l'Aventure",
    contenu:
      "Le dessert de la dernière semaine ! Un sacrécœur... mais en cake :\n\n• Génoise au chocolat\n• Fourrage framboise\n• Nappage blond (caramel)\n\nDécorer d'une épée en sucre. Manger avec gravité et un minimum de révérence.",
    defi: "Chacun propose le dessert officiel du lancement, on vote. La recette gagnante sera servie le 5.",
  },
  {
    date: new Date(2026, 9, 30),
    icone: "😄",
    categorie: "Blague",
    titre: "Fin du mois",
    contenu:
      "Dernière case de septembre ! Un mois entier derrière nous, et tout octobre à déguster.\n\nCe soir, on ne parle plus que de builds, de macros et de qui sera le premier à tomber du lit le 5 novembre. Spoiler : ce sera le druide.",
    defi: "Chacun poste son année de début sur WoW. Le doyen de la guilde reçoit le respect. Et rien d'autre.",
  },
  {
    date: new Date(2026, 9, 31),
    icone: "🥂",
    categorie: "Boisson",
    titre: "Champagne d'Halloween",
    contenu:
      "Le dernier jour d'octobre — et accessoirement Halloween — protocole officiel :\n\n• Une coupe de champagne (ou de limonade dorée, c'est l'Alliance, on accepte tout le monde)\n• Un toast d'entraînement — le vrai, celui de la veillée, c'est dans quatre jours\n• Se coucher DIRECT après. C'est un ordre.\n\nPour l'Alliance ! 🏰",
    defi: "Déguise ton personnage (ou ton avatar Discord) pour Halloween et poste le résultat. Le plus terrifiant gagne.",
  },
  {
    date: new Date(2026, 10, 1),
    icone: "🌅",
    categorie: "Citation",
    titre: "Jour J — 4",
    contenu:
      "« Fait par des nerds, pour des nerds. » — La seule description honnête d'un serveur de guilde\n\nQuatre jours. La Horde ne sait pas ce qui l'attend. Nous non plus, mais avec plus de style.",
    defi: "Chacun poste sa spécialité de nerd (jeu, film, série, jeu de société). On dresse l'arbre de compétences de la guilde.",
  },
  {
    date: new Date(2026, 10, 2),
    icone: "⚔️",
    categorie: "Citation",
    titre: "Jour J — 3",
    contenu:
      "« Le monde sera brisé, mais pas notre amitié. » (Probablement un nain, enfin j'espère)\n\nTrois jours. Respirez. Les héros se reposent avant la bataille.",
    defi: "Écris un mot gentil au prochain qui se connectera après toi dans le groupe. Sans contexte, c'est encore mieux.",
  },
  {
    date: new Date(2026, 10, 3),
    icone: "🔥",
    categorie: "Citation",
    titre: "Jour J — 2",
    contenu:
      "« Vous n'êtes toujours pas préparés, mais vous êtes prêts. » — Un raid entier, ce matin\n\nDernier check : addons, snacks, amour de l'aventure. On se revoit dans Azeroth. 💙",
    defi: "Poste ton écran de chargement WoW préféré, toutes versions confondues. Le plus nostalgique gagne.",
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
    defi: "Le premier screenshot de toute la guilde sur la même image, dans Azeroth. Ce sera notre première épopée.",
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
