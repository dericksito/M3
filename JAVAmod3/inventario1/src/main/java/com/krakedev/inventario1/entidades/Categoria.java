package com.krakedev.inventario1.entidades;

public class Categoria {
	private String nombre;
	private int codigo;
	private Categoria categoriaPadre;
	public Categoria() {
		super();
	}
	public Categoria(String nombre, int codigo, Categoria categoriaPadre) {
		super();
		this.nombre = nombre;
		this.codigo = codigo;
		this.categoriaPadre = categoriaPadre;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public int getCodigo() {
		return codigo;
	}
	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}
	public Categoria getCategoriaPadre() {
		return categoriaPadre;
	}
	public void setCategoriaPadre(Categoria categoriaPadre) {
		this.categoriaPadre = categoriaPadre;
	}
	@Override
	public String toString() {
		return "Categoria [nombre=" + nombre + ", codigo=" + codigo + ", categoriaPadre=" + categoriaPadre + "]";
	}
	
	
}
