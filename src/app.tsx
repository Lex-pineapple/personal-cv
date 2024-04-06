import { About, Contact, Education, Footer, Front, Header, Projects, Skills } from '@components';
import { ButtonTop } from '@components/minor/button-top';

import './app.scss';

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
      <ButtonTop />
    </div>
  );
}

export default App;
