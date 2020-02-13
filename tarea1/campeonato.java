public class campeonato{
    private String nombreCampeonato;
    public Equipo[] equipos;
    public campeonato( String nombrecampeonato,Equipo[] EQuipos){
        this.nombreCampeonato=nombrecampeonato;
        this.equipos=EQuipos;
    }
    public String getnombreCampeonato(){
        return nombreCampeonato;
    }
    public void setNombreCampeonato(String Nombre){
        this.nombreCampeonato=Nombre;
    }
    public Equipo[] getEquipos(){
        return equipos;
    }
    public void setEquipos(Equipo[] EQuipos){
        this.equipos=EQuipos;
    }

    public void imprimir(){
        System.out.println(this.nombreCampeonato);
        for (int i=1;i<=this.equipos.length;i++)
        {
            this.equipos[i].imprimir();
        }
    }

}