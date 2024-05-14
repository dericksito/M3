package com.krakedev.inventario1.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.inventario1.entidades.Proveedor;
import com.krakedev.inventario1.entidades.TipoDocumentos;
import com.krakedev.inventario1.excepciones.KrakedevException;
import com.krakedev.inventario1.utils.ConexionBDD;

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
					"select prov.identificador,prov.tipo_doc,td.descripcion,prov.nombre,prov.telefono,prov.correo,prov.direccion from proveedores prov,tipo_documento td"+
							" where prov.tipo_doc = td.codigo and upper(nombre) like ?");
			ps.setString(1, "%" + subcadena.toUpperCase() + "%");
			System.out.println(">>>>>>>>>>>>>>>>>"+ps);
			rs = ps.executeQuery();
			while (rs.next()) {
				String ctd = rs.getString("tipo_doc");
				String dtd= rs.getString("descripcion");
				String nm = rs.getString("nombre");
				String cr = rs.getString("correo");
				String dr = rs.getString("direccion");
				int id = rs.getInt("identificador");
				int tl = rs.getInt("telefono");
                TipoDocumentos td=new TipoDocumentos (ctd,dtd);
				prov = new Proveedor(id, nm, tl, cr, dr,td);
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
	
	
	public void crearP(Proveedor pv) throws KrakedevException {
		Connection con=null;
		PreparedStatement ps=null;

		try {
			con = ConexionBDD.obtenerCone();
			ps=con.prepareStatement("INSERT INTO proveedores (identificador, tipo_doc, nombre, telefono, correo, direccion) VALUES"
					+ "    (?, ?, ?, ?, ?, ?)");
			ps.setInt(1, pv.getIdentificador());
			ps.setString(2, pv.getTipoDocumento().getCodigo());
			ps.setString(3, pv.getNombre());
			ps.setInt(4, pv.getTelefono());
			ps.setString(5, pv.getCorreo());
			ps.setString(6, pv.getDireccion());
			ps.executeUpdate();
			
		}catch(KrakedevException e){
			e.printStackTrace();
			throw e;
		} 
		catch (SQLException e) {
			e.printStackTrace();
			throw new KrakedevException("Error al crear el proveedor");
		}

	}
	
	public ArrayList<Proveedor> buscarPP(String subcadena) throws KrakedevException{
		ArrayList<Proveedor> proveedor = new ArrayList<Proveedor>();
		Connection con=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		Proveedor prov=null;
		try {
			con = ConexionBDD.obtenerCone();
			ps=con.prepareStatement("select prov.identificador,prov.tipo_doc,td.descripcion,prov.nombre,prov.telefono,prov.correo,prov.direccion from proveedores prov,tipo_documento td"+
					" where prov.tipo_doc = td.codigo and upper(nombre) like ?");
			ps.setString(1, "%"+subcadena.toUpperCase()+"%");
			rs=ps.executeQuery();
			while(rs.next()) {
				String ctd = rs.getString("tipo_doc");
				String nm = rs.getString("nombre");
				String cr = rs.getString("correo");
				String dr = rs.getString("direccion");
				int id=rs.getInt("identificador");
				int tl=rs.getInt("telefono");
				String dc = rs.getString("descripcion");
				TipoDocumentos td = new TipoDocumentos(ctd,dc);
				prov=new Proveedor(id,nm,tl,cr,dr,td);
				proveedor.add(prov);
			}
		} catch (KrakedevException e) {
			e.printStackTrace();
			throw e;
		}catch (SQLException e) {
			e.printStackTrace();
			throw new KrakedevException("Error al consultar");
		}
		return proveedor;
	}

	public Proveedor buscarProveedorPorId(int inde) throws KrakedevException {
		Connection con=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		Proveedor proveedor=null;
		try {
			con = ConexionBDD.obtenerCone();
			ps = con.prepareStatement("select * from proveedores where identificador=?");
			ps.setInt(1, inde);
			rs=ps.executeQuery();
			if(rs.next()) {
				int id=rs.getInt("identificador"),telefono=rs.getInt("telefono");
				TipoDocumentos tp = new TipoDocumentos();
				tp.setCodigo(rs.getString("tipo_doc"));
				String nombre = rs.getString("nombre"),correo=rs.getString("correo"),direccion=rs.getString("direccion");
				proveedor = new Proveedor();
				proveedor.setCorreo(correo);
				proveedor.setDireccion(direccion);
				proveedor.setTipoDocumento(tp);
				proveedor.setNombre(nombre);
				proveedor.setTelefono(telefono);
				proveedor.setIdentificador(id);
			}
		} catch (KrakedevException e) {
			e.printStackTrace();
			throw e;
		}catch (SQLException e) {
			e.printStackTrace();
			throw new KrakedevException("Error al consultar");
		}
		return proveedor;
	}
}