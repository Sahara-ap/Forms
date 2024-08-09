import React from 'react';
import { Outlet } from 'react-router-dom';

export const InnerLayout:React.FC = () => {

  return (
    <>
      <div>InnerLayout</div>
      <Outlet />
    </>
 );
}
