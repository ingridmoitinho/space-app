import styled from "styled-components";

const Titulo = styled.h2`
    color: #7B78E6;
    font-size: 2.5rem;
    text-align: ${props => props.$alinhamento ? props.$alinhamento : "left"};
`;

export default Titulo;