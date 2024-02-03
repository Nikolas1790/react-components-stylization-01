import  styled  from "styled-components";

function getTwoCollors(index) {
       if(index % 2){        
        return `rgb(231, 234, 233)`;
    }    
    return `white`;
  }
export const Table = styled.table`
width:500px;
border-collapse: collapse;
border-radius: 4px;
text-align: center;
`
export const Header = styled.tr`
background-color: rgb(71, 182, 255);
color: white;
text-transform: uppercase;
`
export const HeadString = styled.th`
padding:16px;
border: 1px solid rgb(171, 163, 163);
`
export const StringMoney = styled.tr`
background-color: ${({index}) => getTwoCollors(index)}
`
export const Item = styled.td`
padding:16px;
`