import { AppProvider, Frame } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import { Dashboard } from "./components/Dashboard/Dashboard";

function App() {
  return (
    <AppProvider i18n={{}}>
      <Frame>
        <Dashboard />
      </Frame>
    </AppProvider>
  );
}

export default App;
