<?php

use Illuminate\Database\Seeder;

class ColorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('colors')->insert(['name' => 'Maroon']);
      DB::table('colors')->insert(['name' => 'Red']);
      DB::table('colors')->insert(['name' => 'Orange']);
      DB::table('colors')->insert(['name' => 'Yellow']);
      DB::table('colors')->insert(['name' => 'Olive']);
      DB::table('colors')->insert(['name' => 'Green']);
      DB::table('colors')->insert(['name' => 'Purple']);
      DB::table('colors')->insert(['name' => 'Fuchsia']);
      DB::table('colors')->insert(['name' => 'Lime']);
      DB::table('colors')->insert(['name' => 'Teal']);
      DB::table('colors')->insert(['name' => 'Aqua']);
      DB::table('colors')->insert(['name' => 'Blue']);
      DB::table('colors')->insert(['name' => 'Navy']);
      DB::table('colors')->insert(['name' => 'Black']);
      DB::table('colors')->insert(['name' => 'Gray']);
      DB::table('colors')->insert(['name' => 'Silver']);
      DB::table('colors')->insert(['name' => 'MediumSpringGreen']);
      DB::table('colors')->insert(['name' => 'HotPink']);
      DB::table('colors')->insert(['name' => 'DeepPink']);
      DB::table('colors')->insert(['name' => 'Coral']);
      DB::table('colors')->insert(['name' => 'DarkOrange']);
      DB::table('colors')->insert(['name' => 'Bisque']);
      DB::table('colors')->insert(['name' => 'Chartreuse']);
      DB::table('colors')->insert(['name' => 'MistyRose']);
    }
}
