<style>
/* Stili globali per l'intera applicazione */
body {
  background-color: #242424;
  color: white;
  font-family: sans-serif;
  margin: 0;
  min-height: 100vh;
}

#app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background-color: #1a1a1a;
  border-bottom: 1px solid #555;
  padding: 1rem;
}

nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap; /* Permette ai link di andare a capo su schermi piccoli */
}

nav a {
  text-decoration: none;
  color: #aaa;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition:
    background-color 0.3s,
    color 0.3s;
}

nav a:hover {
  background-color: #333;
}

nav a.router-link-exact-active {
  color: white;
  background-color: #646cff;
}

main.responsive-layout {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  overflow-y: visible;
}

/* --- INIZIO REGOLE RESPONSIVE --- */
@media (max-width: 768px) {
  main.responsive-layout {
    padding: 1rem; /* Riduciamo il padding su mobile */
  }
  nav a {
    font-size: 1rem; /* Riduciamo la dimensione del testo dei link */
    padding: 0.4rem 0.8rem;
  }
}
/* --- FINE REGOLE RESPONSIVE --- */
</style>
