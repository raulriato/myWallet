import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function useLocal() {

  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("mywallet"));

  useEffect(() => {

    if (!token) {
      navigate('/login');
    }
  }, []);


  return { token };

}

export default useLocal;