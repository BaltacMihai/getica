import facturaLunara from "./assets/images/homepage/factura_lunara.png";
import consultantaCasnic from "./assets/images/homepage/consultanta-casnic.png";
import consultantaNoncasnic from "./assets/images/homepage/consultanta-noncasnic.png";
import grafice from "./assets/images/homepage/grafice.png";
import matering from "./assets/images/homepage/matering.png";
import analiza from "./assets/images/homepage/analiza.png";
import logo from "./assets/images/logo.png";

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
          link: "#",
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
  },
};
