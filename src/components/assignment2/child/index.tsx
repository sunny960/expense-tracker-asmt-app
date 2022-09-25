import React, {memo, useEffect, useRef, useState} from "react";

// How can we get prevProp ,as we have in class based component lifecycle methods,
// in function components to compare the previous props and next props?

const Child = ({count}:any)=>{
const [prevCount, setPrevCount] = useState(count)
const previousCount = useRef(count)
    useEffect(()=>{
        if(previousCount.current !== prevCount){
            setPrevCount(previousCount.current)
        }
        previousCount.current = count;
    },[count])
    return (<div>{`Previous count: ${prevCount}`}</div>)
}
export default memo(Child)
