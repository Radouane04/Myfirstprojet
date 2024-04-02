import React from 'react'
import { Link } from 'react-router-dom'

export default function Reglement() {
  return (
    <div className=' container bg-success'>
      <img src='/Reglement.jpg'alt='Reglement'/>
      <Link className='btn btn-info m-3 text-success bg-white' to='/'>Retour</Link>
    </div>
  )
}
