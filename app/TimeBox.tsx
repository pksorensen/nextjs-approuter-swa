"use client"
import { useEffect, useState } from 'react';

export const TimeBox = () => {
    const [time, setTime] = useState<Date | null>(null);
    useEffect(() => {
        fetch('/api/time')
            .then(res => res.json())
            .then(json => setTime(new Date(json.time)));
    }, []);

    return (
        <div>
            {time &&
                `The time is ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}
        </div>
    )

}