import './bookingSummary.css';
import { CancelSummary } from '../CancelSummary/cancelSummary.jsx';
import { DetailSummary } from '../DetailSummary/detailSummary.jsx';
import { HeadSummary } from '../HeadSummary/headSummary.jsx';
import { ServicesSummary } from '../ServicesSummary/servicesSummary.jsx';

export const BookingSummary = () => {
    return (
      <div className="summary">
        <h2>Booking Summary</h2>
        <HeadSummary />
        <DetailSummary detail="Detail rezervace" number="Ćíslo: 459787-745" dates="Pobyt: 13.6.2023 - 17.6.2026" guests="Hosté: 2 dospělí, 1 dítě" services="Stravovávní: žádné" roomTotal="7 200 Kč" checkIn="Check-in: 13.6.2023 do 18:00" checkOut="Check-out: 17.6.2026 do 10:00" />
        <ServicesSummary services="Doplňkové služby" service1="Parkování: 200 Kč / noc" service2="Snídaně: 150 Kč / noc" service3="Wellness: Zdarma" service4="Wifi: Zdarma na všech pokojích" />
        <CancelSummary cancel="Storno podmínky" cancelText1="Pokud zrušíte rezervaci do 14 dní před příjezdem, nebude Vám
              účtována žádná částka." cancelText2="Pokud zrušíte rezervaci později nebo nedorazíte vůbec, bude Vám
              účtována částka za první noc pobytu." />
      </div>
    );
  };