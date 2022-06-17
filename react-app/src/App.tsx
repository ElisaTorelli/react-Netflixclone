<<<<<<< HEAD
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import RowPoster from "./components/RowPoster/RowPoster";
import Row from "./components/Row/Row";
import RowNumber from "./components/RowNumber/RowNumber";
import Header from "./components/Header/Header";
import { IMovie } from "./commons/IResult";
import Footer from "./components/Footer/Footer";
import Index from "./components/Index/Index";
import Dialog from "./components/Dialog/Dialog";
=======
import Index from "./pages/Index/Index";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";


>>>>>>> 6fee4f985366ed0de860e8bb4bd67f592722db77

const App: React.FC<{}> = () => {
  return (
<<<<<<< HEAD
    <div className="App">
      <Navbar />
      <Header />
      <Row title="Film Popolari" movieList={data} />
      <Row title="Film Popolari" movieList={data} />
      <Row title="Film Popolari" movieList={data} />
      <RowPoster />
      <RowNumber />
      <Row title="Film Popolari" movieList={data} />
      <Row title="Film Popolari" movieList={data} />
      <Footer />
      <Index /> 
      <Dialog/>
      <button onClick={open}>Dialog</button>
      {
        dialog
      }
    </div>
=======
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='home' element={<Home />}/>
        </Routes>
      </div>
    </BrowserRouter>
>>>>>>> 6fee4f985366ed0de860e8bb4bd67f592722db77
  );
};

export default App;
