
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {

    const user = useLoaderData();
    const navigate =useNavigate();

     const {name}= user;


     const handleGoBack= ()=>{


        navigate(-1);
     }

    return (
        <div>
        <h2>{name}</h2>
              <button onClick={handleGoBack}>Go Back</button>
            
        </div>
    );
};

export default UserDetails;