import React from 'react'
import Table from '../Table/Table'
import './Header.css'

export default function Header() {
    return (
        <div>
            <div className='Header'>
                <p className='text-center'>
                    RVS CAS
                    <p>
                    Computer Science Department Reserved Room
                </p>
                </p>
        </div>
        <div>
            <Table/>
        </div>
        </div>
    )
}
