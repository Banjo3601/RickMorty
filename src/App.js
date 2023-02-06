import React from "react";
import { BrowserRouter, Routes, Route, BrowserRoute } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Episode from "./pages/Episode";
import Favoris from "./pages/Favoris";
import FicheEpisode from "./pages/FicheEpisode";
import FichePerso from "./pages/FichePerso";
import PageConnexion from "./pages/PageConnexion";
import {UserContextProvider} from "./context/UserContext";
import Private from "./pages/Private/Private";
import PrivateHome from "./pages/Private/PrivateHome/PrivateHome";


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
          <Route path="/private" element={<Private/>}>
              <Route path="/private/private-home" element={<PrivateHome/>}/>
          </Route>
        <Route exact path="/ficheperso" element={<FichePerso/>}/>
        <Route exact path="/ficheepisode" element={<FicheEpisode/>}/>
      </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
