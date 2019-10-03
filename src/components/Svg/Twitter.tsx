//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: I M P O R T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//

import React from 'react';
import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

import { colors } from '../Theme';

//
// ────────────────────────────────────────────────── II ──────────
//   :::::: T Y P E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────
//

interface Props {
    width?: string;
    height?: string;
    viewBox?: string;
    fill?: string;
    styles?: SerializedStyles;
}

//
// ──────────────────────────────────────────────────── III ──────────
//   :::::: S T Y L E S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────
//

const SVG = styled('svg')`
    fill: ${colors.lightGray};
    transition: all 0.3s ease 0s;

    &:hover {
        fill: #1da1f2;
        transform: translateY(-5px);
    }
`;

//
// ────────────────────────────────────────────────────────── IV ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

const Twitter: React.FunctionComponent<Props> = ({
    width = '49.423',
    height = '40.413',
    viewBox = '0 0 49.423 40.413',
    styles,
}) => {
    return (
        <SVG
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={viewBox}
            css={css`
                ${styles}
            `}
        >
            <g transform="translate(0.001 -55.785)">
                <g transform="translate(-0.001 55.785)">
                    <g transform="translate(0 0)">
                        <path
                            className="a"
                            d="M48.935,60.5a1.119,1.119,0,0,0-1.3.026,4.123,4.123,0,0,1-1.122.528c1.52-1.885,1.542-3.145,1.52-3.455a1.12,1.12,0,0,0-1.769-.829,9.83,9.83,0,0,1-5.355,1.848,10.62,10.62,0,0,0-17.764,9.05c-9.77-.243-17.695-9.452-17.774-9.546a1.119,1.119,0,0,0-1.821.159,10.45,10.45,0,0,0,.233,11.1,1.12,1.12,0,0,0-1.651.968,10.147,10.147,0,0,0,4.024,8.7,1.121,1.121,0,0,0-.645,1.368,10.009,10.009,0,0,0,7.148,6.99,15.018,15.018,0,0,1-8.59,2.353,17.693,17.693,0,0,1-2.752-.195,1.12,1.12,0,0,0-.868,2C5.546,95.393,11.7,96.2,15.972,96.2a30.3,30.3,0,0,0,5.837-.519c21.911-5.116,22.743-24.762,22.708-28.342,4.107-3.773,4.761-5.246,4.864-5.614A1.119,1.119,0,0,0,48.935,60.5Zm-6.3,5.528a1.121,1.121,0,0,0-.365.907c.015.213,1.212,21.385-20.946,26.56a28.763,28.763,0,0,1-5.349.465A26.277,26.277,0,0,1,5.542,91.95c3.362-.215,7.485-1.247,10.451-4.527a1.122,1.122,0,0,0-.838-1.872A8.1,8.1,0,0,1,8.332,81.4a6.06,6.06,0,0,0,2.634-.431,1.121,1.121,0,0,0-.232-2.116,8.282,8.282,0,0,1-6.229-6.56,5.506,5.506,0,0,0,2.7.376,1.12,1.12,0,0,0,.562-1.961c-.224-.19-5.064-4.4-2.961-9.9,2.819,2.862,10.49,9.6,19.741,9.077a1.121,1.121,0,0,0,1.021-1.4,8.386,8.386,0,0,1,8.117-10.461,8.316,8.316,0,0,1,5.972,2.5,1.122,1.122,0,0,0,.779.334h.173a11.829,11.829,0,0,0,3.593-.577,16.39,16.39,0,0,1-1.888,1.682,1.12,1.12,0,0,0,.773,2c.181-.015.979-.084,1.966-.261C44.432,64.347,43.64,65.112,42.632,66.027Z"
                            transform="translate(0.001 -55.785)"
                        />
                    </g>
                </g>
            </g>
        </SVG>
    );
};

export default Twitter;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
