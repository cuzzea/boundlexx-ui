// from: https://gist.github.com/lancegliser/78aa1f05bab599fe9cd12a63e6949e0a

import React, { FunctionComponent } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ILinkProps, IContextualMenuItem, Link as FabricLink, LinkBase } from "@fluentui/react";
import "./Link.css";

// Links need to connect to two systems:
// 1. React Router Dom for navigation preventing page refresh
// 2. Fabric UI for styling concerns
//
// These two systems do not natural play together as they have conflicting props and purposes.
// This component provides a fix for that producing <a><span> output.
// You should use this for standard text based links.
// If you need custom handling for things like onClick, you may use import {Link} from "office-ui-fabric-react"; directly.

interface ILink extends ILinkProps {
    href: string; // This corrects the required definition of the RouterLink.to property.
}

export const Link: FunctionComponent<ILink> = (props) => {
    const onClick = (
        event?:
            | React.MouseEvent<HTMLAnchorElement | HTMLElement | HTMLButtonElement | LinkBase, MouseEvent>
            | React.KeyboardEvent<HTMLElement>
            | undefined,
        item?: IContextualMenuItem | undefined,
    ) => {
        if (event !== undefined && item !== undefined && item.href !== undefined) {
            event.preventDefault();
            props.history.push(item.href);
        }
    };

    return props.href.indexOf(":") >= 0 ? (
        <FabricLink href={props.href}>{props.children}</FabricLink>
    ) : (
        <FabricLink href={props.href} as={"span"} onClick={onClick}>
            <RouterLink className={"ms-Link-Child"} to={props.href} style={props.style}>
                {props.children}
            </RouterLink>
        </FabricLink>
    );
};

// Usage example:
// <Link href="/some-page">Some Page</Link>
