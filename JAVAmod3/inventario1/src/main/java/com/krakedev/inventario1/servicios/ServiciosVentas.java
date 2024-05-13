package com.krakedev.inventario1.servicios;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

import com.krakedev.inventario1.bdd.VentasBDD;
import com.krakedev.inventario1.excepciones.KrakedevException;
import com.krakedev.inventario1.entidades.Ventas;

@Path("ventas")
public class ServiciosVentas {
	@Path("guardar")
	@POST
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public Response insertarP(Ventas vt) {
		VentasBDD venta = new VentasBDD();
		try {
			venta.insertar(vt);
			return Response.ok().build();
		} catch (KrakedevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
}