import 'package:flutter/material.dart';
import 'package:toku/models/items.dart';
import 'package:toku/components/item_info.dart';

class PhrasesItem extends StatelessWidget {
  const PhrasesItem({super.key, required this.model, required this.color,});
  final Item model;
  final Color color;
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 100,
      color: color,
      child: ItemInfo(ItemModel: model)
    );
  }
}