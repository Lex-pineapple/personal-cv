import './App.scss';
import { About, Contact, Education, Footer, Front, Header, Projects, Skills } from '@components';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Front />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
