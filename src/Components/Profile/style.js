import styled from 'styled-components';

export const ProfileSkills = styled.div`
    padding: 50px 0;
    overflow: hidden;
    @media(max - width: 768px) {
     
        &.skills {
            width: 100 %;
            float: none
        }
        &.profile {
            width: 100 %;
            float: none
            margin-bottom: 20px
        }
    }
    `

export const Profiles = styled.div`
    width: 50%;
    float: left;
    
    `

export const ProfileList = styled.ul`
    list-style: none
    `

export const ProfileItem = styled.li`
    margin-bottom: 8px
    `

export const Span = styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold
    &.web { 
        font-weight: normal;
        color: #eb5424}
  
    `

    export const  Hash= styled.a`
    color:red;
    `

export const SkillsBox = styled.div`
    width: 50%;
    float: left;
    `

export const SkillsDesc = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
    `

export const Bar = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
    

    &:nth-child(3) div >span{
        width: 100%;
    }
    &:nth-child(4) div> span{
        width: 90%;
    }
    &:nth-child(5) div >span{
        width: 50%;
    }
    `

export const BarTitle = styled.span`
    float: left;
    `

export const BarPerc = styled.span`
    float: right;
    margin-right: 100px
    `

export const BarParent = styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
    `

export const ParenSpan = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0
    
  
 
    `


export const ProfileTitle = styled.h2`
        font-size: 40px; 
        margin-bottom: 20px
        `
export const SkillsTitle = styled(ProfileTitle)`
     
    `

export const Pspan = styled.span`
    font-weight: normal;
    `

export const Skspan = styled.span`
        font-weight: normal;
        `
 