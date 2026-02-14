import React from 'react';
import type {User} from './types';

interface UserCardProps {
    user: User;
    isActive?: boolean;
    children: React.ReactNode;
}

const UserCard = ({user, isActive = true, children }: UserCardProps) => {
    return <div style={{
        border: '1px solid #ccc',
        padding: '1rem',
        borderRadius: '8px',
        opacity: isActive ? 1 : 0.5,
        marginBottom: '1rem'
    }}>
        <h2>{user.name}</h2>
        <p>{user.email} | Age: {user.age}</p>
        {children}
    </div>
}

export default UserCard;