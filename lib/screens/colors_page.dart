import 'package:flutter/material.dart';
import 'package:toku/components/list_item.dart';
import 'package:toku/models/items.dart';

class ColorsPage extends StatelessWidget {
  const ColorsPage({super.key});

  @override
  Widget build(BuildContext context) {
    final List<Item> colors = const [
      Item(
        image: 'assets/images/colors/color_black.png',
        eng: 'Black',
        jpn: 'Burakku',
        sound: 'sounds/colors/black.wav'
      ),
      Item(
        image: 'assets/images/colors/color_white.png',
        eng: 'White',
        jpn: 'Shiro',
        sound: 'sounds/colors/white.wav'
      ),
      Item(
        image: 'assets/images/colors/color_brown.png',
        eng: 'Brown',
        jpn: 'Chairo',
        sound: 'sounds/colors/brown.wav'
      ),
      Item(
        image: 'assets/images/colors/color_dusty_yellow.png',
        eng: 'Dusty yellow',
        jpn: 'Kusunda kiiro',
        sound: 'sounds/colors/dusty yellow.wav'
      ),
      Item(
        image: 'assets/images/colors/color_gray.png',
        eng: 'Gray',
        jpn: 'Gurē',
        sound: 'sounds/colors/gray.wav'
      ),
      Item(
        image: 'assets/images/colors/color_green.png',
        eng: 'Green',
        jpn: 'Midori',
        sound: 'sounds/colors/green.wav'
      ),
      Item(
        image: 'assets/images/colors/color_red.png',
        eng: 'Red',
        jpn: 'Aka',
        sound: 'sounds/colors/red.wav'
      ),
      Item(
        image: 'assets/images/colors/color_yellow.png',
        eng: 'Yellow',
        jpn: 'Kiiro',
        sound: 'sounds/colors/yellow.wav'
      ),
    ];
    return Scaffold(
      appBar: AppBar(
        backgroundColor:Color.fromARGB(255, 68, 123, 27),

        title: Text(
          'Colors',
          style: TextStyle(color: Colors.white, fontSize: 35),
        ),
      ),
      body: ListView.builder(
        itemCount: colors.length,
        itemBuilder: (context,index){
          return  ListItem(
            color: Color.fromARGB(255, 60, 15, 30),
            model : colors[index]);
        })
    );
  }
}