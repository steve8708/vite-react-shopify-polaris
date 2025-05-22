import { AppProvider, Frame } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AppProvider i18n={{}}>
      <BrowserRouter>
        <Frame>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Add more routes here as needed */}
          </Routes>
        </Frame>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
