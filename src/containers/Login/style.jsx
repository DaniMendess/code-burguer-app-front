/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import Background from '../../assets/background.svg';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    background: url('${Background}');
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

export const LoginImage = styled.img`
    height:70% ;
`;

export const Containeriten = styled.div`
    background: #373737;
    border-radius: 0 10px 10px 0;
    padding: 10px 65px;
    height:70%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1{
        font-family: Roboto;
        font-size: 24px;
        font-weight: 500;
        line-height: 28px;
        text-align: center;
        color: #FFFFFF;
        margin-top: 10px;
    }

    form {
        display: flex;
        flex-direction: column;
    }
`;

export const Input = styled.input`
    border-radius: 5px;
    background: #FFF;
    box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
    width: 391px;
    height: 38px;
    border: ${(props) => (props.erro ? '1px solid #CC1717' : 'none')};
    padding-left: 10px;
    
`;
export const Label = styled.p`
    color: #FFF;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 5px;
    margin-top:10px;
`;
export const Button = styled.button`
    width: 182px;
    height: 38px;
    background: #9758A6;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    color: #ffff;
    margin-top: 25px;

    &:hover {
        opacity: 0.8;
    }

    &:active{
        opacity: 0.6;
    }
`;

export const SingInLink = styled.p`
    color: #FFF;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 25px;
    font-weight: 300;

    a{
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const LogoImg = styled.img`
    width: 200px;
    margin: 0 auto;
    
`;

export const InputErro = styled.p`
    color: #CC1717;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 3px;

`;
