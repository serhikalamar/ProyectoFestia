import React, { useState, useEffect } from 'react';


// Se define una interfaz Evento para tipar los eventos.
interface Evento {
    id: number;
    nombre: string;
    fecha: string;
}

function Eventos() {
    const [eventos, setEventos] = useState<Evento[]>([]);
    //useEffect se usa para cargar los eventos cuando el componente se monta.
    useEffect(() => {
        // Eventos de ejemplo, hay que pillarlos de API

        const obtenerEventos = () => {
            const eventosEjemplo: Evento[] = [
                { id: 1, nombre: 'Gremi BioSexo', fecha: '2025-02-17' },
                { id: 2, nombre: 'Fiesta Kalamar', fecha: '2025-02-18' },
                { id: 3, nombre: 'Cocina con Sergio', fecha: '2025-02-19' },
            ];
            setEventos(eventosEjemplo);
        };

        obtenerEventos();
    }, []);

    return (
        <div className="containerEvent">
            {eventos.map(evento => (
                <div key={evento.id} className="evento">
                    <h2>{evento.nombre}</h2>
                    <p>{evento.fecha}</p>
                </div>
            ))}
        </div>
    );
}

export default Eventos;