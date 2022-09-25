import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const LazyDashboard = React.lazy(() => import('../components/dashboard'))
const LazyAssignment2 = React.lazy(() => import('../components/assignment2'))


const Routers = ()=>{
    // @ts-ignore
    // @ts-ignore
    return (<React.Suspense fallback={<div>Loafing....</div>}>
        <BrowserRouter>
            <Routes>
            <Route path={'/assignment-1'} element={<LazyDashboard/>} />
            <Route path={'/assignment-2'} element={<LazyAssignment2/>} />
                <Route path={'/*'} element={<Navigate replace to="/assignment-1" />} />
            </Routes>
        </BrowserRouter>
    </React.Suspense>)

}

export default Routers
