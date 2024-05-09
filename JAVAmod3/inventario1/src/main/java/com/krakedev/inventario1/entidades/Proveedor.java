package com.krakedev.inventario1.entidades;

public class Proveedor {
private String  nombre,correo,direccion;
private TipoDocumentos tipoDocumento;
private int identificador,telefono;




public Proveedor() {
	
}




public Proveedor(int identificador,String nombre,int telefono, String correo, String direccion, TipoDocumentos tipoDocumento) {
	super();
	this.nombre = nombre;
	this.correo = correo;
	this.direccion = direccion;
	this.tipoDocumento = tipoDocumento;
	this.identificador = identificador;
	this.telefono = telefono;
}







public int getIdentificador() {
	return identificador;
}



public void setIdentificador(int identificador) {
	this.identificador = identificador;
}



public String getNombre() {
	return nombre;
}




public void setNombre(String nombre) {
	this.nombre = nombre;
}








public int getTelefono() {
	return telefono;
}




public void setTelefono(int telefono) {
	this.telefono = telefono;
}




public String getCorreo() {
	return correo;
}




public void setCorreo(String correo) {
	this.correo = correo;
}




public String getDireccion() {
	return direccion;
}




public void setDireccion(String direccion) {
	this.direccion = direccion;
}




public TipoDocumentos getTipoDocumento() {
	return tipoDocumento;
}




public void setTipoDocumento(TipoDocumentos tipoDocumento) {
	this.tipoDocumento = tipoDocumento;
}




@Override
public String toString() {
	return "Proveedor [identificador=" + identificador + ", nombre=" + nombre + ", telefono=" + telefono + ", correo="
			+ correo + ", direccion=" + direccion + ", tipoDocumento=" + tipoDocumento + "]";
}








}





