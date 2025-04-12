/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";

const TimeLine = ()=>{
    return (
      <div className="mt-10" id ="workexperience">
              <h1 className="text-center font-mono text-3xl">Work Experience</h1>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                  <li>
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
                    <div className="timeline-start mb-10 md:text-end" data-aos="fade-right">
                      <time className="font-mono italic">AUG 2023 - DEC 2024 </time>
                      <div className="text-lg font-black">Success Center Inter-American University of Puerto Rico, Bayamón Campus - Student Tutor</div>
                      Demonstrated strong knowledge and proficiency in Fundamentals in Algebra and Logical Programming, enabling students to grasp 
                difficult topics effectively. Assisted students in understanding core principles and problem-solving strategies, helping them improve their overall 
                performance. 
                    </div>
                    <hr />
                  </li>
                  <li>
                    <hr />
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
                    <div className="timeline-end md:mb-10" data-aos="fade-left">
                      <time className="font-mono italic">JUN 2024 – JUL 2024</time>
                      <div className="text-lg font-black">CEGsoft (Computer Expert Group) - Software Developer Intern </div>
                      Developed an internal tool for customer support to manage clients in Zendesk, including features for activating/deactivating 
                licenses or subscriptions. The tool drastically reduced the time to resolve customer issues, cutting down from 1 day, 2 hours, or 1 hour to just 30 minutes. Learned and applied new technologies such as React, .NET 8, Entity Framework Core, Azure DevOps, API development, and C#. 
                Contributed to the project’s completion in one month, ahead of the planned two-month schedule. 
                    </div>
                    <hr />
                  </li>
                  <li>
                    <hr />
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
                    <div className="timeline-start mb-10 md:text-end" data-aos="fade-right">
                      <time className="font-mono italic"> SEP 2023 – DEC 2023 </time>
                      <div className="text-lg font-black">Inter-American University of Puerto Rico – Bayamón Campus - Data Science Speaker </div>
                      Acted as a distinguished speaker at the Inter American Data Camp held in the vibrant locale of Manati, Puerto Rico. Specialized in delivering a comprehensive curriculum that demystified the fundamental aspects of data science, catering specifically to the diverse educational needs of the attendees.
                    </div>
                    <hr />
                  </li>
                  <li>
                    <hr />
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
                    <div className="timeline-end md:mb-10" data-aos="fade-left">
                      <time className="font-mono italic">JUN 2023 - AUG 2023</time>
                      <div className="text-lg font-black">Master Workforce Inter-American University of Puerto Rico, Bayamón Campus - Research Intern </div>
                      Learned the fundamentals of Modeling and simulation for a Phishing Identification and Decision Support System. 
                      Played a pivotal role in the front-end development of a web application designed to train employees in phishing attack prevention 
                      and enhance overall cybersecurity. Proficiently used HTML, CSS, and JavaScript to create an interactive and informative user interface for the training platform. 
                    </div>
                  </li>

                </ul>
        </div>
    );
}

export default TimeLine;