package com.krakedev.inventario1.bdd;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.inventario1.excepciones.KrakedevException;
import com.krakedev.inventario1.utils.ConexionBDD;
import com.krakedev.inventario1.entidades.Producto;
import com.krakedev.inventario1.entidades.UnidadDeMedida;
import com.krakedev.inventario1.entidades.Categoria;

public class ProductosBDD {
	public ArrayList<Producto> buscar(String subcadena) throws KrakedevException {
		ArrayList<Producto> productos = new ArrayList<Producto>();
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		Producto prod = null;
		try {
			con = ConexionBDD.obtenerCone();
			ps = con.prepareStatement(
					"select prod.codigo, prod.nombre as nombre_producto,udm.nombre as nombre_udm, udm.descripcion as descripcion_udm,"
							+ " cast(prod.precio as decimal(6,2)),prod.tiene_iva," + " cast(prod.coste as decimal(5,2)),"
							+ " prod.codigo_cat, cat.nombre as nombre_categoria, stock"
							+ " from productos prod, unidades_medida udm, categorias cat"
							+ " where prod.codigo_udm = udm.nombre " + "and prod.codigo_cat = cat.codigo"
							+ " and upper(prod.nombre) like ?");

			ps.setString(1, "%" + subcadena.toUpperCase() + "%");
			rs = ps.executeQuery();
			while (rs.next()) {
				int codigoProducto = rs.getInt("codigo");
				String nombreProducto = rs.getString("nombre_producto");
				String nombreUnidadMedida = rs.getString("nombre_udm");
				String descripcionUnidadMedida = rs.getString("descripcion_udm");
				String nombreCategoria = rs.getString("nombre_categoria");
				BigDecimal costeProducto = rs.getBigDecimal("coste");
				BigDecimal precioProducto = rs.getBigDecimal("precio");

				boolean tieneIva = rs.getBoolean("tiene_iva");
				int codigoCategoria = rs.getInt("codigo_cat");
				int stock = rs.getInt("stock");

				UnidadDeMedida udm = new UnidadDeMedida();
				udm.setNombre(nombreUnidadMedida);
				udm.setDescripcion(descripcionUnidadMedida);

				Categoria cat = new Categoria();
				cat.setCodigo(codigoCategoria);
				cat.setNombre(nombreCategoria);

				prod = new Producto();
				prod.setNombre(nombreProducto);
				prod.setCodigo(codigoProducto);
				prod.setUdm(udm);
				prod.setPrecioVenta(precioProducto);
				prod.setTieneIva(tieneIva);
				prod.setCoste(costeProducto);
				prod.setCategoria(cat);
				prod.setStock(stock);

				productos.add(prod);
			}
		} catch (KrakedevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakedevException("Error al consultar productos");
		}
		return productos;
	}
	
	
	public void crearProd(Producto pr) throws KrakedevException {
		Connection con=null;
		PreparedStatement ps=null;
		try {
			con = ConexionBDD.obtenerCone();
			ps=con.prepareStatement("INSERT INTO productos (codigo, nombre, codigo_udm, precio, tiene_iva, coste, codigo_cat, stock) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?)");
			ps.setInt(1, pr.getCodigo());
			ps.setString(2, pr.getNombre());
			ps.setString(3, pr.getUdm().getNombre());
			ps.setBigDecimal(4, pr.getPrecioVenta());
			ps.setBoolean(5, pr.getTieneIva());
			ps.setBigDecimal(6, pr.getCoste());
			ps.setInt(7, pr.getCategoria().getCodigo());
			ps.setInt(8, pr.getStock());
			ps.executeUpdate();

		}catch(KrakedevException e){
			e.printStackTrace();
			throw e;
		} 
		catch (SQLException e) {
			e.printStackTrace();
			throw new KrakedevException("Error al crear el producto");
		}
	}
}