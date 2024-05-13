package com.krakedev.inventario1.entidades;

import java.util.Date;

public class HistorialStock {
	private int codigo,cantidad;
	private Producto producto;
	private String referencia;
	private Date fecha;
	public HistorialStock() {
		super();
	}
	public HistorialStock(int codigo, int cantidad, Producto producto, String referencia, Date fecha) {
		super();
		this.codigo = codigo;
		this.cantidad = cantidad;
		this.producto = producto;
		this.referencia = referencia;
		this.fecha = fecha;
	}
	public int getCodigo() {
		return codigo;
	}
	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}
	public int getCantidad() {
		return cantidad;
	}
	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}
	public Producto getProducto() {
		return producto;
	}
	public void setProducto(Producto producto) {
		this.producto = producto;
	}
	public String getReferencia() {
		return referencia;
	}
	public void setReferencia(String referencia) {
		this.referencia = referencia;
	}
	public Date getFecha() {
		return fecha;
	}
	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}
	@Override
	public String toString() {
		return "HistorialStock [codigo=" + codigo + ", cantidad=" + cantidad + ", producto=" + producto
				+ ", referencia=" + referencia + ", fecha=" + fecha + "]";
	}

}