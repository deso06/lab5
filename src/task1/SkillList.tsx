import type { Skill } from "./types";

interface SkillListProps {
    skills: Skill[];
}

const SkillList = ({ skills }: SkillListProps) => {

    const getBadgeColor = (level: string) => {
        switch (level) {
            case 'Expert':
                return 'bg-danger';
            case 'Intermediate':
                return 'bg-warning';
            case 'Beginner':
                return 'bg-success';
            default:
                return 'bg-secondary';
        }
    };

    return (
        <div>
            <h3>Skills</h3>
            <ul className="list-group">
                {skills.map(skill => (
                    <li key={skill.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {skill.name}
                        <span className={`badge ${getBadgeColor(skill.level)} badge-pill`}>
                            {skill.level}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillList;