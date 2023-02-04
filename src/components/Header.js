import React from 'react';
import { useSelector } from 'react-redux';

const Title = () => (
<a href='/'>
    <img className='w-48' src='https://www.logodesignteam.com/images/portfolio-images/kitchen-cookery-logo-design/kitchen-cookery-logo-design7.jpg'></img>
</a>
);

const Header = () => {
    const items = useSelector(state => state.carts.items);

    return (
    <div className='flex w-full'>
        <div className='w-6/12'>
            <Title/>
        </div>
        <div className='w-6/12 flex align-middle items-center place-items-center float-right'>
        <ul className='gap-5 flex float-right text-center justify-items-center'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li className='font-bold'>Cart - {items.length} Items</li>
        </ul>
        </div>
    </div>
)};

export default Header;