

import React, { useContext, useState, useRef, ElementType, MouseEventHandler } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Placement } from 'react-bootstrap/esm/Overlay';


type RSButtonProps = {
    key?: any,
    children: any,
    className?: string,
    href?: string,
    as?: string,
    hasTarget?: Boolean,
    style?: any,
    onMouseEnter?: MouseEventHandler,
    onMouseLeave?: MouseEventHandler,
    onClick?: MouseEventHandler,
    variant?: string,
    overlayChildren?: any,
    overlayPlacement?: string,
}

function RSButton(props: RSButtonProps) {
    const {
        key,
        children,
        className,
        href,
        as,
        hasTarget,
        style,
        onMouseEnter,
        onMouseLeave,
        onClick,
        variant,

        overlayChildren,
        overlayPlacement,
    } = props


    const placement = overlayPlacement ? overlayPlacement : 'auto';
    const btnVariant = variant ?? ' ';
    // const btnClassName = className ?? '';

    const target = hasTarget ? '_blank' : undefined;
    const rel = hasTarget ? 'noopener noreferrer' : undefined;
    
    return !overlayChildren ? (
        <Button
            variant={variant}
            className={className}
            as={as as ElementType}
            href={href}
            target={target}
            rel={rel}
            style={style}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        >
            {
                children
            }
        </Button>
    )
        :
        (
            <OverlayTrigger
                placement={placement as Placement}
                overlay={
                    <Tooltip id={`${key}`}>{overlayChildren}</Tooltip>
                }
            >
                {({ ref, ...triggerHandler }) => (

                    <Button
                        ref={ref}
                        variant={variant}
                        className={className}
                        as={as as ElementType}
                        href={href}
                        target={target}
                        rel={rel}
                        style={style}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        {...triggerHandler}
                    >
                        {
                            children
                        }
                    </Button>

                )}
            </OverlayTrigger>
        )
}

function RSButtonCmpt(props: any) {
    const {
        ref,
        children,
        className,
        src,
        btnType,
        hasTarget,
        style,
        triggerHandler,
        // onMouseEnter,
        // onMouseLeave,
        variant,
    } = props

    const target = hasTarget ? '_blank' : undefined;
    const rel = hasTarget ? 'noopener noreferrer' : undefined;

    return (
        <Button
            ref={ref}
            variant={variant}
            className={className}
            as={btnType}
            href={src}
            target={target}
            rel={rel}
            style={style}
            {...triggerHandler}
        >
            {
                children
            }
        </Button>
    )
}

export default RSButton;

