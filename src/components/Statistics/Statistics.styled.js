import  styled  from "styled-components";
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
export const StatisticList = styled.section`
max-width: 300px;
border-radius: 4px;
background-color: rgb(122, 98, 98);
`
export const Title = styled.h2`
font-size: 20px;
text-transform: uppercase;
text-align: center;
padding: 24px;
background-color: antiquewhite;
margin: 0;
`

export const StatList = styled.ul`
list-style: none;
display: flex;
align-item: center;
justify-content: center;
background-color: white;
padding: 1px;
margin: 0;
`
export const SpanLabel = styled.span`
font-size: 14px;
`
export const SpanPercentagel = styled.span`
font-size: 20px;
`
export const Item = styled.li`
padding: 4px;
text-align: center;
border: 1.5px solid rgb(171, 163, 163);
background-color: ${getRandomHexColor};
`