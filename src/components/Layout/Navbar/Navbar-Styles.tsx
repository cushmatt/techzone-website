//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import styled from '@emotion/styled';

import { colors, fonts } from '../../global/Theme';

//
// ─── STYLES ─────────────────────────────────────────────────────────────────────
//

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    position: absolute;
    width: 100%;
    z-index: 2;
    font-family: ${fonts.primary};
    font-size: 24px;
    color: #fff;
    margin-top: 48px;

    & > li > .link {
        text-decoration: none;
        color: #fff;

        &.home {
            color: ${colors.lightGreen};
        }
    }
`;

export const First = styled.li`
    margin-left: 140px;
`;

export const Last = styled.li`
    margin-right: 140px;
    margin-left: 60px;
    align-self: center;
    text-decoration: none;
    color: #fff;
`;

export const Second = styled.li`
    margin-right: auto;
    align-self: center;
    margin-left: 10px;

    & .zone {
        color: ${colors.lightGreen};
        padding-left: 2px;
    }
`;

export const Third = styled.li`
    align-self: center;
`;

export const Fourth = styled.li`
    margin-left: 60px;
    align-self: center;
`;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
