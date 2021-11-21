import { ReactNode, useRef, useState } from "react"

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setInitalC, setSelected, setClientC } from 'store/features/moveSlice';

interface MoveDivProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode
    bubbles?: boolean
}


export default function MoveDiv(props: MoveDivProps) {

    const [firstTime, setfirstTime] = useState<boolean>(true)
    const [thisComponent, setthisComponent] = useState<boolean>(false)
    const divRef = useRef<HTMLDivElement>(null)

    const myStyle = props.style
    const children = props.children;
    const bubbles = props.bubbles

    const cilentC = useAppSelector(store => store.move.clientC)
    const initalC = useAppSelector(store => store.move.initalC)

    const dispatch = useAppDispatch()

    const select = (e: any) => {
        if (e.target.className === divRef.current?.className || bubbles) {
            dispatch(setSelected(true))
            setthisComponent(true)
            if (firstTime) {
                dispatch(setInitalC([e.clientX - parseInt(divRef.current?.offsetLeft + ""), e.clientY - parseInt(divRef.current?.offsetTop + "")]))
                dispatch(setClientC([e.clientX, e.clientY]))
                setfirstTime(false)
            } else {
                dispatch(setInitalC([e.clientX - parseInt(divRef.current?.style.left + ""), e.clientY - parseInt(divRef.current?.style.top + "")]))
                dispatch(setClientC([e.clientX, e.clientY]))
            }
        }
    }

    const unselect = () => {
        setthisComponent(false)
        dispatch(setSelected(false))
    }

    return (
        <div

            {...props}

            ref={divRef}

            onMouseDown={(e) => {
                select(e);
            }}

            onMouseUp={() => unselect()}

            className={`myMoveDiv ${props.className}`}

            style={
                thisComponent ?
                    { ...myStyle, position: "absolute", left: cilentC[0] - initalC[0] + 'px', top: cilentC[1] - initalC[1] + 'px', zIndex: 998 }
                    : {  ...myStyle, position: "absolute", left: divRef.current?.style.left, top: divRef.current?.style.top }}

        >
            {children}
        </div>
    )
}