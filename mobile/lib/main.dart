import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

void main() {
  runApp(const VerbilabApp());
}

class VerbilabApp extends StatelessWidget {
  const VerbilabApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Verbilab',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF06B6D4)),
        textTheme: GoogleFonts.interTextTheme(),
      ),
      home: const HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          children: [
            const SizedBox(height: 60),
            Text('Verbilab', style: Theme.of(context).textTheme.headlineLarge),
            const SizedBox(height: 16),
            const Text('Your All-in-One AI Tool to Write, Design, and Create Smarter.'),
          ],
        ),
      ),
    );
  }
}
