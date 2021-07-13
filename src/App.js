import GlobalStyle from './styles/GlobalStyles'

import Layouts from './components/Layouts';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
        <Header />
        <SidebarNavigation />
        <Main />
        <Layouts />
    </div>
  );
}

export default App;
