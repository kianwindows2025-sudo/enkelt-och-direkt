// Dummy-data för nyhetssajten.
// Datan ligger i en .js-fil (inte ren .json) så att sidan fungerar
// även när den öppnas direkt från filsystemet (fetch av .json blockeras
// av webbläsare vid file://). Samma data finns som referens i data/news.json.
const NEWS_DATA = [
  {
    "id": 1,
    "title": "Riksdagen röstar om ny infrastrukturplan för 2027–2032",
    "category": "Riksdag",
    "date": "2026-07-03",
    "source": "Riksdagens presstjänst",
    "preview": "Kammaren tar i nästa vecka ställning till regeringens förslag om en långsiktig plan för järnväg, väg och digital infrastruktur.",
    "body": [
      "Riksdagen inleder på tisdag behandlingen av den nya nationella infrastrukturplanen som sträcker sig från 2027 till 2032. Planen omfattar investeringar i järnväg, väg, sjöfart och digital infrastruktur i hela landet.",
      "Trafikutskottet har under våren hållit öppna utfrågningar med myndigheter, regioner och branschorganisationer. Utskottets betänkande innehåller både förslag som samtliga partier står bakom och punkter där reservationer lämnats in.",
      "Omröstningen väntas ske under torsdagen. Om planen antas ges Trafikverket i uppdrag att ta fram en detaljerad genomförandeplan under hösten."
    ]
  },
  {
    "id": 2,
    "title": "Utbildningsutskottet föreslår justeringar i skollagen",
    "category": "Riksdag",
    "date": "2026-06-28",
    "source": "Utbildningsutskottets betänkande 2025/26:UbU19",
    "preview": "Ett enigt utskott vill förtydliga reglerna kring elevhälsa och huvudmännens ansvar. Förslaget lämnas till kammaren i september.",
    "body": [
      "Utbildningsutskottet presenterade under fredagen ett betänkande med förslag på förtydliganden i skollagen. Förslagen rör bland annat elevhälsans uppdrag och hur ansvaret fördelas mellan stat, kommun och fristående huvudmän.",
      "Utskottet är enigt om huvuddragen, men partierna har lämnat särskilda yttranden om finansieringen. Remissinstanser som Skolverket och Sveriges Kommuner och Regioner har i huvudsak ställt sig positiva.",
      "Betänkandet lämnas till kammaren för debatt och beslut i september. Vid ett ja träder ändringarna i kraft den 1 juli 2027."
    ]
  },
  {
    "id": 3,
    "title": "Ny riksdagsrapport: Digitala myndighetstjänster används allt mer",
    "category": "Riksdag",
    "date": "2026-06-19",
    "source": "Riksdagens utredningstjänst",
    "preview": "Användningen av digitala myndighetstjänster har ökat med 34 procent på tre år, visar en ny sammanställning från riksdagens utredningstjänst.",
    "body": [
      "Riksdagens utredningstjänst har på uppdrag av finansutskottet kartlagt användningen av digitala myndighetstjänster. Rapporten visar en ökning med 34 procent sedan 2023, med störst tillväxt bland äldre användare.",
      "Samtidigt pekar rapporten på att omkring en halv miljon invånare fortfarande saknar möjlighet eller vana att använda digitala tjänster, vilket ställer krav på fortsatt fysisk service.",
      "Rapporten kommer att ligga till grund för utskottets fortsatta arbete med frågan under hösten."
    ]
  },
  {
    "id": 4,
    "title": "Valmyndigheten: Förtidsröstningen förlängs med tre dagar",
    "category": "Val",
    "date": "2026-07-01",
    "source": "Valmyndigheten",
    "preview": "Inför nästa ordinarie val förlängs förtidsröstningsperioden och antalet röstningslokaler utökas, meddelar Valmyndigheten.",
    "body": [
      "Valmyndigheten meddelade på onsdagen att förtidsröstningsperioden inför nästa ordinarie val förlängs med tre dagar. Beslutet följer av en lagändring som riksdagen antog tidigare i år.",
      "Kommunerna får samtidigt utökat stöd för att öppna fler röstningslokaler, med särskilt fokus på glesbygd och områden med lågt valdeltagande.",
      "Myndigheten inleder under hösten en informationskampanj om hur, var och när man kan rösta. Kampanjen tas fram på flera språk och i tillgänglighetsanpassade format."
    ]
  },
  {
    "id": 5,
    "title": "Samtliga riksdagspartier har nu presenterat sina valplattformar",
    "category": "Val",
    "date": "2026-06-25",
    "source": "Partiernas pressmeddelanden",
    "preview": "I och med helgens utspel har alla riksdagspartier offentliggjort sina prioriterade frågor inför valrörelsen. Ekonomi, vård och trygghet dominerar.",
    "body": [
      "Efter helgens partiledartal har samtliga riksdagspartier nu presenterat sina valplattformar. En genomgång visar att ekonomi, sjukvård och trygghetsfrågor är de områden som flest partier lyfter fram som prioriterade.",
      "Skillnaderna mellan partierna handlar främst om vägval inom respektive område, till exempel hur vården ska organiseras och finansieras, snarare än om vilka frågor som är viktiga.",
      "Valforskare noterar att klimat- och energifrågor tar större plats än i föregående valrörelse, medan EU-frågor hittills fått mindre utrymme."
    ]
  },
  {
    "id": 6,
    "title": "Rekordmånga förstagångsväljare inför nästa val",
    "category": "Val",
    "date": "2026-06-12",
    "source": "Statistiska centralbyrån",
    "preview": "Drygt 480 000 personer blir röstberättigade för första gången vid nästa ordinarie val, den största kullen sedan mätningarna började.",
    "body": [
      "Statistiska centralbyrån redovisade under torsdagen ny statistik över röstberättigade. Drygt 480 000 personer får rösta i ett riksdagsval för första gången, vilket är den största gruppen förstagångsväljare sedan mätningarna inleddes.",
      "Ökningen förklaras av stora födslokullar i mitten av 00-talet samt av nya svenska medborgare som blivit röstberättigade.",
      "Flera organisationer, däribland skolvalsprojekt och studieförbund, planerar riktade insatser för att öka valdeltagandet i gruppen. Vid förra valet röstade 82 procent av förstagångsväljarna."
    ]
  },
  {
    "id": 7,
    "title": "Partiledardebatt om energipolitiken – detta sades",
    "category": "Debatt",
    "date": "2026-07-02",
    "source": "Referat från kammarens debatt",
    "preview": "Kvällens partiledardebatt handlade om elförsörjning, utbyggnadstakt och priser. Här är huvuddragen ur samtliga partiers anföranden.",
    "body": [
      "Under torsdagskvällen hölls en partiledardebatt med energipolitiken i fokus. Debatten kretsade kring tre huvudfrågor: hur elproduktionen ska byggas ut, hur överföringskapaciteten ska förstärkas och hur priserna påverkar hushåll och industri.",
      "Partierna var eniga om att elbehovet väntas öka kraftigt det kommande decenniet, men förde fram olika vägar för att möta behovet – från utbyggd kärnkraft till havsbaserad vindkraft och effektivare energianvändning.",
      "Debatten avslutades med frågor om tillståndsprocesser, där flera partiledare efterlyste kortare handläggningstider. En uppföljande debatt om elnätens finansiering är planerad till augusti."
    ]
  },
  {
    "id": 8,
    "title": "Kammardebatt om vårdköer: så skiljer sig förslagen åt",
    "category": "Debatt",
    "date": "2026-06-23",
    "source": "Riksdagens snabbprotokoll",
    "preview": "Riksdagen debatterade under tisdagen väntetiderna i vården. Förslagen spänner från nationell vårdförmedling till utökat regionalt ansvar.",
    "body": [
      "Riksdagen höll under tisdagen en särskild debatt om väntetiderna i sjukvården, begärd av oppositionen. Samtliga partier deltog med anföranden och repliker.",
      "Förslagen som fördes fram spänner över ett brett fält: nationell vårdförmedling för att utnyttja ledig kapacitet i hela landet, förstärkt vårdgaranti med tydligare sanktioner, samt utökade befogenheter för regionerna att upphandla vård.",
      "Socialutskottet väntas återkomma med ett samlat betänkande i frågan under hösten. Debatten i sin helhet finns tillgänglig i riksdagens webb-tv-arkiv."
    ]
  },
  {
    "id": 9,
    "title": "Expertpanel möter politiker i debatt om bostadsbyggandet",
    "category": "Debatt",
    "date": "2026-06-10",
    "source": "Seminarium arrangerat av Bostadsforum",
    "preview": "Forskare, byggbransch och bostadspolitiska talespersoner möttes i en debatt om varför byggtakten sjunkit och vad som kan vända utvecklingen.",
    "body": [
      "Vid ett seminarium i Stockholm möttes forskare, branschföreträdare och bostadspolitiska talespersoner från samtliga riksdagspartier för att diskutera det minskade bostadsbyggandet.",
      "Panelen var enig om problembilden – höga byggkostnader, långa planprocesser och osäker finansiering – men oenig om lösningarna. Förslag som diskuterades var bland annat förenklade planregler, statliga topplån och ändrade ränteavdrag.",
      "Arrangören har publicerat hela debatten på sin webbplats, och en uppföljande debatt om regelförenklingar planeras till i höst."
    ]
  },
  {
    "id": 10,
    "title": "EU-parlamentet antar skärpta klimatmål för 2040",
    "category": "EU",
    "date": "2026-07-04",
    "source": "Europaparlamentets pressavdelning",
    "preview": "Parlamentet röstade under fredagen ja till nya utsläppsmål för 2040. Nu inleds förhandlingar med ministerrådet om den slutliga lagtexten.",
    "body": [
      "Europaparlamentet röstade under fredagen ja till ett förslag om skärpta klimatmål för 2040. Målet innebär att EU:s nettoutsläpp ska minska med 90 procent jämfört med 1990 års nivåer.",
      "Omröstningen slutade 402 röster för och 236 emot. De svenska ledamöterna röstade i enlighet med sina respektive partigruppers linjer.",
      "Nästa steg är trilogförhandlingar mellan parlamentet, ministerrådet och kommissionen, där den slutliga lagtexten ska förhandlas fram. Ett avgörande väntas tidigast i december."
    ]
  },
  {
    "id": 11,
    "title": "Sverige får ordförandeposten i EU:s nya digitaliseringsutskott",
    "category": "EU",
    "date": "2026-06-26",
    "source": "Regeringskansliet",
    "preview": "En svensk representant har utsetts till ordförande i det nyinrättade utskottet för digital inre marknad, meddelar Regeringskansliet.",
    "body": [
      "Regeringskansliet bekräftade under fredagen att Sverige tilldelats ordförandeposten i EU:s nyinrättade utskott för den digitala inre marknaden. Utskottet ska samordna medlemsländernas arbete med gemensamma digitala tjänster och standarder.",
      "Posten tillsätts för en period om två år. Bland utskottets första uppgifter finns en översyn av reglerna för gränsöverskridande e-legitimation.",
      "Utskottet håller sitt första möte i Bryssel i september. Dagordning och handlingar kommer att publiceras öppet."
    ]
  },
  {
    "id": 12,
    "title": "Toppmöte i Bryssel om nytt handelsavtal – detta står på spel",
    "category": "EU",
    "date": "2026-06-15",
    "source": "Europeiska rådets kansli",
    "preview": "EU:s stats- och regeringschefer samlas för att ta ställning till ett utkast till handelsavtal. Jordbruk och industritullar är kvarstående knäckfrågor.",
    "body": [
      "EU:s stats- och regeringschefer samlades i måndags i Bryssel för att diskutera utkastet till ett nytt handelsavtal med en grupp partnerländer. Förhandlingarna har pågått i drygt tre år.",
      "De kvarstående knäckfrågorna gäller tullnivåer för jordbruksprodukter och övergångsregler för viss industri. Flera medlemsländer har markerat att de vill se ytterligare konsekvensanalyser innan avtalet godkänns.",
      "Ett slutligt ställningstagande väntas vid nästa ordinarie toppmöte i oktober. Om avtalet godkänns ska det därefter ratificeras av Europaparlamentet och medlemsländerna."
    ]
  }
];
