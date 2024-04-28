"use client"
import { useEffect, useState } from 'react';

const FetchPro = (email) => {
    const [pro, setPro] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPro() {
            if (!email) return;

            try {
                const data = { email };
                const result = await fetch('/api/pro', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json' },
                });
                const res = await result.json();

                if (res.pro === true) {
                    setPro(true);
                } else {
                    setPro(false);
                }
            } catch (error) {
                console.error('Error fetching pro data:', error);
            }
        }

        fetchPro();

        setTimeout(() => {
            setLoading(false);
        }, 2500);
    }, [email]);

    return { pro, loading };
};

export default FetchPro;
