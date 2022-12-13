import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../component/Loading';
import OutlineButton from '../component/OutlineButton';
import auth from '../utils/firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);


    if (loading) { return <Loading /> }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }
    if (!user.emailVerified) {
        return (<div className='min-h-screen flex justify-center mt-14'>
            <div className='flex flex-col'>
                <h2 className='text-xl font-semibold text-green-800'>Email hasn't been verified!</h2>
                <p className='text-md font-normal'>Please verify before using airbnd.</p>
                <p className='text-md font-normal my-4'>Email address registered: <code>{user.email}</code> </p>

                {sending ? <Loading /> :
                    <OutlineButton><button onClick={async () => {
                        const success = await sendEmailVerification();
                        success && alert('Email has been sent. Check email inbox/spam.');
                    }}>Resend Verification Email</button></OutlineButton>}

            </div>
        </div>
        );
    }

    return children;
};

export default RequireAuth;