import React, { useContext } from 'react';
import { Box, Text, Image, Heading, Badge } from '@chakra-ui/react';
import './theme5.css';
import ResumeContext from '../../Context/ResumeContext';

const Theme5 = (props) => {
    const { componentRef, themeData } = props;
    const { name, address, phone, email, profile, profileImage, summary, skill } = themeData.personalData;

    const { checkProj, checkWork, checkAward } = useContext(ResumeContext);
    const { projectTitles, projectDesc } = themeData.projectData;
    const { educationTitles, educationDesc } = themeData.educationData;
    const { workTitles, workDesc } = themeData.workData;
    const { awards } = themeData.awardData;

    return (
        <Box id="section-to-print" ref={componentRef}>
            <Box id="theme5">
                <header className="header-section">
                    <Box className="profile-img-box">
                        <Image src={profileImage} alt="Profile" className="profile-img" />
                    </Box>
                    <Box className="header-content">
                        <Heading as="h1" size="xl" className="name">{name}</Heading>
                        <Text fontSize="lg" className="profile-title">{profile}</Text>
                        <Text className="summary-text">{summary}</Text>
                    </Box>
                </header>

                <Box className="contact-skill-section">
                    <Box className="contact-box">
                        <Heading fontSize="xl" className="section-title">Contact</Heading>
                        <Text><strong>Phone:</strong> {phone}</Text>
                        <Text><strong>Email:</strong> {email}</Text>
                        <Text><strong>Address:</strong> {address}</Text>
                    </Box>
                    <Box className="skill-box">
                        <Heading fontSize="xl" className="section-title">Skills</Heading>
                        <Box className="skills-list">
                            {
                                skill.split(',').map((item, index) => (
                                    <Badge key={index} className="skill-badge">{item}</Badge>
                                ))
                            }
                        </Box>
                    </Box>
                </Box>

                <Box className="content-section">
                    <Box className="education-box">
                        <Heading fontSize="xl" className="section-title">Education</Heading>
                        {
                            Object.entries(educationTitles).map((element, index) => (
                                <Box key={index} className="entry">
                                    <Heading fontSize="md">{element[1]}</Heading>
                                    <ul className="desc-list">
                                        {
                                            educationDesc[element[0]]?.split(',').map((el, idx) => (
                                                <li key={idx}>{el}</li>
                                            ))
                                        }
                                    </ul>
                                </Box>
                            ))
                        }
                    </Box>

                    {!checkProj && (
                        <Box className="project-box">
                            <Heading fontSize="xl" className="section-title">Projects</Heading>
                            {
                                Object.entries(projectTitles).map((element, index) => (
                                    <Box key={index} className="entry">
                                        <Heading fontSize="md">{element[1]}</Heading>
                                        <ul className="desc-list">
                                            {
                                                projectDesc[element[0]]?.split(',').map((el, idx) => (
                                                    <li key={idx}>{el}</li>
                                                ))
                                            }
                                        </ul>
                                    </Box>
                                ))
                            }
                        </Box>
                    )}

                    {!checkWork && (
                        <Box className="work-box">
                            <Heading fontSize="xl" className="section-title">Work Experience</Heading>
                            {
                                Object.entries(workTitles).map((element, index) => (
                                    <Box key={index} className="entry">
                                        <Heading fontSize="md">{element[1]}</Heading>
                                        <ul className="desc-list">
                                            {
                                                workDesc[element[0]]?.split(',').map((el, idx) => (
                                                    <li key={idx}>{el}</li>
                                                ))
                                            }
                                        </ul>
                                    </Box>
                                ))
                            }
                        </Box>
                    )}

                    {!checkAward && (
                        <Box className="award-box">
                            <Heading fontSize="xl" className="section-title">Awards & Achievements</Heading>
                            <ul className="desc-list">
                                {
                                    awards?.split(',').map((el, idx) => (
                                        <li key={idx}>{el}</li>
                                    ))
                                }
                            </ul>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default Theme5;
