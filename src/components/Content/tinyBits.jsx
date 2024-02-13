import React, {useState} from 'react';

import DragHandle from "../../images/dragbar-handle.svg";
import {SashContent} from "split-pane-react";

export const DragbarHandle = ({orientation, onClick, index, active}) => {
    const [hovered, setHovered] = useState(false);

    const isHorizontal = orientation === 'horizontal';

    return <SashContent
        className={`sash-wrap-line ${active ? "active" : "inactive"}`}>
        <span className="line"/>
        <div
            style={{
                width: isHorizontal ? '100%' : '21px',
                height: isHorizontal ? '21px' : '100%',
                position: 'absolute'
            }}
            className={'display-flex justify-content-center align-items-center'}>
            <DragHandle
                style={{
                    transform: `${isHorizontal ? 'rotate(90deg)' : 'rotate(0)'} ${hovered ? 'scale(1.7)' : 'scale(1)'}`,
                    opacity: hovered ? 0.6 : 0.3,
                    transitionProperty: 'transform, opacity',
                    transitionTimingFunction: 'ease-in-out',
                    transitionDuration: '200ms'
                }}
                width={21}
                height={21}
                viewBox='0 0 100 100'
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className='dragHandle'
                onClick={onClick}
            />
        </div>
    </SashContent>
}