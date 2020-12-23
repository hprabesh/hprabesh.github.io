import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../../css/sub-components/education_timeline.css';

const contentStyleCSS={
    background: '#5883b4',
    color: '#111111'
}
const contentArrowStyleCSS={
    borderRight: '7px solid  #5883b4',
}

const circleTimelineCSS={
    background: '#8fa1b6',
    color: '#111111'
}

export default function Timeline(){
    return(
        <React.Fragment>
            <VerticalTimeline className="vertical-timeline-custom-line">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={contentStyleCSS}
                    contentArrowStyle={contentArrowStyleCSS}
                    date="2019 - 2023"
                    iconStyle={circleTimelineCSS}         
                >
                    <h2 className="vertical-timeline-element-header vertical-timeline-element-text">Undergraduate</h2>
                    <h3 className="vertical-timeline-element-title vertical-timeline-element-text">University of Texas at Arlington (UTA)</h3>
                    <h4 className="vertical-timeline-element-subtitle vertical-timeline-element-text">Arlington, TX</h4>
                    <p className="vertical-timeline-element-text">
                        Computer Science and Mathematics (<em>Most Likely</em>)
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={contentStyleCSS}
                    contentArrowStyle={contentArrowStyleCSS}
                    date="2016 - 2018"
                    iconStyle={circleTimelineCSS}  
                    
                >
                    <h2 className="vertical-timeline-element-header vertical-timeline-element-text">High School</h2>
                    <h3 className="vertical-timeline-element-title vertical-timeline-element-text">Trinity International Secondary School</h3>
                    <h4 className="vertical-timeline-element-subtitle vertical-timeline-element-text">Kathmandu, Nepal</h4>
                    <p className="vertical-timeline-element-text">
                    Lorem Ipsum
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={contentStyleCSS}
                    contentArrowStyle={contentArrowStyleCSS}
                    date="2012 - 2016"
                    iconStyle={circleTimelineCSS}  
                    
                >
                    <h2 className="vertical-timeline-element-header vertical-timeline-element-text">Secondary School</h2>
                    <h3 className="vertical-timeline-element-title vertical-timeline-element-text">Arunima Secondary School</h3>
                    <h4 className="vertical-timeline-element-subtitle vertical-timeline-element-text">Kathmandu, Nepal</h4>
                    <p className="vertical-timeline-element-text">
                    Lorem Ipsum
                    </p>
                </VerticalTimelineElement>
                
            </VerticalTimeline>
        </React.Fragment>
    );
}