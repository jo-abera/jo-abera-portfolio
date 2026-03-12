import LandingPage from "./LandingPage";
import { ResumePage, AmhNlpPage, DetailsPage, OwnedByPage } from "./components";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserContext } from "./contexts/UserContext";
import { useState, useEffect } from "react";

import { db } from './firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

import loading from "./asset/loading.gif";


function App() {

  const [myData, setMyData] = useState(null);


  const getMyData = async () => {
      const ref = doc(db, "constants", 'info');
      const docSnap = await getDoc(ref);
      if (docSnap.exists()) {
          const data = docSnap.data();
          setMyData(data);
      } else {
          console.log("No such document!");
      }
  }

  useEffect(() => {
      getMyData();
    // eslint-disable-next-line
  }, []);


  return (
    <UserContext.Provider value={{myData, setMyData}}>
      <div className="bg-light-1">
        {myData ? (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="work/:id" element={<DetailsPage />} />
              <Route path="owned-by" element={<OwnedByPage />} />
              <Route path="resume" element={<ResumePage />} />
              <Route path="amh-nlp" element={<AmhNlpPage />} />
            </Routes>
          </BrowserRouter>
        ) : (
          <div className="flex w-full min-h-screen justify-center items-center bg-white">
            <img src={loading} alt="Loading Gif" className="w-60" />
          </div>
        )}
      </div>
    </UserContext.Provider>
  );
}

export default App;

