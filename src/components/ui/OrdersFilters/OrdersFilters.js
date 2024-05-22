import { imageLinks } from 'assets/images';
import { useState } from 'react';
import SVG from 'react-inlinesvg';
import "./OrdersFilters.scss";

const OrdersFilters = () => {
    const [currentTab, setCurrentTab] = useState(1);
    const icons = [
        {
            id: 1,
            icon: imageLinks?.icons?.buySell,
        },
        {
            id: 2,
            icon: imageLinks?.icons?.sell,
        },
        {
            id: 3,
            icon: imageLinks?.icons?.buySell,
        },
    ]
    return (
        <div className='icon__wrapper'>
            {
                (icons).map((ic, index) => (
                    <div 
                        key={index}
                        className={`icon__wrapper--item ${currentTab === ic.id ? 'active' : ''}`} 
                        onClick={() =>  setCurrentTab(ic.id)}
                    >
                        <SVG src={ic.icon} />
                    </div>
                ))
            }

        </div>
    )
}

export default OrdersFilters;