export const ProvinciaCard = ({ provincia }: { provincia: any }) => {
  return (
    <div className="bg-stone-900 border border-stone-800 p-6 rounded-lg shadow-md hover:border-amber-700 transition">
      <h3 className="text-amber-500 text-xl font-serif uppercase tracking-wider mb-2">
        {provincia.nombre}
      </h3>
      <div className="text-stone-400 text-sm space-y-1">
        <p><span className="text-stone-600">Tipo:</span> {provincia.tipo}</p>
        <p>
          <span className="text-stone-600">Gobernador:</span>{' '}
          {provincia.gobernador?.nombre || 'Sin asignar'}
        </p>
      </div>
    </div>
  );
};