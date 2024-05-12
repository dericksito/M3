package com.krakedev.inventario1.servicios;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

import com.krakedev.inventario1.bdd.PedidosBDD;
import com.krakedev.inventario1.entidades.Pedidos;
import com.krakedev.inventario1.excepciones.KrakedevException;

@Path("pedidos")
public class ServiciosPedidos {
	@Path("registrar")
	@POST
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public Response insertarP(Pedidos pd) {
		PedidosBDD pedido = new PedidosBDD();
		try {
			pedido.insertar(pd);
			return Response.ok().build();
		} catch (KrakedevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
	
	@Path("recibir")
	@PUT
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public Response recibirP(Pedidos pdR) {
		PedidosBDD pedido = new PedidosBDD();
		try {	
			pedido.update(pdR);
			return Response.ok().build();
		} catch (KrakedevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
}