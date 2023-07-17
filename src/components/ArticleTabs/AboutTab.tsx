import React, { useContext, useState } from 'react';

type AboutTabProps = {
    header?: any,
    body: any
}

function AboutTab(props: AboutTabProps) {

    const {
        header,
        body,
    } = props

    return (
        <div>
            {
                header && 
                <div>
                    {
                        header
                    }
                </div>
            }
            {
                body &&
                <div>
                    {
                        body
                    }
                </div>
            }
        </div>
    )
}

export default AboutTab;

