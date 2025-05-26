import 'package:flutter/material.dart';
import 'package:toku/components/item_info.dart';
import 'package:toku/models/items.dart';

class ListItem extends StatelessWidget {
  const ListItem({super.key, required this.model, required this.color});
  final Item model;
  final Color color;
  @override
  Widget build(BuildContext context) {
    return Container(
            height: 100,
            color: color,
            child: Row(
              children: [
                Container(color: const Color.fromARGB(255, 241, 217, 217),
                         child: Image.asset(model.image) ),

                Expanded(child: ItemInfo(ItemModel: model))         
              ],
            ),
          );
  }
}