<?php

use Illuminate\Database\Seeder;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('categories')->insert([
          'name' => 'Men’s Fashion',
      ]);
      DB::table('categories')->insert([
          'name' => 'Women’s Fashion',
      ]);
      DB::table('categories')->insert([
          'name' => 'Phone & Accessories',
      ]);
      DB::table('categories')->insert([
          'name' => 'Electronic Appliance',
      ]);
      DB::table('categories')->insert([
          'name' => 'Computer & Networking',
      ]);
      DB::table('categories')->insert([
          'name' => 'TV, Audiio & Gaming',
      ]);
      DB::table('categories')->insert([
          'name' => 'Office Supplies',
      ]);
    }
}
