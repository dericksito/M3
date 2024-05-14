package com.krakedev.inventario1.servicios;

import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.krakedev.inventario1.bdd.ProveedorBDD;
import com.krakedev.inventario1.entidades.Proveedor;
import com.krakedev.inventario1.excepciones.KrakedevException;


@Path("proveedores")
public class ServiciosProveedores {

	@Path("buscar/{subc}") 
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscar(@PathParam("subc")String subCadena){
		ProveedorBDD prov = new ProveedorBDD();
		ArrayList<Proveedor> lista = null;
		try {
			lista = prov.buscar(subCadena);
			return Response.ok(lista).build();
		} catch (KrakedevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
	
	@Path("crear")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response crearProv(Proveedor prove) {
		ProveedorBDD prov = new ProveedorBDD();
		try {
			prov.crearP(prove);
			return Response.ok().build();
		} catch (KrakedevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
	
	@Path("buscarProv/{iden}")
	@GET
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public Response buscar(@PathParam("iden")int identificador){
		ProveedorBDD prov = new ProveedorBDD();
		Proveedor proveedor = null;
		try {
			proveedor=prov.buscarProveedorPorId(identificador);
			return Response.ok(proveedor).build();
		} catch (KrakedevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
}
