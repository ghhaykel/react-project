import React, { Component } from 'react';
import axios from 'axios';
import { WorkSection, WorkTitle, Span, WorkPart, Icon, PartTitle, Line, PartDesc } from './style.js';

class Work extends Component {



    state = {
        works: []
    }

    componentDidMount() {
        axios.get('js/data.json').then(res => { this.setState({ works: res.data.works }) })


    }
    render() {

        const { works } = this.state;

        const listWorks = works.map((workItem) => {
            return (

                <WorkPart first={workItem.id} key={workItem.id}>
                    <Icon className={workItem.icon_name}></Icon>
                    <PartTitle>{workItem.title}</PartTitle>
                    <Line />
                    <PartDesc>
                        {workItem.body}
                    </PartDesc>
                </WorkPart>
            )

        })



        return (
            <WorkSection>
                <div className="container">
                    <WorkTitle><Span>My</Span> Work</WorkTitle>

                    {listWorks}


                </div>
            </WorkSection>
        );
    }


}

export default Work; 