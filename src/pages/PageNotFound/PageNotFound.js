import { useTitle } from 'hooks/useTitle';
import React from 'react'
import './PageNotFound.css';
export const PageNotFound = () => {
  useTitle("404 | Gotham Store");
  return (
    <h1 className='error-page'>Error 404 : Requested Page not found</h1>
  )
}
