package com.krakedev.inventario1.bdd;


import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;

import com.krakedev.inventario1.entidades.DetallePedidos;
import com.krakedev.inventario1.entidades.Pedidos;
import com.krakedev.inventario1.excepciones.KrakedevException;
import com.krakedev.inventario1.utils.ConexionBDD;

public class PedidosBDD {
	public void insertar(Pedidos pedido) throws KrakedevException {
		Connection con=null;
		PreparedStatement ps=null,psDet;
		ResultSet rsClave=null;
		int codigoRS=0;
		try {
			con = ConexionBDD.obtenerCone();
			ps=con.prepareStatement("insert into cabecera_pedido (proveedor, fecha, estado) "
					+ "values ( ?, ?, ?);",java.sql.Statement.RETURN_GENERATED_KEYS);
			Date fechaActual = new Date();
			java.sql.Date fechaSQL = new java.sql.Date(fechaActual.getTime());
			ps.setInt(1, pedido.getProveedor().getIdentificador());
			ps.setDate(2, fechaSQL);
			ps.setString(3, "P");
			ps.executeUpdate();
			rsClave=ps.getGeneratedKeys();
			if(rsClave.next()) {
				codigoRS=rsClave.getInt(1);
			}

			System.out.println("codigo generado"+codigoRS);
			
			ArrayList<DetallePedidos> detallePedidos = pedido.getDetallesP();
			DetallePedidos det;
			for(int i =0 ;i<detallePedidos.size();i++) {
				det = detallePedidos.get(i);
				psDet=con.prepareStatement("INSERT INTO detalle_pedidos (cabecera_pd, producto, cantidad, subtotal, cantidad_recibida)"
						+ "values ( ?, ?, ?, ?, ?)");
				psDet.setInt(1, codigoRS);
				psDet.setInt(2, det.getProducto().getCodigo() );
				psDet.setInt(3, det.getCantidadSolicitada());
				
				BigDecimal pv=det.getProducto().getPrecioVenta();
				BigDecimal cs = new BigDecimal(det.getCantidadSolicitada());
				BigDecimal sb=pv.multiply(cs);
				psDet.setBigDecimal(4,sb );
				psDet.setInt(5, 0);
				
				System.out.println("ESTE ES EL SUBTOTAL>>>>"+sb);
				psDet.executeUpdate();
			}


		} catch (KrakedevException e) {
			e.printStackTrace();
			throw e;
		}catch (SQLException e) {
			e.printStackTrace();
			throw new KrakedevException("Error al insertar pedido");
		}
	}
	
	public void update(Pedidos pedido) throws KrakedevException {
	    Connection con = null;
	    PreparedStatement psDet = null,psCab = null,psHs=null;
	    
	    Date fechaActual = new Date();
	    Timestamp fechaHoraActual = new Timestamp(fechaActual.getTime());
	    try {
	        con = ConexionBDD.obtenerCone();
	        con.setAutoCommit(false);
	        // Actualizar los detalles de los pedidos
	        
	        for (DetallePedidos ped : pedido.getDetallesP()) {
	        	psDet = con.prepareStatement("update detalle_pedidos set subtotal=?, cantidad_recibida=? where codigo=?");
				
				
				BigDecimal pv=ped.getProducto().getPrecioVenta();
				BigDecimal cs = new BigDecimal(ped.getCatidadRecibida());
				BigDecimal sb=pv.multiply(cs);
				
				psDet.setBigDecimal(1, sb);
	            psDet.setInt(2, ped.getCatidadRecibida());
	           // BigDecimal subtotal= new BigDecimal(54.66);
	            
	            psDet.setInt(3, ped.getCodigo());
	            System.out.println(">>>>>>>>>>"+psDet);
	            psDet.executeUpdate();
	            
}

	        // Actualizar el estado del pedido
	        psCab = con.prepareStatement("UPDATE cabecera_pedido SET estado=? WHERE numero = ?");
	        psCab.setString(1, "E");
	        psCab.setInt(2, pedido.getNumero());
	        System.out.println(psCab);
	        psCab.executeUpdate();
	        
	        // Insert en historial stock
	        psHs = con.prepareStatement("INSERT INTO historial_stock (fecha, referencia, producto, cantidad)"
	        		+ "VALUES (?, ?, ?, ?)");
	        for(DetallePedidos ped : pedido.getDetallesP()) {
	            psHs.setTimestamp(1, fechaHoraActual);
	            psHs.setString(2, "Pedido "+pedido.getNumero());
	            psHs.setInt(3, ped.getProducto().getCodigo());
	            psHs.setInt(4, ped.getCantidadSolicitada());
	            psHs.executeUpdate();
	        }
	        con.commit();
	       
	        
	    }catch (KrakedevException e) {
			e.printStackTrace();
			throw e; 
		}catch (SQLException e) {
			e.printStackTrace();
			throw new KrakedevException("Error al actualizar el detalle del pedido");
		}
	}

}