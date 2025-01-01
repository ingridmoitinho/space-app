import { styled } from "styled-components";

const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: start;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    overflow: hidden;
    max-width: 100%;
`;

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
`;

const Banner = ({ texto, backgroundImage }) => {
    return (
        <FigureEstilizada $backgroundImage={backgroundImage}>
            <TituloEstilizado>{texto}</TituloEstilizado>
        </FigureEstilizada>
    );
};

export default Banner;
