import ModeEditIcon from '@mui/icons-material/ModeEdit';
import styled from 'styled-components';

export const Container = styled.div`
    background: #FFF;
    box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;

`;

export const Img = styled.img`
    width: 70px;
    border-radius: 7px;
`;

export const EditIcon = styled(ModeEditIcon)`
    cursor: pointer;
    width: 70px;

`;
