import React from 'react'

type Props = {
    className?: string,
    children: React.ReactNode
}

const Container = ({ className, children }: Props) => {
    return (
        <div className={`px-6 lg:px-36 ${className}`}>
            {children}
        </div>
    )
}

export default Container