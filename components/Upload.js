import React, {useEffect, useState} from 'react';

export default function Upload(props) {

    const [fileName, setFileName] = useState("");

    const handleChange = async(e) => {
        let inputElement = document.getElementById('inputGroupFile'); 
        let name = inputElement.files.item(0).name;
        setFileName(name);
        $('.custom-file-label').html(name);
        const data = new FormData();
        data.append('file', inputElement.files.item(0));
        data.append('type', name.substring(name.lastIndexOf(".") + 1));
        let endpoint = process.env.base_url+ 'api/counter';
        const response = await fetch(endpoint, {
            method: 'POST',
            body: data
          });
        const res = await response.json()
        props.change(res);
    }

    return (
        <div className="input-group mb-3 mt-4">
            <div className="custom-file">
                <input type="file" className="custom-file-input" id="inputGroupFile" onChange={(e) => {handleChange(e)}} accept=".js,.py,.java" />
                <label className="custom-file-label" htmlFor="inputGroupFile" aria-describedby="inputGroupFileAddon">Choose file</label>
            </div>
        </div>
    )
}