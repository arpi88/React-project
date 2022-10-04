import React, { useRef, useState } from 'react'
import './styles.css'

const moveStep = 2

export const Refs = () => {
    const [intervalRef, setIntervalRef] = useState(null)

    const squareRef = useRef(null)

    const onMouseDown = (event, isForward) => {
        // console.log("🚀inline styles", element.style)
        // console.log("css styles", getComputedStyle(element))

        const interval = setInterval(() => {
            const element = squareRef.current
            const elementCss = getComputedStyle(element)
            const left = parseFloat(elementCss.left)
            if (isForward) {
                element.style.left = `${left + moveStep}px`
            } else {
                element.style.left = `${left - moveStep}px`
            }
        }, 0)

        setIntervalRef(interval)
    }

    const onMouseUp = () => {
        clearInterval(intervalRef)
    }

    /* In class  component we have this.createRef function */

    return (
        // <React.Fragment>
        <>
            <div>
                <div className="square" ref={squareRef}></div>
                <div className="actions">
                    <button onMouseDown={onMouseDown} onMouseUp={onMouseUp}>Back</button>
                    <button onMouseDown={(event) => onMouseDown(event, true)} onMouseUp={onMouseUp}>Forward</button>
                </div>
            </div>
            <div>
            </div>
        </>
        // </React.Fragment>
    )
}