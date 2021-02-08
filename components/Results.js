import React, {useEffect, useState} from 'react';

export default function Results(props) {
    return (
        <div className="alert alert-primary">
            <p>Total number of lines: {props.data.total_lines}</p>
            <p>Number of blank lines: {props.data.blank_lines_count}</p>
            <p>Number of lines with comments: {props.data.comment_lines_count}</p>
            <p>Number of lines with code: {props.data.code_lines_count}</p>
        </div>
    )
}