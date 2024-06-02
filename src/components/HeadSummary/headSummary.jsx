import './headSummary.css';
import { HeadPhoto } from '../HeadPhoto/headPhoto.jsx';
import { HeadProperty } from '../HeadProperty/headProperty.jsx';
import { HeadRoom } from '../HeadRoom/headRoom.jsx';

export const HeadSummary = () => {
    return (
<div className="summary__head">
    <HeadPhoto src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=960" />
    <HeadProperty name="Hotel Lesní Zátiší" adress="Malohradské skály 347/21" city="Malohradská ves" rating="4.65" />
    <HeadRoom name="Pokoj 2" roomType="Dvoulůžkový s dětskou přistýlkou" roomPrice="1 800 Kč / noc"/>
</div>
    )
};