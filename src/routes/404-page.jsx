import MainLayout from '../layouts/main-layout';
import Contact from '../components/contact';
import NotFound from '../components/404';

export default function NotFoundPage() {
  return (
    <MainLayout>
      <NotFound/>
      <Contact/>
    </MainLayout>
  );
}
