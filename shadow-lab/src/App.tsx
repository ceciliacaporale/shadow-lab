import Header from "./components/Header";
import { ThemeProvider } from 'styled-components';
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyles";
import MainContainer from "./components/layout/MainContainer";
import Footer from "./components/Footer/";

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <MainContainer />
    <Footer />
    </ThemeProvider>
    </>
  )
}

export default App
