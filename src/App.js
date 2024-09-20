import { PostProvider } from "./components/PostContext";
import ButtonDarkMode from "./components/ButtonDarkMode";
import Header from "./components/Header";
import Main from "./components/Main";
import Archive from "./components/Archive";
import Footer from "./components/Footer";

function App() {
  return (
    <section>
      <ButtonDarkMode />
      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}

<Archive />;
<Footer />;

export default App;
