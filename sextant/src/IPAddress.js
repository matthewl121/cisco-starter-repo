import React, {useState, useEffect} from 'react';

const IPAddress = ({url}) => {
    const [ipAddress, setIPAddress] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setIPAddress(data.ip))
            .catch((error) => {
                console.error('Error handling IP Address:', error);
                setIPAddress('Error handling IP');
            });
    }, [url]);

    return <span className="IPAddress">{ipAddress}</span>
};

export default IPAddress;