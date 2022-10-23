import facturaLunara from "./assets/images/homepage/factura_lunara.png";
import consultantaCasnic from "./assets/images/homepage/consultanta-casnic.png";
import consultantaNoncasnic from "./assets/images/homepage/consultanta-noncasnic.png";
import grafice from "./assets/images/homepage/grafice.png";
import matering from "./assets/images/homepage/matering.png";
import analiza from "./assets/images/homepage/analiza.png";
import logo from "./assets/images/logo.png";
import solarPanel from "./assets/images/servicii_energie_electrica/solarPanel.jpg";
import anreImage from "./assets/images/anre.png";
import naturalGas from "./assets/images/servicii_gaze_naturale/naturalGas.jpg";
import energyImage from "./assets/images/info/energy.jpg";

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
    acreditari: {
      heroSection: {
        image: solarPanel,
        title: "Energie Electrica",
      },
      section: {
        title: "Acreditari",
      },

      data: [
        {
          title: "Certificari TUV",
          documents: [
            {
              type: "img",
              title: "Tuv 2021",
              link: "./Tuv-2021.jpg",
            },
            {
              type: "img",
              title: "Tuv",
              link: "./Certificate-No.-C-12-2018-21245284-1.jpg",
            },
            {
              type: "img",
              title: "Tuv",
              link: "./Getica-Green-2020.jpg",
            },
          ],
        },
        {
          title: "Licente ANRE",
          documents: [
            {
              type: "img",
              title: "Licenta furnizare energie electrica 2020",
              link: "./licenta-ANRE-2019.jpg",
            },
            {
              type: "img",
              title: "Licenta furnizare energie electrica",
              link: "./CCF06122012_0007.jpg",
            },
            {
              type: "img",
              title: "Licenta furnizare gaze naturale",
              link: "./licenta-gaze-2018.jpg",
            },
          ],
        },
        {
          title: "Decizii si Avize ANRE",
          documents: [
            {
              type: "link",
              title:
                "Decizie si Anexa nr. 1960 din 20.11.2019 - GETICA 95 COM (PDF)",
              link: "./decizia-1960-2019.pdf",
            },
            {
              type: "link",
              title:
                "Decizie si Anexa nr. 2521 din 14.12.2015 - GETICA 95 COM (PDF)",
              link: "./Decizie+anexa_licenta_veche.pdf",
            },
            {
              type: "link",
              title:
                "Decizie ANRE nr. 338/2019 pentru desemnare FUI optional GETICA 95 COM  (PDF)",
              link: "./Decizia_338_din_28.02.2019_desemnare_Getica_FUIop.pdf",
            },
            {
              type: "link",
              title:
                "Decizie  ANRE nr. 89/22.01.2020 pentru modificarea deciziei ANRE nr. 338/2019 (PDF)",
              link: "./Decizie_89_2019.pdf",
            },
            {
              type: "link",
              title:
                "Aviz privind pretul pentru Seviciul Universal aplicat FUI optional GETICA 95 COM (PDF)",
              link: "./Decizie_89_2019.pdf",
            },
          ],
        },
        {
          title: "Certificate ISO",
          documents: [
            {
              type: "img",
              title: "ISO",
              link: "./ISO-9001-scaled.jpg",
            },
            {
              type: "img",
              title: "ISO",
              link: "./ISO-14001-scaled.jpg",
            },
          ],
        },
        {
          title: "Certificate SRAC",
          documents: [
            {
              type: "img",
              title: "SRAC",
              link: "./iso-9001.jpg",
            },
            {
              type: "img",
              title: "SRAC",
              link: "./iso-14001.jpg",
            },
          ],
        },
        {
          title: "Diplome GETICA 95",
          documents: [
            {
              type: "img",
              title: "Topul National al Firmelor",
              link: "./Top-National-Getica-95-2018.jpg",
            },
            {
              type: "img",
              title: "Topul Firmelor din Judetul Buzau 2017",
              link: "./Diploma-Getica-2017.jpg",
            },
            {
              type: "img",
              title: "Topul de excelenta 2017",
              link: "./Trofeu-de-Excelenta-Getica-2017.jpg",
            },
            {
              type: "img",
              title: "Topul de excelenta 2015",
              link: "./CCF30102015_0003.jpg",
            },
            {
              type: "img",
              title: "Distinctie de excelenta 2015",
              link: "./CCF30102015_0002.jpg",
            },
            {
              type: "img",
              title: "Topul Firmelor din Judetul Buzau 2015",
              link: "./CCF30102015_0001.jpg",
            },
            {
              type: "img",
              title: "Topul de excelenta 2008-2012",
              link: "./getica-95-trofeu-de-excelenta2013.jpg",
            },
            {
              type: "img",
              title: "Topul Firmelor din Judetul Buzau 2013",
              link: "./getica-95-topul-firmelor2013.jpg",
            },
            {
              type: "img",
              title: "Topul Firmelor din Judetul Buzau 2013",
              link: "./getica-95-topul-firmelor2013.jpg",
            },
            {
              type: "img",
              title: "Distinctie de excelenta 2013",
              link: "./getica-95-distinctie-de-excelenta2013.jpg",
            },
            {
              type: "img",
              title: "Topul Firmelor Judetul Buzau 2012",
              link: "./CCF06122012_0005.jpg",
            },
            {
              type: "img",
              title: "Distinctie de excelenta 2012",
              link: "./CCF06122012_0004.jpg",
            },
            {
              type: "img",
              title: "Topul Firmelor Judetul Buzau 2010",
              link: "./CCF06122012_0003.jpg",
            },
            {
              type: "img",
              title: "Topul Firmelor Judetul Buzau 2009",
              link: "./CCF06122012_0002.jpg",
            },
            {
              type: "img",
              title: "Topul Firmelor Judetul Buzau 2011",
              link: "./CCF06122012_0001.jpg",
            },
            {
              type: "img",
              title: "Distinctie de excelenta 2011",
              link: "./CCF06122012_0000.jpg",
            },
            {
              type: "img",
              title: "Top Afaceri Romania 2012",
              link: "./4.jpg",
            },
            {
              type: "img",
              title: "Top Profit  Romania 2012",
              link: "./2.jpg",
            },
            {
              type: "img",
              title: "Top Profit  Romania 2012",
              link: "./1.jpg",
            },
          ],
        },
      ],
    },
    dateFinanciare: {
      heroSection: {
        image: solarPanel,
        title: "Energie Electrica",
      },
      section: {
        title: "Date financiare Getica 95",
      },
      data: [
        {
          title: "Bilant 2020",
          documents: [
            {
              title: "Bilant 2020 (PDF)",
              link: "./Situatii_financiare_Getica95_7562758_31.12.2020_depuse_21.05.2021.pdf",
            },
          ],
        },
        {
          title: "Bilant 2019",
          documents: [
            {
              title: "Bilant 2019 (PDF)",
              link: "./Situatii_financiare_Getica95_7562758_31.12.2019_depus.pdf",
            },
          ],
        },
        {
          title: "Bilant 2018",
          documents: [
            {
              title: "Bilant 2018 (PDF)",
              link: "./Bilant-31.12.2018_GETICA_95.PDF.pdf",
            },
          ],
        },
        {
          title: "Bilant 2017",
          documents: [
            {
              title: "Bilant 2017 (PDF)",
              link: "./Bilant-31.12.2017_GETICA_95.PDF",
            },
          ],
        },
        {
          title: "Bilant 2016",
          documents: [
            {
              title: "Bilant 2016 (PDF)",
              link: "./Bilant_31.12.2016-Getica_95_COM_SRL.PDF",
            },
          ],
        },
        {
          title: "Bilant 2015",
          documents: [
            {
              title: "Bilant 2015 (PDF)",
              link: "./bilant-2015.pdf",
            },
          ],
        },
        {
          title: "Bilant 2014",
          documents: [
            {
              title: "Bilant 2014 (PDF)",
              link: "./Bilant_Dec_2014.pdf",
            },
          ],
        },
        {
          title: "Bilant 2013",
          documents: [
            {
              title: "Bilant 2013 (PDF)",
              link: "./Bilant_31122013.pdf",
            },
          ],
        },
        {
          title: "Bilant 2012",
          documents: [
            {
              title: "Bilant 2012 (PDF)",
              link: "./Bilant_31122012.pdf",
            },
          ],
        },
      ],
    },
    gazeNaturaleProcesulDeSchimbareAFurnizorului: {
      heroSection: {
        image: naturalGas,
        title: "Gaze naturale",
      },
      section: {
        title: "Procesul de schimbare a furnizorului",
      },
      disclaimer: {
        title:
          "Liberalizarea pietei de gaze naturale - recomandari pentru clientul casnic",
        link: {
          src: "Instrucțiuni_ANRE.pdf",
          title: "Descarca Instructiuni ANRE",
        },
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
              text: "Fax: 0213211118 | E-mail: office@getica95.ro",
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
              text: "Negociere, agreere Contract de furnizare gaze naturale",
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
          categoryName: "OFERTA TIP DE FURNIZARE GAZE NATURALE",
          id: "ofertaTipDeFurnizare",
          content: [
            {
              type: "title",
              text: "Oferta tip de furnizare gaze naturale",
            },

            {
              type: "btn",
              text: "Vezi oferta noncasnic",
              link: "",
            },
            {
              type: "btn",
              text: "Vezi oferta casnic",
              link: "",
            },
          ],
        },
        {
          categoryName:
            "DOCUMENTE NECESARE CONTRACTARE FURNIZARE GAZE NATURALE",
          id: "documenteNecesare",
          content: [
            {
              type: "title",
              text: "Notificare schimbare furnizor gaze naturale",
            },
            {
              type: "btn",
              text: "Descarca Notificare",
              link: "./Notificare_schimbare_furnizor_gaze_naturale.pdf",
            },
            {
              type: "title",
              text: "Contract persoane fizice/juridice furnizare gaze naturale",
            },
            {
              type: "btn",
              text: "Descarca Contract furnizare gaze naturale persoane fizice",
              link: "./Draft_contract_GN_casnic_p_04.2022.pdf",
            },

            {
              type: "btn",
              text: "Descarca Contract furnizare gaze naturale persoane juridice ",
              link: "./Draft_contract_GN_noncasnic_p_04.2022.pdf",
            },
            {
              type: "title",
              text: "Cerere pentru încheierea contractului de furnizare gaze naturale client casnic existent",
            },
            {
              type: "btn",
              text: "Descarca Cerere",
              link: "./CERERE_gaze_naturale_Consumatori_casnici_CB_client_existent.pdf",
            },
            {
              type: "title",
              text: "Cerere pentru încheierea contractului de furnizare gaze naturale client casnic nou",
            },
            {
              type: "btn",
              text: "Descarca Cerere",
              link: "./CERERE_gaze_naturale_Consumatori_casnici_CB_client_nou.pdf",
            },
            {
              type: "title",
              text: "Cerere pentru încheierea contractului de furnizare gaze naturale client noncasnic existent",
            },
            {
              type: "btn",
              text: "Descarca Cerere",
              link: "./CERERE_gaze_naturale_Consumatori_noncasnici_CB_client_existent.pdf",
            },
            {
              type: "title",
              text: "Cerere pentru încheierea contractului de furnizare gaze naturale client noncasnic nou",
            },
            {
              type: "btn",
              text: "Descarca Cerere",
              link: "./CERERE_gaze_naturale_Consumatori_noncasnici_CB_client_nou.pdf",
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
              text: "ANEXA 1",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_1_Standard_Performanta_3_2022.pdf",
            },
            {
              type: "text",
              text: "ANEXA 2/ Trimestrul 3",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_2_Standard_Performanta_3_2022_Q3_22_GN.pdf",
            },
            {
              type: "text",
              text: "ANEXA 3/ Trimestrul 3",
            },
            {
              type: "link",
              text: "Download (PDF)",
              link: "./Anexa_3_Standard_Performanta_3_2022_Q3_22_GN.pdf",
            },
          ],
        },
        {
          categoryName: "CHESTIONAR",
          id: "chestionar",
          content: [
            {
              type: "title",
              text: "Chestionarul pentru gaze naturale poate fi accesat de aici",
            },
            {
              type: "btn",
              text: "Acceseaza chestionarul gaze naturale",
              link: "",
            },
          ],
        },

        {
          categoryName: "GHID",
          id: "ghid",
          content: [
            {
              type: "title",
              text: "Procesul de schimbare a furnizoruluii",
            },
            {
              type: "btn",
              text: "Link pagina ANRE - schimbarea furnizorului",
              link: "https://www.anre.ro/ro/info-consumatori/faq/gaze-naturale1386850583/schimbarea-gratuita-a-furnizorului",
            },
            {
              type: "title",
              text: "Informatii utile",
            },
            {
              type: "text",
              text: "1. Care sunt furnizorii activi în zona mea?",
            },
            {
              type: "text",
              text: "Lista furnizorilor de gaze naturale poate fi consultată pe pagina de internet www.anre.ro, secțiunea Info consumatori, rubricile Operatori economici/Gaze naturale/Titulari licenţe şi autorizaţii.",
            },
            {
              type: "text",
              text: "https://portal.anre.ro/PublicLists/LicenteAutorizatiiGNf",
            },
            {
              type: "text",
              text: "2. Cum pot denunța contractul și să schimb furnizorul de gaze naturale?",
            },
            {
              type: "text",
              text: "Odată cu deschiderea totală către concurenţă a pieţei de gaze naturale a fost implementat cadrul legal care să permită tuturor consumatorilor de gaze naturale, indiferent de natura consumului, casnic sau noncasnic, să uzeze de dreptul de eligibilitate.",
            },
            {
              type: "text",
              text: "Astfel, orice client final de gaze naturale poate să treacă de la furnizarea în regim reglementat (la preţul final reglementat şi în baza contractului-cadru de furnizare aprobate de ANRE), la furnizarea în regim concurenţial (la preţul de furnizare şi în condiţiile comerciale stabilite între furnizor şi clientul final de gaze naturale).",
            },
            {
              type: "text",
              text: "Toţi clienţii finali de gaze naturale au dreptul să îşi schimbe furnizorul, cu respectarea condiţiilor contractuale, în termen de 21 de zile de la data solicitarii.",
            },
            {
              type: "text",
              text: "Procesul de schimbare a furnizorului este gratuit, fiind interzisă perceperea oricăror taxe sau tarife legate de parcurgerea acestuia.",
            },
            {
              type: "text",
              text: "Schimbarea furnizorului de gaze naturale nu implică modificări de ordin tehnic!",
            },
            {
              type: "text",
              text: "Paşii de urmat :",
            },
            {
              type: "text",
              text: "În scopul încheierii unui nou contract de furnizare a gazelor naturale, luaţi legatura cu unul dintre furnizorii de gaze naturale din lista publicată pe site-ul ANRE https://portal.anre.ro/PublicLists/LicenteAutorizatiiGN şi negociaţi condiţiile comerciale şi preţul de furnizare sau acceptaţi o oferta-tip publicată de către furnizorul ales;",
            },
            {
              type: "text",
              text: "După ce conveniţi cu furnizorul nou asupra clauzelor contractuale, inclusiv asupra preţului de furnizare, încheiaţi cu acesta contractul de furnizare a gazelor naturale, cu luarea în considerare a termenului necesar denunţării unilaterale, în vederea rezilierii contractului încheiat cu furnizorul actual;",
            },
            {
              type: "text",
              text: "Notificaţi, în scris, actualului furnizor intenţia dvs. de reziliere a contractului de furnizare încheiat cu acesta, respectând termenul şi condiţiile de denunţare unilaterală prevăzute în contract.",
            },
            {
              type: "text",
              text: "În situatia în care sunteţi un client casnic care denunţă unilateral un contract de furnizare în regim reglementat, vă precizam că, potrivit clauzelor contractuale, această denunţare devine efectivă sub condiţia achitarii tuturor obligaţiilor de plată, mai puţin a celor care fac obiectul unor litigii aflate pe rolul instanţelor de judecată.",
            },
            {
              type: "text",
              text: "Vă recomandăm să obţineţi de la actualul furnizor o confirmare, de asemenea, în scris, a primirii notificării dumneavoastră.",
            },
            {
              type: "text",
              text: "Responsabilitatea stabilirii index-ului contorului corespunzator datei schimbării furnizorului revine operatorului sistemului la care este racordat locul dumneavoastra de consum. Acesta convine şi consemnează, împreuna cu furnizorul actual, respectiv cu noul furnizor, indexul contorului dumneavoastră din ziua în care furnizorul nou începe să vă vânda gaze naturale.",
            },
            {
              type: "text",
              text: "Vă recomandam să citiţi şi să notaţi şi dvs. index-ul contorului de gaze naturale în ziua respectivă.",
            },
            {
              type: "text",
              text: "În termen de maximum 42 de zile de la data schimbarii furnizorului, vechiul furnizor vă va transmite o factură cu decontul final de lichidare a tuturor obligaţiilor de plată.Achitaţi contravaloarea acestei facturi până la termenul scadent.",
            },
            {
              type: "text",
              text: "3. Care sunt condițiile generale minime pentru denunțarea contractului în cazul schimbării furnizorului?",
            },
            {
              type: "text",
              text: "Trebuie să verificați condițiile contractuale sau vă puteți adresa furnizorului dvs. pentru clarificare.",
            },
            {
              type: "text",
              text: "4. Am găsit o ofertă mai bună pentru furnizarea gazelor naturale și am decis să schimb furnizorul. Cine întreprinde demersurile necesare schimbării?",
            },
            {
              type: "text",
              text: "La solicitarea clientului final şi pe baza contractului de furnizare gaze naturale încheiat cu clientul final, noul furnizor are obligaţia de a întreprinde demersurile necesare încheierii contractului.",
            },
            {
              type: "text",
              text: "5. La schimbarea furnizorului, există vreun risc de deconectare?",
            },
            {
              type: "text",
              text: "Nu, pe durata derulării procesului de schimbare a furnizorului este asigurată continuitatea în alimentarea cu gaze naturale a locului de consum.",
            },
            {
              type: "text",
              text: "6. Care sunt motivele care ar putea să mă împiedice să schimb furnizorul?",
            },
            {
              type: "text",
              text: "Odată cu deschiderea către concurenţă a pieţelor de energie, a fost implementat cadrul legal care să permită tuturor consumatorilor de gaze naturale, indiferent de natura consumului (casnic sau noncasnic), să uzeze de dreptul de eligibilitate, adică să îşi aleagă furnizorul dorit şi să încheie cu acesta contracte pentru furnizarea gazelor naturale pentru locul sau locurile sale de consum.",
            },
            {
              type: "text",
              text: "Procesul de schimbare a furnizorului este gratuit, fiind interzisă perceperea oricăror taxe sau tarife legate de parcurgerea acestuia. De asemenea, schimbarea furnizorului nu implică modificări de ordin tehnic.",
            },
            {
              type: "text",
              text: "7. Pot schimba furnizorul fără sa platesc penalități ?",
            },
            {
              type: "text",
              text: "Toţi clienţii finali de gaze naturale au dreptul să îşi schimbe furnizorul, cu respectarea condiţiilor contractuale, în termen de 21 de zile de la data solicitarii.",
            },
            {
              type: "text",
              text: "Procesul de schimbare a furnizorului este gratuit, fiind interzisă perceperea oricăror taxe sau tarife legate de parcurgerea acestuia.",
            },
            {
              type: "text",
              text: "8. Cât mă costă schimbarea furnizorului?",
            },
            {
              type: "text",
              text: "Procesul de schimbare a furnizorului este gratuit, fiind interzisă perceperea oricăror taxe sau tarife legate de parcurgerea acestuia.",
            },
            {
              type: "text",
              text: "9. Care este perioada maximă de valabilitate pentru care se poate încheia un contract de furnizare?",
            },
            {
              type: "text",
              text: "Contractul de furnizare a gazelor naturale poate fi încheiat pe perioadă determinată sau nedeterminată.",
            },
            {
              type: "text",
              text: "10. Pe cine aș putea contacta în cazul în care cred că mi s-au perceput taxe pentru schimbarea furnizorului?",
            },
            {
              type: "text",
              text: "Contactați furnizorul dvs. de gaze naturale. Dacă nu sunteți mulțumit de răspunsul primit, vă puteți adresa ANRE, accesând pagina de internet www.anre.ro.",
            },
          ],
        },
        {
          categoryName:
            "GHID EXPLICATIV PRIVIND ELEMENTELE COMPONENTE ALE FACTURII DE GAZE NATURALE",
          id: "ghidExplicativ",
          content: [
            {
              type: "title",
              text: "GHID EXPLICATIV PRIVIND ELEMENTELE COMPONENTE ALE FACTURII DE GAZE NATURALE",
            },

            {
              type: "btn",
              text: "Descarca ghidul explicativ privind elementele componente ale facturii de gaze naturale(PDF)",
              link: "./ghidgaze.pdf",
            },
          ],
        },
        {
          categoryName: "INFORMATII",
          id: "informatii",
          content: [
            {
              type: "title",
              text: "Informatii ANRE",
            },

            {
              type: "btn",
              text: "Link pagina ANRE - Informatii consumatori gaze naturale",
              link: "https://www.anre.ro/ro/gaze-naturale/consumatori",
            },
          ],
        },
        {
          categoryName: "DREPTUL LA INFORMARE AL CONSUMATORULUI",
          id: "dreptulLaInformare",
          content: [
            {
              type: "title",
              text: "DREPTUL LA INFORMARE AL CONSUMATORULUI DE ENERGIE ELECTRICA/GAZE NATURALE",
            },
            {
              type: "text",
              text: "Stimaţi consumatori,",
            },
            {
              type: "text",
              text: "Prin lege, aveţi dreptul de a fi informat, în relaţia dumneavoastră cu GETICA 95 COM SRL. Aveţi dreptul să cereţi şi să primiţi, gratuit, înainte de semnarea contractului de furnizare, o copie a acestuia şi a condiţiilor-standard de furnizare a serviciului, după caz.",
            },
            {
              type: "text",
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
              type: "text",
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
              text: "- penalităţile pe care trebuie să le plătiţi dacă nu respectaţi prevederile contractuale",
            },
            {
              type: "text",
              text: "Furnizorul dumneavoastră GETICA 95 COM SRL are obligaţia de a vă oferi, la cerere, un extras tipărit al procedurii de înregistrare, investigare şi soluţionare a petiţiilor primite de la consumatori.",
            },
            {
              type: "text",
              text: "Furnizorul dumneavoastră GETICA 95 COM SRL este obligat să vă informeze în legătură cu orice modificări ale preţurilor, modului de facturare, de încasare sau ale altor condiţii din contract, în mod direct şi în timp util, într-un mod transparent şi uşor de înţeles.",
            },
            {
              type: "text",
              text: "Dacă nu sunteţi de acord cu modificările anunţate, aveţi dreptul de a renunţa la contract fără a plăti despăgubiri, respectând prevederile contractuale şi legale în vigoare.",
            },
            {
              type: "text",
              text: "Dacă dreptul dumneavoastră de a fi informat vă este încălcat, vă puteţi adresa Autorităţii Naţionale de Reglementare în Domeniul Energiei - ANRE.",
            },
          ],
        },
        {
          categoryName: "STANDARDE DE PERFORMANTE",
          id: "standardeDePerformante",
          content: [
            {
              type: "title",
              text: "STANDARDE DE PERFORMANTE 2022",
            },

            {
              type: "btn",
              text: "Furnizare",
              link: "https://www.anre.ro/ro/gaze-naturale/legislatie/standarde-de-performanta/furnizare",
            },
            {
              type: "btn",
              text: "Distributie",
              link: "https://www.anre.ro/ro/gaze-naturale/legislatie/standarde-de-performanta/distributie",
            },
            {
              type: "btn",
              text: "Transport",
              link: "https://www.anre.ro/ro/gaze-naturale/legislatie/standarde-de-performanta/transport1387185163",
            },
          ],
        },
      ],
    },
    chestionarGazeNaturale: {
      heroSection: {
        image: naturalGas,
        title: "Gaze naturale",
      },
      section: {
        title: "Chestionar gaze naturale",
        tutorial: {
          header: "Cum completez formularul?",
          downloadPDF: {
            title: "DOWNLOAD CHESTIONAR (PDF)",
            link: "./gaze-naturale-chestionar2013.pdf",
          },
          downloadDOC: {
            title: "DOWNLOAD CHESTIONAR (DOC)",
            link: "./gaze-naturale-chestionar2013.doc",
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
    consumatoriFinaliGazeNaturale: {
      heroSection: {
        image: naturalGas,
        title: "Gaze naturale",
      },
      section: {
        title: "Consumatori finali",
      },
      data: [
        {
          title: "RAPORTARI PRIVIND ACTIVITATEA DE INFORMARE A CONSUMATORILOR",
          documents: [
            {
              title: "Download raport Gaze naturale 2021",
              link: "./Raport_privind_activitatea_de_informare_a_consumatorilor_Getica_95_AN_2021_GAZE.pdf",
            },
            {
              title: "Download raport Gaze naturale 2020",
              link: "./Raport_privind_activitatea_de_informare_a_consumatorilor_Getica_95_AN_2020_GAZE.pdf",
            },
            {
              title: "Download raport Gaze naturale 2019",
              link: "./Raport_privind_activitatea_de_informare_a_consumatorilor_Getica_95_AN_2019_GAZE.pdf",
            },
            {
              title: "Download raport Gaze naturale 2018",
              link: "./Raport_privind_activitatea_de_informare_a_consumatorilor_Getica_95_AN_2018_GAZE.pdf",
            },
            {
              title: "Download raport Gaze naturale 2017",
              link: "./Raport_privind_activitatea_de_informare_a_consumatorilor_Getica_95_AN_2017_GAZE.pdf",
            },
            {
              title: "Download raport Gaze naturale 2016",
              link: "./Raport_privind_activitatea_de_informare_a_consumatorilor_Getica_95_AN_2016_GAZE.pdf",
            },
            {
              title: "Download raport Gaze naturale 2015",
              link: "./Raport_privind_activitatea_de_informare_a_consumatorilor_Getica_95_AN_2015_GAZE.pdf",
            },
          ],
        },
        {
          title:
            "RAPORTUL ANUAL AL NIVELULUI DE REALIZARE A INDICATORILOR DE PERFORMANTA",
          documents: [
            {
              title: "Download raport Gaze naturale 2021",
              link: "./Anexa_3_Standard_performante_Gaze_naturale_ord_37_2007_2021.pdf",
            },
            {
              title: "Download raport Gaze naturale 2020",
              link: "./Anexa_3_Standard_performante_Gaze_naturale_ord_37_2007_2020.pdf",
            },
            {
              title: "Download raport Gaze naturale 2019",
              link: "./Anexa_3_Standard_performante_Gaze_naturale_ord_37_2007_2019.pdf",
            },
            {
              title: "Download raport Gaze naturale 2018",
              link: "./Anexa_3_Standard_performante_Gaze_naturale_ord_37_2007_2018.pdf",
            },
            {
              title: "Download raport Gaze naturale 2017",
              link: "./Anexa_3_Standard_performante_Gaze_naturale_ord_37_2007_2017.pdf",
            },
            {
              title: "Download raport Gaze naturale 2016",
              link: "./Anexa_3_Standard_performante_Gaze_naturale_ord_37_2007_2016.pdf",
            },
          ],
        },
      ],
    },
    legislatieSiUtileGazeNaturale: {
      heroSection: {
        image: naturalGas,
        title: "Gaze naturale",
      },
      section: {
        title: "Legislatie si utile",
        content:
          "PROCESUL DE SCHIMBARE A FURNIZORULUI NU PRESUPUNE PLATA NICIUNEI TAXE",
        visibleData: [
          {
            title: "Piața gazelor naturale",
            link: "https://www.anre.ro/ro/gaze-naturale/legislatie/piata-gazelor-naturale",
          },
          {
            title: "Prețuri și tarife GN",
            link: "https://www.anre.ro/ro/gaze-naturale/legislatie/preturi-si-tarife-gn",
          },
          {
            title: "Licențe în domeniul GN",
            link: "http://www.anre.ro/ro/gaze-naturale/legislatie/licente-in-domeniul-gn",
          },
          {
            title: "Autorizare în domeniul GN",
            link: "http://www.anre.ro/ro/gaze-naturale/legislatie/autorizare-in-domeniul-gn",
          },
          {
            title: "Contracte cadru",
            link: "http://www.anre.ro/ro/gaze-naturale/legislatie/contracte-cadru",
          },
          {
            title: "Metodologii tarifare",
            link: "http://www.anre.ro/ro/gaze-naturale/legislatie/metodologii-tarifare",
          },
          {
            title: "Metodologii",
            link: "http://www.anre.ro/ro/gaze-naturale/legislatie/metodologii",
          },
          {
            title: "Reglementări tehnice",
            link: "http://www.anre.ro/ro/gaze-naturale/legislatie/reglementari-tehnice",
          },
          {
            title: "Standarde de performanță",
            link: "http://www.anre.ro/ro/gaze-naturale/legislatie/standarde-de-performanta",
          },
          {
            title: "Monitorizare piața GN",
            link: "http://www.anre.ro/ro/gaze-naturale/legislatie/monitorizare-piata-gn",
          },
          {
            title: "Legislație primară",
            link: "http://www.anre.ro/ro/gaze-naturale/legislatie/legislatie-primara",
          },
          {
            title: "Documente de discuție",
            link: "http://www.anre.ro/ro/gaze-naturale/legislatie/documente-de-discutie",
          },
          {
            title: "Plan dezvoltare SNT",
            link: "http://www.anre.ro/ro/gaze-naturale/legislatie/plan-dezvoltare-snt",
          },
          {
            title: "Legislație UE",
            link: "http://www.anre.ro/ro/gaze-naturale/legislatie/legislatie-ue",
          },
          {
            title: "Alte reglementări",
            link: "http://www.anre.ro/ro/gaze-naturale/legislatie/alte-reglementari",
          },
        ],
        acordionData: [
          {
            title: "DECIZII SI ORDINE",
            documents: [
              {
                type: "title",
                text: "Ordinul: 16 / 2013",
              },
              {
                type: "text",
                text: "Ordin ANRE 16 din 2013 privind aprobarea Codului rețelei pentru sistemul de transport al gazelor naturale cu modificările și completările ulterioare",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 16 / 2013",
                link: "./Ord_16_2013.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 16 / 2015",
              },
              {
                type: "text",
                text: "Ordin ANRE 16 din 2015 pentru aprobarea procedurii-cadru privind obligația furnizorilor de energie electrică şi gaze naturale de soluţionare a plângerilor clienţilor finali",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 16 / 2015",
                link: "./Ord_16_2015.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 24 / 2020",
              },
              {
                type: "text",
                text: "Ordin ANRE 24 din 2020 privind aprobarea tarifelor de înmagazinare subterană aferente activității de înmagazinare subterană a gazelor naturale desfășurată de către Societatea Națională de Gaze Naturale Romgaz S.A. – Filiala DEPOGAZ PLOIEȘTI S.R.L.",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 24 / 2020",
                link: "./Ord_24_2020.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 25 / 2020",
              },
              {
                type: "text",
                text: "Ordin ANRE 25 din 2020 privind aprobarea tarifelor de înmagazinare subterană aferente activității de înmagazinare subterană a gazelor naturale desfășurată de către Societatea „Depomureș” Tîrgu-Mureș",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 25 / 2020",
                link: "./Ord_25_2020.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 27 / 2020",
              },
              {
                type: "text",
                text: "Ordin ANRE 27 din 2020 pentru stabilirea unor măsuri privind furnizarea gazelor naturale la clienţii casnici în perspectiva eliminării preţurilor reglementate",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 27 / 2020",
                link: "./Ord_27_2020.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 29 / 2016",
              },
              {
                type: "text",
                text: "Ordin ANRE 29 din 2016 pentru aprobarea regulamentului privind furnizarea gazelor naturale la clienții finali",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 29 / 2016",
                link: "./Ord_29_2016.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 56 / 2008",
              },
              {
                type: "text",
                text: "Ordin ANRE 56 din 2008 privind aprobarea Metodologiei pentru trecerea de la facturarea cantităților de gaze naturale în unități volumetrice la facturarea în unități de energie",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 56 / 2008",
                link: "./Ord_56_2008.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 61 / 2013",
              },
              {
                type: "text",
                text: "Ordin ANRE 61 din 2013 pentru aprobarea Regulamentului privind organizarea şi funcţionarea comisiei pentru soluţionarea disputelor pe piaţa angro şi cu amănuntul apărute între participanţii la piaţa de energie electrică şi gaze naturale",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 61 / 2013",
                link: "./Ord_61_2013.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 62 / 2008",
              },
              {
                type: "text",
                text: "Ordin ANRE 62 din 2008 privind aprobarea Regulamentului de măsurare a cantităților de gaze naturale tranzacționate în România",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 62 / 2008",
                link: "./Ord_62_2008.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 72 / 2019",
              },
              {
                type: "text",
                text: "Ordin ANRE 72 din 2019 pentru modificarea unor ordine ale președintelui Autorității Naționale de Reglementare în Domeniul Energiei",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 72 / 2019",
                link: "./Ord_72_2019.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 77 / 2009",
              },
              {
                type: "text",
                text: "Ordin ANRE 77 din 2009 privind aprobarea contractelor-cadru pentru furnizarea reglementată a gazelor naturale",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 77 / 2009",
                link: "./Ord_77_2009.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 83 / 2020",
              },
              {
                type: "text",
                text: "Ordin ANRE 83 din 2020 privind aprobarea venitului reglementat, a venitului reglementat corectat şi a tarifelor de transport pentru activitatea de transport al gazelor naturale prin Sistemul Naţional de Transport.",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 83 / 2020",
                link: "./Ord.ANRE_nr.83_27.05_2020.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 90 / 2019",
              },
              {
                type: "text",
                text: "Ordin ANRE 90 din 2019 de aprobare a tarifelor reglementate pentru prestarea serviciului de distribuție a gazelor naturale realizat de Societatea DELGAZ GRID S.A.",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 90 / 2019",
                link: "./Ord__56_2008.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 96 / 2015",
              },
              {
                type: "text",
                text: "Ordin ANRE 96 din 2015 pentru aprobarea Regulamentului privind activitatea de informare a clienților finali de energie electrică și gaze naturale",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 96 / 2015",
                link: "./Ord_96_2015.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 97 / 2015",
              },
              {
                type: "text",
                text: "Ordin ANRE 97 din 2015 privind modificarea și completarea Ord. 107 din 2014 pentru stabilirea unor măsuri privind furnizarea gazelor naturale la clienții noncasnici în perspectiva eliminării prețurilor finale reglementate",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 97 / 2015",
                link: "./Ord__56_2008.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 97 / 2018",
              },
              {
                type: "text",
                text: "Ordin ANRE 97 din 2018 de aprobare a Regulamentului privind accesul la sistemele de distribuție a gazelor naturale și de modificare a unor ordine ale preşedintelui Autorităţii Naţionale de Reglementare în Domeniul Energiei",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 97 / 2018",
                link: "./Ord_97_2018.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 106 / 2014",
              },
              {
                type: "text",
                text: "Ordin ANRE 106 din 2014 privind modalitățile de informare a clienților finali de către furnizorii de gaze naturale cu privire la condițile comerciale de furnizare a gazelor naturale",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 106 / 2014",
                link: "./Ord_106_2014.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 56 / 2008",
              },
              {
                type: "text",
                text: "Ordin ANRE 128 din 2020 pentru aprobarea procedurii privind soluționarea neînțelegerilor apărute la încheierea contractelor în sectorul energiei",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 56 / 2008",
                link: "./Ord_56_2008.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 174 / 2018",
              },
              {
                type: "text",
                text: "Ordin ANRE 174 din 2018 de aprobare a Regulamentului privind furnizarea de ultimă instanţă a gazelor naturale",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 174 / 2018",
                link: "./Ord._174_2018.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 179 / 2015",
              },
              {
                type: "text",
                text: "Ordin ANRE 179 din 2015 pentru aprobarea Procedurii privind verificările și reviziile tehnice ale instalațiilor de utilizare a gazelor naturale",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 179 / 2015",
                link: "./Ord_179_2015.pdf",
              },
              {
                type: "title",
                text: "Ordinul: 234 / 2019",
              },
              {
                type: "text",
                text: "Ordin ANRE 234 din 2019 pentru aprobarea Procedurii de schimbare a furnizorului de energie electrică/gaze naturale de către clientul final",
              },
              {
                type: "link",
                text: "Descarca Ordinul: 234 / 2019",
                link: "./Ord_234_2019.pdf",
              },
              {
                type: "title",
                text: "OUG: 1 / 2020",
              },
              {
                type: "text",
                text: "OUG 1 din 2020 privind unele măsuri fiscal-bugetare și pentru modificarea și completarea unor acte normative",
              },
              {
                type: "link",
                text: "Descarca OUG: 1 / 2020",
                link: "./OUG_1_2020.pdf",
              },
              {
                type: "title",
                text: "OUG: 53 / 2011",
              },
              {
                type: "text",
                text: "OUG 53 din 2011 pentru instituirea unor măsuri în domeniul gazelor naturale",
              },
              {
                type: "link",
                text: "Descarca OUG: 53 / 2011",
                link: "./OUG_53_2011.pdf",
              },
              {
                type: "title",
                text: "HG: 461 / 2016",
              },
              {
                type: "text",
                text: "HG 461 din 2016 privind calendarul de liberalizare a prețului de achiziție a gazelor naturale din producția internă pentru clienții casnici și producători de energie termică",
              },
              {
                type: "link",
                text: "Descarca HG: 461 / 2016",
                link: "./HG_461.pdf",
              },
              {
                type: "title",
                text: "HG: 488 / 2015",
              },
              {
                type: "text",
                text: "HG 488 din 2015 privind stabilirea prețului de achiziție a gazelor naturale din producția internă",
              },
              {
                type: "link",
                text: "Descarca HG: 488 / 2015",
                link: "./HG_488_2015.pdf",
              },
              {
                type: "title",
                text: "Decizia: 1368 / 2006",
              },
              {
                type: "text",
                text: "Decizia ANRE 1368 din 2006 privind deschiderea integrală a pieței interne a gazelor naturale pentru consumatorii noncasnici",
              },
              {
                type: "link",
                text: "Descarca Decizia: 1368 / 2006",
                link: "./Decizia_1368_2006.pdf",
              },
              {
                type: "title",
                text: "Legea: 123 / 2012",
              },
              {
                type: "text",
                text: "Legea 123 din 2012 a energiei electrice şi a gazelor naturale",
              },
              {
                type: "link",
                text: "Descarca Legea: 123 / 2012",
                link: "./Legea_123_2012_EE_GN.pdf",
              },
              {
                type: "title",
                text: "Legea: 174 / 2014",
              },
              {
                type: "text",
                text: "Legea 174 din 2014 privind aprobarea OUG 35/2014 pentru completarea Legii 123/2012",
              },
              {
                type: "link",
                text: "Descarca Legea: 174 / 2014",
                link: "./Legea_174_2012.pdf",
              },
              {
                type: "title",
                text: "LEGISLATIE IN VIGOARE GAZE NATURALE - link website A.N.R.E.",
              },

              {
                type: "link",
                text: "Acceseaza link",
                link: "https://www.anre.ro/ro/gaze-naturale/legislatie",
              },
            ],
          },
        ],
      },
    },
    despreNoi: {
      heroSection: {
        image: energyImage,
        title: "Getica 95",
      },
      section: {
        title: "GETICA 95",
        data: [
          {
            type: "bold",
            text: "DESPRE GETICA 95",
          },
          {
            type: "text",
            text: "SC GETICA 95 COM SRL opereaza pe piata de energie electrica din anul 2010 cand a obtinut licenta de furnizare, iar pe piata gazelor naturale din 2012, fiind licentiata si in acest domeniu.",
          },

          {
            type: "text",
            text: "Odata cu liberalizarea pietei de energie electrica si gaze, societatea si-a reorientat cea mai mare parte a prioritatilor catre comercializarea acestor produse, constituind in acest scop o echipa tanara, dinamica, cu competenta in domeniu, apta sa prezinte in mod obiectiv oferta noastra, sa urmareasca si sa duca la indeplinire contractele in derulare si sa atraga noi clienti.",
          },
          {
            type: "text",
            text: "Primii clienti au fost dintre operatorii din domeniile hotelier, producerii si comercializarii produselor alimentare si al firmelor cu obiect de activitate in procesarea cerealelor si plantelor tehnice, producerea furajelor combinate, respectiv cresterea pasarilor de carne.",
          },
          {
            type: "text",
            text: "Concomitent cu dobandirea de experienta in ofertarea si incheierea contractelor de energie electrica si gaze naturale si, de asemenea, in administrarea derularii acestora, ne-am extins aria potentialilor clienti, actionand in prezent, cu competenta, in cele mai diverse sectoare de activitate, respectiv, constructii, metalurgie, textile, chimie, mobila, mase plastice, servicii comunitare, transport si nu in ultimul rand administratie, fiind furnizorii unor importante municipii si capitale de judet.",
          },
          {
            type: "text",
            text: "Avantajul clientilor si al potentialilor clienti, in relatia comerciala cu societatea noastra, tine in primul rand de nivelul pretului oferit, in sensul ca promovom un pret competitiv, dar si de posibilitatea certa de a negocia orice clauza contractuala, fiind preocupati de a deveni un partener de incredere pentru oricine doreste sa fie clientul nostru.",
          },

          {
            type: "text",
            text: "Suntem dispusi sa negociem cinstit si sincer, sa pastram o relatie profesionala corecta cu clientii si sa sprijinim orice initiativa de imbunatatire a acestei relatii.",
          },
          {
            type: "text",
            text: "Getica 95 dispune de resurse ce garanteaza siguranta in alimentare la nivelul oricarui furnizor cu traditie in domeniu si se ocupa de tot ce tine de schimbarea furnizorului, fara nici un cost suplimentar pentru dumneavoastra.",
          },
        ],
      },
    },
    solutionarePlangeri: {
      heroSection: {
        image: energyImage,
        title: "Getica 95",
      },
      section: {
        title: "Solutionare Plangeri",

        visibleData: [
          {
            type: "text",
            text: "Formular plangere",
          },
          {
            type: "link",
            text: "Descarca formular plangere",
            link: "./formular-plangere.pdf",
          },
          {
            type: "text",
            text: "Procedura cadru de solutionare a plangerilor",
          },
          {
            type: "link",
            text: "Descarca procedura cadru",
            link: "./Ord_16 _15.pdf",
          },
          {
            type: "text",
            text: "Procedura interna de solutionare a plangerilor",
          },
          {
            type: "link",
            text: "Descarca procedura interna",
            link: "./procedura-interna.doc",
          },
          {
            type: "text",
            text: "Soluționarea neînțelegerilor precontractuale și/sau a disputelor apărute în derularea contractelor de furnizare energie electrică și/sau gaze naturale, încheiate de clienții finali",
          },
          {
            type: "link",
            text: "Descarca procedura",
            link: "./procedura_solutionarea_neintelegerilor.pdf",
          },
        ],
        disclaimer: "Rapoarte privind solutionarea plangerilor",
        acordionData: [
          {
            title: "Anexe 2022",
            documents: [
              {
                type: "title",
                text: "Energie electrica",
              },
              {
                type: "text",
                text: "Energie electrica - Semestrul I",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2022_sem_I_Energie_electrica.pdf",
              },
              {
                type: "title",
                text: "Gaze naturale",
              },
              {
                type: "text",
                text: "Gaze naturale - Semestrul I",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1__ plangeri_ord_16-2022_sem_I_GAZE_NATURALE.pdf",
              },
            ],
          },
          {
            title: "Anexe 2021",
            documents: [
              {
                type: "title",
                text: "Energie electrica",
              },
              {
                type: "text",
                text: "Energie electrica - An 2021",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2021_Energie_electrica.pdf",
              },
              {
                type: "text",
                text: "Energie electrica - Semestrul I",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2021_sem_I_Energie_electrica.pdf",
              },
              {
                type: "text",
                text: "Energie electrica - Semestrul II",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2021_sem_II_Energie_electrica.pdf",
              },
              {
                type: "title",
                text: "Gaze naturale",
              },
              {
                type: "text",
                text: "Gaze naturale - An 2021",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-an_2021_GAZE_NATURALE.pdf",
              },
              {
                type: "text",
                text: "Gaze naturale - Semestrul I",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2021_sem_I_GAZE_NATURALE.pdf",
              },
              {
                type: "text",
                text: "Gaze naturale - Semestrul II",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2021_sem_II_GAZE_NATURALE.pdf",
              },
            ],
          },
          {
            title: "Anexe 2020",
            documents: [
              {
                type: "title",
                text: "Energie electrica",
              },
              {
                type: "text",
                text: "Energie electrica - An 2020",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2020_Energie_electrica.pdf",
              },
              {
                type: "text",
                text: "Energie electrica - Semestrul I",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2020_sem_I_Energie_electrica.pdf",
              },
              {
                type: "text",
                text: "Energie electrica - Semestrul II",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2020_sem_II_Energie_electrica.pdf",
              },
              {
                type: "title",
                text: "Gaze naturale",
              },
              {
                type: "text",
                text: "Gaze naturale - An 2020",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-an_2020_GAZE_NATURALE.pdf",
              },
              {
                type: "text",
                text: "Gaze naturale - Semestrul I",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2020_sem_I_GAZE_NATURALE.pdf",
              },
              {
                type: "text",
                text: "Gaze naturale - Semestrul II",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2020_sem_II_GAZE_NATURALE.pdf",
              },
            ],
          },
          {
            title: "Anexe 2019",
            documents: [
              {
                type: "title",
                text: "Energie electrica",
              },
              {
                type: "text",
                text: "Energie electrica - An 2019",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2019_Energie_electrica.pdf",
              },
              {
                type: "text",
                text: "Energie electrica - Semestrul I",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2019_sem_I_Energie_electrica.pdf",
              },
              {
                type: "text",
                text: "Energie electrica - Semestrul II",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2019_sem_II_Energie_electrica.pdf",
              },
              {
                type: "title",
                text: "Gaze naturale",
              },
              {
                type: "text",
                text: "Gaze naturale - An 2019",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-an_2019_GAZE_NATURALE.pdf",
              },
              {
                type: "text",
                text: "Gaze naturale - Semestrul I",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2019_sem_I_GAZE_NATURALE.pdf",
              },
              {
                type: "text",
                text: "Gaze naturale - Semestrul II",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2019_sem_II_GAZE_NATURALE.pdf",
              },
            ],
          },
          {
            title: "Anexe 2018",
            documents: [
              {
                type: "title",
                text: "Energie electrica",
              },
              {
                type: "text",
                text: "Energie electrica - An 2018",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2018_Energie_electrica.pdf",
              },
              {
                type: "text",
                text: "Energie electrica - Semestrul I",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2018_sem_I_Energie_electrica.pdf",
              },
              {
                type: "text",
                text: "Energie electrica - Semestrul II",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2018_sem_II_Energie_electrica.pdf",
              },
              {
                type: "title",
                text: "Gaze naturale",
              },
              {
                type: "text",
                text: "Gaze naturale - An 2018",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-an_2018_GAZE_NATURALE.pdf",
              },
              {
                type: "text",
                text: "Gaze naturale - Semestrul I",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2018_sem_I_GAZE_NATURALE.pdf",
              },
              {
                type: "text",
                text: "Gaze naturale - Semestrul II",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2018_sem_II_GAZE_NATURALE.pdf",
              },
            ],
          },
          {
            title: "Anexe 2017",
            documents: [
              {
                type: "title",
                text: "Energie electrica",
              },
              {
                type: "text",
                text: "Energie electrica - An 2017",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2017_Energie_electrica.pdf",
              },
              {
                type: "text",
                text: "Energie electrica - Semestrul I",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2017_sem_I_Energie_electrica.pdf",
              },
              {
                type: "text",
                text: "Energie electrica - Semestrul II",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2017_sem_II_Energie_electrica.pdf",
              },
              {
                type: "title",
                text: "Gaze naturale",
              },
              {
                type: "text",
                text: "Gaze naturale - An 2017",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-an_2017_GAZE_NATURALE.pdf",
              },
              {
                type: "text",
                text: "Gaze naturale - Semestrul I",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2017_sem_I_GAZE_NATURALE.pdf",
              },
              {
                type: "text",
                text: "Gaze naturale - Semestrul II",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2017_sem_II_GAZE_NATURALE.pdf",
              },
            ],
          },
          {
            title: "Anexe 2016",
            documents: [
              {
                type: "title",
                text: "Energie electrica",
              },
              {
                type: "text",
                text: "Energie electrica - An 2016",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2016_Energie_electrica.pdf",
              },
              {
                type: "text",
                text: "Energie electrica - Semestrul I",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2016_sem_I_Energie_electrica.pdf",
              },
              {
                type: "text",
                text: "Energie electrica - Semestrul II",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2016_sem_II_Energie_electrica.pdf",
              },
              {
                type: "title",
                text: "Gaze naturale",
              },
              {
                type: "text",
                text: "Gaze naturale - An 2016",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-an_2016_GAZE_NATURALE.pdf",
              },
              {
                type: "text",
                text: "Gaze naturale - Semestrul I",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2016_sem_I_GAZE_NATURALE.pdf",
              },
              {
                type: "text",
                text: "Gaze naturale - Semestrul II",
              },
              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe_1_5_plangeri_ord_16-2016_sem_II_GAZE_NATURALE.pdf",
              },
            ],
          },
          {
            title: "Anexe 2015",
            documents: [
              {
                type: "title",
                text: "Anexe an -2015",
              },

              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe-1-5-plangeri-ord-16-2015.pdf",
              },

              {
                type: "title",
                text: "Anexe semestrul II - 2015",
              },

              {
                type: "link",
                text: "Descarca PDF",
                link: "./Anexe-1-5-plangeri-ord-16-2015-sem-II.pdf",
              },
            ],
          },
        ],
      },
    },
  },
};

// console.log(JSON.stringify(TEXTS));
