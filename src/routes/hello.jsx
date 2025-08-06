import Services from '../components/services';
import MainLayout from '../layouts/main-layout';
import Projects from '../components/projects';
import Contact from '../components/contact';

export default function Hello() {
  return (
    <MainLayout>
      <Services/>
      <Projects/>
      <Contact/>
    </MainLayout>
  );
}
