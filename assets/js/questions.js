const questions = [
  {
    text: "Qui est le père de Naruto Uzumaki ?",
    answers: ["Minato Namikaze", "Hashirama Senju", "Tobirama Senju", "Madara Uchiha"],
    hint: "Son surnom est 'L'Éclair Jaune de Konoha'.",
    correct: 0,
    timeLimit: 10
  },
  {
    text: "Quel est le nom complet de Sasuke ?",
    answers: ["Sasuke Uchiha", "Sasuke Uzumaki", "Sasuke Hyuga", "Sasuke Senju"],
    hint: "C'est un membre du clan Uchiha.",
    correct: 0,
    timeLimit: 10
  },
  {
    text: "Quel est le Pokémon numéro 25 dans le Pokédex ?",
    answers: ["Bulbizarre", "Salamèche", "Carapuce", "Pikachu"],
    hint: "Il est l'emblème de la franchise Pokémon.",
    correct: 3,
    timeLimit: 10
  },
  {
    text: "Quelle pierre permet d'évoluer Évoli en Pyroli ?",
    answers: ["Pierre Eau", "Pierre Feu", "Pierre Foudre", "Pierre Plante"],
    hint: "Elle est rouge et brûlante.",
    correct: 1,
    timeLimit: 10
  },
  {
    text: "Qui est considéré comme l'inventeur du World Wide Web ?",
    answers: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Mark Zuckerberg"],
    hint: "Il a inventé le web en 1989.",
    correct: 1,
    timeLimit: 10
  },
  {
    text: "Quel est le langage de balisage standard pour créer des pages web ?",
    answers: ["HTML", "CSS", "JavaScript", "Python"],
    hint: "Il est utilisé pour structurer le contenu sur le web.",
    correct: 0,
    timeLimit: 10
  },
  {
    text: "Quel est le nom du dragon de Daenerys qui est ressuscité par le Roi de la Nuit ?",
    answers: ["Drogon", "Rhaegal", "Viserion", "Balerion"],
    hint: "Il est nommé d'après le frère de Daenerys.",
    correct: 2,
    timeLimit: 10
  },
  {
    text: "Qui est surnommé 'Le Régicide' dans Game of Thrones ?",
    answers: ["Jaime Lannister", "Tyrion Lannister", "Joffrey Baratheon", "Stannis Baratheon"],
    hint: "Il a tué le roi fou, Aerys II Targaryen.",
    correct: 0,
    timeLimit: 10
  },
  {
    text: "Quel est le nom du démon renard scellé en Naruto ?",
    answers: ["Shukaku", "Gyuki", "Kurama", "Matatabi"],
    hint: "Il a neuf queues.",
    correct: 2,
    timeLimit: 10
  },
  {
    text: "Qui est le sensei de l'équipe 7 ?",
    answers: ["Kakashi Hatake", "Iruka Umino", "Jiraiya", "Orochimaru"],
    hint: "Il porte toujours un masque sur son visage.",
    correct: 0,
    timeLimit: 10
  },
  {
    text: "Quel est le type principal de Mewtwo ?",
    answers: ["Eau", "Feu", "Psy", "Électrique"],
    hint: "Il utilise des attaques télékinésiques.",
    correct: 2,
    timeLimit: 10
  },
  {
    text: "Quelle est l'évolution finale de Salamèche ?",
    answers: ["Reptincel", "Dracaufeu", "Draco", "Dracolosse"],
    hint: "Il devient un puissant dragon de feu.",
    correct: 1,
    timeLimit: 10
  },
  {
    text: "Quel est le moteur de recherche le plus utilisé au monde ?",
    answers: ["Bing", "Yahoo", "Google", "DuckDuckGo"],
    hint: "Son nom est devenu synonyme de 'chercher en ligne'.",
    correct: 2,
    timeLimit: 10
  },
  {
    text: "Quelle est la taille maximale d'un URL ?",
    answers: ["1024 caractères", "2048 caractères", "4096 caractères", "8192 caractères"],
    hint: "C'est une des deux plus grandes tailles proposées.",
    correct: 1,
    timeLimit: 10
  },
  {
    text: "Quel est le nom du continent principal où se déroulent les événements de Game of Thrones ?",
    answers: ["Westeros", "Essos", "Sothoryos", "Ulthos"],
    hint: "C'est là où se trouvent le Trône de Fer et les Sept Royaumes.",
    correct: 0,
    timeLimit: 10
  },
  {
    text: "Quel est le nom de l'équipe de Kakashi Hatake ?",
    answers: ["Équipe 7", "Équipe 8", "Équipe 9", "Équipe 10"],
    hint: "Elle est composée de Naruto, Sasuke et Sakura.",
    correct: 0,
    timeLimit: 10
  },
  {
    text: "Quel est le nom du village caché de Naruto ?",
    answers: ["Kiri", "Iwa", "Konoha", "Suna"],
    hint: "Son symbole est une feuille.",
    correct: 2,
    timeLimit: 10
  },
  {
    text: "Quelle est l'évolution de Pikachu ?",
    answers: ["Raichu", "Pichu", "Evoli", "Bulbizarre"],
    hint: "Il devient plus puissant et plus orange.",
    correct: 0,
    timeLimit: 10
  },
  {
    text: "Quel est le type de Salamèche ?",
    answers: ["Eau", "Feu", "Plante", "Électrique"],
    hint: "Il crache du feu.",
    correct: 1,
    timeLimit: 10
  },
  {
    text: "Quel est le navigateur web le plus utilisé au monde ?",
    answers: ["Firefox", "Safari", "Google Chrome", "Edge"],
    hint: "C'est un produit de Google.",
    correct: 2,
    timeLimit: 10
  },
  {
    text: "Quelle est la signification de l'acronyme 'HTML' ?",
    answers: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Home Text Markup Language"],
    hint: "Il est utilisé pour structurer les pages web.",
    correct: 0,
    timeLimit: 10
  },
  {
    text: "Qui est l'auteur des livres Game of Thrones ?",
    answers: ["J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling", "Stephen King"],
    hint: "Ses initiales sont G.R.R.M.",
    correct: 1,
    timeLimit: 10
  },
  {
    text: "Quelle maison a pour emblème un cerf couronné ?",
    answers: ["Maison Stark", "Maison Targaryen", "Maison Lannister", "Maison Baratheon"],
    hint: "Son slogan est 'Ours is the Fury'.",
    correct: 3,
    timeLimit: 10
  },
  {
    text: "Qui est le créateur de Naruto ?",
    answers: ["Akira Toriyama", "Eiichiro Oda", "Masashi Kishimoto", "Tite Kubo"],
    hint: "Il a également créé Boruto.",
    correct: 2,
    timeLimit: 10
  },
  {
    text: "Quelle technique utilise Naruto pour créer des clones ?",
    answers: ["Chidori", "Rasengan", "Kage Bunshin no Jutsu", "Amaterasu"],
    hint: "Elle permet de créer des clones de l'ombre.",
    correct: 2,
    timeLimit: 10
  },
  {
    text: "Quel est le type principal de Dracolosse ?",
    answers: ["Dragon", "Électrique", "Glace", "Psy"],
    hint: "C'est un dragon légendaire.",
    correct: 0,
    timeLimit: 10
  },
  {
    text: "Quel est le nom du professeur qui donne le premier Pokémon au joueur dans les jeux de la première génération ?",
    answers: ["Professeur Platane", "Professeur Orme", "Professeur Chen", "Professeur Seko"],
    hint: "Son nom commence par la lettre 'C'.",
    correct: 2,
    timeLimit: 10
  },
  {
    text: "Quel est le format d'image le plus couramment utilisé sur le web ?",
    answers: ["JPEG", "PNG", "GIF", "BMP"],
    hint: "Il est souvent utilisé pour les photos.",
    correct: 0,
    timeLimit: 10
  },
  {
    text: "Quel est le langage de programmation principalement utilisé pour créer des applications web dynamiques ?",
    answers: ["Python", "JavaScript", "Ruby", "C++"],
    hint: "Il est souvent utilisé avec HTML et CSS.",
    correct: 1,
    timeLimit: 10
  },
  {
    text: "Quel est le métal utilisé pour forger les épées légendaires comme Glace et Longclaw ?",
    answers: ["Acier de Valyrie", "Acier de Westeros", "Acier Inoxydable", "Acier Sombre"],
    hint: "Il vient de Valyria.",
    correct: 0,
    timeLimit: 10
  }
];

export default questions;