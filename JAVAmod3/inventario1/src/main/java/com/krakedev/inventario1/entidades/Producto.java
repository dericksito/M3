package com.krakedev.inventario1.entidades;

import java.math.BigDecimal;

public class Producto {
	private String nombre;
	private UnidadDeMedida udm;
	private BigDecimal precioVenta,coste;
	private boolean tieneIva;
	private Categoria categoria;
	private int stock,codigo;
	public Producto() {
		super();
	}
	public Producto(String nombre, UnidadDeMedida udm, BigDecimal precioVenta, BigDecimal coste, boolean tieneIva,
			Categoria categoria, int stock, int codigo) {
		super();
		this.nombre = nombre;
		this.udm = udm;
		this.precioVenta = precioVenta;
		this.coste = coste;
		this.tieneIva = tieneIva;
		this.categoria = categoria;
		this.stock = stock;
		this.codigo = codigo;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public UnidadDeMedida getUdm() {
		return udm;
	}
	public void setUdm(UnidadDeMedida udm) {
		this.udm = udm;
	}
	public BigDecimal getPrecioVenta() {
		return precioVenta;
	}
	public void setPrecioVenta(BigDecimal precioVenta) {
		this.precioVenta = precioVenta;
	}
	public BigDecimal getCoste() {
		return coste;
	}
	public void setCoste(BigDecimal coste) {
		this.coste = coste;
	}
	public boolean isTieneIva() {
		return tieneIva;
	}
	public void setTieneIva(boolean tieneIva) {
		this.tieneIva = tieneIva;
	}
	public Categoria getCategoria() {
		return categoria;
	}
	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}
	public int getStock() {
		return stock;
	}
	public void setStock(int stock) {
		this.stock = stock;
	}
	public int getCodigo() {
		return codigo;
	}
	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}
	@Override
	public String toString() {
		return "Producto [nombre=" + nombre + ", udm=" + udm + ", precioVenta=" + precioVenta + ", coste=" + coste
				+ ", tieneIva=" + tieneIva + ", categoria=" + categoria + ", stock=" + stock + ", codigo=" + codigo
				+ "]";
	}
	
	
}
