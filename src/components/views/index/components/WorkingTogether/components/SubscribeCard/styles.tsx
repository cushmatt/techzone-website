import styled from '@emotion/styled';
import { colors, fonts } from '../../../../../../global/Theme';

export const Card = styled.div`
    background-color: ${colors.lightBlue};
    border-radius: 12px;
    box-shadow: 2px 10px 6px rgba(0, 0, 0, 0.1);
    height: 365px;
    margin-top: -255px;
    margin-left: 125px;
    width: 700px;
`;

export const Header = styled.div`
    background-color: #e2e8e9;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    height: 100px;
    width: 100%;
`;

export const H3 = styled.h3`
    color: ${colors.darkBlue};
    font-family: ${fonts.primary};
    font-size: 32px;
    font-weight: 400;
    margin-left: 25px;
    padding-top: 32px;
`;

export const P = styled.p`
    color: ${colors.darkGray};
    font-family: ${fonts.secondary};
    font-size: 24px;
    line-height: 1.7;
    margin: 20px 25px;
`;

export const Input = styled.input`
    background-color: #fff;
    border-radius: 7px 0 0 7px;
    border: none;
    color: ${colors.darkGray};
    font-size: 24px;
    height: 60px;
    margin-left: 25px;
    padding-left: 20px;
    width: 70.714%;
`;

export const Button = styled.button`
    background-color: ${colors.lightGreen};
    border-radius: 0 7px 7px 0;
    border: none;
    color: #fff;
    cursor: pointer;
    font-family: ${fonts.primary};
    font-size: 24px;
    height: 60px;
    width: 22.1431%;
`;
