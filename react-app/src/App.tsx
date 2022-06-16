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
import { useState } from "react";

const App: React.FC<{}> = () => {
  const [data, setData] = useState<Array<IMovie> | []>([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=3bb82372ef97dc8c0c45d353261e2f31&quot"
    )
      .then((res) => res.json())
      .then((data) => {
        setData([...data.results]);
      });
  }, []);

function App() {
  const [dialogState, setDialogState] = useState<boolean>(false);
  let dialog = dialogState? <Dialog/> : null;
  function open(){
    let value = dialogState? false : true;
    setDialogState(value);
  }
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Row title="Film Popolari" movieList={data} />
      <Row title="Film Popolari" movieList={data} />
      <Row title="Film Popolari" movieList={data} />
      <RowPoster title="Originali Netflix" movieList={data} />
      <RowNumber title="Top 10 in Italia" movieList={data} />
      <Row title="Film Popolari" movieList={data} />
      <Row title="Film Popolari" movieList={data} />
      <Footer />
      <Index /> 
      <Dialog/>
    </div>
  );
};

export default App;
