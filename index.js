/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/
// NON MODIFICARE QUESTO ARRAY!
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
];

//Crea una funzione che prenda i parametri dall'array esistente. Crea le variabili per il risultato e il conteggio

function jobSearch() {
  event.preventDefault();
  let count = 0;
  let results = [];

  //Prendi gli elementi da HTML e selezionali con querySelector. Fai si che vengano sempre rilevati con caratteri minuscoli con lowercase, e usa trim per lo spazio che l'utente potrebbe inserire
  let jobInput = document.getElementById("job-search-bar").value;
  let locationInput = document.getElementById("location-search-bar").value;
  jobInput = jobInput.toLowerCase().trim();
  locationInput = locationInput.toLowerCase().trim();

  console.log(jobInput, locationInput);

  //Filtra i lavori che corrispondono ai criteri di ricerca
  let filterJobs = jobs.filter((job) => {
    let jobCategory = job.title.toLowerCase();
    let jobPlace = job.location.toLowerCase();
    return jobCategory.includes(jobInput) && jobPlace.includes(locationInput);
  });

  filterJobs.forEach((job) => {
    results.push(job);
    count = results.length;
  });

  //Mostra i risultati e il conteggio
  console.log(results, count);

  //Mostra i risultati di ricerca sullo schermo quando la ricerca viene effettuata. Se non ce ne sono mostra "Nessun risultato"
  let resultList = document.getElementById("results");
  resultList.classList.remove("hidden");
  //prima svuota l'HTML
  resultList.innerHTML = "";
  if (resultList === 0) {
    resultList.innerHTML = "<li> Nessun risultato trovato. </li>";
  } else {
    //Aggiungi il titolo dei risultati (appare una sola volta)
    resultList.innerHTML += `<h3 class="job-results">Results(${count})</h3>`;
    //Aggungi risultato come li per ogni voce
    results.forEach((job) => {
      resultList.innerHTML += `
      <li class="job-results">
        <strong>${job.title}</strong>- ${job.location}
      </li>
    `;
    });
  }
}

//Aggiungi evento quando viene cliccato il pulsante cerca
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", jobSearch);

//Crea funzione per svuotare entrambe le barre di ricerca
function clearSearchBar() {
  let jobInput = document.getElementById("job-search-bar");
  jobInput.value = "";
  let locationInput = document.getElementById("location-search-bar");
  locationInput.value = "";
  let resultList = document.getElementById("results");
  resultList.classList.add("hidden");
}

let cleanBar = document.querySelector("#clean-search");
cleanBar.addEventListener("click", clearSearchBar);
