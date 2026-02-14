import React from 'react';
import type { User } from './types';

type Props = {
    user: User;
    children?: React.ReactNode;
};

const UserCard: React.FC<Props> = ({ user, children }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '0.5rem', borderRadius: 4, marginBottom: '0.5rem' }}>
            <h3>{user.name} ({user.age})</h3>
            <p>{user.email}</p>
            {children}
        </div>
    );
};

export default UserCard;