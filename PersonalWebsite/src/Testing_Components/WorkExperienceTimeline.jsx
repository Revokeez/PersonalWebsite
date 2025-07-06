/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SVG = () =>
{
  return (
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
  )
}

const WorkExperience = ({left=false, date, text, title}) => {
  {/*If left is true that means it will position the text to the end (Left)*/}
  const isLeft = (left) ? "timeline-end md:mb-10" : "timeline-start md:mb-10 md:text-end";
  return (
      <>
          <div className={isLeft}>
                  <time className="font-mono italic">{date}</time>
                  <div className="text-lg font-black">{title}</div>
                  {text}
          </div>
          {/*horizontal rule: It's an empty tag used to create a thematic break or a line that visually separates content on a webpage*/}
          <hr />
      </>
  )

}

const WorkExperienceTimeline = ()=> {
    const successCenter = `Demonstrated strong knowledge and proficiency in Fundamentals in Algebra and Logical 
                Programming, enabling students to grasp difficult topics effectively. Assisted students in 
                understanding core principles and problem-solving strategies, helping them improve their overall 
                performance. `;

    const cegSoft = `Developed an internal tool for customer support to manage clients in Zendesk, including features
                 for activating/deactivating licenses or subscriptions. The tool drastically reduced the time to 
                 resolve customer issues, cutting down from 1 day, 2 hours, or 1 hour to just 30 minutes. Learned and
                 applied new technologies such as React, .NET 8, Entity Framework Core, Azure DevOps, API development, 
                 and C#. Contributed to the project’s completion in one month, ahead of the planned two-month schedule.`

    const researchIntern = `Learned the fundamentals of Modeling and simulation for a Phishing Identification and 
                Decision Support System. Played a pivotal role in the front-end development of a web application
                designed to train employees in phishing attack prevention and enhance overall cybersecurity.
                Proficiently used HTML, CSS, and JavaScript to create an interactive and informative
                user interface for the training platform.`

    return (
      <div className="mt-10" id ="workexperience">
              <h1 className="text-center font-mono text-3xl">Work Experience</h1>
              {/*
                timeline-vertical is what making it the timeline vertical...duh.
                timeline-compact is when the screen width is small. It shows the timeline verticaly but in the text are in the same column 
              */}
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                  <li>
                    <SVG />
                    <WorkExperience title="Success Center Inter-American University of Puerto Rico, Bayamón Campus - Student Tutor" 
                                    text={successCenter} 
                                    date="AUG 2023 - DEC 2024" left={true}/>
                  </li>
                  <li>
                    <SVG />
                    <WorkExperience title="CEGsoft (Computer Expert Group) - Software Developer Intern"
                                    text={cegSoft}
                                    date="JUN 2024 – JUL 2024" left={false} />
                  </li>
                  <li>
                    <SVG />
                    <WorkExperience title="Master Workforce Inter-American University of Puerto Rico, Bayamón Campus - Research Intern"
                                    text={researchIntern}
                                    date="JUN 2023 - AUG 2023" left={true}/>
                  </li>
                </ul>
        </div>
    );
}

export default WorkExperienceTimeline;