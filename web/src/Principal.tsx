import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUtensils, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import pizzaLogo from './assets/pizza2.jpg'; // Ajuste o caminho se necessário

export default function Principal() {
  // Esquema de cores exato baseado na sua imagem
  const colors = {
    bgDark: '#2e0441', // Fundo principal da página
    bgHeader: '#4a154b', // Fundo do cabeçalho
    text: '#ffffff', // Texto e ícones brancos
    accent: '#ffcc00', // Amarelo do botão e ícone de endereço
    textOnAccent: '#333333' // Cor escura do texto no botão amarelo
  };

  return (
    <div style={{ backgroundColor: colors.bgDark, minHeight: '100vh', color: colors.text, fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: colors.bgHeader, borderBottom: '1px solid #666' }}>
        {/* Logo e Título */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src={pizzaLogo} alt="Pizza Logo" style={{ width: '50px', height: '50px' }} />
          <h1 style={{ fontStyle: 'italic', fontSize: '1.8rem', margin: 0 }}>Pizzaria-UX</h1>
        </div>
        
        {/* Navegação */}
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {/* Link Home (Ativo) */}
          <Link to="/" style={{ color: colors.text, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '1.1rem', fontWeight: 'bold' }}>
            <FaHome /> Home
          </Link>
          
          {/* Link Sobre */}
          <Link to="/produtos" style={{ color: colors.text, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '1.1rem' }}>
            <FaUtensils /> Produtos
          </Link>

          {/* Botão "Peça já!" */}
          <button style={{ backgroundColor: colors.accent, color: colors.textOnAccent, border: 'none', padding: '8px 20px', borderRadius: '20px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '1rem' }}>
            Peça já! <FaWhatsapp style={{ fontSize: '1.2rem' }} />
          </button>
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <main style={{ flex: 1, textAlign: 'center', padding: '4rem 1rem' }}>
        <h2 style={{ fontSize: '3rem', margin: 0, letterSpacing: '1px' }}>
          Sabores de Pizzas
        </h2>
        {/* Aqui você pode adicionar os cards de pizza, seguindo o estilo da imagem de exemplo se desejar */}
      </main>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '1rem 0', backgroundColor: colors.bgHeader, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', borderTop: '1px solid #666' }}>
        <FaMapMarkerAlt style={{ color: colors.accent, fontSize: '1.1rem' }} />
        <span style={{ fontSize: '0.95rem' }}>Avenida Antônia Rosa Fioravanti, 804, Mauá, São Paulo, 09390-120</span>
      </footer>
    </div>
  );
}