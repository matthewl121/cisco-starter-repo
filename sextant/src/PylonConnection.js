import React, { useState, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://localhost:55455');

function PylonConnection() {
    const [latency, setLatency] = useState(null);

    useEffect(() => {
        const handleReceiveMessage = (message) => {
            setLatency(new Date().getTime() - message.data);
        };

        client.onmessage = handleReceiveMessage;

        return () => {
            client.onmessage = null;
        };
    }, []);

    return (
        <span className="PylonConnection">{latency}</span>
    );
}

export default PylonConnection;