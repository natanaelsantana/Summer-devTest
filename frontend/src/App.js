import { TypeProvider } from "./Utils/contextProvider";

import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import HomePage from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <TypeProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <HomePage />
          </main>
          <Footer />
        </div>
      </TypeProvider>
    </div>
  );
}

export default App;
