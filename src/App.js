import CountryList from './components/CountryList';
import CountryContextProvider from './context/CountryContext';
import ThemeContextProvider from './context/ThemeContext';
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <CountryContextProvider>
          <CountryList/>
        </CountryContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
