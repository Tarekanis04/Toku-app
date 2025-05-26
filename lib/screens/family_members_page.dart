import 'package:flutter/material.dart';
import 'package:toku/components/list_item.dart';
import 'package:toku/models/items.dart';


class FamilyMembers extends StatelessWidget {
  const FamilyMembers({super.key});

  @override
  Widget build(BuildContext context) {
    final List<Item> members = const [
      Item(
        image: 'assets/images/family_members/family_father.png',
        eng: 'Dad',
        jpn: 'Chichioya',
        sound: 'sounds/family_members/father.wav'
      ),
      Item(
        image: 'assets/images/family_members/family_daughter.png',
        eng: 'Daughter',
        jpn: 'Musume',
        sound: 'sounds/family_members/daughter.wav'
      ),
      Item(
        image: 'assets/images/family_members/family_grandfather.png',
        eng: 'Grand Father',
        jpn: 'Ojisan',
        sound: 'sounds/family_members/grand father.wav'
      ),
      Item(
        image: 'assets/images/family_members/family_mother.png',
        eng: 'Mother',
        jpn: 'Hahaoya',
        sound: 'sounds/family_members/mother.wav'
      ),
      Item(
        image: 'assets/images/family_members/family_grandmother.png',
        eng: 'Grand Mother',
        jpn: 'Sobo',
        sound: 'sounds/family_members/grand mother.wav'
      ),
      Item(
        image: 'assets/images/family_members/family_older_brother.png',
        eng: 'Older Brother',
        jpn: 'Nisan',
        sound: 'sounds/family_members/older brother.wav'
      ),
      Item(
        image: 'assets/images/family_members/family_older_sister.png',
        eng: 'Older Sister',
        jpn: 'Ane',
        sound: 'sounds/family_members/older sister.wav'
      ),
      Item(
        image: 'assets/images/family_members/family_son.png',
        eng: 'Son',
        jpn: 'Musuko',
        sound: 'sounds/family_members/son.wav'
      ),
      Item(
        image: 'assets/images/family_members/family_younger_brother.png',
        eng: 'Younger Brother',
        jpn: 'Otōto',
        sound: 'sounds/family_members/younger brother.wav'
      ),
      Item(
        image: 'assets/images/family_members/family_younger_sister.png',
        eng: 'Younger Sister',
        jpn: 'Imōto',
        sound: 'sounds/family_members/younger sister.wav'
      ),
    ];
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Color.fromARGB(255, 126, 77, 60),

        title: Text(
          'Family members',
          style: TextStyle(color: Colors.white, fontSize: 35),
        ),
      ),
      body: ListView.builder(
        itemCount: members.length,
        itemBuilder: (context,index){
          return  ListItem(
            color: Color.fromARGB(255, 30, 60, 30),
            model : members[index]);
        })
    );
  }
}