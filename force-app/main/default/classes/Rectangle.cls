public class Rectangle {
    decimal length = 5.5 , breadth = 6 ;
    
    public void area() {
        //decimal a= length * breadth ;
        system.debug('Area =' + length * breadth);
    }
    public void perimeter(){
        system.debug(2*length*breadth);
    }
}