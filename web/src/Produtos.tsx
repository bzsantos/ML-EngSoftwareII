import React from 'react';
import { FaHome, FaUtensils, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Produtos() {
  return (
    <div className="pizza-page">
      {/* Estilos CSS Embutidos para garantir fidelidade visual e funcionamento em arquivo único */}
      <style>{`
        .pizza-page {
          background-color: #3b1458;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #ffffff;
          overflow-x: hidden;
          margin: 0;
          box-sizing: border-box;
        }

        /* Header */
        .pizza-header {
          background-color: #6a1b9a;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 40px;
          border-bottom: 2px solid #521376;
        }

        .header-logo-area {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .logo-img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #ffcc00;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          border: 2px solid #ff9900;
        }

        .header-nav {
          display: flex;
          gap: 30px;
          align-items: center;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #f3e5f5;
          text-decoration: none;
          font-size: 1.1rem;
          font-style: italic;
          transition: color 0.3s;
        }

        .nav-link:hover {
          color: #ffeb3b;
        }

        .order-btn {
          background-color: #c084fc;
          color: #1f1f1f;
          border: none;
          padding: 10px 22px;
          border-radius: 25px;
          font-weight: bold;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0,0,0,0.2);
          transition: background 0.3s;
        }

        .order-btn:hover {
          background-color: #d8b4fe;
        }

        .whatsapp-icon {
          background-color: #ffeb3b;
          border-radius: 50%;
          padding: 4px;
          color: #333;
          font-size: 1.2rem;
        }

        /* Banner Principal / Titulo */
        .banner-section {
          background-color: #4a1575;
          padding: 30px 40px;
          border-top: 1px solid #7e22ce;
          border-bottom: 1px solid #7e22ce;
        }

        .page-title {
          font-family: 'Brush Script MT', cursive, sans-serif;
          font-size: 3.5rem;
          color: #fce7f3;
          margin: 0;
          font-weight: normal;
          letter-spacing: 2px;
        }

        /* Conteúdo Central com Efeito de Fumaça/Fogo */
        .main-content {
          position: relative;
          flex: 1;
          background: linear-gradient(135deg, rgba(74, 21, 117, 0.7), rgba(45, 10, 70, 0.9));
          padding: 40px;
          min-height: 350px;
          display: flex;
          align-items: center;
        }

        .content-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          background: url('https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000&auto=format&fit=crop') repeat-x bottom;
          opacity: 0.15;
          pointer-events: none;
        }

        /* Container de Cards */
        .products-container {
          display: flex;
          gap: 25px;
          flex-wrap: wrap;
          z-index: 2;
        }

        /* CARD DE PRODUTO SEPARADO (Reutilizável) */
        .pizza-card {
          background-color: #d1d5db;
          color: #111827;
          width: 210px;
          border-radius: 16px;
          padding: 20px 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
          text-align: center;
        }

        .pizza-card-img-container {
          width: 90px;
          height: 90px;
          background-color: #e5e7eb;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          border: 2px solid #9ca3af;
        }

        .pizza-card-img {
          width: 70px;
          height: 70px;
        }

        .pizza-card-title {
          font-size: 1.3rem;
          font-weight: bold;
          margin: 5px 0;
          color: #1f2937;
        }

        .pizza-card-desc {
          font-size: 0.75rem;
          color: #4b5563;
          margin-bottom: 15px;
          line-height: 1.2;
        }

        .pizza-card-btn {
          background-color: #6b7280;
          color: white;
          border: none;
          padding: 8px 24px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: background 0.2s;
        }

        .pizza-card-btn:hover {
          background-color: #4b5563;
        }

        /* Rodapé */
        .pizza-footer {
          background-color: #2e0d47;
          padding: 15px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 0.95krem;
          border-top: 1px solid #4a1575;
          color: #e9d5ff;
        }
      `}</style>

      {/* CABEÇALHO */}
      <header className="pizza-header">
        <div className="header-logo-area">
          <div className="logo-img">🍕</div>
        </div>
              <nav className="header-nav">
                  <Link to="/" className="nav-link">
                      <FaHome /> Home
                  </Link>

                  <Link to="/produtos" className="nav-link">
                      <FaUtensils /> Produtos
                  </Link>
              </nav>
        <button className="order-btn">
          Peça já! <FaWhatsapp className="whatsapp-icon" />
        </button>
      </header>

      {/* BANNER / TÍTULO */}
      <section className="banner-section">
        <h1 className="page-title">Sabores de Pizzas</h1>
      </section>

      {/* CONTEÚDO COM OS CARDS */}
      <main className="main-content">
        <div className="content-overlay"></div>
        
        <div className="products-container">
          {/* CARD DE PRODUTO 1 (Você pode duplicar este bloco quantas vezes quiser) */}
          <div className="pizza-card">
            <div className="pizza-card-img-container">
              <span className="pizza-card-img" style={{ fontSize: '45px' }}>🍕</span>
            </div>
            <h3 className="pizza-card-title">Calabresa</h3>
            <p className="pizza-card-desc">Calabresa fatiada, cebola, azeitonas</p>
            <button className="pizza-card-btn">Adicionar</button>
          </div>

          {/* Exemplo de duplicação futura do Card */}
          {/* <div className="pizza-card">
            <div className="pizza-card-img-container">
              <span className="pizza-card-img" style={{ fontSize: '45px' }}>🧀</span>
            </div>
            <h3 className="pizza-card-title">Mussarela</h3>
            <p className="pizza-card-desc">Queijo mussarela, tomate, orégano</p>
            <button className="pizza-card-btn">Adicionar</button>
          </div> 
          */}
        </div>
      </main>

      {/* RODAPÉ */}
      <footer className="pizza-footer">
        <FaMapMarkerAlt style={{ color: '#f43f5e' }} />
        <span>Avenida Antônia Rosa Fioravanti, 804, Mauá, São Paulo, 0390-120</span>
      </footer>
    </div>
  );
}