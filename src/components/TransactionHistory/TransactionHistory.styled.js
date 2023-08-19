import  styled  from "styled-components";

function getThueCollors(index) {
    console.log(index)
    if(index % 2 === 0){
        
        return `blue`;
    }
    
    return `red`;
  }
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
background-color: ${getThueCollors}
// :nth-of-type(even) {
//     background: #E8E6D1;
//   }

// :nth-of-type(odd){
//     background-color: red;
// }

`
export const Item = styled.td`
padding:16px;
`