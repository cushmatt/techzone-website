//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';
import { css, SerializedStyles } from '@emotion/core';

import SVG from './styles';

//
// ─── TYPES ──────────────────────────────────────────────────────────────────────
//

interface Props {
    width?: string;
    height?: string;
    viewBox?: string;
    fill?: string;
    styles?: SerializedStyles;
}

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

const CreativeThinking: React.FunctionComponent<Props> = ({
    width = '69.802',
    height = '82.157',
    viewBox = '0 0 69.802 82.157',
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
            <g transform="translate(0)">
                <path
                    className="a"
                    d="M108.725,40.715C110.864,29.1,107.373,13.13,94.65,5.52A35.353,35.353,0,0,0,68.236,2.2C55.9,5.493,46.842,14.341,43.991,25.865a23.431,23.431,0,0,0-.8,7.179,24.1,24.1,0,0,0,.828,4.436,19.169,19.169,0,0,1,.818,5.69c-.057,2.294-1.638,4.674-3.033,6.774-1.521,2.292-2.835,4.271-2.073,6.1a4.469,4.469,0,0,0,3.422,2.192,1.638,1.638,0,0,0,.249.025,1.283,1.283,0,0,1,1.436,1.368c0,2.845.071,4.312,1.246,4.986a2.506,2.506,0,0,0-.213.676,2.439,2.439,0,0,0,.771,2.158,4.158,4.158,0,0,0,2.171,1.108c.057.013.112.023.166.036a3.5,3.5,0,0,1,.043.616,14.735,14.735,0,0,1-.108,1.523c-.227,2.19-.539,5.189,3.842,6.62a9.022,9.022,0,0,0,2.7.329,42.874,42.874,0,0,0,12.169-2.333,15.467,15.467,0,0,1,2,6.444A1.369,1.369,0,0,0,71,83.157h34.222a1.359,1.359,0,0,0,1.278-.946,1.4,1.4,0,0,0-.489-1.541c-1.416-1.075-6.107-12.406-6.251-16.475.413-.939.967-1.992,1.623-3.217A64.322,64.322,0,0,0,108.725,40.715ZM97.009,64.056c.035,3.274,2.986,11.924,5.522,16.363H72.25a19.6,19.6,0,0,0-2.012-6c3.966-1.554,7.46-3.553,9.137-5.746A1.369,1.369,0,0,0,77.2,67.005c-3.874,5.069-19.993,8.918-23.592,7.741-2.279-.745-2.188-1.62-1.969-3.735a17.212,17.212,0,0,0,.123-1.806c0-2.307-.93-3-2.329-3.319A1.755,1.755,0,0,1,48.7,65.6a3.8,3.8,0,0,1,.905-.641,1.369,1.369,0,0,0-.6-2.6c-.495,0-1.044,0-1.333-.036a21.133,21.133,0,0,1-.088-2.7,4,4,0,0,0-4.006-4.1c-.987-.208-1.286-.475-1.311-.537-.2-.475,1.12-2.46,1.829-3.527,1.52-2.289,3.412-5.137,3.489-8.219a19.207,19.207,0,0,0-.566-5.078,13.644,13.644,0,0,1,5.162-2.846,4.244,4.244,0,0,1,2.035.142,1.369,1.369,0,0,0,.727-2.639,6.908,6.908,0,0,0-3.329-.183,14.106,14.106,0,0,0-5.3,2.634,16.265,16.265,0,0,1-.379-2.424,20.265,20.265,0,0,1,.726-6.324C49.3,15.824,57.421,7.922,68.944,4.84a32.516,32.516,0,0,1,24.3,3.03c11.6,6.939,14.762,21.632,12.789,32.349a61.083,61.083,0,0,1-7.066,19.466c-.753,1.4-1.4,2.617-1.872,3.739A1.338,1.338,0,0,0,97.009,64.056Z"
                    transform="translate(-39.51 -1)"
                />
                <path
                    className="a"
                    d="M178.553,72.633a4.1,4.1,0,0,0-3.335-4.413L172.6,64.587a4.059,4.059,0,0,0,.367-.939l2.539-1.015a4.1,4.1,0,1,0,3.965-6.7l-2.057-4.1a4.09,4.09,0,0,0-5.029-6.368l-2.293-1.9a4.091,4.091,0,0,0-6.8-4.255l-4.058-1.014a4.081,4.081,0,0,0-7.854-.048l-5.424,1.085a4.087,4.087,0,0,0-6.535,4.824l-2.658,3.539a4.094,4.094,0,0,0-.234,8.009l2.2,5.425a4.1,4.1,0,1,0,6.738,4.287h7.349a3.964,3.964,0,0,0,4.481,2.674l4.544,6.912a4.1,4.1,0,1,0,7.077,3.449l3.392-2.711a4.086,4.086,0,0,0,6.245-3.1Zm.017-14.071a1.369,1.369,0,1,1-1.254,1.912c0-.013,0-.026-.007-.038l-.009-.013a1.348,1.348,0,0,1-.1-.492A1.37,1.37,0,0,1,178.571,58.562Zm-5.447-9.86a1.369,1.369,0,1,1,1.34,1.647,1.353,1.353,0,0,1-.494-.1l-.012-.008c-.012,0-.025,0-.037-.007A1.367,1.367,0,0,1,173.124,48.7Zm-1.362,3.346h0l-2.53,6.325L164.8,54.826a4.086,4.086,0,0,0,1.266-1.948l5.424-1.085C171.574,51.884,171.668,51.965,171.762,52.048ZM170.3,63.039a1.368,1.368,0,1,1-1.316-1.739,1.353,1.353,0,0,1,.494.1l.012.008c.012,0,.025,0,.038.007A1.368,1.368,0,0,1,170.3,63.039Zm-4.054-22.272a1.369,1.369,0,1,1-1.369,1.369A1.369,1.369,0,0,1,166.251,40.767Zm-7.2.295,3.127.782c-.007.1-.03.193-.03.293a4.111,4.111,0,0,0,4.107,4.107,4.062,4.062,0,0,0,2.082-.586l2.293,1.9a4.065,4.065,0,0,0-.268,1.42c0,.083.02.16.024.242l-4.458.892a4.108,4.108,0,0,0-3.149-2.439l-5.012-5.012A4.117,4.117,0,0,0,159.047,41.061Zm4.466,10.656a1.369,1.369,0,1,1-1.369-1.369A1.369,1.369,0,0,1,163.513,51.718ZM155.3,38.029a1.369,1.369,0,1,1-1.369,1.369A1.369,1.369,0,0,1,155.3,38.029Zm.271,6.314,4.11,4.109a4.1,4.1,0,0,0-1.391,1.9h-3.242a4.1,4.1,0,0,0-1.785-2.158Zm-8.509-2.45L151.521,41a4.117,4.117,0,0,0,1.71,1.922l-2.485,4.141-4.3-2.756a4.07,4.07,0,0,0,.637-2.174C147.087,42.053,147.067,41.975,147.063,41.894Zm5.5,9.824a1.369,1.369,0,1,1-1.369-1.369A1.369,1.369,0,0,1,152.562,51.718ZM142.98,40.767a1.369,1.369,0,1,1-1.369,1.369A1.369,1.369,0,0,1,142.98,40.767Zm-1.49,5.186a3.841,3.841,0,0,0,2.623.111l4.226,2.712a4.1,4.1,0,0,0-1,1.574h-5.98a4.11,4.11,0,0,0-1.618-2.067ZM137.5,53.087a1.369,1.369,0,1,1,1.369-1.369A1.369,1.369,0,0,1,137.5,53.087Zm4.107,12.32a1.369,1.369,0,1,1,1.369-1.369A1.369,1.369,0,0,1,141.611,65.406Zm.778-5.4a4.106,4.106,0,0,0-.778-.079c-.136,0-.264.027-.4.04l-1.865-4.605a4.1,4.1,0,0,0,2.009-2.279h5.98a4.094,4.094,0,0,0,1.236,1.768Zm10.425,2.659h-7.349a4.076,4.076,0,0,0-.625-1.137l6.723-5.6,2.289,5.135A4.1,4.1,0,0,0,152.815,62.669Zm2.233-9.582h3.242a4.1,4.1,0,0,0,1.785,2.158l-2.846,4.743a4.07,4.07,0,0,0-.56-.057c-.106,0-.206.023-.31.031l-2.35-5.27A4.1,4.1,0,0,0,155.048,53.087Zm1.621,12.32a1.369,1.369,0,1,1,1.369-1.369A1.369,1.369,0,0,1,156.669,65.406Zm5.843-8.9,3.823,3.058a4.088,4.088,0,0,0-1.266,1.948l-4.621.924a4.111,4.111,0,0,0-.783-1.185Zm2.37,22.592a1.369,1.369,0,1,1,1.369-1.369A1.369,1.369,0,0,1,164.882,79.1Zm5.475-6.844a4.057,4.057,0,0,0,.243,1.34l-2.311,1.847a3.948,3.948,0,0,0-4.034-1.755l-4.544-6.912a4.08,4.08,0,0,0,.877-1.574l4.621-.924a4.1,4.1,0,0,0,5.362,2.183l1.689,2.341A4.1,4.1,0,0,0,170.358,72.251Zm1.333-12.65,2.612-6.53c.055,0,.106.016.162.016a4.021,4.021,0,0,0,.492-.05l1.657,3.306a4.093,4.093,0,0,0-2.15,3.588c0,.056.014.107.016.162l-1.84.736A4.1,4.1,0,0,0,171.691,59.6Zm2.773,14.019a1.369,1.369,0,1,1,1.369-1.369A1.369,1.369,0,0,1,174.464,73.62Z"
                    transform="translate(-118.337 -29.791)"
                />
            </g>
        </SVG>
    );
};

export default CreativeThinking;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
