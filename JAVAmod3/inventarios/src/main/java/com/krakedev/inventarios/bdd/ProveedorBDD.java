package com.krakedev.inventarios.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.inventarios.excepciones.KrakedevException;
import com.krakedev.inventarios.utils.ConexionBDD;
import com.krakedev.inventarios.entidades.Proveedor;

public class ProveedorBDD {

	public ArrayList<Proveedor> buscar(String subcadena) throws KrakedevException {
		ArrayList<Proveedor> proveedores = new ArrayList<Proveedor>();
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		Proveedor prov = null;
		try {
			con = ConexionBDD.obtenerCone();
			ps = con.prepareStatement(
					"select * from proveedores where upper(nombre) like ?");
			ps.setString(1, "%" + subcadena.toUpperCase() + "%");
			System.out.println(">>>>>>>>>>>>>>>>>"+ps);
			rs = ps.executeQuery();
			while (rs.next()) {
				String ctd = rs.getString("tipo_doc");
				String nm = rs.getString("nombre");
				String cr = rs.getString("correo");
				String dr = rs.getString("direccion");
				String id = rs.getString("identificador");
				String tl = rs.getString("telefono");

				prov = new Proveedor(id, ctd, nm, tl, cr, dr);
				proveedores.add(prov);
				System.out.println(prov.toString());
			}
		} catch (KrakedevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakedevException("Error al consultar");
		}
		return proveedores;
	}
}