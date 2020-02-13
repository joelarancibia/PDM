public class Equipo{
    private String NombreEquipo;
    private String categoria;
    private Jugador[] jugadores;
    public Equipo(String nombreEquipo, String Categoria, Jugador[]JUgador){
        this.NombreEquipo=nombreEquipo;
        this.categoria=Categoria;
        this.jugadores=JUgador;
    }
    public String getnombreEquipo(){
        return NombreEquipo;
    }
    public void setNombreEquipo(String Nombre)
    {
        this.NombreEquipo=Nombre;
    }
    public String getCategoria(){
        return categoria;
    }
    public void setCategoria(String Cate)
    {
        this.categoria=Cate;
    }
    public Jugador[] getJugador()
    {
        return jugadores;
    }
    public void SetJugador(Jugador[] jugador){
        this.jugadores=jugador;
    }
    public void imprimir(){
        System.out.println(this.NombreEquipo);
        System.out.println(this.categoria);
        







        
        for (int i=0;i<=this.jugadores.length;i++)
        {
            this.jugadores[i].imprimir();
        }
    }
}
