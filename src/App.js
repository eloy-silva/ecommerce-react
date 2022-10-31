import { AppContainer, GlobalStyle } from "./AppStyles";
import Home from "./components/Home";
import ProductList from './components/ProductList';



export default function App() {
  return (
      <AppContainer>
        <GlobalStyle />
        <Home />
        <ProductList />
      </AppContainer>
    
  );
}
