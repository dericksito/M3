package com.krakedev.inventario1.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.inventario1.excepciones.KrakedevException;
import com.krakedev.inventario1.utils.ConexionBDD;
import com.krakedev.inventario1.entidades.Categoria;

public class CategoriaBDD {

	/*CREAR CATEGORIA*/
	public void crearCat(Categoria ct) throws KrakedevException {
		Connection con=null;
		PreparedStatement ps=null;
		try {
			con = ConexionBDD.obtenerCone();
			ps=con.prepareStatement("INSERT INTO categorias (codigo, nombre, categoria_padre) VALUES"
					+ "(?, ?, ?)");
			ps.setInt(1, ct.getCodigo());
			ps.setString(2, ct.getNombre());
			ps.setInt(3, 0);
			ps.executeUpdate();

		}catch(KrakedevException e){
			e.printStackTrace();
			throw e;
		} 
		catch (SQLException e) {
			e.printStackTrace();
			throw new KrakedevException("Error al crear la categoria");
		}
	}


	/*ACTUALIZAR CATEGORIA*/
	public void actualizarCat(Categoria ct) throws KrakedevException {
		Connection con=null;
		PreparedStatement ps=null;
		try {
			con = ConexionBDD.obtenerCone();
			ps=con.prepareStatement("UPDATE categorias set nombre=?, categoria_padre=? where codigo=? ");
			ps.setString(1, ct.getNombre());
			ps.setInt(2, ct.getCategoriaPadre());
			ps.setInt(3, ct.getCodigo());
			ps.executeUpdate();

		}catch(KrakedevException e){
			e.printStackTrace();
			throw e;
		} 
		catch (SQLException e) {
			e.printStackTrace();
			throw new KrakedevException("Error al actualizar la categoria");
		}
	}

	/*RECUPERAR TODO*/

	public ArrayList<Categoria> recuperarCat() throws KrakedevException {
		Connection con=null;
		PreparedStatement ps=null;
		ArrayList<Categoria> categorias = new ArrayList<Categoria>();
		Categoria cat = null;
		ResultSet rs = null;
		try {
			con = ConexionBDD.obtenerCone();
			ps=con.prepareStatement("select * from categorias");
			rs=ps.executeQuery();
			while(rs.next()) {
				int cod = rs.getInt("codigo");
				String nm = rs.getString("nombre");
				int cp = rs.getInt("categoria_padre");
				cat = new Categoria(nm,cod,cp);
				categorias.add(cat);
			}

		}catch(KrakedevException e){
			e.printStackTrace();
			throw e;
		} 
		catch (SQLException e) {
			e.printStackTrace();
			throw new KrakedevException("Error al recuperar las categorias");
		}
		return categorias;
	}





}