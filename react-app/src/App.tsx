import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import RowPoster from "./components/RowPoster/RowPoster";
import Row from "./components/Row/Row";
import RowNumber from "./components/RowNumber/RowNumber";
import Header from "./components/Header/Header";
import { IMovie } from "./commons/IResult";
import Footer from "./components/Footer/Footer";
import Dialog from "./components/Dialog/Dialog";
import { dialogContext } from "./commons/context";



const App: React.FC<{}> = () => {

  const [data, setData] = useState<Array<IMovie> | []>([]);

  const [open, setOpen] = useState<boolean>(false);
  let dialog = open? <Dialog/> : null;


  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=3bb82372ef97dc8c0c45d353261e2f31&quot"
    )
      .then((res) => res.json())
      .then((data) => {
        setData([...data.results]);
      });
  }, []);

  return (
    <dialogContext.Provider value={{open, setOpen}}>
      <div className="App">
      <Navbar />
      <Header />
      <Row title="Film Popolari" movieList={data} />
      <Row title="Campari, continua a guardare..." movieList={data} />
      <Row title="Popolari in Italia" movieList={data} />
      <RowPoster />
      <RowNumber />
      {/* <Index /> */}
      <Row title="Ultime uscite" movieList={data} />
      <Row title="" movieList={data} />
      <Footer />
      {dialog}
    </div>
    </dialogContext.Provider>
  );
};

export default App;
