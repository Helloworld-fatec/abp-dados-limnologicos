import React from "react";

function BalcarInfo() {

  return (
    <div className="bg-[#f6fff8] min-h-screen font-sans">

      {/* Banner com verde clarinho */}
      <section className="bg-[#107B0B] text-white py-8 py-8 px-6">
        <h1 className="text-3xl font-semibold mt-1">Dados de Campanha</h1>
        <p className="text-lg mt-2">
          Projeto Balanço de Carbono nos Reservatórios de FURNAS Centrais Elétricas S.A.
        </p>
      </section>

      {/* Portal Box */}
      <div className="bg-white p-6 max-w-5xl mx-auto mt-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-3">Portal</h2>

        <p className="mb-4">
          Este portal constitui a interface de acesso aos dados do <strong>Projeto Balanço de Carbono</strong> nos{" "}
          <strong>Reservatórios de FURNAS Centrais Elétricas S.A.</strong> A base de dados é formada por coletas in situ...
        </p>

        <ul className="list-disc ml-6 space-y-2">
          <li>determinar as emissões de gases de efeito estufa;</li>
          <li>identificar os fatores do ciclo do carbono;</li>
          <li>avaliar influências morfológicas, morfométricas e bioquímicas;</li>
          <li>determinar o padrão de emissão existente;</li>
          <li>desenvolver modelo espacial e temporal;</li>
          <li>personalizar consultas e visualizar dados em mapas;</li>
        </ul>
      </div>

{/* 🔹 Menu de navegação estilo novo (hover verde) */}
<div className="max-w-5xl mx-auto mt-4 py-4 flex justify-center">
  <nav className="bg-white shadow-sm border border-gray-200 rounded-xl">
    <ul className="flex justify-start md:justify-center overflow-x-auto whitespace-nowrap text-sm font-medium px-6">
      <li className="px-4 py-3 cursor-pointer transition hover:bg-[#DFF9E8] hover:text-[#1B5E20]">
        Home
      </li>
      <li className="px-4 py-3 cursor-pointer transition hover:bg-[#DFF9E8] hover:text-[#1B5E20]">
        Descrição
      </li>
      <li className="px-4 py-3 cursor-pointer transition hover:bg-[#DFF9E8] hover:text-[#1B5E20]">
        Equipe
      </li>
      <li className="px-4 py-3 cursor-pointer transition hover:bg-[#DFF9E8] hover:text-[#1B5E20]">
        Publicações
      </li>
    </ul>
  </nav>
</div>


      {/* Two Columns */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-8">
        
        {/* Fomento */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-bold text-lg mb-2">Fomento</h3>
          <p>
            Os recursos utilizados para coleta de dados foram fornecidos por FURNAS Centrais Elétricas S.A...
          </p>
        </div>

        {/* Participantes */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-bold text-lg mb-2">Participantes</h3>
          <ul className="space-y-2">
            <li>FURNAS Centrais Elétricas S.A.</li>
            <li>IIE - Instituto Internacional de Ecologia</li>
            <li>INPE - Instituto Nacional de Pesquisas Espaciais</li>
            <li>UFJF - Universidade Federal de Juiz de Fora</li>
            <li>COPPE - Universidade Federal do Rio de Janeiro</li>
          </ul>
        </div>

      </div>

      {/* Dados Armazenados */}
      <div className="bg-blue-100 border-l-4 border-blue-500 p-6 max-w-5xl mx-auto mt-8 rounded">
        <h3 className="font-bold text-xl mb-2">Dados Armazenados</h3>

        <p className="mb-4">
          Os dados são formados por coletas realizadas em 79 campanhas com datas e localidades distintas...
        </p>

        <ul className="list-disc ml-6 space-y-2">
          <li>IIE: estimativas de fluxos de gases de efeito estufa e nutrientes;</li>
          <li>INPE: fluxos de metano (CH4) e CO2;</li>
          <li>UFJF: produção primária e metabolismo bacteriano;</li>
          <li>COPPE/UFRJ: fluxos de gases na interface água-atmosfera.</li>
        </ul>
      </div>

    </div>
  );
}

export default BalcarInfo;
