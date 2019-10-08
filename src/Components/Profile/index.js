import  React, { useState, useEffect} from 'react';
import {ProfileSkills, Profiles, ProfileList, ProfileItem, Span, SkillsBox, SkillsDesc, Bar, BarTitle, BarPerc, BarParent, ParenSpan,Hash, ProfileTitle, SkillsTitle, Pspan, Skspan} from './style.js';
import axios from 'axios';

const Profile = () => {


    const[ skils, setSkyls] = useState([]);

      useEffect ( ()=>{

        axios.get('js/data.json').then( res=> setSkyls(res.data.skills) );
 
    },[] );
    
const SkilsBloc = skils.map( (profileItem)=> {
    return(
        <Bar key={profileItem.id}>
        <BarTitle>{profileItem.title}</BarTitle>
        <BarPerc>{profileItem.perc}</BarPerc>
        <BarParent>
            <ParenSpan className={profileItem.id}></ParenSpan>
        </BarParent>
    </Bar>
    )
} )

        return (
           
            <ProfileSkills>
                <div className="container">
                    <Profiles>
                        <ProfileTitle><Pspan>My </Pspan>Profile</ProfileTitle>
                        <ProfileList>
                            <ProfileItem>
                                <Span>Name</Span>
                                Hamza Nabil
                            </ProfileItem>
                            <ProfileItem>
                                <Span>Birthday</Span>
                                21/1/1996
                            </ProfileItem>
                            <ProfileItem>
                                <Span>Address</Span>
                                Ain shams
                            </ProfileItem>
                            <ProfileItem>
                                <Span>Phone</Span>
                                4444 5555 6666
                            </ProfileItem>
                            <ProfileItem>
                                <Span>Email</Span>
                                hamza@hamza.com
                            </ProfileItem>
                            <ProfileItem>
                                <Span>Website</Span>
                                <Hash className="web">www.google.com</Hash>
                            </ProfileItem>
                        </ProfileList>
                    </Profiles> 
                    
                    <SkillsBox>
                        <SkillsTitle>Some <Skspan>skills</Skspan></SkillsTitle>
                        <SkillsDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                        </SkillsDesc>
                     {SkilsBloc}
                    </SkillsBox>
                    
                </div> 
            </ProfileSkills> 
        );
    
}

export default Profile;