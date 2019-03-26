const besoins = {
    accesAuxDroits:[
        'Accompagnement aux démarches',
        'Documents administratifs',
        'Rédaction de courrier',
    ],
    alimentaire:[
        'Aide financière',
        'Colis alimentaire',
        'Epicerie alimentaire',
        'Distribution alimentaire',
    ],
    culture:[
        'Activité culturelle',
        'Entraide',
        'Animation sociale',
    ],
    devDurable:[
        'Économie d\'énergie',
    ],
    emploi:[
        'Recherche d\'emploi',
        'Information sur les droits',
        'Insertion',
    ],
    handicap:[
        'Association de soutien',
        'Drapeaux adoption',
    ],
    logement:[
        'Recherche de logement',
        'Demande de logement social',
        'Equipement / Travaux',
        'Déménagement',
        'Information sur les droits',
        'Hébergement d\'urgence',
        'Recherche d\'hébergement',
    ],
    loisirs:[
        'Vacances',
        'Centre aéré',
        'Activités sportive ou culturelle',
    ],
    parentalite:[
        'Soutien à la parentalité',
        'Education de prévention',
    ],
    petiteEnfance: [
        'Mode de garde',
        'Difficulté parentale',
        'Santé',
        'Scolarité',
    ],
    precarite:[
        'Accueil de jour',
        'Hébergement d\'urgence',
        'Aides alimentaires',
        'Vêtements',
        'Hygiène et soins',
        'Magasin solidaire',
    ],
    sante:[
        'Démarches',
        'Centres médicaux gratuits',
        'Addictions',
        'Enfance',
    ],
    senior: [
        'Lutte contre l\'isolement',
        'Besoins relatif au logement',
        'Demande d\'aire financière',
        'Loisirs',
        'Aide à domicile',
    ],
};
const tableauAssos = [
    ["NOM","","","adresse","adresse secondaire","acc\u00e8s Transports","num\u00e9ro","mail","description","grandes cat\u00e9gories","sous cat\u00e9grories","services","public accueilli","Horaires","","hommes\/femmes\/enfants","ages"],
    ["ALCOOLIQUES ANONYMES","45.7301763","4.8673558","101 Boulevard des Etats-Unis 69008 Lyon","Maison des associations","","09 69 39 40 20","","organisation de r\u00e9unions r\u00e9serv\u00e9e aux personnes ayant un probl\u00e8me d'alcool","SANTE","addiction","r\u00e9unions","tous","le jeudi de la 3\u00e8me semaine du mois \u00e0 19h30","","",""],
    ["AMICALE DU NID ","45.7699447","4.7990359","24 avenue Joann\u00e8s Masset 69009 Lyon","Les Passerelles","\u21d2 METRO : ligne D\nStation Gorge de Loup\n \n\u21d2 BUS : lignes 19, 66\nArr\u00eat Piscine de Vaise\n","04 78 27 28 20","","L\u2019Amicale du Nid accueille des femmes, des hommes, des personnes transidentitaires, en danger, ayant connu ou en situation de prostitution. L\u2019Amicale du Nid con\u00e7oit et anime \u00e9galement des formations et conduit des actions de pr\u00e9vention, notamment aupr\u00e8s des jeunes. Elle m\u00e8ne des recherches pour am\u00e9liorer les connaissances du ph\u00e9nom\u00e8ne prostitutionnel","PRECARITE","hebergement d'urgence","Va \u00e0 la rencontre des personnes sur les lieux de prostitution\nPropose des contacts via Internet\nAccueille dans ses \u00e9tablissements, quelle que soit la demande\nAccompagne les personnes, \u00e0 leur rythme et selon leur demande, dans une perspective d\u2019insertion socio-professionnelle\nPropose des h\u00e9bergements d\u2019urgence ou d\u2019insertion, des ateliers d\u2019adaptation \u00e0 la vie active, des logements adapt\u00e9s\n","femmes,  hommes,  personnes transidentitaires, en danger, ayant connu ou en situation de prostitution","\nLundi \u2013 Mardi \u2013 Mercredi \u2013 Vendredi\n9h00 > 12h30 \u2013 13h00 > 17h00\n \nJeudi\n14h00 > 17h00\n","","",""],
    ["ACCUEIL DE JOUR MAISON DE RODOLPHE (FNDSA)","45.7478090","4.8677063","5 rue Villon 69008 Lyon","","","","","Lieu d\u2019accueil inconditionnel et convivial pour une mise \u00e0 l\u2019abri en journ\u00e9e, proposant des actions d\u2019orientation et\/ou d\u2019accompagnement et des r\u00e9ponses aux besoins fondamentaux.","PRECARITE",""," R\u00e9fectoire\u00a0 \/ accompagnement social \/ r\u00e9f\u00e9rent RSA \/ point sant\u00e9 \/ acc\u00e8s \u00e0 l\u2019hygi\u00e8ne \/ collation \/ repas midi \/ vestiaire \/ buanderie \/ domiciliation postale \/ animations \/ biblioth\u00e8que.","Accueil inconditionnel de toute personne majeure en situation d\u2019exclusion, d\u2019errance, et de grande pr\u00e9carit\u00e9.","\u2022 Horaires : du lundi au vendredi de 7h45 \u00e0 15h.\n\u2022 Horaires hiver (1er novembre au 31 mars) : du lundi au vendredi de 7h \u00e0 17h.\n","","",""],
    ["ACCUEIL SAINT-VINCENT (FNDSA)","45.7593407","4.8258816","10 rue Belli\u00e8vre 69005 Lyon","","","","","Lieu d\u2019accueil inconditionnel et convivial pour une mise \u00e0 l\u2019abri en journ\u00e9e, proposant des actions d\u2019orientation et\/ou d\u2019accompagnement et des r\u00e9ponses aux besoins fondamentaux","PRECARITE","","Acc\u00e8s \u00e0 l\u2019hygi\u00e8ne \/ orientation \/ collation \/ vestiaire \/ buanderie.","Accueil inconditionnel de toute personne majeure en situation d\u2019exclusion, d\u2019errance, et de grande pr\u00e9carit\u00e9.","\u2022 Horaires : du lundi au vendredi de 8h30 \u00e0 11h.\n\u2022 Horaires hiver (1er novembre au 31 mars) : du lundi au vendredi de 8h30 \u00e0 11h, le samedi de 9h \u00e0 11h et le dimanche de 9h \u00e0 11h.\n","","",""],
    ["MEDECINS DU MONDE - CASO","45.7621376","4.8582439","11\/15 boulevard Vivier Merle 69003 Lyon","","","","","Centre d'accueil, de soinbs et d'orientation.","SANTE | PRECARITE","","Information et orientation | Prise en charge m\u00e9dicale | Pr\u00e9vention et \u00e9ducation \u00e0 la sant\u00e9 | Contraception et suivi de grossesse | D\u00e9pistage et vaccination | Entretiens psychologiques | Prise en charge sociale, juridique et aide dans les d\u00e9marches administratives | Distribution de mat\u00e9riel, de kits d'hygi\u00e8ne, de sacs de couchage, etc. | Recueil et analyse de donn\u00e9es pour soutenir notre plaidoyer | Pr\u00e9vention du cancer du col de l'ut\u00e9rus","","Lundi et vendredi | 9h00 - 11h00\n Mardi et mercredi | 13h30-16h30","","",""],
    ["MEDECINS DU MONDE - BUS","45.7505145","4.8286839","Place carnot 69002 Lyon","","","","","Bus de M\u00e9decins du Monde","SANTE | PRECARITE","","Information et orientation | Action mobile | Prise en charge m\u00e9dicale | D\u00e9pistage et vaccination | Prise en charge sociale, juridique et aide dans les d\u00e9marches administratives | Distribution de mat\u00e9riel, de kits d'hygi\u00e8ne, de sacs de couchage, etc. | Recueil et analyse de donn\u00e9es pour soutenir notre plaidoyer","","Mardi et jeudi | 19h-22h ","","",""],
    ["MEDECINS DU MONDE - BUS","45.7457626","4.8428022","Place Jean Mac\u00e9 69007 Lyon","","","","","Bus de M\u00e9decins du Monde","SANTE | PRECARITE","","Information et orientation | Action mobile | Prise en charge m\u00e9dicale | D\u00e9pistage et vaccination | Prise en charge sociale, juridique et aide dans les d\u00e9marches administratives | Distribution de mat\u00e9riel, de kits d'hygi\u00e8ne, de sacs de couchage, etc. | Recueil et analyse de donn\u00e9es pour soutenir notre plaidoyer","","Dimanche | 17h-20h ","","",""],
    ["LE JARDIN COUVERT","45.7550706","4.8448459","12 rue Auguste Lacroix 69003 Lyon","","","04 78 71 04 78","","Le Jardin Couvert est un espace de rencontre\n\nLe Jardin Couvert est un espace de jeux et de repos o\u00f9, \u00e0 travers rencontres et s\u00e9parations, des liens se tissent entre les enfants, les parents et les accueillants.\n\nCe passage d'un monde familial \u00e0 un monde d\u00e9j\u00e0 social constitue une exp\u00e9rience fondamentale pour les petits et pour les grands. L'exp\u00e9rience v\u00e9cue au Jardin Couvert, reconnue et symbolis\u00e9e, permet que des passerelles soient jet\u00e9es entre famille et soci\u00e9t\u00e9.","","","l'enfant, avec l'adulte qui l'accompagne, est accueilli dans un espace vaste et confortable o\u00f9 jouets, livres, trotteurs, toboggan, jeux d'eau, tableau \u00e0 dessin, bac \u00e0 sable sont mis \u00e0 sa dispositionUne participation aux frais de fonctionnement est demand\u00e9e. Elle manifeste l'int\u00e9r\u00eat port\u00e9 \u00e0 ce lieu par les usagers. Elle en permet la bonne tenueSur la base de 2 Euros par enfant et par passage, cette participation ne doit pas \u00eatre un emp\u00eachement \u00e0 la fr\u00e9quentation du Jardin Couvert.","Parents avec enfants de 4 ans et moins \nLa fr\u00e9quentation du Jardin Couvert ne se limite pas aux jeunes enfants et \u00e0 ceux qui les accompagnent. Les futurs parents y sont les bienvenus","tous les apr\u00e8s-midi du lundi au samedi de 14h30 \u00e0 18h30\u00a0","","",""],
    ["EMMAUS CONNECT","45.7377523","4.8522771","104, route de Vienne 69008 LYON","","Tramway T4 arr\u00eat Lyc\u00e9e Lumi\u00e8re \/ T2 arr\u00eat Route de Vienne\nBus C12 et Bus 35 arr\u00eat Benoit Bernard\nStation Velo\u2019v \u00ab Pierre Delore \u00bb","","","Pour que le num\u00e9rique profite \u00e0 tous et surtout aux personnes en pr\u00e9carit\u00e9 sociale, il est n\u00e9cessaire de leur fournir le \u00ab bagage num\u00e9rique minimum \u00bb indispensable \u00e0 leur autonomie. Celui-ci comprend: un acc\u00e8s solidaire aux outils num\u00e9riques et \u00e0 des solutions d\u2019acc\u00e8s r\u00e9guli\u00e8res et durables \u00e0 la t\u00e9l\u00e9phonie et Internet d\u2019une part, et la bonne connaissance des services num\u00e9riques utiles \u00e0 l\u2019insertion.","","","\n","","Mardi, mercredi, vendredi 9h \u2013 13h et 14h \u2013 18h Jeudi 14h \u2013 18h Samedi 10h \u2013 13h\nPERMANENCES CONNECT\u00c9ES (sur inscription) Mardi 16h30 \u2013 18h et 18h \u2013 19h30 | Mercredi 16h30 \u2013 18h et 18h \u2013 19h30 | Jeudi 16h30 \u2013 18h  | Vendredi 9h \u2013 10h30 et 10h30 \u2013 12h | Samedi 10h \u2013 13h","","",""],
    ["PIMMS LYON Etats-Unis","45.7322851","4.8638456","14 Rue des Serpolli\u00e8res, 69008 Lyon","","","","","Le PIMMS est une structure de m\u00e9diation sociale qui propose des services adapt\u00e9s aux habitants de la m\u00e9tropole et en particulier des QPV (Quartiers politiques de la ville). Les m\u00e9diateurs accueillent les habitants sur des points de proximit\u00e9 du territoire et peuvent aussi aller \u00e0 leur contact par t\u00e9l\u00e9phone, \u00e0 leur domicile ou sur des espaces publics tels que les bureaux de Poste, les Gares ou \u00e0 bord des trains. Le PIMMS propose \u00e9galement sur chacun des points d\u2019accueil, un espace num\u00e9rique permettant l\u2019acc\u00e8s aux services d\u00e9mat\u00e9rialis\u00e9s (ordinateurs, logiciels, acc\u00e8s \u00e0 internet, impressions\u2026). Le PIMMS s\u2019engage dans la professionnalisation de ses salari\u00e9s pour favoriser un retour \u00e0 un emploi durable. ","","","m\u00e9diation socaile | animation num\u00e9rique | tremplin professionnel","","sans RDV du lundi au vendredi de  9h \u00e0 12h et de 13h30 \u00e0 17h30 | Sur RDV pour les demandes de naturalisation fran\u00e7aise","","",""],
    ["PIMMS LYON Mermoz","45.7290017","4.8851324","34 Rue de Narvik, 69008 Lyon","","","","","Le PIMMS est une structure de m\u00e9diation sociale qui propose des services adapt\u00e9s aux habitants de la m\u00e9tropole et en particulier des QPV (Quartiers politiques de la ville). Les m\u00e9diateurs accueillent les habitants sur des points de proximit\u00e9 du territoire et peuvent aussi aller \u00e0 leur contact par t\u00e9l\u00e9phone, \u00e0 leur domicile ou sur des espaces publics tels que les bureaux de Poste, les Gares ou \u00e0 bord des trains. Le PIMMS propose \u00e9galement sur chacun des points d\u2019accueil, un espace num\u00e9rique permettant l\u2019acc\u00e8s aux services d\u00e9mat\u00e9rialis\u00e9s (ordinateurs, logiciels, acc\u00e8s \u00e0 internet, impressions\u2026). Le PIMMS s\u2019engage dans la professionnalisation de ses salari\u00e9s pour favoriser un retour \u00e0 un emploi durable. ","","","m\u00e9diation socaile | animation num\u00e9rique | tremplin professionnel","","sans RDV du lundi au vendredi de  9h \u00e0 12h et de 13h30 \u00e0 17h30 | Sur RDV pour les demandes de naturalisation fran\u00e7aise","","",""],
    ["PIMMS LYON Vaise","45.7726636","4.8051993","5 Place Dumas de Loire, 69009 Lyon","","","","","Le PIMMS est une structure de m\u00e9diation sociale qui propose des services adapt\u00e9s aux habitants de la m\u00e9tropole et en particulier des QPV (Quartiers politiques de la ville). Les m\u00e9diateurs accueillent les habitants sur des points de proximit\u00e9 du territoire et peuvent aussi aller \u00e0 leur contact par t\u00e9l\u00e9phone, \u00e0 leur domicile ou sur des espaces publics tels que les bureaux de Poste, les Gares ou \u00e0 bord des trains. Le PIMMS propose \u00e9galement sur chacun des points d\u2019accueil, un espace num\u00e9rique permettant l\u2019acc\u00e8s aux services d\u00e9mat\u00e9rialis\u00e9s (ordinateurs, logiciels, acc\u00e8s \u00e0 internet, impressions\u2026). Le PIMMS s\u2019engage dans la professionnalisation de ses salari\u00e9s pour favoriser un retour \u00e0 un emploi durable. ","","","m\u00e9diation socaile | animation num\u00e9rique | tremplin professionnel","","sans RDV du lundi au vendredi de  9h \u00e0 12h et de 13h30 \u00e0 17h30 | Sur RDV pour les demandes de naturalisation fran\u00e7aise","","",""],
    ["PETITS FRERES DES PAUVRES - accueil de Jour","45.7512683","4.8321153","38 quai du docteur Gailleton 69002 Lyon","","","","","Une \u00e9quipe d\u2019accueil des grands pr\u00e9caires et des isol\u00e9s \u00e2g\u00e9s de la rue","","","petit d\u00e9jeuner | douche | machine \u00e0 laver | temps de rencontre et d'\u00e9change","personnes de plus de 50 ans","lundi, mercredi et vendredi de 8h30 \u00e0 12h00","","",""],
    ["OREE AJD","45.7542488","4.8292622","6 rue d'auvergne 69002 lyon ","","","04 78 92 88 11","oree@fondation-ajd.com","L\u2019Or\u00e9e a pour mission l\u2019accueil en urgence de jeunes majeurs \u00e2g\u00e9s de 18 \u00e0 25 ans, (personnes seules ou en couple, avec ou sans enfant) en situation de rupture familiale et en grande difficult\u00e9 socioprofessionnelle.","","","h\u00e9bergement d'urgence | accueil de jour | sanitaires | laverie | banque alimentaire | domicliation | accompagnement renforc\u00e9 au logement, \u00e0 l'autonomie et \u00e0 la r\u00e9insertion","jeunes majeurs \u00e2g\u00e9s de 18 \u00e0 25 ans,  en situation de rupture familiale et en grande difficult\u00e9 socioprofessionnelle","","","",""],
    ["Forum r\u00e9fugi\u00e9s-Cosi ","45.7488339","4.8529001","326 rue Garibaldi 69003 Lyon","","","","","association\u00a0sans but lucratif\u00a0\u0153uvrant pour\u00a0l'accueil\u00a0des r\u00e9fugi\u00e9s, la\u00a0d\u00e9fense\u00a0du droit d'asile et la\u00a0promotion\u00a0de l\u2019\u00e9tat de droit, issue de la fusion en mai 2012, des associations Forum r\u00e9fugi\u00e9s et Cosi\u2013promouvoir et d\u00e9fendre les droits.\u00a0","","","accueil des demandeurs d\u2019asile et les r\u00e9fugi\u00e9s | domiciliation ","demandeurs d'asiles et r\u00e9fugi\u00e9s","","","",""],
    ["Agence locative sociale du rhone","45.7539689","4.8486875","250, rue de Cr\u00e9qui 69003 Lyon","","","04.78.95.22.49","","Interface entre des r\u00e9gies priv\u00e9es et des personnes qui rencontrent des difficult\u00e9s \u00e0 trouver un appartement. R\u00f4le de m\u00e9diation si ces personnes sont suffisamment autonomes pour b\u00e9n\u00e9ficier d'un logement de droit commun","LOGEMENT ","","","tous","","","",""],
    ["Association collective pour l'acces au logement","45.7547011","4.8489124","259, rue de Cr\u00e9qui 69003 Lyon","","","04.72.84.74.10","","Aides \u00e0 l'acc\u00e8s au logement des populations en difficult\u00e9 sur le d\u00e9partement du Rh\u00f4ne. Les demandes se font obligatoirement par l'interm\u00e9diaire d'un service social, public ou priv\u00e9","LOGEMENT ","","","tous","","","",""],
    ["Association departementale d'information sur le logement","45.7649134","4.8430501","9, rue Vauban 69006 Lyon","","","04.78.52.84.84","www.adil.org\/69","L'ADIL a pour mission de donner des conseils gratuits, neutres et personnalis\u00e9s, dans les domaines juridiques, financiers et fiscaux relatifs au logement","LOGEMENT ","Information sur les Droits","","tous","","","",""],
    ["Mairie du 1er arrondissement","45.7691420","4.8306090","place Sathonay - 69283 Lyon cedex 01","","Bus C13, C18, s6 et s12 -\u00a0Velo'v","04 72 98 54 04","http:\/\/www.mairie1.lyon.fr","mairie d'arrondissement","ACCES AUX DROITS | ENFANCE PETITE ENFANCE 6 LOGEMENT  |  SENIORS ","documents administratifs | demande de logement social | Mode de garde | scolarit\u00e9","d\u00e9p\u00f4t de dossier de demande de logement social | demande de place en cr\u00e8che | inscriptions scolaire | documents d'identit\u00e9 | d\u00e9marches d'\u00e9tat civil","habitant de l'arrondissement (sauf titre d'identit\u00e9 : tout public)","Horaires hors vacances scolaires :\no Lundi, mardi, mercredi et vendredi : 8h45 - 16h45\no Jeudi : 10h - 16h45\no Samedi : 9h30 - 12h\nHoraires vacances scolaires : \no Lundi, mardi, mercredi et vendredi : 8h45 - 12h30 et 13h45 - 16h45\no Jeudi : 10h - 12h30 et 13h45 -16h45\no Samedi : 9h30 - 12h avec un service restreint : seules les remises de titre (cartes d\u2019identit\u00e9s, passeports) , les reconnaissances et les c\u00e9r\u00e9monies de mariage sont assur\u00e9s.\n","","",""],
    ["Mairie du 2e arrondissement","45.7532670","4.8268565","2 rue d'Enghien - 69287 Lyon cedex 02","","M\u00e9tro A et bus s1","04 78 92 73 00","https:\/\/mairie2.lyon.","mairie d'arrondissement","ACCES AUX DROITS | ENFANCE PETITE ENFANCE 6 LOGEMENT  |  SENIORS ","documents administratifs | demande de logement social | Mode de garde | scolarit\u00e9","d\u00e9p\u00f4t de dossier de demande de logement social | demande de place en cr\u00e8che | inscriptions scolaire | documents d'identit\u00e9 | d\u00e9marches d'\u00e9tat civil","habitant de l'arrondissement (sauf titre d'identit\u00e9 : tout public)","Horaires hors vacances scolaires : \nDu lundi au vendredi : 8h45 - 16h45 sans interruption\nSamedi : 9h30 - 12h\nFermeture chaque jeudi de 12h \u00e0 14h \nHoraires vacances scolaires :\nDu lundi au vendredi : 8h45-12h30 et 13h45-16h45\nSamedi : 9h30-12h.\n","","",""],
    ["Mairie du 3e arrondissement","45.7602325","4.8490968","215 rue Duguesclin - 69423 Lyon cedex 03","18 rue Fran\u00e7ois Garcin 69003","M\u00e9tro B, tram T1, bus C9 et C13 -","04 78 95 83 50","http:\/\/www.mairie3.lyon.fr ","mairie d'arrondissement","ACCES AUX DROITS | ENFANCE PETITE ENFANCE 6 LOGEMENT  |  SENIORS ","documents administratifs | demande de logement social | Mode de garde | scolarit\u00e9","d\u00e9p\u00f4t de dossier de demande de logement social | demande de place en cr\u00e8che | inscriptions scolaire | documents d'identit\u00e9 | d\u00e9marches d'\u00e9tat civil","habitant de l'arrondissement (sauf titre d'identit\u00e9 : tout public)","Du lundi au vendredi : 8h45 - 16h45\nSamedi : 9h - 12h - pas d'accueil t\u00e9l\u00e9phonique pour le service carte d'identit\u00e9\/passeport\no Ouverture \u00e0 10h le premier mardi de chaque mois\no Service \u00e9tat civil : ferm\u00e9 tous les mardis matin\no Point Accueil Information Petite Enfance (PAIPE) ferm\u00e9 :\n- le mercredi apr\u00e8s -midi et le vendredi matin.\n- les jours de commission : en cas d'urgence, contacter le service par mail.\no Accueil sur rendez-vous pour le d\u00e9p\u00f4t d\u2019un dossier de mariage, la demande d\u2019un passeport ou d\u2019une carte nationale d\u2019identit\u00e9, la demande d\u2019un logement social\nHoraires pendant les vacances scolaires :\nDu lundi au vendredi : 8h45 - 12h30 et 13h45 - 16h45\nSamedi : 9h - 12h\n","","",""],
    ["Mairie du 4e arrondissement","45.7745471","4.8277372","133 boulevard de la Croix-Rousse - 69317 Lyon cedex 04","","04M\u00e9tro C (station Croix-Rousse) - bus C13, n\u00b045, s4 et s12 -","04 72 98 23 50","http:\/\/www.mairie4.lyon.fr","mairie d'arrondissement","ACCES AUX DROITS | ENFANCE PETITE ENFANCE 6 LOGEMENT  |  SENIORS ","documents administratifs | demande de logement social | Mode de garde | scolarit\u00e9","d\u00e9p\u00f4t de dossier de demande de logement social | demande de place en cr\u00e8che | inscriptions scolaire | documents d'identit\u00e9 | d\u00e9marches d'\u00e9tat civil","habitant de l'arrondissement (sauf titre d'identit\u00e9 : tout public)","\nHoraires hors vacances scolaires :\nDu lundi au vendredi :  8h45 - 16h45\nFermeture de 12h \u00e0 14h30 les premiers mardis de chaque mois\nSamedi : 9h30 - 12h \nHoraires vacances scolaires :\nDu lundi au vendredi : 8h45 - 12h15 et 13h45 - 16h45\nSamedi : 9h30 - 12h\n","","",""],
    ["Mairie du 5e arrondissement","45.7577539","4.8014601","14 rue Docteur Edmond Locard 69005","","www.tcl.fr","04 72 38 45 50","http:\/\/www.mairie5.lyon.fr","mairie d'arrondissement","ACCES AUX DROITS | ENFANCE PETITE ENFANCE 6 LOGEMENT  |  SENIORS ","documents administratifs | demande de logement social | Mode de garde | scolarit\u00e9","d\u00e9p\u00f4t de dossier de demande de logement social | demande de place en cr\u00e8che | inscriptions scolaire | documents d'identit\u00e9 | d\u00e9marches d'\u00e9tat civil","habitant de l'arrondissement (sauf titre d'identit\u00e9 : tout public)","Horaires hors vacances scolaires :\nLundi : 8h45 - 12h30 et 14h - 16h45\nLes mardis, mercredis et vendredis : 8h45 - 16h45\nJeudi : 8h45 - 18h\nSamedi : 9h-12h (Titres d\u2019identit\u00e9, \u00e9tat civil et \u00e9lections. Les autres services sont sur RDV uniquement).\nHoraires vacances scolaires :\nDu lundi au vendredi : 8h45 - 12h30 et 13h45 - 16h45\nSamedi : 9h - 12h (permanence uniquement pour les retraits de titres (CNI et passeports), ainsi que pour les c\u00e9r\u00e9monies de mariage)\nHoraires d\u2019\u00e9t\u00e9* :\nDu lundi au vendredi : 8h45 - 12h30 et 13h45 - 16h45\nSamedi : 9h - 12h (permanence uniquement pour les retraits de titres (CNI et passeports), ainsi que pour les c\u00e9r\u00e9monies de mariage)\n* La p\u00e9riode concern\u00e9e sera communiqu\u00e9e ult\u00e9rieurement.\nPasseport biom\u00e9trique et carte nationale d'identit\u00e9 :\nRendez-vous obligatoire entre 9h et 16h20\nSamedi matin de 9h \u00e0 11h40 (heure du dernier rendez-vous)\n","","",""],
    ["Mairie du 5e - annexe Vieux-Lyon ","45.7635388","4.8274742","5 place du Petit Coll\u00e8ge 69005 Lyon","","www.tcl.fr","04 78 42 13 81","http:\/\/www.mairie5.lyon.fr","mairie d'arrondissement","ACCES AUX DROITS | ENFANCE PETITE ENFANCE 6 LOGEMENT  |  SENIORS ","documents administratifs | demande de logement social | Mode de garde | scolarit\u00e9","d\u00e9p\u00f4t de dossier de demande de logement social | demande de place en cr\u00e8che | inscriptions scolaire | documents d'identit\u00e9 | d\u00e9marches d'\u00e9tat civil","habitant de l'arrondissement (sauf titre d'identit\u00e9 : tout public)","Horaires hors vacances scolaires :\nDu lundi au vendredi : 8h45-12h15 et 13h15-16h45\nSamedi : 9h-12h (tous les services propos\u00e9s la semaine sont assur\u00e9s)\nPas de permanence les jeudis soirs\n \n \nHoraires vacances scolaires :\nDu lundi au vendredi : 8h45-12h30 et 13h45-16h45\nSamedi : 9h-12h (ferm\u00e9e en \u00e9t\u00e9)\n \nPasseport biom\u00e9trique et carte nationale d'identit\u00e9 :\nRendez-vous obligatoire entre 9h et 16h20\nSamedi matin de 9h \u00e0 11h40 (heure du dernier rendez-vous\n","","",""],
    ["Mairie du 6e arrondissement","45.7683601","4.8493258","58 rue de S\u00e8ze 69006 Lyon","","ligne A (Station Massena) - Bus 38","04 72 83 15 00","http:\/\/www.mairie6.lyon.fr","mairie d'arrondissement","ACCES AUX DROITS | ENFANCE PETITE ENFANCE 6 LOGEMENT  |  SENIORS ","documents administratifs | demande de logement social | Mode de garde | scolarit\u00e9","d\u00e9p\u00f4t de dossier de demande de logement social | demande de place en cr\u00e8che | inscriptions scolaire | documents d'identit\u00e9 | d\u00e9marches d'\u00e9tat civil","habitant de l'arrondissement (sauf titre d'identit\u00e9 : tout public)","Horaires hors vacances scolaires :\nDu lundi au vendredi : 8h45 - 16h45\nSamedi : 9h30 - 12h  (tous les services propos\u00e9s pendant la semaine sont assur\u00e9s).\nOuverture au public \u00e0 9h45 le 1er mardi du mois.\nHoraires vacances scolaires :\nDu lundi au vendredi : 8h45-12h30 et 13h45-16h45 \nSamedi : 9h30 - 12h\n","","",""],
    ["Mairie du 7e arrondissement","45.7463381","4.8416707","16 place Jean Mac\u00e9 - 69361 Lyon cedex 07","","M\u00e9tro ligne B (station Jean Mac\u00e9) - tram T2 - Bus C4, C7, C12, C14, n\u00b035, s3 et Zi6.","04 72 73 68 00","http:\/\/www.mairie7.lyon.fr","mairie d'arrondissement","ACCES AUX DROITS | ENFANCE PETITE ENFANCE 6 LOGEMENT  |  SENIORS ","documents administratifs | demande de logement social | Mode de garde | scolarit\u00e9","d\u00e9p\u00f4t de dossier de demande de logement social | demande de place en cr\u00e8che | inscriptions scolaire | documents d'identit\u00e9 | d\u00e9marches d'\u00e9tat civil","habitant de l'arrondissement (sauf titre d'identit\u00e9 : tout public)","Horaires hors vacances scolaires :\nDu lundi au vendredi : 8h45 - 16h45\nSamedi : 9h30 - 12h\nPoint Accueil Information Petite Enfance (PAIPE) : ferm\u00e9 le mardi matin et le jeudi apr\u00e8s-midi\nHoraires vacances scolaires :\nFermeture de 12h30 \u00e0 13h45\n","","",""],
    ["Mairie du 8e arrondissement","45.7346103","4.8731018","12 avenue Jean Mermoz - 69373 Lyon Cedex 08","","Tramway T2, bus C15, C23 et 26\u00a0","04 72 78 33 00","http:\/\/www.mairie8.lyon.fr","mairie d'arrondissement","ACCES AUX DROITS | ENFANCE PETITE ENFANCE 6 LOGEMENT  |  SENIORS ","documents administratifs | demande de logement social | Mode de garde | scolarit\u00e9","d\u00e9p\u00f4t de dossier de demande de logement social | demande de place en cr\u00e8che | inscriptions scolaire | documents d'identit\u00e9 | d\u00e9marches d'\u00e9tat civil","habitant de l'arrondissement (sauf titre d'identit\u00e9 : tout public)","Horaires hors vacances scolaires\nLes lundis, mercredis et vendredis : 8h45 - 16h45\nLe mardi : de 8h45 -16h45 sauf tous les 1ers mardis du mois : 10h - 1645\nLes jeudis : 12h15 - 19h45\nPermanences suppl\u00e9mentaires uniquement pour le retrait des cartes d\u2019identit\u00e9 et passeports les jeudis et samedis de 8h45 \u00e0 12h. \n Horaires vacances scolaires\nLes lundis, mardis, mercredis et vendredis : 8h45-12h30 et 13h45-16h45\nLes jeudis : 12h15-19h45\n","","",""],
    ["Mairie du 9e arrondissement","45.7739826","4.8058737","6 place du March\u00e9 69009 Lyon","","M\u00e9tro D, Bus 19 et 45\u00a0","04 72 19 81 81","http:\/\/www.mairie9.lyon.fr","mairie d'arrondissement","ACCES AUX DROITS | ENFANCE PETITE ENFANCE 6 LOGEMENT  |  SENIORS ","documents administratifs | demande de logement social | Mode de garde | scolarit\u00e9","d\u00e9p\u00f4t de dossier de demande de logement social | demande de place en cr\u00e8che | inscriptions scolaire | documents d'identit\u00e9 | d\u00e9marches d'\u00e9tat civil","habitant de l'arrondissement (sauf titre d'identit\u00e9 : tout public)","Horaires hors vacances scolaires :\nDu lundi au vendredi :  8h45 - 16h45\nSamedi : 9h30 - 12h (uniquement services population : Affaires publiques, Elections, Etat civil, Point Conseil)\nFermeture tous les mardis de 12h15 \u00e0 14h\nHoraires vacances scolaires :\nDu lundi au vendredi : 8h45 - 12h30 et 13h30 - 16h45\nSamedi : 9h30 - 12h (pendant les vacances d\u2019\u00e9t\u00e9, les services de la mairie sont ouverts le samedi matin uniquement pour les retraits de titres d'identit\u00e9 (cartes d\u2019identit\u00e9 et passeports) et les c\u00e9l\u00e9bration de mariages)\nPasseport biom\u00e9trique et carte nationale d'identit\u00e9 :\nSur rendez-vous uniquement.\nSamedi : 9h30 - 12h\nDu lundi au vendredi : 9h - 12h et 14h - 16h45\n","","",""],
    ["Mairie du 9e - annexe Duch\u00e8re","45.7852856","4.7952775","5 avenue du Plateau 69009 Lyon","","Bus C14 (arr\u00eat Plateau) et C6 (arr\u00eat Martini\u00e8re-Duch\u00e8re)","04 78 66 80 70","http:\/\/www.mairie9.lyon.fr","mairie d'arrondissement","ACCES AUX DROITS | ENFANCE PETITE ENFANCE 6 LOGEMENT  |  SENIORS ","documents administratifs | demande de logement social | Mode de garde | scolarit\u00e9","d\u00e9p\u00f4t de dossier de demande de logement social | demande de place en cr\u00e8che | inscriptions scolaire | documents d'identit\u00e9 | d\u00e9marches d'\u00e9tat civil","habitant de l'arrondissement (sauf titre d'identit\u00e9 : tout public)","Du lundi au vendredi :\u00a09h \u00e0 12h et 14h \u00e0 16h45","","",""],
    ["MAISON DE l'HABITAT","45.7520013","4.8492562","281 rue de Cr\u00e9qui 69006 Lyon","","","04 37 70 67 47","","La Maison de l\u2019Habitat est un lieu de services aux m\u00e9nages en difficult\u00e9s d\u2019habitat qui propose accueil, information et soutien aux personnes et aux partenaires ","LOGEMENT ","","accueil physique et t\u00e9l\u00e9phonique | atelier DALO | atelier d'informations ","","Accueil t\u00e9l\u00e9phonique, les mardi, mercredi, jeudi \u2013 de 9h00 \u00e0 12h30 | Accueil sur rendez-vous, les mardi & jeudi \u2013 de 9h00 \u00e0 12h30 | Atelier DALO, le mercredi \u00e0 14h00 \u2013 sur inscription pr\u00e9alable |-Atelier Connaissance du Parc Social, le jeudi \u00e0 14h00 \u2013 sur inscription pr\u00e9alable","","",""],
    ["MAISON DES JEUNES ET DE LA CULTURE DE MONPLAISIR","45.7460048","4.8634529","25 Avenue des Fr\u00e8res Lumi\u00e8re 69008 Lyon","","","04 72 78 05 70","accueil@mjcmonplaisir.net","Favoriser l'autonomie et l'\u00e9panouissement des personnes, permettre \u00e0 tous d'acc\u00e9der \u00e0 l'\u00e9ducation et \u00e0 la culture, afin que chacun participe \u00e0 la construction d'une soci\u00e9t\u00e9 plus solidaire et plus juste. Contribuer au d\u00e9veloppement des liens sociaux.","CULTURE\/SOCICULTUREL | LOISIRS","animation sociale | activit\u00e9s sportive ou culturelle","","","","","",""],
    ["MAISON DES JEUNES ET DE LA CULTURE DE SAINT-RAMBERT","45.7967133","4.8215537","8, rue Ernest Fabr\u00e8gue 69009 Lyon","","","\u00a004.78.83.29.68","mjc@mjcstrambert.info","Favoriser l'autonomie et l'\u00e9panouissement des personnes, permettre \u00e0 tous d'acc\u00e9der \u00e0 l'\u00e9ducation et \u00e0 la culture, afin que chacun participe \u00e0 la construction d'une soci\u00e9t\u00e9 plus solidaire et plus juste. Contribuer au d\u00e9veloppement des liens sociaux.","CULTURE\/SOCICULTUREL | LOISIRS","animation sociale | activit\u00e9s sportive ou culturelle","","","","","",""],
    ["MAISON DES JEUNES ET DE LA CULTURE DUCH\u00c8RE","45.7831152","4.7967558","237 Rue des Erables 69009 Lyon","","","04 78 35 39 21","contact@mjcduchere.org","Favoriser l'autonomie et l'\u00e9panouissement des personnes, permettre \u00e0 tous d'acc\u00e9der \u00e0 l'\u00e9ducation et \u00e0 la culture, afin que chacun participe \u00e0 la construction d'une soci\u00e9t\u00e9 plus solidaire et plus juste. Contribuer au d\u00e9veloppement des liens sociaux.","CULTURE\/SOCICULTUREL | LOISIRS","animation sociale | activit\u00e9s sportive ou culturelle","","","","","",""],
    ["MAISON DES JEUNES ET DE LA CULTURE LA\u00cbNNEC MERMOZ","45.7339225","4.8850278","21 Rue Genton 69008 Lyon","","","04 37 90 55 90","info@mjclaennecmermoz.fr","Favoriser l'autonomie et l'\u00e9panouissement des personnes, permettre \u00e0 tous d'acc\u00e9der \u00e0 l'\u00e9ducation et \u00e0 la culture, afin que chacun participe \u00e0 la construction d'une soci\u00e9t\u00e9 plus solidaire et plus juste. Contribuer au d\u00e9veloppement des liens sociaux.","CULTURE\/SOCICULTUREL | LOISIRS","animation sociale | activit\u00e9s sportive ou culturelle","","","","","",""],
    ["CENTRE SOCIAL BONNEFOI","45.7555924","4.8456701","5 Rue Bonnefoi 69003 Lyon","","","04 72 61 97 43","contact@csbonnefoi.fr","Le centre social est \u00ab la maison des habitants d\u2019un territoire \u00bb (un quartier en zone urbaine, une commune ou plusieurs en zone rurale). Port\u00e9 par et pour ces habitants, il entend permettre l\u2019\u00e9panouissement de chacun (notamment en am\u00e9liorant la vie quotidienne de tous) et favoriser la mobilisation citoyenne (notamment en faisant entendre la parole des habitants)..","CULTURE SOCIOCULTUREL | LOISIRS | PARENTALITE","","","","","","",""],
    ["CENTRE SOCIAL DE CHAMPVERT","45.7641565","4.7917535","204 Avenue Barth\u00e9l\u00e9my Buyer 69009 Lyon","","","04 78 25 07 59","cschampvert.accueil@orange.fr","Le centre social est \u00ab la maison des habitants d\u2019un territoire \u00bb (un quartier en zone urbaine, une commune ou plusieurs en zone rurale). Port\u00e9 par et pour ces habitants, il entend permettre l\u2019\u00e9panouissement de chacun (notamment en am\u00e9liorant la vie quotidienne de tous) et favoriser la mobilisation citoyenne (notamment en faisant entendre la parole des habitants)..","CULTURE SOCIOCULTUREL | LOISIRS | PARENTALITE","","","","","","",""],
    ["CENTRE SOCIAL DE LA SAUVEGARDE","45.7870098","4.7915896","26 Avenue Rosa Parks 69009 Lyon","","","04 78 35 77 47","accueil@centresocial.com","Le centre social est \u00ab la maison des habitants d\u2019un territoire \u00bb (un quartier en zone urbaine, une commune ou plusieurs en zone rurale). Port\u00e9 par et pour ces habitants, il entend permettre l\u2019\u00e9panouissement de chacun (notamment en am\u00e9liorant la vie quotidienne de tous) et favoriser la mobilisation citoyenne (notamment en faisant entendre la parole des habitants)..","CULTURE SOCIOCULTUREL | LOISIRS | PARENTALITE","","","","","","",""],
    ["CENTRE SOCIAL DE SAINT JUST","45.7567155","4.8206952","31 Rue des Farges 69005 Lyon","","","04 78 25 35 78","centre.soc.st.just@free.fr","Le centre social est \u00ab la maison des habitants d\u2019un territoire \u00bb (un quartier en zone urbaine, une commune ou plusieurs en zone rurale). Port\u00e9 par et pour ces habitants, il entend permettre l\u2019\u00e9panouissement de chacun (notamment en am\u00e9liorant la vie quotidienne de tous) et favoriser la mobilisation citoyenne (notamment en faisant entendre la parole des habitants)..","CULTURE SOCIOCULTUREL | LOISIRS | PARENTALITE","","","","","","",""],
    ["CENTRE SOCIAL DE SAINT-RAMBERT","45.8012546","4.8318877","4 Rue Sylvain Simondan 69009 Lyon","","","04 78 83 98 76","cstrambert@wanadoo.fr","Le centre social est \u00ab la maison des habitants d\u2019un territoire \u00bb (un quartier en zone urbaine, une commune ou plusieurs en zone rurale). Port\u00e9 par et pour ces habitants, il entend permettre l\u2019\u00e9panouissement de chacun (notamment en am\u00e9liorant la vie quotidienne de tous) et favoriser la mobilisation citoyenne (notamment en faisant entendre la parole des habitants)..","CULTURE SOCIOCULTUREL | LOISIRS | PARENTALITE","","","","","","",""],
    ["CENTRE SOCIAL DES \u00c9TATS UNIS","45.7305390","4.8654804","73 Rue Jean Sarrazin 69008 Lyon","","","04 78 74 50 29","accueil@csetats-unis.org","Le centre social est \u00ab la maison des habitants d\u2019un territoire \u00bb (un quartier en zone urbaine, une commune ou plusieurs en zone rurale). Port\u00e9 par et pour ces habitants, il entend permettre l\u2019\u00e9panouissement de chacun (notamment en am\u00e9liorant la vie quotidienne de tous) et favoriser la mobilisation citoyenne (notamment en faisant entendre la parole des habitants)..","CULTURE SOCIOCULTUREL | LOISIRS | PARENTALITE","","","","","","",""],
    ["CENTRE SOCIAL DUCH\u00c8RE PLATEAU REN\u00c9 MAUGIUS","45.7831533","4.7949604","235 Avenue du Plateau 69009 Lyon","","","04 78 35 31 33","csplateau@free.fr","Le centre social est \u00ab la maison des habitants d\u2019un territoire \u00bb (un quartier en zone urbaine, une commune ou plusieurs en zone rurale). Port\u00e9 par et pour ces habitants, il entend permettre l\u2019\u00e9panouissement de chacun (notamment en am\u00e9liorant la vie quotidienne de tous) et favoriser la mobilisation citoyenne (notamment en faisant entendre la parole des habitants)..","CULTURE SOCIOCULTUREL | LOISIRS | PARENTALITE","","","","","","",""],
    ["CENTRE SOCIAL ET CULTUREL PIERRETTE AUGIER","45.7764201","4.8059408","9 Rue Roquette 69009 Lyon","","","04 78 83 71 34","","Le centre social est \u00ab la maison des habitants d\u2019un territoire \u00bb (un quartier en zone urbaine, une commune ou plusieurs en zone rurale). Port\u00e9 par et pour ces habitants, il entend permettre l\u2019\u00e9panouissement de chacun (notamment en am\u00e9liorant la vie quotidienne de tous) et favoriser la mobilisation citoyenne (notamment en faisant entendre la parole des habitants)..","CULTURE SOCIOCULTUREL | LOISIRS | PARENTALITE","","","","","","",""],
    ["CENTRE SOCIAL ET SOCIOCULTUREL DE GERLAND","45.7307213","4.8280297","1 Rue Jacques Monod 69007 Lyon","","","04 72 71 52 60","csgerland.direction@wanadoo.fr","Le centre social est \u00ab la maison des habitants d\u2019un territoire \u00bb (un quartier en zone urbaine, une commune ou plusieurs en zone rurale). Port\u00e9 par et pour ces habitants, il entend permettre l\u2019\u00e9panouissement de chacun (notamment en am\u00e9liorant la vie quotidienne de tous) et favoriser la mobilisation citoyenne (notamment en faisant entendre la parole des habitants)..","CULTURE SOCIOCULTUREL | LOISIRS | PARENTALITE","","","","","","",""],
    ["CENTRE SOCIAL LA\u00cbNNEC","45.7396054","4.8831066","63 Rue La\u00ebnnec 69008 Lyon","","","","","Le centre social est \u00ab la maison des habitants d\u2019un territoire \u00bb (un quartier en zone urbaine, une commune ou plusieurs en zone rurale). Port\u00e9 par et pour ces habitants, il entend permettre l\u2019\u00e9panouissement de chacun (notamment en am\u00e9liorant la vie quotidienne de tous) et favoriser la mobilisation citoyenne (notamment en faisant entendre la parole des habitants)..","CULTURE SOCIOCULTUREL | LOISIRS | PARENTALITE","","","","","","",""],
    ["CENTRE SOCIAL LANGLET-SANTY MONPLAISIR LA PLAINE","45.7293572","4.8749297","96 Avenue Paul Santy 69008 Lyon","","","04 78 01 62 04","cseu2@orange.fr","Le centre social est \u00ab la maison des habitants d\u2019un territoire \u00bb (un quartier en zone urbaine, une commune ou plusieurs en zone rurale). Port\u00e9 par et pour ces habitants, il entend permettre l\u2019\u00e9panouissement de chacun (notamment en am\u00e9liorant la vie quotidienne de tous) et favoriser la mobilisation citoyenne (notamment en faisant entendre la parole des habitants)..","CULTURE SOCIOCULTUREL | LOISIRS | PARENTALITE","","","","","","",""],
    ["CENTRE SOCIAL MERMOZ","45.7288402","4.8844010","1 Rue Joseph Chalier 69008 Lyon","","","04 78 74 26 78","accueil@centresocialmermoz.fr","Le centre social est \u00ab la maison des habitants d\u2019un territoire \u00bb (un quartier en zone urbaine, une commune ou plusieurs en zone rurale). Port\u00e9 par et pour ces habitants, il entend permettre l\u2019\u00e9panouissement de chacun (notamment en am\u00e9liorant la vie quotidienne de tous) et favoriser la mobilisation citoyenne (notamment en faisant entendre la parole des habitants)..","CULTURE SOCIOCULTUREL | LOISIRS | PARENTALITE","","","","","","",""],
    ["CENTRE SOCIAL QUARTIER VITALIT\u00c9","45.7690030","4.8343582","7 Rue Saint Polycarpe 69001 Lyon","","","04 78 39 36 36","","Le centre social est \u00ab la maison des habitants d\u2019un territoire \u00bb (un quartier en zone urbaine, une commune ou plusieurs en zone rurale). Port\u00e9 par et pour ces habitants, il entend permettre l\u2019\u00e9panouissement de chacun (notamment en am\u00e9liorant la vie quotidienne de tous) et favoriser la mobilisation citoyenne (notamment en faisant entendre la parole des habitants)..","CULTURE SOCIOCULTUREL | LOISIRS | PARENTALITE","","","","","","",""],
    ["ARALIS - R\u00e9sidence","45.7305745","4.8775947"," 102, avenue G\u00e9n\u00e9ral Fr\u00e8re 69008 Lyon","","Bus C22 ou C25 arr\u00eat Grange Rouge","","accueil@aralis.org","La Fondation ARALIS propose des logements temporaires, destin\u00e9s en priorit\u00e9 aux personnes en difficult\u00e9 d\u2019acc\u00e8s \u00e0 un logement, aux personnes isol\u00e9es et \u00e0 toute personne en mobilit\u00e9 dans la r\u00e9gion : \u00e9tudiants, salari\u00e9s, stagiaires de la formation professionnelle ayant besoin d\u2019un logement.","LOGEMENT","","","ARALIS s\u2019adresse aux personnes (hommes, femmes, couples ou petites compositions familiales) ayant des difficult\u00e9s d\u2019acc\u00e8s \u00e0 un logement ordinaire pour des raisons sociales et \u00e9conomiques en mobilit\u00e9 professionnelle ayant un besoin de lien social . ","Permanence Lundi de 14h00 \u00e0 17h00 :","","",""],
    ["ARALIS - R\u00e9sidence","45.7584496","4.8509033","230 rue Andr\u00e9 Philip ,69003 Lyon","","Metro B arr\u00eat Guichard.","","accueil@aralis.org","La Fondation ARALIS propose des logements temporaires, destin\u00e9s en priorit\u00e9 aux personnes en difficult\u00e9 d\u2019acc\u00e8s \u00e0 un logement, aux personnes isol\u00e9es et \u00e0 toute personne en mobilit\u00e9 dans la r\u00e9gion : \u00e9tudiants, salari\u00e9s, stagiaires de la formation professionnelle ayant besoin d\u2019un logement.","LOGEMENT","","","ARALIS s\u2019adresse aux personnes (hommes, femmes, couples ou petites compositions familiales) ayant des difficult\u00e9s d\u2019acc\u00e8s \u00e0 un logement ordinaire pour des raisons sociales et \u00e9conomiques en mobilit\u00e9 professionnelle ayant un besoin de lien social . ","permanence Mercredi de 14h00 \u00e0 16h30","","",""]];
