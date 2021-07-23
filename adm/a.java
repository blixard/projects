public class a{

    public static int foo(int n, int r){
        if(n>0){
            return(n%r + foo(n/r, r));
        }
        else{
            return 0;
        }
    }

    public static int fun(int x, int y){
        if(y==0){
            return 0;
        }
        return (x + fun(x,y-1));
    }

    public static int fun2(int x, int y){
        if(x==0){
            return y;
        }
        return fun2(x-1 , x+y);
    }

    public static int f(int n){
        if(n<=1){
            return 1;
        }
        if(n%2==0){
            return f(n/2);
        }
        return f(n/2) + f(n/2 + 1);
    }

    public static int f12(int a, int b){
        if(b==0){
            return 1;
        }
        return fun(a, f12(a,b-1));
    }

    public static int f1(int x){
        int b;
        if(x==1){
            return 1;
        }
        else{
            b = x*f1(x-1);
            return b;
        }
    }

    public static void main(String [] args){
        System.out.println(foo(345,10));
        System.out.println(fun(3,4));
        System.out.println(fun2(4,3));
        System.out.println(f(11));
        System.out.println(f12(3,4));
        System.out.println(f1(5));
    }
}