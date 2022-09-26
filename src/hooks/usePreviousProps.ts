import {useEffect, useRef, useState} from "react";

export const usePreviousProps = (props: any): any=>{
    const [prevProps, updatePrevProps] = useState(props)
    const currentData = useRef(props)


    useEffect(()=>{
        if(JSON.stringify(currentData.current) !== JSON.stringify(props)){
            updatePrevProps(currentData.current)
        }
        currentData.current = props;

    },[props])

return prevProps;
}
