import React from 'react';

const Cards = (props) => {
    const handleClick = () => {
        window.location.href = props.link;
    };

    return (
        <td className='Cards'>
            <img src={props.image} alt="Card Image" />
            <h5>{props.name}</h5>
            <h6>{props.style}</h6>
            <a href={props.link}>
                <button>Discover</button>
            </a>
            <style jsx>{`
                .Cards {
                    background-color: #f2f2f2;
                    border-radius: 10px; // Add border-radius property
                }
            `}</style>
        </td>
    );
};

export default Cards;
