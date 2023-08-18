import  styled  from "styled-components";

export const List = styled.div`
display: inline-block;
max-width: 300px;
border-radius: 8px;
`;

export const Img = styled.img`
width: 150px;
display: block;
margin: 0 auto;
border-radius: 50%;
background-color: rgb(122, 98, 98);
`
export const Nane = styled.p`
text-align: center;
font-size: 24px;
font-weight: 500;
line-height: 1.29;
`
export const CardTagAndLocation = styled.p`
text-align: center;
font-size: 16px;
color: gray;
`


export const Description = styled.div`

padding: 40px;
background-color:antiquewhite;

`

export const Status = styled.ul`
list-style: none;
display: flex;
align-item: center;
justify-content: center;

margin: 0;
padding: 1px;
background-color:rgb(224, 218, 218);
`
export const CardDate = styled.li`
width: 100px;
// max-width: calc((100%-0px) / 3);
border: 1.5px solid rgb(171, 163, 163);
padding: 16px;
`
export const ReitingLabel = styled.span`
display: flex;
align-item: center;
justify-content: center;

font-size: 14px;
padding: 10px;
color: gray;

`

export const ReitingNumbers = styled.span`
display: flex;
align-item: center;
justify-content: center;
font-weight: 500;
`