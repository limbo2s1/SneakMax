import { useSelector } from "react-redux";
import { useEffect } from "react";
import { teamSelector } from "../../redux/slices/team/teamSelector";
import { fetchTeam, TeamMember } from "../../redux/slices/team/teamSlice";
import { useAppDispatch, RootState } from "../../redux/Store";
import figure2 from "../../icons/figure2.svg";
import "../Team/Team.scss";

export default function Team() {
  const dispatch = useAppDispatch();
  const team = useSelector((state: RootState) => teamSelector(state));

  useEffect(() => {
    dispatch(fetchTeam());
  }, [dispatch]);

  console.log(team);

  return (
    <div className="background-theme" id="team">
      <div className="container container-team">
        <h4 className="team-heading">Наша команда</h4>
        {team.isLoading && team.data.length === 0 ? (
          <p>...loading</p>
        ) : (
          <ul className="list-team-container">
            {team.data.map((item: TeamMember) => (
              <li key={item.id} className="list-team">
                <img src={item.imgUrl} className="team-image" alt={item.name} />
                <p className="team-name">{item.name}</p>
                <p className="team-role">{item.role}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <img className="team-figure" src={figure2} alt="Figure" />
    </div>
  );
}
