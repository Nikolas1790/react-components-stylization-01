import  styled  from "styled-components";

const getActiveColor = props =>{
    if (props.className) {        
        return "green"}        
        return "red"    
}
export const Stat = styled.ul`
max-width: 300px;
border-radius: 4px;
padding:0;
`

export const Item = styled.li`
display: flex;
background-color: antiquewhite;
margin-bottom: 8px;
padding: 8px;
border-radius: 4px;
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`
export const Status = styled.span`
background-color: ${getActiveColor};
width: 20px;
height: 20px;
border-radius: 50%;
margin:  auto 0;
`


export const Avatar = styled.img`
margin: 0 8px;
`
export const Name = styled.p`

font-weight: 700;
line-height: 1.29;

`