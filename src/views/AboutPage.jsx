import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AboutPage() {
    const navigate = useNavigate();
    useEffect(() => {
        const reDirector = async () => {
            setTimeout(() => {
                navigate('/profile');
            }, 1000);
        }
        reDirector();
    
    },[])
  return <div>
    Welcome to About Page
  </div>;
}

export default AboutPage;
