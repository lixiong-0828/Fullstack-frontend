import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class App {
    public static void main(String[] args) throws Exception {
        // System.out.println("Hello, World!");
        // int age = 20;
        // String name = "super";
        // System.out.println("my age is :" + age + "my name is : " + name);

        // if (age > 20) {
        //     System.out.println("I am older than 20 ~");

        // }else{
        //     System.out.println("I am younger~");

        // }

        // int today = 1 ;
        // switch (today) {
        //     case  1:
        //         System.out.println("today is monday!!");
        //         break;
        //     case 2:
        //         System.out.println("Tuesday");
        
        //     default:
        //         System.out.println("nomal day~~");
        //         break;
        // }

        // int[] numbers = {2,3,4,5,6,7};

        // for (int i : numbers) {

        //     System.out.println("current number :" + i);
            
        // }
        //--------------------------------------
        // Persion me = new Persion();
        // me.setName("super");

        // //--------------------------------------

        ArrayList<String> namelist = new ArrayList<>();
        namelist.add("tom");
        namelist.add("bear") ;
        namelist.add("alice");
        namelist.add("1-li");

        // for (String name : namelist) {
        //     System.out.println("contents of arrayList : " + name );
            
        // }
//--------------------------------------
        // HashMap<String,Integer> hasmap = new HashMap<>();
        // hasmap.put("xiong",30);
        // hasmap.put("tom", 18);
        // for (String key : hasmap.keySet()) {
        //     System.out.println("key : " + key + " value :" + hasmap.get(key));            
        // }

//--------------------------------------
        // Collections.sort(namelist, (c1,c2) -> c1.compareTo(c2));
        // for (String name : namelist) {
        //     System.out.println("after sort name: " + name);
        // }

//         Collections.sort(namelist);
//         System.out.println("after use sort with one param :" + namelist);

// //-------------------------------------- lambda

//         namelist.forEach(name -> System.out.println(" use lambda to print :" + name));

//-------------------------------------- Stream : -> Filter

        ArrayList<Integer> days = new ArrayList<>();
        days.add(1);
        days.add(2);
        days.add(3);
        days.add(4);
        days.add(5);
        days.add(6);
        days.add(7);

        List evenDays = days.stream()
        .filter(d -> d % 2 == 0)
        .collect(Collectors.toList());        

        // evenDays.forEach(day -> System.out.println("day in evendays :" + day));

//-------------------------------------- Stream : -> map 

        // List<String> uperCase = namelist.stream()
        //                         .map(n -> n.toUpperCase())
        //                         .collect(Collectors.toList());
        // uperCase.forEach(n -> System.out.println("after upperCase :" + n));

        // // other style of map
        // List<String> lowerCase = namelist.stream()
        //                         .map(String::toLowerCase)
        //                         .collect(Collectors.toList());
        // System.out.println(lowerCase);
//-------------------------------------- Optional
        Optional<String> opt = Optional.of("tome");
        System.out.println("optional opt :" + opt);

        //-------------------------------------- Enum
        enum colors  {RED,BLACK,WHITE};

        System.out.println( " enum colors.RED :" + colors.RED);
        System.out.println("enum Days.monday :" + Days.MONDAY);
        
    }
}
