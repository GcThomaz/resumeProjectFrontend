import Header from "../Components/header.jsx";
import Footer from "../Components/footer.jsx";
import Main from "../Components/main.jsx";
import { Container } from "../Styles/home.js";

export default function HomeScreen() {
  return (
    <>
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </>
  );
}
