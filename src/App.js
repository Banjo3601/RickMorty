import React from "react";
import { BrowserRouter, Routes, Route, BrowserRoute } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Episode from "./pages/Episode";
import Favoris from "./pages/Favoris";
import FicheEpisode from "./pages/FicheEpisode";
import FichePerso from "./pages/FichePerso";
import PageConnexion from "./pages/PageConnexion";
import {UserContextProvider} from "./context/UserContext";


function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
      <Routes>
        <Route path="*" element={<Accueil />}/>
        <Route path="/" element={<Accueil />}/>
        <Route path="/accueil" element={<Accueil />}/>
        <Route path="/episode" element={<Episode />}/>
        <Route path="/favoris" element={<Favoris/>}/>
        <Route path="/connexion" element={<PageConnexion/>}/>
        <Route exact path="/ficheperso" element={<FichePerso/>}/>
        <Route exact path="/ficheepisode" element={<FicheEpisode/>}/>
      </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
