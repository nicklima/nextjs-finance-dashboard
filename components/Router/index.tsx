import React from "react";
import Router from "next/router";

import { RouteProps } from "interfaces"

const Route: React.FC<RouteProps> = ({ page, slug, children }) => {
    return (
        <a onClick={() => Router.push(page, slug)}>
            {children}
        </a>
    )
}

export default Route