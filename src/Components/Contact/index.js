import React from 'react';
import {ContactSection,DropTitle,Span,Form, Input,FormInput,InputText,InputEmail,InputExp,TextArea,InputSubmit} from './style.js';

const Contact = () => {
   
        return (
            <ContactSection>
            <div className="container">
                <DropTitle><Span>Drop </Span>Me A line</DropTitle>
                <Form action="">
                    <FormInput>
                        <InputText type="text" placeholder="Your Name"/>
                        <InputEmail type="email" placeholder="Your Email"/>
                    </FormInput>
                    <InputExp placeholder="Your Subject"/>
                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                    <InputSubmit value="Send Message"/>
                </Form>
            </div>
            </ContactSection>
        );
     
}

export default Contact;