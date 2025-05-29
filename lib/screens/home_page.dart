import 'package:flutter/material.dart';
import 'package:toku/components/Category_item.dart';
import 'package:toku/screens/colors_page.dart';
import 'package:toku/screens/family_members_page.dart';
import 'package:toku/screens/numbers_page.dart';
import 'package:toku/screens/phrases_page.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});


  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor:  Color.fromARGB(255, 0, 31, 63),
          title: Text(
            'Toku',
            style: TextStyle(
              fontSize: 40,
              color: Colors.white
            ),
          ),
        ),
        body: Expanded(
          child: Column(
            children: [
              Category(
                ontap: () {
                  Navigator.push(context, MaterialPageRoute(builder:(BuildContext context){
                    return NumbersPage();
                  }));
                },
                color: Color.fromARGB(255, 49, 91, 119),
                text: 'Numbers',
              ),
              Category(
                ontap: () {
                  Navigator.push(context, MaterialPageRoute(builder:(BuildContext context){
                    return FamilyMembers();
                  }));
                },
                color: Color.fromARGB(255, 126, 77, 60),
                text: 'Fsmily Members',
              ),
              Category(
                ontap: (){
                  Navigator.push(context, MaterialPageRoute(builder:(BuildContext context){
                    return ColorsPage();
                  }));
                },
                color: Color.fromARGB(255, 68, 123, 27),
                text: 'Colors',
              ),
              Category(
                ontap: (){
                  Navigator.push(context, MaterialPageRoute(builder: (context) {
                    return PhrasesPage();
                  },));
                },
                color: Color.fromARGB(255, 57, 36, 94),
                text: 'Phrases',
              ),
            ],
          ),
        ),
      );
  }
}

