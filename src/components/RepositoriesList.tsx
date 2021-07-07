import React, { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();
    const state = useTypedSelector(( state ) => state.repositories);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        searchRepositories(term);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={e => setTerm(e.target.value)} />
                <button>Search</button>
            </form>
            {state.error && <h3>{state.error}</h3>}
            {state.loading && <h3>Loading...</h3>}
            {!state.error && !state.loading && state.data.map((name) => <div key={name}>{name}</div>)}
        </div>
    );
};

export default RepositoriesList;