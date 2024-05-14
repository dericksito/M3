package com.krakedev.inventario1.servicios;

import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.krakedev.inventario1.bdd.ProductosBDD;
import com.krakedev.inventario1.entidades.Producto;
import com.krakedev.inventario1.excepciones.KrakedevException;

@Path("productos")
public class ServiciosProductos {

	@Path("buscar/{subc}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscar(@PathParam("subc") String subCadena) {
		ProductosBDD prod = new ProductosBDD();
		ArrayList<Producto> productos = null;
		try {
			productos = prod.buscar(subCadena);
			return Response.ok(productos).build();
		} catch (KrakedevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
	
	
	@Path("crearP")
	@POST
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public Response crearP(Producto prod) {
		ProductosBDD producto = new ProductosBDD();
		try {
			producto.crearProd(prod);
			return Response.ok().build();
		} catch (KrakedevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
	
	@Path("actualizar")
	@PUT
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public Response actualizarP(Producto prod) {
		ProductosBDD producto = new ProductosBDD();
		try {
			producto.actualizarP(prod);
			return Response.ok().build();
		} catch (KrakedevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}

	@Path("buscarPorId/{idProducto}")
	@GET
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public Response buscarPorId(@PathParam("idProducto")int idProd) {
		ProductosBDD producto = new ProductosBDD();
		Producto prod = null;
		try {
			prod=producto.buscarProductoPorId(idProd);
			return Response.ok(prod).build();
		} catch (KrakedevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}

}