import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
`
export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Cards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    @media(max-width: 1020px){
        flex-direction: column;
    }
`
export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 300px;
    height: 360px;
    background-color: #A7E5ED;
    border: 6px solid #00D0FA;
    border-radius: 20%;
    margin: 10px;
    cursor: pointer;
    position: relative;
    transition-duration: 0.3s;

    :hover{
        transform: scale(1.02);
        box-shadow: 0 0 1em #0A4552;
    }

    @media(max-width: 1020px){
        width: 350px;
        height: 370px;
    }

    @media(max-width: 420px){
        width: 300px;
        height: 320px;
    }

    > img {
        @media(max-width: 1020px){
            width: 170px;
            height: 170px;
        }

        @media(max-width: 420px){
            width: 140px;
            height: 140px;
        }
    }
`
export const Title = styled.span`
    display:flex;
    color: #1A9CB7;
    font-size: 30px;
    margin-top: 6px;

    @media(max-width: 1020px){
        font-size: 36px;
    }

    @media(max-width: 1020px){
        font-size: 32px;
    }
`