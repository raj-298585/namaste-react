import React from 'react';

const Title = () => (
<a href='/'>
    <img className='logo' src='https://www.logodesignteam.com/images/portfolio-images/kitchen-cookery-logo-design/kitchen-cookery-logo-design7.jpg'></img>
</a>
);

const Header = () => (
    <div className='header'>
        <Title/>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
);

export default Header;