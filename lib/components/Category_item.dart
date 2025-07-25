import 'package:flutter/material.dart';

class Category extends StatelessWidget {
  Category({super.key, this.text, this.color, this.ontap});
  String? text;
  Color? color;
  Function()? ontap;
  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: GestureDetector(
        onTap: ontap,
        child: Container(
          alignment: Alignment.centerLeft,
          padding: EdgeInsets.only(left: 24),
          color: color,
          width: double.infinity,
          child: Text(
            text!,
            style: TextStyle(fontSize: 20, color: Colors.white),
          ),
        ),
      ),
    );
  }
}
