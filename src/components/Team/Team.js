import { Link } from 'react-router-dom';
import team from './develop';
import s from './Team.module.css';

export default function OurTeam() {
  return (
    <div className={s.content}>
      <Link to="/" alt="homepage" className={s.close} />

      {team.map((team, idx) => (
        <figure key={idx} className={s.team}>
          <img src={team.photo} alt="" className={s.background} />
          <img src={team.photo} alt={team.fullName} className={s.profile} />
          <figcaption>
            <h3>
              {team.fullName}
              <span>{team.position}</span>
            </h3>
            <div className={s.icons}>
              <a href={team.gitHub} target="blank" rel="noreferrer noopener">
                <i className="ion-social-github-outline"></i>
              </a>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
