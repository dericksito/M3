
/*INSERTS*/

INSERT INTO equipos_participantes (nombre, codigo_internacional) VALUES 
    ('Argentina',032),
    ('Peru', 604),
    ('Chile', 152),
    ('Canada', 124),
    ('Mexico', 484),
    ('Ecuador', 218),
    ('Venezuela', 862),
	('Jamaica',388 ),
	('USA',840 ),
	('Uruguay',858 ),
	('Panama',591 ),
	('Bolivia',068 ),
	('Brazil',076 ),
	('Colombia',170 ),
	('Paraguay',600 );


INSERT INTO partidos (codigo_partido, equipo_local, equipo_visitante,fecha) VALUES 
    (101, 'Argentina','Canada','2024-06-21 7:00:00'),
    (102, 'Peru','Chile','2024-06-21 7:00:00'),
    (103, 'Mexico','Jamaica','2024-06-21 7:00:00'),
    (104, 'USA','Bolivia','2024-06-21 7:00:00'),

INSERT INTO usuarios (cedula, nombre, apellido) VALUES 
    ('0804514875', 'Jose','Valencia'),
    ('0850983420', 'Derick','Cedeno'),
    ('0123654789', 'Wilson','Bermeo'),
    ('0845174535', 'Carlos','Nazareno')
    
INSERT INTO unidades_medida (nombre, descripcion, categoria_udm) VALUES 
    ('kg', 'Kilogramo', 'P'),
    ('l', 'Litro', 'V'),
    ('u', 'Unidad', 'U');



