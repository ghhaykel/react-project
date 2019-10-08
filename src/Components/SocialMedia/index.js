import React from 'react';
import {SocialMediaSection,SocialBox,SocialIcon,Paraghraf,Span,SpanInfo} from './style.js';
import Axios from 'axios';

class SocialMedia extends React.Component {

    state ={
        social:[]
    }
    
    componentDidMount(){
         Axios.get('js/data.json').then (res => {
             this.setState({
                 social: res.data.social
             })
         })
    }
     render(){

        const {social} =this.state;

        const socialList = social.map(  (socialItem)=> {
            return(
                <SocialBox item={socialItem.id}  key={socialItem.id}>
                <SocialIcon className={socialItem.icon}></SocialIcon>
                <Paraghraf>
                    <Span>{socialItem.title}</Span>
                    <SpanInfo>{socialItem.body}</SpanInfo>
                </Paraghraf>
            </SocialBox> 
            )
        } )
        return (
            <SocialMediaSection>
            
         {socialList}
            
          
        </SocialMediaSection>
        );
     }
    
}

export default SocialMedia;