import { ThemeProvider } from "./components/theme-provider";
import Home from "./pages/Home/Home";
import Footer from "./shared/Footer/Footer";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
