<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
         $this->call(ProductTableSeeder::class);
         $this->call(CategoryTableSeeder::class);
         $this->call(ColorTableSeeder::class);
         $this->call(ManufactureTableSeeder::class);
    }
}
