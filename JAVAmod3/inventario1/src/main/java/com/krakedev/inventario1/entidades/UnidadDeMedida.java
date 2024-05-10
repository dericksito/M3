package com.krakedev.inventario1.entidades;

public class UnidadDeMedida {
	private String nombre,descripcion;
	private CategoriaUDM catUM;
	public UnidadDeMedida() {
		super();
	}
	public UnidadDeMedida(String nombre, String descripcion, CategoriaUDM catUM) {
		super();
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.catUM = catUM;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public CategoriaUDM getCatUM() {
		return catUM;
	}
	public void setCatUM(CategoriaUDM catUM) {
		this.catUM = catUM;
	}
	@Override
	public String toString() {
		return "UnidadDeMedida [nombre=" + nombre + ", descripcion=" + descripcion + ", catUM=" + catUM + "]";
	}
	
	
}
