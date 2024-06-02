import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { BookingSummary } from '../components/BookingSummary/bookingSummary.jsx';

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <BookingSummary />
  </div>
);
