public class Jugador{
    private String NombreCompleto;
    private String Apellidos;
    private String Ci;
    private int edad;
    public Jugador(String nombre, String apellido, String ci, int Edad){
        this.NombreCompleto=nombre;
        this.Apellidos=apellido;
        this.Ci=ci;
        this.edad=Edad;
    }
    public String getNombre()
    {
        return NombreCompleto;
    }
    public void setNombre(String nombre){
        this.NombreCompleto=nombre;
    }
    public String getApellido()
    {
        return Apellidos;
    }
    public void setApellidos(String apellido){
        this.Apellidos=apellido;
    }
    public String getCi()
    {
        return Ci;
    }
    public void setCi(String CI){
        this.Ci=CI;
    }
    public int  getedad()
    {
        return edad;
    }
    public void setEdad(int edad1){
        this.edad=edad1;
    }
    public void imprimir(){
        System.out.println(this.NombreCompleto);
        System.out.println(this.Apellidos);
        System.out.println(this.Ci);
        System.out.println(this.edad);
    }
}
