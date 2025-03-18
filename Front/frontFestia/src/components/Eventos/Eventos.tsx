import React, { useState, useEffect } from 'react';
import datosFake from "./datosFake.json";
import { useNavigate } from "react-router-dom";

// Se define una interfaz Evento para tipar los eventos.
interface Evento {
    id: number;
    nombre: string;
    fecha: string;
}

function Eventos() {
    const [eventos, setEventos] = useState<Evento[]>([]);
    const [busqueda, setBusqueda] = useState<string>(""); // Filtro por nombre
    const [fechaSeleccionada, setFechaSeleccionada] = useState<string>(""); // Filtro por fecha
    const navigate = useNavigate();

     // Cargar eventos cuando el componente se monta
    useEffect(() => {
        setEventos(datosFake.eventos);
    }, []);

    const eventosFiltrados = eventos.filter(evento => {
        // Filtrar por nombre
        const coincideNombre = evento.nombre.toLowerCase().includes(busqueda.toLowerCase());

          // Filtrar por fecha seleccionada (si está seleccionada)
          const fechaEvento = new Date(evento.fecha).toLocaleDateString();
          const fechaValida = fechaSeleccionada ? fechaEvento === new Date(fechaSeleccionada).toLocaleDateString() : true;
  
          return coincideNombre && fechaValida;
    });
    


    return (
        <div className="max-w-4xl mx-auto p-4">
        {/* Input de búsqueda por nombre */}
        <input
            type="text"
            placeholder="Buscar evento..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        />

        {/* Filtro por fecha */}
        <div className="mb-4">
            <input
                type="date"
                value={fechaSeleccionada}
                onChange={(e) => setFechaSeleccionada(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg w-full"
            />
        </div>

        {/* Mostrar eventos filtrados */}
        {eventosFiltrados.length > 0 ? (
            eventosFiltrados.map(evento => (
                <div
                    key={evento.id}
                    className="bg-white shadow-md rounded-2xl p-6 mb-4 border border-gray-200 hover:shadow-lg transition cursor-pointer"
                    onClick={() => navigate(`/evento/${evento.id}`)}
                >
                    <h2 className="text-xl font-semibold text-gray-800">{evento.nombre}</h2>
                    <p className="text-gray-600">{evento.fecha}</p>
                </div>
            ))
        ) : (
            <p className="text-center text-gray-500">No se encontraron eventos.</p>
        )}
    </div>

    );
}

export default Eventos;