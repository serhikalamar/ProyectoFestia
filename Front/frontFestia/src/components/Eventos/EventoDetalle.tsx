import { useParams, useNavigate } from "react-router-dom";

const EventoDetalle = ({ datos }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const evento = datos.eventos.find(e => e.id === parseInt(id));

    if (!evento) return <p className="text-center text-red-500">Evento no encontrado</p>;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-2xl border border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800">{evento.nombre}</h1>
            <p className="text-gray-600">{evento.fecha}</p>
            <p className="mt-4 text-gray-700">{evento.descripcion}</p>
             {/* Botón para regresar */}
             <button 
                onClick={() => navigate(-1)} 
                className="mt-6 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
            >
                ← Volver atrás
            </button>
        </div>
    );
};

export default EventoDetalle;