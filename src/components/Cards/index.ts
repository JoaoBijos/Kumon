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

    @media(max-width: 700px){
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
`
export const Title = styled.span`
    display:flex;
    color: #1A9CB7;
    font-size: 30px;
`