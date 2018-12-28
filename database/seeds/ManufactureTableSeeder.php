<?php

use Illuminate\Database\Seeder;

class ManufactureTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('manufactures')->insert([
          'name' => 'Nigel Cabourn.'
      ]);
      DB::table('manufactures')->insert([
          'name' => 'Cacharel.'
      ]);
      DB::table('manufactures')->insert([
          'name' => 'Calibre (Menswear)'
      ]);
      DB::table('manufactures')->insert([
          'name' => 'Calvin Klein.'
      ]);
      DB::table('manufactures')->insert([
          'name' => 'Camilla and Marc'
      ]);
    }
}
