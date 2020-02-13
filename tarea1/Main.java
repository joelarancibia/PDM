public class Main{
     public static void main(String[] args) {
        Jugador jugador1= new Jugador("uno","uno1","783782 noa",20);
        Jugador jugador2= new Jugador("uno1","uno12","783752 coa",20);
        Jugador jugador3= new Jugador("uno2","uno13","7837523 poa",20);
        Jugador[]jugadores=new Jugador[3];
        jugadores[0]=jugador1;
        jugadores[1]=jugador2;
        jugadores[2]=jugador3;

        Equipo equipo=new Equipo ("not found","varones",jugadores);
        Equipo[] equipos= new Equipo[1];
        equipos[0]= equipo;

        campeonato Campeonato =new campeonato("campeonato unifranz",equipos);
        Campeonato.imprimir();
    }   
}