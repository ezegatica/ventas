import React from 'react'

export default function CustomSpan ({ children, ...props }) {
    return (
        <span {...props}>
            {children}
        </span>
    )
}
