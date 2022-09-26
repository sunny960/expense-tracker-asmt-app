import React, {memo} from "react";
import {usePreviousProps} from "../../../hooks/usePreviousProps";

// How can we get prevProp ,as we have in class based component lifecycle methods,
// in function components to compare the previous props and next props?

const Child = ({count}:any)=>{
let previousCount = usePreviousProps(count)
    return (<div>{`Previous count: ${previousCount}`}</div>)
}
export default memo(Child)
