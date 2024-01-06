import Placeholder from '@assets/Placeholder.png';
import './App.scss';
import { About, Contact, Education, Footer, Front, Header, Projects } from '@components';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Front temp={Placeholder} />
      <About temp={Placeholder} />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
