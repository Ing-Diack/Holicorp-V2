import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Alert, CircularProgress } from '@mui/material';
import { AuthContext } from '../../utils/Context/AuthContext';
import { PostRequest, hostUrl } from '../../utils/Request_Http/Resquest';


function VerifyMail() {
    const { user, updateUser } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const emailToken = searchParams.get("emailToken");
    console.log(user);
    useEffect(() => {
        (async () => {
            if (user?.isVerified) {
                setTimeout(() => {
                    return navigate(`/candidature/password/${user.status}`);
                }, 2000)
            } else {
                if (emailToken) {
                    setIsLoading(true);
                    const response = await PostRequest(
                        `${hostUrl}/utilisateur/verifyMail`,
                        JSON.stringify({ emailToken })
                    );
                    setIsLoading(false);
                    console.log("res", response);
                    if (response.error) {
                        return setError(response);
                    }
                    updateUser(response)

                }
            }
        })()
    }, [emailToken, user])
    return (
        <div>
            {isLoading ? (
                <div>
                    <CircularProgress />
                </div>
            ) : (
                <div>
                    {user?.isVerified ? (
                        <div>
                            <Alert severity='success'>
                                Email successfuly verified, redirecting...
                            </Alert>
                        </div>
                    ) : (
                        <div>
                            {error.error ? (
                                <Alert severity='error'> {error.message} </Alert>
                            ) : null}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default VerifyMail
