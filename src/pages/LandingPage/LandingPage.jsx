import React from 'react'
import { Category, Shop } from 'components';
import { useTitle } from 'hooks/useTitle';

export const LandingPage = () => {
  
useTitle('Home | Gotham Store');
  return (
    <div>
        <Shop/>
        <Category/>
    </div>
  )
}
