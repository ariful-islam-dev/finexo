import React from 'react';
import SectionHeading from '../SectionHeading';
import team1 from '@/images/team-1.jpg'
import team2 from '@/images/team-2.jpg'
import team3 from '@/images/team-3.jpg'
import team4 from '@/images/team-4.jpg'
import TeamPerson from './TeamPerson';
const teams = [
    {
        name: 'Joseph Brown',
        designation: 'Marketing Head',
        photo: team1
    },
    {
        name: 'Nancy White',
        designation: 'Marketing Head',
        photo: team2
    },
    {
        name: 'Earl Martinez',
        designation: 'Marketing Head',
        photo: team3
    },
    {
        name: 'Josephine Allard',
        designation: 'Marketing Head',
        photo: team4
    },
]

const Team = () => {
    return (
        <section className="py-20 bg-blue-950 lg:px-10 xl:px-10 px-6">
        <div className="container-fluid text-white">
          <SectionHeading title='Our Team'/>
    
          <div className="team_container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-10 xl:gap-10 gap-6">
              {
                teams.map((team, key)=>(
                    <TeamPerson name={team.name} designation={team.designation} photo={team.photo} key={key}/>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    );
};

export default Team;