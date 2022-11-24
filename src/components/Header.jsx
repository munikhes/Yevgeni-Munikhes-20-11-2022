import React, {useState} from 'react';


export default function Header(props) {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(current => !current);
    }


    return (
        <div>
            <div style={
                    {
                        backgroundColor: isActive ? 'black' : 'white',
                        color: isActive ? 'white' : 'black'
                    }
                }
                onClick={handleClick}>Help Bar</div>
        </div>
    )

}
