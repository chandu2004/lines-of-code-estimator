import React, {useEffect, useState} from 'react';
import Results from './Results';
import Upload from './Upload';

export default function Main() {
    let response = {
        total_lines: 0, 
        blank_lines_count: 0, 
        code_lines_count: 0, 
        comment_lines_count: 0
    }
    const [res, setRes] = useState(response);

    const [showResults, setShowResults] = React.useState(false)

    const handleChange = (res) => {
        setRes(res);
        setShowResults(true);
    }
    return (
        <div>
            <h3>Lines of Code Estimator</h3>
            <Upload change={handleChange} />
            {showResults ? <Results data={res} /> : null}
        </div>
    )
}