package com.krakedev.inventario1.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.inventario1.excepciones.KrakedevException;
import com.krakedev.inventario1.utils.ConexionBDD;
import com.krakedev.inventario1.entidades.TipoDocumentos;

public class TipoDocumentosBDD {
	public ArrayList<TipoDocumentos> recuperar() throws KrakedevException{
		ArrayList<TipoDocumentos> tipoD = new ArrayList<TipoDocumentos>();
		Connection con=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		TipoDocumentos td=null;
		try {
			con = ConexionBDD.obtenerCone();
			ps=con.prepareStatement("select * from tipo_documento");
			rs=ps.executeQuery();
			while(rs.next()) {
				String cd = rs.getString("codigo");
				String ds = rs.getString("descripcion");
				td=new TipoDocumentos(cd,ds);
				tipoD.add(td);
			}
		} catch (KrakedevException e) {
			e.printStackTrace();
			throw e;
		}catch (SQLException e) {
			e.printStackTrace();
			throw new KrakedevException("Error al consultar tipo de documentos");
	}
	return tipoD;
	}
}