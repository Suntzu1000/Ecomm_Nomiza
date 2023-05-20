import React from 'react';

const Navbar: React.FC = () => {
  return (
   <header>
     <nav className="bg-blue-custom shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-5 py-4">
        <div className="flex items-center">
          <span className="text-xl font-semibold text-slate-200 ">Nomiza</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="/cart" className="text-slate-200 hover:text-blue-600">Carrinho</a>
          <a href="/signin" className="text-slate-200 hover:text-blue-600">Entrar</a>
        </div>
      </div>
    </nav>
   </header>
  );
};

export default Navbar;
