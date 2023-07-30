import React from 'react'

type Props = {
    className?: string,
    children: React.ReactNode,
    style?: React.CSSProperties
}

const Container = ({ className, children, style }: Props) => {
    return (
        <div className={`px-6 lg:px-36 ${className}`} style={style}>
            {children}
        </div>
    )
}

export default Container