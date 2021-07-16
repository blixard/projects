public class b {
    public static void main(String [] args){
        int i=0, n= 5;
        while(i^n == 1){
            System.out.println("%d" +  (i&n) );
            i++;
        }
    }
}
