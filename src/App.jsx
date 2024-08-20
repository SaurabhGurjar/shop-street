import Home from './pages/home/Home';
import { ScrollRestoration } from 'react-router-dom';
export default function App() {
  return (
    <>
      <Home />
      <ScrollRestoration />
    </>
  );
}
