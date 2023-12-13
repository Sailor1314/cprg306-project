import React from 'react';

const About = () => {
    return (
        <div className={styles.container}>
            <h1>About Me</h1>
            <p>Hello! I'm [Your Name], a passionate [Your Profession] based in [Your Location].</p>
            <p>I specialize in [Your Specialization] and have [number] years of experience in [Industry/Field]. I love creating things that live on the internet, whether that be websites, applications, or anything in between.</p>
            
            <h2>My Background</h2>
            <p>I started my journey with [details about your educational background or how you started in your field]. Over the years, I've had the opportunity to work at [mention any significant companies or projects].</p>
            
            <h2>Skills</h2>
            <ul>
                <li>JavaScript (ES6+)</li>
                <li>React & Next.js</li>
                <li>Node.js</li>
                <li>HTML & CSS</li>
        
            </ul>
        </div>
    );
}

export default About;
