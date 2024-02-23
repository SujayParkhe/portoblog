"use client"
import React from 'react'

type ContainerProps = {
    children: React.ReactNode; //👈 children prop type
  };
const Container = (props: ContainerProps) => {
    return (
        <div className='h-screen'>
            {props.children}
        </div>
    )
}

export default Container;