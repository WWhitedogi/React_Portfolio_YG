// data.js
export const accordionData = [
    {
        title: "Skills",
        content: (
                <div class="work-skill" style={{ textAlign: 'left' }} >
                    <p><span>Languages</span>:Python </p>
                    <p><span>Frameworks</span>:Django,</p>
                    <p><span>Version Control</span>:Git</p>
                </div>
               
        )
    },
    {
        title: "Work Experience",
        content: (
                <div className="work-experiences">
                    <div className="work-experience">
                    <h3>05/2023 - Present</h3>
                    <p> RA at Northeastern University</p>
                    </div>
                    <div className="work-experience">
                    <h3>09/2021 -08/2022</h3>
                    <p> Software Testing Engineer at Foxcoon</p>
                    </div>
                    <div className="work-experience">
                    <h3>07/2019-01/2020</h3>
                    <p>Front-end developer at HQYJ</p>
                    </div>
                </div>

            

        )
    },
    {

        title: "Education",
        content: (
            <div className="education" style={{ textAlign: 'left' }}>
                <p><span>09/2022 -05/2024</span>: Northeastern University</p>
                <p><span>09/2017 -06/2021</span>: SouthWest Petrolumn University</p>

            </div>

        )
    }
    // ... 其他季节
];
