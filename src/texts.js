import facturaLunara from "./assets/images/homepage/factura_lunara.png";
import consultantaCasnic from "./assets/images/homepage/consultanta-casnic.png";
import consultantaNoncasnic from "./assets/images/homepage/consultanta-noncasnic.png";
import grafice from "./assets/images/homepage/grafice.png";
import matering from "./assets/images/homepage/matering.png";
import analiza from "./assets/images/homepage/analiza.png";
import logo from "./assets/images/logo.png";
import solarPanel from "./assets/images/servicii_energie_electrica/solarPanel.jpg";
import anreImage from "./assets/images/anre.png";

export const TEXTS = {
  cookies: {
    text: ' www.getica95.ro utilizează fișiere de tip cookie. Îți aducem la cunoștință faptul că ne-am actualizat politicile pentru a ne conforma cu modificările propuse aduse de Directiva (UE) 2002/58/EC ("Directiva E-Privacy") si de Regulamentul (UE) 2016/679 privind protectia persoanelor fizice in ceea ce priveste prelucrarea datelor cu caracter personal si privind libera circulatie a acestor date si de abrogare a Directivei 95/46/CE ("Regulamentul GDPR")',
    links: {
      politicaDeConfidentialitate: {
        text: "Politica de confidentialitate",
        url: "",
      },

      refuz: { text: "Refuz" },
      accept: { text: "Accept" },
    },
  },
  pages: {
    homepage: {
      modal: {
        image: {
          title: "Logo",
          src: logo,
        },
        text: [
          {
            text: "Stimate partener,",
          },
          {
            text: "Vă aducem la cunoștință faptul că, prin Încheierea de ședință pronunțată la data de 30.06.2021, în dosarul de instanță nr. 1666/114/2021 înregistrat pe rolul Tribunalului Buzău, Secția a II-a Civilă, de Contencios Administrativ și Fiscal, a fost deschisă procedura generală de insolvență asupra societății GETICA 95 COM SRL, iar societatea își păstrează dreptul de a-şi conduce activitatea, de a-şi administra bunurile din avere şi de a dispune de acestea, sub supravegherea administratorui judiciar provizoriu desemnat – practicianul în insolvenţă Prime Insolv Practice SPRL.",
          },
          {
            text: "Stadiul dosarului de instanță 1666/114/2021 poate fi verificat pe acest",
          },
          {
            link: "https://portal.just.ro/114/SitePages/Dosar.aspx?id_dosar=11400000000079290&id_inst=114",
            text: "link",
          },
          {
            text: "Vă asigurăm de toată disponibilitatea noastră în lămurirea oricăror aspecte pe care le considerați necesare și ne manifestăm intenția de a continua colaborarea, cu respecatrea dispozițiilor legale în vigoare.",
          },
          {
            text: "Atașat regăsiți certificatul de grefă, care atestă starea de insolvență.",
          },

          {
            link: "./certificat-grefa-getica.pdf",
            text: "Vezi Certificat Grefa Getica95",
          },
        ],
      },
      firstSection: {
        title: "Getica 95",
        subtitle: "Reducem costurile energiei electrice",
        callToAction: {
          text: "Afla mai mult",
          link: "./informatiile-actualizate-privind-preturile-aplicabile-in-activitatea-de-furnizare-a-energiei-electrice-si-a-gazului",
        },
      },

      secondSection: {
        title: "Servicii",
        callToAction: {
          text: "Solicita oferta personalizata",
          link: "mailto:someone@yoursite.com",
        },
        rightPart: {
          title: "Clienti Casnici",
          data: [
            {
              imageSrc: facturaLunara,
              title: "Factura lunara",
              description: `Informare factura lunara digitala in "Contul tau Getica"`,
            },
            {
              imageSrc: grafice,
              title: "Grafice",
              description: `Acces garantat la grafice si estimari personalizate.`,
            },
            {
              imageSrc: consultantaCasnic,
              title: "Consultanta",
              description: `Consultanță privind implementarea măsurilor de reducere a consumului de energie electrică;`,
            },
          ],
        },
        leftPart: {
          title: "Clienti non-Casnici",
          data: [
            {
              imageSrc: analiza,
              title: "Analiza",
              description: `Analiză preliminară gratuită în cadrul căreia se clarifică procedura de schimbare a furnizorului, se stabilesc condițiile viitorului contract reciproc avantajoase`,
            },
            {
              imageSrc: consultantaNoncasnic,
              title: "Consultanta",
              description: `Consultanță privind implementarea măsurilor de reducere a consumului de energie electrică;`,
            },
            {
              imageSrc: matering,
              title: "Metering",
              description: `Posibilitatea de încheiere a unor contracte de metering (transmiterea datelor orare de consum zilnic) cu operatorii de distribuţie
            `,
            },
          ],
        },
      },
      thirdSection: {
        title: "Informatii utile",
      },
      fourthSection: {
        title: "Notificari",
        seeMore: "Vedeti mai multe",
      },
    },
    politicaDeConfidentialitate: {
      title: "Politica de confidentialitate",
      text: [
        "Confidenţialitatea datelor de trafic aferente comunicărilor pe website-ul www.getica95.ro, precum şi protejarea datelor cu caracter personal ale utilizatorilor site-ului şi clienţilor noştri reprezintă preocupări constante pentru GETICA 95 COM, cărora le acordăm o atenţie deosebită. De aceea, toate activităţile noastre, inclusiv cele în materie de web, respectă legile de protejare şi securitate a informaţiilor.",
        "Vă rugăm să citiţi cu atenţie informaţiile din prezentul document care exprimă Politica companiei GETICA 95 COM în ceea ce priveşte condiţiile generale de utilizarea a website-ului şi cookies.",
        "Prin navigarea pe website-ul www.getica95.ro vă exprimați acordul cu privire la folosirea datelor stocate de cookies, acesta fiind un acord în sensul articolului 4 (51) din Legea nr. 506/2004 privind prelucrarea datelor cu caracter personal şi protecţia vieţii private în sectorul comunicaţiilor electronice.",
        "'Internet Cookie' (termen cunoscut și ca „browser cookie” sau „HTTP cookie” sau pur și simplu „cookie”) este un fișier de mici dimensiuni, format din litere și numere, care va fi stocat pe computerul, terminalul mobil sau alte echipamente ale unui utilizator de pe care se accesează internetul. Cookie-ul este instalat prin solicitarea emisă de către un web-server unui browser (ex: Internet Explorer, Chrome) și este complet „pasiv” (nu conține programe software, viruși sau spyware și nu poate accesa informațiile de pe hard-disk-ul utilizatorului). Un cookie este format din 2 părți: numele și conţinutul sau valoarea cookie-ului. Durata de existență a unui cookie este determinată; tehnic, doar webserverul care a trimis cookie-ul îl poate accesa din nou în momentul în care un utilizator se întoarce pe website-ul asociat webserverului respectiv. Cookies se instalează în cazul în care se acceptă navigarea pe site-ul www.getica95.ro, fiind o legătură între utilizatorul browserului și website.",
        "Din dorinţa de a fi deschişi faţă de dumneavoastră vă informăm despre faptul că puteţi să vizitaţi website-ul www.getica95.ro fără ca GETICA 95 COM să vă solicite informaţii personale. Însă, de fiecare dată când se accesează o pagină web, următoarele informaţii sunt înregistrate:",
        "- denumirea fişierului accesat;",
        "- data şi ora accesării paginii web;",
        "- cantitatea de informaţii transmise;",
        "- informaţii referitoare la încărcarea cu succes a paginii;",
        "- tipul de browser web folosit;",
        "- domeniul de căutare.Aceste date sunt analizate pentru uzul intern al companiei şi pentru a îmbunătăţi serviciile oferite prin intermediul website-ului, utilizatorii individuali păstrându-şi anonimatul.",
        "În ceea ce priveşte cookies, în general, există două tipuri:",
        "- cele de sesiune care sunt stocate temporar, pe perioada de navigare, de către browserul web folosit de către utilizator. Aceste cookies permit utilizatorului să navigheze de la o pagină la alta fără să fie nevoit să introducă de fiecare dată anumite informații cum ar fi parola. Deoarece paginile web nu au o memorie specifică, cookie-urile de sesiune se șterg în mod automat în momentul în care browserul este închis sau o anumită sesiune a fost inactivă pentru o anumită perioadă de timp;",
        "-cele permanente sau persistente care sunt stocate la nivelul calculatorului (fără a accesa documente sau informații de pe terminal) și care rețin anumite preferințe ale utilizatorului pentru un anume site, cum ar fi limba preferată în utilizarea site-ului. În această categorie intră și cookie-urile „third party”, cookie-uri plasate de terți, ce pot fi folosite în mod anonim pentru a memora interesele unui utilizator, astfel încât acestuia să i se propună publicitate relevantă în categoria sa de interes. Cookie-urile permanente pot furniza informații referitoare la numărul de vizitatori ai unui site web, o medie a timpului petrecut pe o anumită pagină, performanțele unui site web, etc. Acestea au o durată de viață îndelungată, dar pot fi șterse oricând din terminal prin modificarea setărilor browserului folosit. Acestea nu stochează date cu caracter personal. GETICA 95 COM utilizează cookies pentru a vă oferi o experienţă plăcută pe site-ul nostru, utilizatorii beneficiind de o navigare personalizată, adaptată preferinţelor fiecăruia, precum şi pentru a obţine funcționarea eficientă a website-ului.",
        "Utilizatorii își pot configura browserul să respingă fișierele cookie. De asemenea, puteţi seta browserul dumneavoastră să blocheze cookies sau să afişeze o notificare de avertizare înainte ca un cookie să fie stocat pe calculatorul dumneavoastră. Dezactivarea și refuzul de a primi cookies pot face anumite secțiuni / pagini impracticabile sau dificil de vizitat.",
        "În continuare, vă recomandăm câteva link-uri privind gestionarea cookie-urilor (dezactivare, ștergere) în funcție de browser-ul folosit:",
        "- Internet Explorer 8",
        "- Internet Explorer 9",
        "- Internet Explorer 10",
        "- Google Chrome, Mozilla Firefox",
        "-Opera,Safari",
        "Website-ul www.getica95.ro poate utiliza cookies în următoarele scopuri:",
        "- cookies de înregistrare;",
        "- cookies de analiză a vizitatorilor;",
        "- cookies ale unor terţe părţi (third parties)Cookie-urile de înregistrare sunt generate în momentul în care vă înregistrați pe site-ul www.getica95.ro, în aplicația MyAccount, permițându-ne să știm dacă sunteți înregistrat deja sau sunteți utilizator nou. În cazul în care ați selectat opțiunea „păstrează-mă autentificat”- acest cookie permite să intrați în cont fără a vă mai conecta prin elemente de identificare, situație recomandată doar în cazul în care terminalul este folosit de un singur utilizator, dar acest cookie poate fi șters oricând din terminal prin modificarea setărilor browserului folosit. În cazul în care opțiunea „păstrează-mă autentificat” nu este selectată – cookie-ul de înregistrare se va șterge automat la închiderea sesiunii/ închiderea browserului.",
        "Cookie-urile de analiză vizitatori sunt generate în scop statistic pentru a cunoaște volumul vizitatorilor pe site.",
        "Cookies ale unor terţe părţi (third parties) sunt cookies plasate de terțe părți, parteneri ai companiei noastre și analizează, de exemplu, câte persoane au parcurs mesajul publicitar, câte persoane au vizionat de mai multe ori același mesaj publicitar, etc. Terţii ce generează aceste cookies sunt singurii responsabili de politicile de confidențialitate privind datele stocate, website-ul www.getica95.ro neavând vreo responsabilitate privind gestionarea, scrierea sau citirea acestor cookie-uri.",
        "Orice încercare, de orice natură, de modificare a imaginii şi informaţiilor prezente pe website-ul www.getica95.ro, cu excepţia celor făcute de GETICA 95 COM, precum şi realizarea de link-uri către prezentul site, fără acordul în prealabil din partea companiei GETICA 95 COM, dă dreptul acesteia din urmă să se adreseze instanţelor judecătoreşti competente pentru sancţionarea unor asemenea fapte.",
        "Este interzisă transmiterea către GETICA 95 COM sau către adresele de e-mail amintite în interiorul site-ului a oricăror materiale considerate ilegale, periculoase, calomniatoare, obscene, pornografice sau vulgare şi a materialelor care ar putea fi considerate ca instigare la fapte care contravin legii.",
        "GETICA 95 COM nu este responsabilă pentru nicio acţiune pe care utilizatorul website-ul www.getica95.ro o întreprinde şi are un rezultat negativ sau îi produce vreo pierdere de orice fel, care poate afecta sistemul de operare al utilizatorului prin erori, viruşi şi/sau alte pericole ce derivă din mediul online.",
        "Remedierea în cel mai scurt timp a eventualelor mici erori prezente din diverse motive pe website-ul www.getica95.ro reprezintă o prioritate constantă pentru echipa GETICA 95 COM.",
      ],
    },
    informatiileActualizatePrivindPreturileAplicabileInActivitateaDeFurnizareAEnergieiElectriceSiAGazului:
      {
        section: {
          title:
            "Informaţiile actualizate privind preţurile aplicabile în activitatea de furnizare a energiei electrice",
        },
        data: [
          {
            src: "./pzu-1.jpg",
            title: "Evolutie PZU 2021-2022",
          },
          {
            src: "./opcom-1.jpg",
            title: "Pretul mediu de tranzactionare pe OPCOM",
          },
          {
            src: "./tarife-transport2.jpg",
            title:
              "Tarife pentru distributie si transport si alte taxe energie electrica",
          },
          {
            src: "./preturi-gaz-1.jpg",
            title: "Prețuri de tranzacționare piața GasForward si SPOT",
          },
          {
            src: "./consumatori-1.jpg",
            title:
              "Informaţiile actualizate privind tarifele aplicabile în activitatea de furnizare a gazelor naturale",
          },
        ],
      },
    serviciiEnergieElectrica: {
      heroSection: {
        image: solarPanel,
        title: "Energie Electrica",
      },
      section: {
        title: "Servicii energie electrica",
        data: [
          "Analiză preliminară gratuită în cadrul căreia se clarifică procedura de schimbare a furnizorului, se stabilesc condițiile viitorului contract reciproc avantajoase;",
          "Încheierea de contracte pentru punctele de consum ale clientului cu societățile de distribuție energie electricădin zona unde se localizează acestea, precum si cu societatea de transport Transelectrica;",
          "Consultanță privind implementarea măsurilor de reducere a consumului de energie electrică;",
          "Întocmirea de prognoze de consum utilizând metode dinamice de prognoză a curbei de sarcină (regresie liniară sau rețele neuronale artificiale);",
          "Asigurarea posibilității consumatorului de a-și actualiza prognozele de consum, precum și compensarea abaterilor de la prognoză;",
          "Asigurarea suportului tehnic permanent, gestionarea reclamațiilor privind calitatea serviciului de furnizare, intermedierea disfuncționalităților din relația consumator - operator de distribuție ;",
          "Posibilitatea montării la client de sisteme de măsură pentru monitorizarea consumului în timp real (transmiterea informațiilor prin sisteme GSM);",
          "Posibilitatea de încheiere a unor contracte de metering (transmiterea datelor orare de consum zilnic) cu operatorii de distribuţie, la cererea consumatorilor, aceștia putând urmări mai bine consumurile și costurile sale;",
        ],
      },
    },
    procesulDeSchimbareAFurnizorului: {
      heroSection: {
        image: solarPanel,
        title: "Energie Electrica",
      },
      section: {
        title: "Procesul de schimbare a furnizorului",
      },
      data: [
        {
          categoryName: "MODALITATE DE LUCRU",
          id: "modalitateDeLucru",
          content: [
            {
              type: "title",
              text: "Vă prezentăm paşii ce trebuie urmaţi pentru a schimba furnizorul de energie electrică de către consumatorii eligibil:",
            },
            {
              type: "bold",
              text: "Pas 1",
            },
            {
              type: "text",
              text: "Intocmire cerere de oferta de catre consumator si transmiterea acesteia catre:",
            },
            {
              type: "text",
              text: "Departament ofertare/contractare | Telefon: 0374032032 | Fax: 0213211118 | E-mail: office@getica95.ro",
            },
            {
              type: "line",
              text: "",
            },
            {
              type: "bold",
              text: "Pas 2",
            },
            {
              type: "text",
              text: "Completare Chestionar energetic (Specialistii nostrii va vor ajuta sa-l completati daca intampinati greutati cu aceasta)",
            },
            {
              type: "line",
              text: "",
            },
            {
              type: "bold",
              text: "Pas 3",
            },
            {
              type: "text",
              text: "Negociere, agreere Contract de furnizare energie electrica",
            },
            {
              type: "line",
              text: "",
            },
            {
              type: "bold",
              text: "Pas 4",
            },
            {
              type: "text",
              text: "Transmiterea către noi a tuturor Avizelor Tehnice de Racordare (ATR) pentru fiecare punct de consum în parte şi a prognozelor de consum lunare pentru fiecare punct de consum. ( Daca consumatorii nu sunt in posesia ATR-urilor le putem pune la dispozitie un model de cerere si o adresa email la care sa o trimita dupa ce o completeaza).",
            },
            {
              type: "line",
              text: "",
            },
            {
              type: "bold",
              text: "Pas 5",
            },
            {
              type: "text",
              text: "Semnare Contract de furnizare",
            },
            {
              type: "line",
              text: "",
            },
            {
              type: "bold",
              text: "Pas 6",
            },
            {
              type: "text",
              text: "Notificarea fostului furnizor cu cel puţin 21 de zile înainte de intrarea în vigoare a noului contract de furnizare.",
            },
            {
              type: "text",
              text: "- INDICAT AR FI 30 DE ZILE INAINTE PENTRU A AVEA TIMPUL NECESAR EFECTUARII EVENTUALELOR PLATI DEJA SCADENTE CATRE FOSTUL FURNIZOR.",
            },
            {
              type: "line",
              text: "",
            },
            {
              type: "bold",
              text: "Pas 7",
            },
            {
              type: "text",
              text: "Înregistrarea de către GETICA 95 COM a contractului la autorităţile competente, moment în care începe derularea efectivă a noului contract.",
            },
          ],
        },
        {
          categoryName:
            "Model cerere client final, solicitare incheiere contract piata concurentiala, contracte furnizare energie electrica client casnic si noncasnic, notificare privind incetarea contractului de furnizare a energiei electrice",
          id: "modelCerere",
          content: [
            {
              type: "text",
              text: "Intocmire cerere de oferta de catre consumator si transmiterea acesteia catre:",
            },
            {
              type: "link",
              text: "Download (pdf)",
              link: "./acord_gdpr.pdf",
            },
            {
              type: "text",
              text: "Descarca model cerere client casnic nou",
            },
            {
              type: "link",
              text: "Download (pdf)",
              link: "./cerere_casnic_contract_nou.pdf",
            },
            {
              type: "text",
              text: "Descarca model cerere client casnic existent",
            },
            {
              type: "link",
              text: "Download (pdf)",
              link: "./cerere_casnic_contract_existent.pdf",
            },
            {
              type: "text",
              text: "Descarca model cerere client noncasnic nou",
            },
            {
              type: "link",
              text: "Download (pdf)",
              link: "./cerere_noncasnic_contract_nou.pdf",
            },
            {
              type: "text",
              text: "Descarca model cerere client noncasnic existent",
            },
            {
              type: "link",
              text: "Download (pdf)",
              link: "./cerere_noncasnic_contract_existent.pdf",
            },
            {
              type: "text",
              text: "Descarca contract client casnic",
            },
            {
              type: "link",
              text: "Download (pdf)",
              link: "./contract_casnic.pdf",
            },
            {
              type: "text",
              text: "Descarca contract client noncasnic",
            },
            {
              type: "link",
              text: "Download (pdf)",
              link: "./contract_noncasnic.pdf",
            },
            {
              type: "text",
              text: "Descarca contract client casnic serviciu universal",
            },
            {
              type: "link",
              text: "Download (pdf)",
              link: "./Contract_cadru_SU_consumatori_casnici.pdf",
            },
            {
              type: "text",
              text: "Descarca notificare privind incetarea contractului de furnizare a energiei electrice client casnic",
            },
            {
              type: "link",
              text: "Download (pdf)",
              link: "./notificare_casnic.pdf",
            },
            {
              type: "text",
              text: "Descarca notificare privind incetarea contractului de furnizare a energiei electrice client noncasnic",
            },
            {
              type: "link",
              text: "Download (pdf)",
              link: "./notificare_noncasnic.pdf",
            },
            {
              type: "text",
              text: "Descarca Declaratie pe proprie răspundere privind folosința locului de consum",
            },
            {
              type: "link",
              text: "Download (pdf)",
              link: "./declaratie_folosinta_locconsum.pdf",
            },
          ],
        },
        {
          categoryName: "Chestionar",
          id: "chestionar",
          content: [
            {
              type: "title",
              text: "Chestionarul energetic poate fi accesat de aici",
            },
            {
              type: "btn",
              text: "Acceseaza chestionarul energetic",
              link: "./chestionar-energetic",
            },
          ],
        },
        {
          categoryName: "Ghid",
          id: "ghid",
          content: [
            {
              type: "title",
              text: "Procesul de schimbare a furnizorului",
            },
            {
              type: "btn",
              text: "Ghidul consumatorului de energie (PDF)",
              link: "./GhidE.pdf",
            },
          ],
        },
        {
          categoryName:
            "GHID EXPLICATIV PRIVIND ELEMENTELE COMPONENTE ALE FACTURII DE ENERGIE ELECTRICA",
          id: "ghidFactura",
          content: [
            {
              type: "title",
              text: "Ghidul explicativ privind elementele componente ale facturii de energie electrica",
            },
            {
              type: "btn",
              text: "Ghidul consumatorului de energie (PDF)",
              link: "./ghidenergie.pdf",
            },
          ],
        },
        {
          categoryName: "INDICATORI DE PERFORMANTA 2022",
          id: "indicatoriDePerformanta2022",
          content: [
            {
              type: "title",
              text: "Indicatori de performanta 2022",
            },
            {
              type: "text",
              text: "ANEXA 2 / Trimestrul I",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_-I-_2022.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / Trimestrul II",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_-II-_2022.pdf",
            },
            {
              type: "text",
              text: "ANEXA 3 / An 2022",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_3_Standard_de_performanta_An_2022.pdf",
            },
          ],
        },
        {
          categoryName: "INDICATORI DE PERFORMANTA 2021",
          id: "indicatoriDePerformanta2021",
          content: [
            {
              type: "title",
              text: "Indicatori de performanta 2021",
            },
            {
              type: "text",
              text: "ANEXA 2 / Trimestrul I",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_-I-_2021.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / Trimestrul II",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_-II-_2021.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / Trimestrul III",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_-III-_2021.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / Trimestrul IV",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_-IV-_2021.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / An 2021",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_2021.pdf",
            },
            {
              type: "text",
              text: "ANEXA 3 / An 2021",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_3_Standard_de_performanta_An_2021.pdf",
            },
          ],
        },
        {
          categoryName: "INDICATORI DE PERFORMANTA 2020",
          id: "indicatoriDePerformanta2020",
          content: [
            {
              type: "title",
              text: "Indicatori de performanta 2020",
            },
            {
              type: "text",
              text: "ANEXA 2 / Trimestrul I",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_-I-_2020.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / Trimestrul II",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_-II-_2020.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / Trimestrul III",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_-III-_2020.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / Trimestrul IV",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_-IV-_2020.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / An 2020",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_2020.pdf",
            },
            {
              type: "text",
              text: "ANEXA 3 / An 2020",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_3_Standard_de_performanta_An_2020.pdf",
            },
          ],
        },
        {
          categoryName: "INDICATORI DE PERFORMANTA 2019",
          id: "indicatoriDePerformanta2019",
          content: [
            {
              type: "title",
              text: "Indicatori de performanta 2019",
            },
            {
              type: "text",
              text: "ANEXA 2 / Trimestrul I",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_-I-_2019.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / Trimestrul II",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_-II-_2019.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / Trimestrul III",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_-III-_2019.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / Trimestrul IV",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_-IV-_2019.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / An 2019",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_2019.pdf",
            },
            {
              type: "text",
              text: "ANEXA 3 / An 2019",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_3_Standard_de_performanta_An_2019.pdf",
            },
          ],
        },
        {
          categoryName: "INDICATORI DE PERFORMANTA 2018",
          id: "indicatoriDePerformanta2018",
          content: [
            {
              type: "title",
              text: "Indicatori de performanta 2018",
            },
            {
              type: "text",
              text: "ANEXA 2 / Trimestrul I",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_-I-_2018.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / Trimestrul II",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_-II-_2018.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / Trimestrul III",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_-III-_2018.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / Trimestrul IV",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_-IV-_2018.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / An 2018",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_2018.pdf",
            },
            {
              type: "text",
              text: "ANEXA 3 / An 2018",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_3_Standard_de_performanta_An_2018.pdf",
            },
          ],
        },
        {
          categoryName: "INDICATORI DE PERFORMANTA 2017",
          id: "indicatoriDePerformanta2017",
          content: [
            {
              type: "title",
              text: "Indicatori de performanta 2017",
            },
            {
              type: "text",
              text: "ANEXA 2 / Trimestrul I",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_-I-_2017.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / Trimestrul II",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_-II-_2017.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / Trimestrul III",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_-III-_2017.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / Trimestrul IV",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_-IV-_2017.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / An 2017",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SP-FEE_-_Standard_de_Performanta_Ord_7_2017.pdf",
            },
            {
              type: "text",
              text: "ANEXA 3 / An 2017",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_3_Standard_de_performanta_An_2017.pdf",
            },
          ],
        },
        {
          categoryName: "INDICATORI DE PERFORMANTA 2016",
          id: "indicatoriDePerformanta2016",
          content: [
            {
              type: "title",
              text: "Indicatori de performanta 2016",
            },
            {
              type: "text",
              text: "ANEXA 1 / Semestrul I",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa1-sem1-2016.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / Semestrul I",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa2-sem2-2016.pdf",
            },
            {
              type: "text",
              text: "ANEXA 3 / Semestrul I",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa3-sem1-2016.pdf",
            },
            {
              type: "text",
              text: "ANEXA 1 / Semestrul II",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_1_-_SPFEE_Getica_SEM_II_2016.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / Semestrul II",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_-_SPFEE_Getica_SEM_II_2016.pdf",
            },
            {
              type: "text",
              text: "ANEXA 3 / Semestrul II",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_3_Standard_de_performanta_Sem_II_2016.pdf",
            },
            {
              type: "text",
              text: "ANEXA 1 / An 2016",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_1_SPFEE_Getica_An_2016.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / An 2016",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_SPFEE_Getica_An_2016.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / An 2016",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_3_Standard_de_performanta_An_2016.pdf",
            },
          ],
        },
        {
          categoryName: "INDICATORI DE PERFORMANTA 2015",
          id: "indicatoriDePerformanta2015",
          content: [
            {
              type: "title",
              text: "Indicatori de performanta 2015",
            },
            {
              type: "text",
              text: "ANEXA 1 / Semestrul I",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_1_Getica_sem1-2015.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / Semestrul I",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_Getica_sem1-2015.pdf",
            },
            {
              type: "text",
              text: "ANEXA 1 / Semestrul II",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_1_Getica_sem2-2015.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2 / Semestrul II",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_Getica_sem2-2015.pdf",
            },

            {
              type: "text",
              text: "ANEXA 3 / An 2015",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_3-Getica-2015.pdf",
            },
          ],
        },
        {
          categoryName: "INDICATORI DE PERFORMANTA 2014",
          id: "indicatoriDePerformanta2014",
          content: [
            {
              type: "title",
              text: "Indicatori de performanta 2014",
            },
            {
              type: "text",
              text: "ANEXA 1",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./energie-anexa-1-2014.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./energie-anexa-2-2014.pdf",
            },
            {
              type: "text",
              text: "ANEXA 3",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./energie-anexa-3-2014.pdf",
            },
          ],
        },
        {
          categoryName: "INDICATORI DE PERFORMANTA 2013",
          id: "indicatoriDePerformanta2013",
          content: [
            {
              type: "title",
              text: "Indicatori de performanta 2013",
            },
            {
              type: "text",
              text: "ANEXA 1",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Indicatori-de-performanta-2013-anexa1.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Indicatori-de-performanta-2013-anexa2.pdf",
            },
            {
              type: "text",
              text: "ANEXA 3",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa-3-la-standardul-de-performanta.pdf",
            },
          ],
        },
      ],
    },
    chestionarEnergetic: {
      heroSection: {
        image: solarPanel,
        title: "Energie Electrica",
      },
      section: {
        title: "Chestionar energetic",
        tutorial: {
          header: "Cum completez formularul?",
          downloadPDF: {
            title: "DOWNLOAD CHESTIONAR (PDF)",
            link: "./chestionar_energetic.pdf",
          },
          downloadDOC: {
            title: "DOWNLOAD CHESTIONAR (DOC)",
            link: "./chestionar_energetic.doc",
          },
          steps: [
            {
              title: "PASUL 1",
              content:
                " Descarcati formularul de mai sus in format PDF sau DOC (Microsoft Office)",
            },
            { title: "PASUL 2", content: "Completati formularul" },
            {
              title: "PASUL 3",
              content:
                "Completati datele de contact din formularul de pe aceasta pagina",
            },
            {
              title: "PASUL 4",
              content: "Accesati butonul 'Genereaza email'  completat",
            },
            {
              title: "PASUL 5",
              content:
                "In mailul creat, atasati formularul de la pasul 1, completat",
            },
          ],
        },
      },
    },
    consumatoriFinali: {
      heroSection: {
        image: solarPanel,
        title: "Energie Electrica",
      },
      section: {
        title: "Consumatori finali",
      },
      data: [
        {
          title: "CHESTIONAR ENERGETIC",
          documents: [
            {
              title: "DOWNLOAD CHESTIONAR (PDF)",
              link: "./chestionar_energetic.pdf",
            },
            {
              title: "DOWNLOAD CHESTIONAR (DOC)",
              link: "./chestionar_energetic.doc",
            },
          ],
        },
        {
          title: "GHIDUL CONSUMATORULUI ELIGIBIL",
          documents: [
            {
              title: "Download ghidul consumatorului (PDF)",
              link: "./GhidE.pdf",
            },
            {
              title: "Download ghidul consumatorului (DOC)",
              link: "./GhidE.doc",
            },
          ],
        },
        {
          title: "OBLIGATIILE FURNIZORULUI DE ENERGIE ELECTRICA",
          documents: [
            {
              title: "Download obligatii furnizor (PDF)",
              link: "./obligatiile-furnizorului.pdf",
            },
            {
              title: "Download obligatii furnizor (DOC)",
              link: "./obligatiile-furnizorului.doc",
            },
          ],
        },

        {
          title: "RAPORTARI PRIVIND ACTIVITATEA DE INFORMARE A CONSUMATORILOR",
          documents: [
            {
              title: "Download raport Energie 2021",
              link: "./Raport_privind_activitatea_de_informare_a_consumatorilor_Getica_95_AN_2021_Energie.pdf",
            },
            {
              title: "Download raport Energie 2020",
              link: "./Raport_privind_activitatea_de_informare_a_consumatorilor_Getica_95_AN_2020_Energie.pdf",
            },
            {
              title: "Download raport Energie 2019",
              link: "./Raport_privind_activitatea_de_informare_a_consumatorilor_Getica_95_AN_2019_Energie.pdf",
            },
            {
              title: "Download raport Energie 2018",
              link: "./Raport_privind_activitatea_de_informare_a_consumatorilor_Getica_95_AN_2018_Energie.pdf",
            },
            {
              title: "Download raport Energie 2017",
              link: "./Raport_privind_activitatea_de_informare_a_consumatorilor_Getica_95_AN_2017_Energie.pdf",
            },
            {
              title: "Download raport Energie 2016",
              link: "./Raport_privind_activitatea_de_informare_a_consumatorilor_Getica_95_AN_2016_Energie.pdf",
            },
            {
              title: "Download raport Energie 2015",
              link: "./Raport_privind_activitatea_de_informare_a_consumatorilor_Getica_95_AN_2015_Energie.pdf",
            },
            {
              title: "Download raport Energie 2014",
              link: "./Raport_privind_activitatea_de_informare_a_consumatorilor_Getica_95_AN_2014_Energie.pdf",
            },
          ],
        },
        {
          title:
            "Procedura privind acordarea despăgubirilor clienţilor casnici pentru receptoarele electrocasnice deteriorate ca efect al unor supratensiuni accidentale produse din culpa operatorului de rețea",
          documents: [
            {
              title: "Ord. 177/2015",
              link: "./Ord-177-2015.pdf",
            },
          ],
        },
      ],
    },
    achizitii: {
      heroSection: {
        image: solarPanel,
        title: "Energie Electrica",
      },
      section: {
        title: "Achizitii",
      },
      data: [
        {
          src: "./Eticheta-energiei-2021.jpg",
          title: "ETICHETA ENERGIE GETICA 95 - 2021",
        },
        {
          src: "./Eticheta-energiei-2020.jpg",
          title: "ETICHETA ENERGIE GETICA 95 - 2020",
        },
        {
          src: "./Eticheta-energiei-2019.jpg",
          title: "ETICHETA ENERGIE GETICA 95 - 2019",
        },
        {
          src: "./Eticheta-energie-2017.jpg",
          title: "ETICHETA ENERGIE GETICA 95 - 2017",
        },
        {
          src: "./Eticheta-energie-2016.jpg",
          title: "ETICHETA ENERGIE GETICA 95 - 2016",
        },
        {
          src: "./Eticheta-energie-2015.jpg",
          title: "ETICHETA ENERGIE GETICA 95 - 2015",
        },
        {
          src: "./a-eticheta-2014.jpg",
          title: "ETICHETA ENERGIE GETICA 95 - 2014",
        },
        {
          src: "./b-Eticheta-2013.jpg",
          title: "ETICHETA ENERGIE GETICA 95 - 2013",
        },
      ],
    },
    legislatieSiUtile: {
      heroSection: {
        image: solarPanel,
        title: "Energie Electrica",
      },
      section: {
        title: "Legislatie si utile",
        content:
          "PROCESUL DE SCHIMBARE A FURNIZORULUI NU PRESUPUNE PLATA NICIUNEI TAXE",
        visibleData: [
          {
            title: "Codul comercial",
            link: "./CodComercial.pdf",
          },
          {
            title: "Codul comercial - Ordinul 25",
            link: "./ord25_04CoCom.pdf",
          },
          {
            title: "Legea energiei",
            link: "./Legea_energiei_2012_MO.pdf",
          },
          {
            title: "Legea 220/2008 - Certificate verzi",
            link: "./esre_Legea 134_12modifL200_2008.pdf",
          },
          {
            title: "Ordin schimbare furnizor",
            link: "./Ord_88_09Procedura_schimbare_furnizor.pdf",
          },
          {
            title: "Modificare ordin schimbare furnizor",
            link: "./Ord_105_14.pdf",
          },
          {
            title: "Ordinul 76/2016 – facturarea energiei reactive",
            link: "./Ord76_2016.pdf",
          },
          {
            title: "Furnizor de ultimă optiune",
            link: "./Ord35_14.pdf",
          },
          {
            title: "Standard de performanță furnizori",
            link: "./Ord06_17.pdf",
          },
          {
            title:
              "Standard de performanță pentru serviciul de distribuție a enrgiei electrice",
            link: "./Ord49_2017.pdf",
          },
        ],
        acordionData: [
          {
            title: "TARIFE DISTRIBUTIE",
            documents: [
              {
                type: "title",
                text: "Ordinul: 114/2016",
              },
              {
                type: "text",
                text: "Ordin privind aprobarea tarifelor specifice pentru serviciul de distribuţie a energiei electrice și a prețului pentru energia electrică reactivă, pentru societatea ”S.D.E.E. Transilvania Sud” - S.A.",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 114/2016",
                link: "./Ord_114_2016_Distributie_Transilvania_Sud.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 113/2016",
              },
              {
                type: "text",
                text: "Ordin privind aprobarea tarifelor specifice pentru serviciul de distribuţie a energiei electrice şi a preţului pentru energia electrică reactivă, pentru societatea “ S.D.E.E. Transilvania Nord ”- S.A",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 113/2016",
                link: "./Ord_113_2016_Distributie_Transilvania_Sud.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 112/2016",
              },
              {
                type: "text",
                text: "Ordin - privind aprobarea tarifelor specifice pentru serviciul de distribuţie a energiei electrice şi a preţului pentru energia electrică reactivă, pentru Societatea Comercială „S.D.E.E. Muntenia Nord” – S.A.",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 112/2016",
                link: "./Ord_112_2016_Distributie_Transilvania_Sud.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 107/2016",
              },
              {
                type: "text",
                text: "Ordin pentru aprobarea tarifelor specifice pentru serviciul de distribuţie a energiei electrice și a prețului pentru energia electrică reactivă, pentru operatorul de distribuţie concesionar S.C. E-Distribuție Muntenia S.A.",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 107/2016",
                link: "./Ord_107_2016_E-Distributie_Muntenia.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 109/2016",
              },
              {
                type: "text",
                text: "Ordin pentru aprobarea tarifelor specifice pentru serviciul de distribuţie a energiei electrice și a prețului pentru energia electrică reactivă, pentru operatorul de distribuţie concesionar S.C. E-Distribuție Dobrogea S.A.",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 109/2016",
                link: "./Ord_109_2016_E-Distributie_Dobrogea.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 108/2016",
              },
              {
                type: "text",
                text: "Ordin - privind aprobarea tarifelor specifice pentru serviciul de distribuţie a energiei electrice şi a preţului pentru energia electrică reactivă, pentru Societatea Comercială „E-Distribuţie Banat” – S.A.",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 108/2016",
                link: "./Ord_108_2016_E-Distributie_Banat.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 111/2016",
              },
              {
                type: "text",
                text: "Ordin privind aprobarea tarifelor specifice pentru serviciul de distribuţie a energiei electrice și a prețului pentru energia electrică reactivă, pentru societatea ”Delgaz Grid” - S.A.",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 111/2016",
                link: "./Ord_111_2016_Distributie_DelGaz.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 110/2016",
              },
              {
                type: "text",
                text: "Ordin privind aprobarea tarifelor specifice pentru serviciul de distribuţie a energiei electrice şi a preţului pentru energia electrică reactivă, pentru societatea Distributie Oltenia - S.A..",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 110/2016",
                link: "./Ord_110_2016_Distributie_Oltenia.pdf",
              },
            ],
          },
          {
            title: "TARIFE TRANSPORT",
            documents: [
              {
                type: "title",
                text: "Ordinul: 48/2017",
              },
              {
                type: "text",
                text: "Ordin de aprobare a tarifului mediu pentru serviciul de transport, a componentelor tarifului de transport de introducere a energiei electrice în rețea (TG) și de extragere a energiei electrice din rețea (TL), a tarifului pentru serviciul de sistem şi a preţului reglementat pentru energia electrică reactivă, practicate de Compania Naţională de Transport al Energiei Electrice “Transelectrica” - S.A.",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 48/2017",
                link: "./Ord_48_2017_Transport.pdf",
              },
            ],
          },
          {
            title: "DECIZII SI ORDINE",
            documents: [
              {
                type: "link",
                text: "Decizii",
                link: "http://213.177.15.183/PublicLists/Decizie",
              },
              {
                type: "link",
                text: "Ordine",
                link: "http://213.177.15.183/PublicLists/Ordin",
              },
            ],
          },
        ],
      },
    },
    dreptulLaInformare: {
      heroSection: {
        image: solarPanel,
        title: "Energie Electrica",
      },
      section: {
        title: "DREPTUL LA INFORMARE AL CONSUMATORILOR",
        disclaimer:
          "RAPORTARI PRIVIND ACTIVITATEA DE INFORMARE A CONSUMATORILOR DREPTUL LA INFORMARE AL CONSUMATORULUI DE ENERGIE ELECTRICĂ/GAZE NATURALE",
        data: [
          {
            type: "bold",
            text: "Stimaţi consumatori,",
          },
          {
            type: "text",
            text: "Prin lege, aveţi dreptul de a fi informat, în relaţia dumneavoastră cu GETICA 95 COM SRL. Aveţi dreptul să cereţi şi să primiţi, gratuit, înainte de semnarea contractului de furnizare, o copie a acestuia şi a condiţiilor-standard de furnizare a serviciului, după caz.",
          },
          {
            type: "bold",
            text: "Înainte de semnarea contractului de furnizare, GETICA 95 COM SRL are obligaţia de a vă pune la dispoziţie, în scris, următoarele informaţii:",
          },
          {
            type: "text",
            text: "- etapele şi documentele necesare pentru încheierea unui contract de furnizare;",
          },
          {
            type: "text",
            text: "- ofertele tip pentru care puteţi opta, după caz;",
          },
          {
            type: "text",
            text: "- contractul corespunzător ofertei alese, după caz;",
          },
          {
            type: "text",
            text: "- preţurile şi tarifele practicate.",
          },
          {
            type: "bold",
            text: "Verificaţi înainte de semnare dacă, în contractul primit sunt incluse cel puţin următoarele informaţii:",
          },
          {
            type: "text",
            text: "- identitatea şi adresa furnizorului;",
          },
          {
            type: "text",
            text: "- serviciul furnizat, nivelurile de calitate a serviciului oferit şi continuitatea în alimentare, precum şi termenul de începere a derulării contractului;",
          },
          {
            type: "text",
            text: "- preţul/tariful aplicabil;",
          },
          {
            type: "text",
            text: "- durata contractului, condiţiile de reînnoire/prelungire a contractului şi de întrerupere temporară a alimentării cu energie electrică/gaze naturale, dreptul de denunţare unilaterală a contractului;",
          },
          {
            type: "text",
            text: "- compensaţiile/despăgubirile şi modalitatea de rambursare aplicabilă în caz de nerespectare a nivelurilor de calitate a serviciului prevăzut prin contract, după caz;",
          },
          {
            type: "text",
            text: "- penalităţile pe care trebuie să le plătiţi dacă nu respectaţi prevederile contractuale.",
          },

          {
            type: "italic",
            text: "Furnizorul dumneavoastră GETICA 95 COM SRL are obligaţia de a vă oferi, la cerere, un extras tipărit al procedurii de înregistrare, investigare şi soluţionare a petiţiilor primite de la consumatori.",
          },
          {
            type: "italic",
            text: "Furnizorul dumneavoastră GETICA 95 COM SRL este obligat să vă informeze în legătură cu orice modificări ale preţurilor, modului de facturare, de încasare sau ale altor condiţii din contract, în mod direct şi în timp util, într-un mod transparent şi uşor de înţeles.",
          },
          {
            type: "italic",
            text: "Dacă nu sunteţi de acord cu modificările anunţate, aveţi dreptul de a renunţa la contract fără a plăti despăgubiri, respectând prevederile contractuale şi legale în vigoare.",
          },
          {
            type: "italic",
            text: "Dacă dreptul dumneavoastră de a fi informat vă este încălcat, vă puteţi adresa Autorităţii Naţionale de Reglementare în Domeniul Energiei - ANRE.",
          },
        ],
        anre: {
          imageLink: anreImage,
          imageText: "Anre Image",

          texts: [
            "AUTORITATEA NAŢIONALĂ DE REGLEMENTARE ÎN DOMENIUL ENERGIEI",
            "Str. Constantin Nacu, nr. 3, sector 2, Bucureşti, România",
            "Telefon: 021.327.81.00; Fax: 021.312.43.65",
            "Număr gratuit: 0800800410 (apelabil numai în reţeaua Romtelecom)",
            "E-mail: info@anre.ro; Website: www.anre.ro",
          ],
        },
      },
    },
    eficientaEnergetica: {
      heroSection: {
        image: solarPanel,
        title: "Energie Electrica",
      },
      section: {
        title: "Eficienta energetica",
        content: "DOCUMENTE INFORMATIVE",
        visibleData: [
          "Eficienta energetica inseamna: economisirea energiei, reducerea cheltuielilor, protectia mediului.",
          "Ceva este mai eficient din punct de vedere energetic daca ofera mai mult pentru aceeasi energie consumata, sau aceleasi servicii pentru un consum mai redus de energie.",
          "Pentru a avea o perspectiva cât mai larga asupra actiunilor care se pot desfasura in vederea indeplinirii acestor obiective, va rugam sa vizitati pagina noastra de web, unde veti gasi ghiduri, postere, brosuri, care contin informatii privind metodele cele mai bune pe care trebuie sa le folosim, astfel incât rezultatele sa fie economia de energie, costuri reduse si protectia mediului.",
        ],
        anreImage: {
          src: anreImage,
          alt: "Anre Image",
        },
        acordionData: [
          {
            title: "INFORMATII DE INTERES PUBLIC",
            documents: [
              {
                type: "link",
                text: "Info manageri energetici/auditori energetici",
                link: "http://www.anre.ro/ro/eficienta-energetica/informatii-de-interes-public/info-manageri-energetici-auditori-energetici",
              },

              {
                type: "link",
                text: "Info eficiență energetică",
                link: "Info eficiență energetică",
              },
              {
                type: "link",
                text: "Anunturi",
                link: "http://www.anre.ro/ro/eficienta-energetica/informatii-de-interes-public/anunturi",
              },
              {
                type: "link",
                text: "Cerere restituire sume plătite în avans",
                link: "http://www.anre.ro/ro/eficienta-energetica/informatii-de-interes-public/legea-544-2001-info-publice1386850453",
              },
              {
                type: "link",
                text: "Info Autorizări / Atestari / Soc. prestatoare serv EFIC",
                link: "http://www.anre.ro/ro/eficienta-energetica/informatii-de-interes-public/info-licente-autorizari1387202078",
              },
              {
                type: "link",
                text: "LISTE PUBLICE (Atestate, auditori, manageri, Soc. prestatoare serv EFIC)",
                link: "./Ord_110_2016_Distributie_Oltenia.pdf",
              },
            ],
          },
          {
            title: "CONSUMATORI",
            documents: [
              {
                type: "link",
                text: "Documente informative",
                link: "http://www.anre.ro/ro/eficienta-energetica/consumatori/documente-informative1385708608",
              },
            ],
          },
          {
            title: "LEGISLATIE",
            documents: [
              {
                type: "link",
                text: "Tarife și contribuții bănești",
                link: "http://www.anre.ro/ro/eficienta-energetica/legislatie/tarife-si-contributii-banesti",
              },
              {
                type: "link",
                text: "Legislație eficiență energetică",
                link: "http://www.anre.ro/ro/eficienta-energetica/legislatie/legislatie-efic-en",
              },
              {
                type: "link",
                text: "Energy Efficiency Legislation",
                link: "http://www.anre.ro/ro/eficienta-energetica/legislatie/energy-efficiency-legislation1438862283",
              },
              {
                type: "link",
                text: "Legislație primară",
                link: "http://www.anre.ro/ro/eficienta-energetica/legislatie/legislatie-primara1387180368",
              },
              {
                type: "link",
                text: "Documente de discuție EE",
                link: "http://www.anre.ro/ro/eficienta-energetica/legislatie/documente-de-discutie-ee1387285443",
              },
              {
                type: "link",
                text: "Legislație UE",
                link: "http://www.anre.ro/ro/eficienta-energetica/legislatie/legislatie-ue",
              },
            ],
          },
        ],
      },
    },
  },
};

// console.log(JSON.stringify(TEXTS));
