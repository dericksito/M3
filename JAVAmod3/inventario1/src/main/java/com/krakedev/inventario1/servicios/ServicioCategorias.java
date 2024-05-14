package com.krakedev.inventario1.servicios;

import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import com.krakedev.inventario1.bdd.CategoriaBDD;
import com.krakedev.inventario1.entidades.Categoria;
import com.krakedev.inventario1.excepciones.KrakedevException;

@Path("categoria")
public class ServicioCategorias {
	@Path("crear")
	@POST
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public Response crearProd(Categoria categoria) {
		CategoriaBDD cat = new CategoriaBDD();
		try {
			cat.crearCat(categoria);
			return Response.ok().build();
		}  catch (KrakedevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}

	@Path("actualizar")
	@PUT
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public Response actualizarProd(Categoria categoria) {
		CategoriaBDD cat = new CategoriaBDD();
		try {
			cat.actualizarCat(categoria);
			return Response.ok().build();
		}  catch (KrakedevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}

	@Path("recuperar")
	@GET
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public Response recuperarProd() {
		CategoriaBDD cat = new CategoriaBDD();
		ArrayList<Categoria> categorias = null;
		try {
			categorias = cat.recuperarCat();
			return Response.ok(categorias).build();
		}  catch (KrakedevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
}