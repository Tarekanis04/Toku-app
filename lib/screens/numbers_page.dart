import 'package:flutter/material.dart';
import 'package:toku/components/list_item.dart';
import 'package:toku/models/items.dart';

class NumbersPage extends StatelessWidget {
  const NumbersPage({super.key});

  @override
  Widget build(BuildContext context) {
    final List<Item> numbers = const [
      Item(
        image: 'assets/images/numbers/number_one.png',
        eng: 'One',
        jpn: 'Ichi',
        sound: 'sounds/numbers/number_one_sound.mp3'
      ),
      Item(
        image: 'assets/images/numbers/number_two.png',
        eng: 'Two',
        jpn: 'Ni',
        sound: 'sounds/numbers/number_two_sound.mp3'
      ),
      Item(
        image: 'assets/images/numbers/number_three.png',
        eng: 'Three',
        jpn: 'San',
        sound: 'sounds/numbers/number_three_sound.mp3'
      ),
      Item(
        image: 'assets/images/numbers/number_four.png',
        eng: 'Four',
        jpn: 'Shi',
        sound: 'sounds/numbers/number_four_sound.mp3'
      ),
      Item(
        image: 'assets/images/numbers/number_five.png',
        eng: 'Five',
        jpn: 'Go',
        sound: 'sounds/numbers/number_five_sound.mp3'
      ),
      Item(
        image: 'assets/images/numbers/number_six.png',
        eng: 'Six',
        jpn: 'Roku',
        sound: 'sounds/numbers/number_six_sound.mp3'
      ),
      Item(
        image: 'assets/images/numbers/number_seven.png',
        eng: 'Seven',
        jpn: 'Sebun',
        sound: 'sounds/numbers/number_seven_sound.mp3'
      ),
      Item(
        image: 'assets/images/numbers/number_eight.png',
        eng: 'Eight',
        jpn: 'Hachi',
        sound: 'sounds/numbers/number_eight_sound.mp3'
      ),
      Item(
        image: 'assets/images/numbers/number_nine.png',
        eng: 'Nine',
        jpn: 'Kuu',
        sound: 'sounds/numbers/number_nine_sound.mp3'
      ),
      Item(
        image: 'assets/images/numbers/number_ten.png',
        eng: 'Ten',
        jpn: 'Juu',
        sound: 'sounds/numbers/number_ten_sound.mp3'
      ),
    ];
    return Scaffold(
      appBar: AppBar(
              backgroundColor: Color.fromARGB(255, 49, 91, 119),
        title: Text(
          'Numbers',
          style: TextStyle(color: Colors.white, fontSize: 35),
        ),
      ),
      body: ListView.builder(
        itemCount: numbers.length,
        itemBuilder: (context,index){
          return  ListItem(
            color: Color.fromARGB(255, 0, 51, 46),
            model: numbers[index]);
        })
    );
  }
}
