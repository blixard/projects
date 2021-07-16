
public class a {

public static void main(String[] args) {

System.out.println(WhatisTheReturnValue());
}

static int WhatisTheReturnValue() {
    try {return 1;}

catch (Exception e) { return 2; }

finally {return 5;}
}
}

