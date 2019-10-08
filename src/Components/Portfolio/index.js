import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import {PortfolioSection, PortfolioTitle, Span, PortfolioList, PortfolioItem, BoxDiv, PortfolioImg, PortfolioOverlay,Span2} from './style.js';
 
 

const Portfolio = () => {

    const [images , setImages] = useState([]);

    useEffect ( () => {

        axios.get('js/data.json').then( res => setImages ( res.data.portfolio ) );

    }, []) 
 
 const PortfolioListes = images.map( (imageItem)=> {
     return(
        <BoxDiv key={imageItem.id} >
                
        <div>
            <PortfolioImg src={imageItem.image} alt=""/>
            <PortfolioOverlay>
                <Span2>
                    Show Image
                </Span2>
            </PortfolioOverlay>
        </div> 
        
  
    </BoxDiv>
     )
 } )
        return (
            <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active >All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            {PortfolioListes}
         
            
        </PortfolioSection>
        );
     
}

export default Portfolio;