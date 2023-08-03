import styled from 'styled-components';

export const Container = styled.div`
   
`;

export const ProductImg = styled.img`
    width: 100%;
`;

export const CategoryMenu = styled.div`
   display: flex;
   justify-content: center;
   gap: 50px;
   margin-top: 30px;
`;

export const ButtonCategory = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    color: ${(props) => (props.isActived ? '#9758A6' : '#9A9A9D')};
    font-family: Roboto;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-bottom: ${(props) => (props.isActived ? '2px solid #9758A6' : '#9A9A9D')};
    padding: 5px;
    
`;