var assos = [];
var besoinsSelectionnes = [];
function chargerDonnees()
{
    for (i = 1; i< tableauAssos.length; i++) {
        const nouvelleAsso = {
            id:i,
            nom:tableauAssos[i][0],
            latitude:tableauAssos[i][1],
            longitude:tableauAssos[i][2],
            adresse:tableauAssos[i][3],
            complementAdresse:tableauAssos[i][4],
            accesTransports:tableauAssos[i][5],
            telephone:tableauAssos[i][6],
            email:tableauAssos[i][7],
            description:tableauAssos[i][8],
            categories:tableauAssos[i][9],
            sousCategories:tableauAssos[i][10],
            services:tableauAssos[i][11],
            publicAccueilli:tableauAssos[i][12],
            horaires:tableauAssos[i][13],
            situationFamiliale:tableauAssos[i][15],
            limiteAge:tableauAssos[i][16],
        };
        assos.push(nouvelleAsso);
    }
}

function masquerBlocs()
{
    const blocsAMasquer = document.getElementsByClassName('blocMasquable');
    for (let i = 0; i < blocsAMasquer.length; i++) {
        blocsAMasquer[i].style.display = 'none';
    }
}

function afficherBloc(idBlocAAfficher)
{
    document.getElementById(idBlocAAfficher).style.display='block';
}

