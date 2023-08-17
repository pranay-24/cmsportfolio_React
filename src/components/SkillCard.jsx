import React from 'react';
import './styles/SkillCard.css'; // Import your CSS file for styling

function SkillCard(props) {
  const { name, description } = props.skill;

  return (
    <div className="skill-card">
      <h3 className="skill-name">{name}</h3>
      <p className="skill-description">{description}</p>
    </div>
  );
}

export default SkillCard;
