import './accordions.css'
import Detail from './Detail';
import React, { useState } from 'react';


function Details({ accordionsData = [] }) { // 默认值作为保护
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className="accordions">
            {accordionsData.map(({ title, content }, index) => (
                <Detail
                    title={title}
                    content={content}
                    key={title}
                    isActive={index === activeIndex}
                    onTitleClick={() => {
                        if (activeIndex === index) {
                            setActiveIndex(null);
                        } else {
                            setActiveIndex(index);
                        }
                    }}
                />
            ))}
        </div>
    );
}

export default Details;