import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Team } from './pages/Team';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { Activities } from './pages/Activities';
import { Donate } from './pages/Donate';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="activities" element={<Activities />} />
        <Route path="donate" element={<Donate />} />
        <Route path="team" element={<Team />} />
        <Route path="faq" element={<FAQ />} />
        {/* <Route path="blog" element={<Blog />} /> — hidden for now */}
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
