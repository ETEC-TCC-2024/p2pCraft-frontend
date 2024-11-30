import React from "react";


interface ConditionalProps {
    showWhen: boolean,
    children: React.ReactNode
}

const Conditional: React.FC<ConditionalProps> = ({ children, showWhen }) => {
    if (showWhen) return <> {children} </>
    return <></>
}
export default Conditional;