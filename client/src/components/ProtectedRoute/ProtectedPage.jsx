import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuthenticated } from '../../redux/authSlice';

function ProtectedPage({ children }) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const currentUser = useSelector(state => state.auth.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/');
      localStorage.removeItem('token'); // Remover o token salvo
      dispatch(setAuthenticated(false)); // Definir autenticação como false no estado do Redux
    } else {
      dispatch(setAuthenticated(true));
    }
  }, [navigate, dispatch]);

  if (!isAuthenticated) {
    return <div>Do not have access to this content</div>; // Renderizar um componente de carregamento ou mensagem de erro, se necessário
  }

  return (
    <div>
      {/* Renderizar conteúdo protegido */}
      {children}
    </div>
  );
}

export default ProtectedPage;
