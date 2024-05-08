package com.krakedev.inventarios.servicios;

import java.util.ArrayList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import com.krakedev.inventarios.bdd.ProveedorBDD;
import com.krakedev.inventarios.entidades.Proveedor;
import com.krakedev.inventarios.excepciones.KrakedevException;


@Path("proveedores")
public class ServiciosProveedores {

	@Path("buscar/{subc}")
	@GET
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public Response buscar(@PathParam("subc")String subCadena){
		ProveedorBDD prov = new ProveedorBDD();
		ArrayList<Proveedor> proveedor = null;
		try {
			proveedor = prov.buscar(subCadena);
			return Response.ok(proveedor).build();
		} catch (KrakedevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
}
