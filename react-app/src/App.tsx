import Navbar from "./components/Navbar/Navbar";
import RowPoster from "./components/RowPoster/RowPoster";
import Row from "./components/Row/Row";
import RowNumber from "./components/RowNumber/RowNumber";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Index from "./components/Index/Index";
import Dialog from "./components/Dialog/Dialog";
import { useState } from "react";


function App() {
  const [dialogState, setDialogState] = useState<boolean>(false);
  let dialog = dialogState? <Dialog/> : null;
  function open(){
    let value = dialogState? false : true;
    setDialogState(value);
  }
  return (
    <div className="App">
      {/* <Navbar/>
      <Header />
      <Row />
      <Row />
      <Row />
      <RowPoster />
      <RowNumber />
      <Row />
      <Row />
      <Footer />
      <Index /> 
      <Dialog/>*/}
      <button onClick={open}>Dialog</button>
      {
        dialog
      }
    </div>
  );
}

export default App;
