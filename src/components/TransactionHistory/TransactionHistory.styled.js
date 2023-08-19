import  styled  from "styled-components";

export const Table = styled.table`
width:500px;
border-collapse: collapse;
border-radius: 4px;
text-align: center;
`

export const Header = styled.tr`
background-color: blue;
color: white;
text-transform: uppercase;
`
export const HeadString = styled.th`
padding:16px;
border: 1px solid rgb(171, 163, 163);
`

export const StringMoney = styled.tr`
background-color: rgb(172, 172, 249);
:nth-of-type(odd){
    background-color: white;
}
`
export const Item = styled.td`
padding:16px;

`