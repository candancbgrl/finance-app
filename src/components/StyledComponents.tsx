import { styled } from '@mui/material/styles';
import {Typography} from '@mui/material'


export const TextSyled = styled(Typography)<{ isFin?: boolean, isHeader?: boolean, isCreated?: boolean, isAt?: boolean, isBottom?: boolean }>(({ theme, isFin, isHeader, isCreated, isAt, isBottom }) => ({
    fontSize: isFin ? '41px' : (isHeader ? '110px' : (isCreated ? '33px' : (isAt ? '33px' : (isBottom ? '20px' : '1px')))),
    fontFamily: isFin ? 'Overpass, sans-serif' : 'Source Sans Pro, sans-serif',
    lineHeight: isFin ? '48px' : (isHeader ? '134px' : (isCreated ? '39px' : (isAt ? '39px' : (isBottom ? '23px' : '1px')))),
    maxWidth: isHeader ? '40rem' : ((isCreated || isAt) ? '50rem' : 'normal'),
    color: (isCreated || isAt) ? '#6B6B6B' : (isBottom ? '#27AE60' : '#000'),
    transition: isAt ? 'color 0.3s' : 'normal',
    marginTop: (isCreated || isAt) ? '15px' : 0,
    '&:hover': (isFin || isCreated || isAt) ? ({
        color: '#27AE60',
        fontSize: '60px',
    }) : (isHeader ? {
        color: '#27AE60',
        fontSize: '150px',
        maxWidth: '55rem',
    } : (isBottom ? {
        color: '#27AE60',
        fontSize: '40px',
    } : null))
}));
