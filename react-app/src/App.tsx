import Navbar from "./components/Navbar/Navbar";
import RowPoster from "./components/RowPoster/RowPoster";
import Row from "./components/Row/Row";
import RowNumber from "./components/RowNumber/RowNumber";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Index from "./components/Index/Index";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <Row />
      <Row />
      <Row />
      <RowPoster />
      <RowNumber />
      <Row />
      <Row />
      <Footer />
      {/* <Index /> */}
    </div>
  );
}

export default App;
