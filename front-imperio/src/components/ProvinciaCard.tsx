export const ProvinciaCard = ({ provincia }: { provincia: any }) => {
  return (
    <div className="bg-stone-900 border border-stone-800 p-6 rounded-lg shadow-md">
      <h3 className="text-amber-500 text-xl font-bold uppercase mb-4">
        {provincia.nombre}
      </h3>
      <div className="space-y-2 text-stone-300 text-sm">
        <p>Gobernador: <span className="text-stone-100">{provincia.gobernador?.nombre || 'Vacante'}</span></p>
        <p>Lealtad: <span className="text-stone-100">{provincia.lealtad}%</span></p>
        <p>Economía: <span className="text-stone-100">{provincia.prosperidadEconomica}</span></p>
        <p>Impuestos: <span className="text-stone-100">{provincia.impuestos}</span></p>
        <p>Conflictos: <span className="text-stone-100">{provincia.conflictosInternos}</span></p>
        <p>Riesgo Rebelión: <span className="text-stone-100">{provincia.riesgoRebelion ?? 'N/A'}</span></p>
      </div>
    </div>
  );
};