import styled from 'styled-components';
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Flyer_container(props) {

    return (
        <>
        <Footer>
            <div className='imagem'>
                <img src={props.img} />
            </div>
            {props.text}
        </Footer>
        </>
        
    );

}

const Footer = styled.div`
    position: fixed;
    width: 375px;
    height: 117px;
    left: 0px;
    bottom: 0px;

    background: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    align-items: center;


    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;

    color: #293845;

    .imagem{
        width: 64px;
        height: 89px;
        margin-left: 10px;
        margin-right: 14px;

        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    img{
        width: 48px;
        height: 72px;
    }
`