function mettreAJourPrecisionsCriteres(idBesoin) {
    const blocPrecision = document.getElementById('precisionBesoin');
    let textePrecisionBesoin ='<h5 id="titrePrecisionsBesoins">Quel est le besoin plus précisément ?</h5>';
    for (let besoin in besoins[idBesoin]) {
        textePrecisionBesoin += '<p><label><input onclick="besoinsSelectionnes.push(this.value);" type="checkbox" class="precisionBesoin" value="' + besoins[idBesoin][besoin] + '">' + besoins[idBesoin][besoin] + '</label></p>';
    }
    blocPrecision.innerHTML=textePrecisionBesoin;
}

function mettreAJourNavigation(idNavigationCourante) {
    document.getElementById('navigationProfil').style.color='black';
    document.getElementById('navigationBesoin').style.color='black';
    document.getElementById('navigationParcours').style.color='black';
    document.getElementById(idNavigationCourante).style.color='red';
}

function assombrir(idAAssombrir) {
    document.getElementById(idAAssombrir).style.backgroundColor = 'gray';
}
function eclaircir(idAEclaircir) {
    document.getElementById(idAEclaircir).style.backgroundColor = 'lightgray';
}

function getCategorieDUneSousCategorie(sousCategorie)
{
    for (let besoin in besoins) {
        if( besoins[besoin].includes(sousCategorie)) {
            return besoin;
        }
    }
}


function genererGraphe()
{
    let noeuds = [
        {id: 1, label: 'Visiteur'},
    ];
    let aretes = [];
    let categoriesChoisies = [];
    // On commence par voir quels sont les sous-catégories qui ont été cochées.
    for (let i = 0; i < besoinsSelectionnes.length; i++) {
        const nouvelleCategorie = getCategorieDUneSousCategorie(besoinsSelectionnes[i]);
        if(! categoriesChoisies.includes(nouvelleCategorie)) {
            categoriesChoisies.push(nouvelleCategorie);
            noeuds.push({
                id:noeuds.length+1,
                label:nouvelleCategorie
            })
        }
    }
    // On a tous nos nœuds primaires. Créons les arêtes qui les relieront au nœud de base.
    for (let i = 0; i < noeuds.length; i++) {
        if(i!==0) {
            aretes.push({
                from:1,
                to:noeuds[i].id
            })
        }
    }

    // NŒUDS SECONDAIRES.




    // DESSIN DU GRAPHE
    var nodes = new vis.DataSet(noeuds);
    var edges = new vis.DataSet(aretes);

    var container = document.getElementById('mynetwork');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {};
    var network = new vis.Network(container, data, options);
}