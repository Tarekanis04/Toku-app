import 'package:flutter/material.dart';
import 'package:toku/models/items.dart';
import 'package:audioplayers/audioplayers.dart';

class ItemInfo extends StatelessWidget {
  const ItemInfo({super.key,required this.ItemModel});
  final Item ItemModel;
  @override
  Widget build(BuildContext context) {
    return Row(
        children: [
          Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        ItemModel.jpn,
                        style: TextStyle(color: Colors.white,fontSize: 18),
                      ),
                      Text(
                        ItemModel.eng,
                        style: TextStyle(color: Colors.white,fontSize: 18),
                      )
                    ],
                  ),
                  Spacer(flex: 1,),
                  IconButton(
                    onPressed: (){
                      final player = AudioPlayer();
                      player.play(AssetSource(ItemModel.sound));
                    },
                    icon: Icon(
                      size:30,
                      color: Colors.white,
                      Icons.play_arrow
                    ),
                  )
        ],
      );
  }
}

