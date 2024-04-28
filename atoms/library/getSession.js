import { useEffect, useState }  from 'react';
import { useSession } from 'next-auth/react';

const GetSession = () => {

    const { status, data: session } = useSession();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (session !== undefined) {
            setLoading(false);
        }
    }, [session]);

    return { status, session, loading };

}

export default GetSession