import styled from 'styled-components/macro';

export const DividerLine = styled.div`
background: #E7E7E7;
width: 100%;
height:1px;
margin-top:${({ mt }) => (mt ? mt : null)};
margin-bottom:${({ mb }) => (mb ? mb : null)}
`;