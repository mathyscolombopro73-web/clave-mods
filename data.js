/* CLAVE MODS — données du site */
window.CLAVE_DATA = {

  // -------- COLLECTIONS (3) --------
  collections: [
    {
      id: "royal-oak",
      name: "Royal Oak",
      sub: "Boîtier tonneau · lunette octogonale · bracelet intégré",
      count: 6,
      photo: "uploads/collection royal oak.png",
      tag: "Architecte",
      url: "royal-oak.html",
    },
    {
      id: "nautilus",
      name: "Nautilus",
      sub: "Carrure coussin · maillons sculptés · cadran horizontal",
      count: 5,
      photo: "assets/collections/nautilus.png",
      tag: "Iconique",
      url: "nautilus.html",
    },
    {
      id: "date-just",
      name: "Date Just",
      sub: "Lunette cannelée · bracelet jubilé · cadran daté",
      count: 11,
      photo: "assets/collections/date-just.png",
      tag: "Élégance",
      url: "date-just.html",
    },
  ],

  // -------- PRODUCTS (22) — source unique --------
  products: [
    /* ── Royal Oak ── */
    { ref:"CLM-019", collection:"Royal Oak", collectionHref:"royal-oak.html", name:"Squelette Noir",      desc:"Cadran squelette ouvert · boîtier full-black DLC · calibre NH38",                              price:150, badge:"Best Seller", stock:"Sur commande", photo:"input/royal oak/squellette noir royal oak.png",                       objPos:"center center", mouvement:"Seiko NH38 — Squelette automatique · 24 rubis",       boitier:"Acier 316L · finition full-black DLC",       bracelet:"Intégré acier — finition DLC noire",         etancheite:"100 mètres / 10 ATM", verre:"Saphir bombé traité anti-reflet", garantie:"3 ans — Atelier CLAVE, Toulouse" },
    { ref:"CLM-024", collection:"Royal Oak", collectionHref:"royal-oak.html", name:"Tiffany Blue",        desc:"Cadran soleillé bleu Tiffany · acier brossé givré · calibre NH35",                            price:130, badge:"Best Seller", stock:"Sur commande", photo:"input/royal oak/tifanny blue royal oak.png",                         objPos:"center center", mouvement:"Seiko NH35 — Automatique · 24 rubis",          boitier:"Acier 316L brossé givré",                    bracelet:"Intégré acier brossé givré",                etancheite:"100 mètres / 10 ATM", verre:"Saphir bombé traité anti-reflet", garantie:"3 ans — Atelier CLAVE, Toulouse" },
    { ref:"CLM-025", collection:"Royal Oak", collectionHref:"royal-oak.html", name:"Rosé Arabique",       desc:"Cadran rose soleillé · chiffres arabes · acier brossé · NH35",                               price:135, badge:"Nouveau",     stock:"Sur commande", photo:"input/royal oak/rose royal oak.png",                                  objPos:"center center", mouvement:"Seiko NH35 — Automatique · 24 rubis",          boitier:"Acier 316L brossé",                          bracelet:"Intégré acier brossé",                      etancheite:"100 mètres / 10 ATM", verre:"Saphir bombé traité anti-reflet", garantie:"3 ans — Atelier CLAVE, Toulouse" },
    { ref:"CLM-026", collection:"Royal Oak", collectionHref:"royal-oak.html", name:"Blanc Élégance",      desc:"Cadran blanc chevrons · boîtier PVD noir · 100m · NH35",                                     price:130, badge:null,          stock:"Sur commande", photo:"input/royal oak/blanc royal oak.png",                                 objPos:"center center", mouvement:"Seiko NH35 — Automatique · 24 rubis",          boitier:"Acier 316L · PVD noir",                      bracelet:"Intégré PVD noir",                          etancheite:"100 mètres / 10 ATM", verre:"Saphir bombé traité anti-reflet", garantie:"3 ans — Atelier CLAVE, Toulouse" },
    { ref:"CLM-027", collection:"Royal Oak", collectionHref:"royal-oak.html", name:"Black & White",       desc:"Cadran blanc · boîtier full-black PVD · index acier · NH35",                                 price:140, badge:null,          stock:"Sur commande", photo:"input/royal oak/black and white royal oak.png",                       objPos:"center center", mouvement:"Seiko NH35 — Automatique · 24 rubis",          boitier:"Acier 316L · full-black PVD",                bracelet:"Intégré full-black PVD",                    etancheite:"100 mètres / 10 ATM", verre:"Saphir bombé traité anti-reflet", garantie:"3 ans — Atelier CLAVE, Toulouse" },
    { ref:"CLM-028", collection:"Royal Oak", collectionHref:"royal-oak.html", name:"Noir Or Rose",        desc:"Cadran noir chevrons · boîtier PVD · index or rose · NH35",                                 price:145, badge:null,          stock:"Sur commande", photo:"input/royal oak/black royal oak.png",                                 objPos:"center center", mouvement:"Seiko NH35 — Automatique · 24 rubis",          boitier:"Acier 316L · PVD or rose",                   bracelet:"Intégré PVD or rose",                       etancheite:"100 mètres / 10 ATM", verre:"Saphir bombé traité anti-reflet", garantie:"3 ans — Atelier CLAVE, Toulouse" },
    /* ── Nautilus ── */
    { ref:"CLM-031", collection:"Nautilus",  collectionHref:"nautilus.html",  name:"Bleu Marine",         desc:"Cadran bleu soleillé · lunette biseautée · bracelet intégré acier · NH35",                   price:130, badge:"Best Seller", stock:"Sur commande", photo:"input/nautilus/best seller nautilus.png",                            objPos:"75% center",    mouvement:"Seiko NH35 — Automatique · 24 rubis",          boitier:"Acier 316L brossé-poli",                     bracelet:"Intégré acier brossé-poli",                 etancheite:"100 mètres / 10 ATM", verre:"Saphir bombé traité anti-reflet", garantie:"3 ans — Atelier CLAVE, Toulouse" },
    { ref:"CLM-032", collection:"Nautilus",  collectionHref:"nautilus.html",  name:"Noir Classique",      desc:"Cadran noir soleillé · lunette biseautée · acier brossé poli · NH35",                        price:125, badge:null,          stock:"Sur commande", photo:"input/nautilus/nautilus classique.png",                              objPos:"center center", mouvement:"Seiko NH35 — Automatique · 24 rubis",          boitier:"Acier 316L brossé poli",                     bracelet:"Intégré acier brossé poli",                 etancheite:"100 mètres / 10 ATM", verre:"Saphir bombé traité anti-reflet", garantie:"3 ans — Atelier CLAVE, Toulouse" },
    { ref:"CLM-034", collection:"Nautilus",  collectionHref:"nautilus.html",  name:"Open Heart Or Rose",  desc:"Cadran chocolat soleillé · boîtier & bracelet full PVD or rose · guichet squelette · NH38",  price:140, badge:"Nouveau",     stock:"Sur commande", photo:"input/nautilus/open heart rose gold.png",                            objPos:"center center", mouvement:"Seiko NH38 — Squelette automatique · 24 rubis",       boitier:"Full PVD or rose",                           bracelet:"Intégré full PVD or rose",                  etancheite:"100 mètres / 10 ATM", verre:"Saphir bombé traité anti-reflet", garantie:"3 ans — Atelier CLAVE, Toulouse" },
    { ref:"CLM-035", collection:"Nautilus",  collectionHref:"nautilus.html",  name:"Or Rose Sport",       desc:"Open heart · full PVD or rose · bracelet élastomère · étanchéité 100m · NH38",               price:145, badge:null,          stock:"Sur commande", photo:"input/nautilus/seiko open heart rosr gold bracelet okastique.png", objPos:"75% center",    mouvement:"Seiko NH38 — Squelette automatique · 24 rubis",       boitier:"Full PVD or rose",                           bracelet:"Élastomère noir haute résistance",           etancheite:"100 mètres / 10 ATM", verre:"Saphir bombé traité anti-reflet", garantie:"3 ans — Atelier CLAVE, Toulouse" },
    { ref:"CLM-051", collection:"Nautilus",  collectionHref:"nautilus.html",  name:"Lagune Ouverte",      desc:"Cadran bleu nuit · cœur visible NH38 · bracelet intégré acier",                             price:150, badge:null,          stock:"Sur commande", photo:"assets/lookbook/lookbook-02.png",                                    objPos:"center center", mouvement:"Seiko NH38 — Automatique · 24 rubis · cœur visible", boitier:"Acier 316L brossé",                          bracelet:"Acier intégré brossé poli",                 etancheite:"100 mètres / 10 ATM", verre:"Saphir bombé traité anti-reflet", garantie:"3 ans — Atelier CLAVE, Toulouse" },
    /* ── Date Just ── */
    { ref:"CLM-038", collection:"Date Just", collectionHref:"date-just.html", name:"Bicolore Rose",       desc:"Cadran ivoire · bracelet acier & or rose · index dorés · lunette cannelée · NH35",           price:120, badge:null,          stock:"Sur commande", photo:"assets/lookbook/lookbook-04.png",                                    objPos:"center center", mouvement:"Seiko NH35 — Automatique · 24 rubis",          boitier:"Acier 316L & or rose",                       bracelet:"Jubilé acier & or rose",                    etancheite:"100 mètres / 10 ATM", verre:"Saphir bombé traité anti-reflet", garantie:"3 ans — Atelier CLAVE, Toulouse" },
    { ref:"CLM-041", collection:"Date Just", collectionHref:"date-just.html", name:"Sakura",              desc:"Cadran soleillé rose · chiffres arabes · lunette lisse · bracelet jubilé · NH35",            price:120, badge:"Nouveau",     stock:"Sur commande", photo:"assets/lookbook/lookbook-01.png",                                    objPos:"center center", mouvement:"Seiko NH35 — Automatique · 24 rubis",          boitier:"Acier 316L poli",                            bracelet:"Jubilé acier poli",                         etancheite:"100 mètres / 10 ATM", verre:"Saphir bombé traité anti-reflet", garantie:"3 ans — Atelier CLAVE, Toulouse" },
    { ref:"CLM-042", collection:"Date Just", collectionHref:"date-just.html", name:"Sahara Rosé",         desc:"Cadran rose satiné · index bâtons dorés · bracelet jubilé bicolore · NH35",                  price:110, badge:"Best Seller", stock:"Sur commande", photo:"assets/bestsellers/bs-05-sahara-rose.png",                          objPos:"center center", mouvement:"Seiko NH35 — Automatique · 24 rubis",          boitier:"Acier 316L",                                 bracelet:"Jubilé bicolore acier & or rose",            etancheite:"100 mètres / 10 ATM", verre:"Saphir bombé traité anti-reflet", garantie:"3 ans — Atelier CLAVE, Toulouse" },
    { ref:"CLM-043", collection:"Date Just", collectionHref:"date-just.html", name:"Vert Sapin",          desc:"Cadran vert sapin soleillé · index bâtons · lunette fluted · bracelet jubilé acier · NH35",   price:130, badge:null,          stock:"Sur commande", photo:"input/date Just/vert-sapin.png",                                    objPos:"center center", mouvement:"Seiko NH35 — Automatique · 24 rubis",          boitier:"Acier 316L brossé",                          bracelet:"Jubilé acier brossé",                       etancheite:"100 mètres / 10 ATM", verre:"Saphir bombé traité anti-reflet", garantie:"3 ans — Atelier CLAVE, Toulouse" },
    { ref:"CLM-044", collection:"Date Just", collectionHref:"date-just.html", name:"Azur",                desc:"Cadran bleu glacier · index arabes argentés · lunette lisse · bracelet jubilé · NH35",       price:120, badge:null,          stock:"Sur commande", photo:"assets/lookbook/lookbook-03.png",                                    objPos:"center center", mouvement:"Seiko NH35 — Automatique · 24 rubis",          boitier:"Acier 316L poli",                            bracelet:"Jubilé acier poli",                         etancheite:"100 mètres / 10 ATM", verre:"Saphir bombé traité anti-reflet", garantie:"3 ans — Atelier CLAVE, Toulouse" },
    { ref:"CLM-045", collection:"Date Just", collectionHref:"date-just.html", name:"Sahara Lagon",        desc:"Cadran turquoise satiné · index bâtons dorés · bracelet jubilé bicolore · NH35",             price:110, badge:null,          stock:"Sur commande", photo:"assets/bestsellers/bs-06-sahara-lagon.png",                         objPos:"center center", mouvement:"Seiko NH35 — Automatique · 24 rubis",          boitier:"Acier 316L",                                 bracelet:"Jubilé bicolore acier & or rose",            etancheite:"100 mètres / 10 ATM", verre:"Saphir bombé traité anti-reflet", garantie:"3 ans — Atelier CLAVE, Toulouse" },
    { ref:"CLM-046", collection:"Date Just", collectionHref:"date-just.html", name:"Noir Arabe PVD",      desc:"Cadran noir · index arabes orientaux · full PVD noir · bracelet jubilé · NH35",             price:145, badge:"Limitée",     stock:"Sur commande", photo:"input/date Just/noir-arabe-pvd.png",                                objPos:"center center", mouvement:"Seiko NH35 — Automatique · 24 rubis",          boitier:"Full PVD noir",                              bracelet:"Jubilé PVD noir",                           etancheite:"100 mètres / 10 ATM", verre:"Saphir bombé traité anti-reflet", garantie:"3 ans — Atelier CLAVE, Toulouse" },
    { ref:"CLM-047", collection:"Date Just", collectionHref:"date-just.html", name:"Royal Blue Arabe",    desc:"Cadran bleu soleillé · index arabes · guichet date cyclope · bracelet jubilé · NH35",       price:135, badge:null,          stock:"Sur commande", photo:"input/date Just/arabic royal blue.png",                             objPos:"center center", mouvement:"Seiko NH35 — Automatique · 24 rubis",          boitier:"Acier 316L poli",                            bracelet:"Jubilé acier poli",                         etancheite:"100 mètres / 10 ATM", verre:"Saphir bombé traité anti-reflet", garantie:"3 ans — Atelier CLAVE, Toulouse" },
    { ref:"CLM-048", collection:"Date Just", collectionHref:"date-just.html", name:"Vert Romain Or Rose", desc:"Cadran vert forêt · chiffres romains dorés · boîtier & bracelet full PVD or rose · NH35",  price:140, badge:"Nouveau",     stock:"Sur commande", photo:"input/date Just/vert-romain-or-rose.png",                           objPos:"center center", mouvement:"Seiko NH35 — Automatique · 24 rubis",          boitier:"Full PVD or rose",                           bracelet:"Jubilé PVD or rose",                        etancheite:"100 mètres / 10 ATM", verre:"Saphir bombé traité anti-reflet", garantie:"3 ans — Atelier CLAVE, Toulouse" },
    { ref:"CLM-049", collection:"Date Just", collectionHref:"date-just.html", name:"Blanc Arabique",      desc:"Cadran blanc · index arabes orientaux · lunette fluted · bracelet jubilé acier · NH35",     price:130, badge:null,          stock:"Sur commande", photo:"input/date Just/blanc-arabique.png",                                objPos:"center center", mouvement:"Seiko NH35 — Automatique · 24 rubis",          boitier:"Acier 316L poli",                            bracelet:"Jubilé acier poli",                         etancheite:"100 mètres / 10 ATM", verre:"Saphir bombé traité anti-reflet", garantie:"3 ans — Atelier CLAVE, Toulouse" },
    { ref:"CLM-050", collection:"Date Just", collectionHref:"date-just.html", name:"Ardoise Oyster",      desc:"Cadran ardoise soleillé · index bâtons · lunette fluted · bracelet oyster acier · NH35",    price:130, badge:null,          stock:"Sur commande", photo:"input/date Just/ardoise-oyster.png",                                objPos:"center center", mouvement:"Seiko NH35 — Automatique · 24 rubis",          boitier:"Acier 316L brossé",                          bracelet:"Oyster acier brossé",                       etancheite:"100 mètres / 10 ATM", verre:"Saphir bombé traité anti-reflet", garantie:"3 ans — Atelier CLAVE, Toulouse" },
  ],

  // -------- BESTSELLERS (6) --------
  bestsellers: [
    { id: "squelette-noir", name: "Squelette Noir", ref: "CLM-019", price: 150, oldPrice: null, tag: "Royal Oak",  badge: null, photo: "input/royal oak/squellette noir royal oak.png",  objPos: "75% center",    stock: "Sur commande" },
    { id: "bleu-glacier",   name: "Bleu Glacier",   ref: "CLM-024", price: 130, oldPrice: null, tag: "Royal Oak",  badge: null, photo: "uploads/royal oak blue.png",                      objPos: "75% center",    stock: "Sur commande" },
    { id: "bleu-marine",    name: "Bleu Marine",    ref: "CLM-031", price: 130, oldPrice: null, tag: "Nautilus",   badge: null, photo: "input/nautilus/best seller nautilus.png",          objPos: "75% center",    stock: "Sur commande" },
    { id: "noir-classique", name: "Noir Classique", ref: "CLM-032", price: 125, oldPrice: null, tag: "Nautilus",   badge: null, photo: "input/nautilus/nautilus classique.png",            objPos: "center center", stock: "Sur commande" },
    { id: "sahara-rose",    name: "Sahara Rosé",    ref: "CLM-042", price: 110, oldPrice: null, tag: "Date Just",  badge: null, photo: "assets/bestsellers/bs-05-sahara-rose.png",         objPos: "center center", stock: "Sur commande" },
    { id: "sahara-lagon",   name: "Sahara Lagon",   ref: "CLM-045", price: 110, oldPrice: null, tag: "Date Just",  badge: null, photo: "assets/bestsellers/bs-06-sahara-lagon.png",        objPos: "center center", stock: "Sur commande" },
  ],

  // -------- LOOKBOOK (4) — visuels campagne --------
  lookbook: [
    {
      id: "sakura",
      name: "Sakura",
      sub: "Cadran soleillé rose · chiffres arabes",
      ref: "CLM-041",
      price: 120,
      tag: "Date Just",
      photo: "assets/lookbook/lookbook-01.png",
    },
    {
      id: "lagune-ouverte",
      name: "Lagune Ouverte",
      sub: "Cadran bleu nuit · cœur visible NH38",
      ref: "CLM-051",
      price: 150,
      tag: "Nautilus",
      photo: "assets/lookbook/lookbook-02.png",
    },
    {
      id: "azur",
      name: "Azur",
      sub: "Cadran bleu glacier · index arabes argentés",
      ref: "CLM-044",
      price: 120,
      tag: "Date Just",
      photo: "assets/lookbook/lookbook-03.png",
    },
    {
      id: "bicolore-rose",
      name: "Bicolore Rose",
      sub: "Bracelet acier / or rose · cadran ivoire",
      ref: "CLM-038",
      price: 120,
      tag: "Date Just",
      photo: "assets/lookbook/lookbook-04.png",
    },
  ],

  // -------- POURQUOI (3) --------
  pourquoi: [
    {
      n: "01",
      t: "Monté par moi, à la main",
      p: "Chaque montre passe une journée complète entre mes mains. Réglage, pose du cadran, contrôle d'amplitude — rien ne sort de l'atelier sans validation.",
    },
    {
      n: "02",
      t: "Pièces sélectionnées",
      p: "Mouvements Seiko NH35 et NH38 d'origine, cadrans usinés en France, verre saphir bombé traité anti-reflet. Aucun compromis sur les composants.",
    },
    {
      n: "03",
      t: "Style unique",
      p: "Pas deux pièces identiques. Vous choisissez le cadran, le boîtier, les aiguilles. Une montre qui n'existe qu'à un seul exemplaire — le vôtre.",
    },
  ],

  // -------- STATS --------
  stats: [
    { n: "50",   k: "Montres assemblées" },
    { n: "98%",  k: "Satisfaction client" },
    { n: "2 ans", k: "D'atelier à Toulouse" },
    { n: "3 ans", k: "De garantie" },
  ],

  // -------- FAQ --------
  faq: [
    {
      q: "Combien de temps pour recevoir ma montre ?",
      a: "Les pièces en stock partent sous 48h. Pour une configuration sur-mesure, comptez 2 à 3 semaines d'atelier — chaque montre est assemblée et réglée à la demande. Vous recevez un suivi photo à chaque étape.",
    },
    {
      q: "Comment se passe le paiement ?",
      a: "Pour toute pièce configurée sur-mesure, le paiement se fait en deux temps : un acompte de 70€ à la commande, qui lance la mise en atelier et la sélection des composants, puis le complément avant l'envoi de la montre. Les pièces disponibles en stock sont réglées en une seule fois — départ sous 48h.",
    },
    {
      q: "Quelle est la garantie ?",
      a: "Trois ans sur le mouvement et l'assemblage atelier. Les interventions sont gratuites et réalisées en interne, à Toulouse. Une révision complète est offerte au bout de dix-huit mois.",
    },
    {
      q: "Puis-je personnaliser entièrement ma montre ?",
      a: "Oui. Toutes nos références sont configurables : cadran, boîtier, lunette, aiguilles, couronne, bracelet. Pour une demande hors catalogue (gravure, cadran sur mesure), passez par la page Contact.",
    },
    {
      q: "Quels mouvements utilisez-vous ?",
      a: "Exclusivement des calibres Seiko : NH35 (automatique, 41h de réserve), NH38 (cadran ouvert), NH34 (GMT véritable) et NE15 (haut de gamme, finition décorée). Tous sont importés directement du Japon.",
    },
    {
      q: "Livrez-vous à l'étranger ?",
      a: "Livraison mondiale, assurée et suivie. Frais offerts en France et en UE à partir de 150€. Pour l'international, comptez 25€ et 5 à 7 jours ouvrés.",
    },
    {
      q: "D'où viennent les pièces ?",
      a: "Mouvements et carrures de base : Seiko (Japon). Cadrans, aiguilles, lunettes : ateliers partenaires en France, Suisse et Allemagne. Bracelets en cuir : tanneries françaises. La liste complète est sur la fiche produit.",
    },
    {
      q: "Acceptez-vous les retours ?",
      a: "Quatorze jours pour changer d'avis sur une pièce de stock. Les configurations sur-mesure ne sont pas reprises, mais nous proposons un échange de cadran ou de bracelet à prix coûtant pendant six mois.",
    },
  ],
};
