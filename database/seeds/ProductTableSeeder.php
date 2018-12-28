<?php

use Illuminate\Database\Seeder;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('products')->insert([
          'name' => 'Nigel Cabourn.',
          'price' => 305.6,
          'image'=> 'img/product/l-product-1.jpg',
          'avaible' => true,
          'description' => 'It is a long established fact that a reader will
           be distracted by the readable content of a page when looking at its layout.
           The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'
      ]);
      DB::table('products')->insert([
          'name' => 'Nigel Cabourn.',
          'price' => 305.6,
          'image'=> 'img/product/l-product-2.jpg',
          'avaible' => true,
          'description' => 'It is a long established fact that a reader will
           be distracted by the readable content of a page when looking at its layout.
           The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'
      ]);
      DB::table('products')->insert([
          'name' => 'Nigel Cabourn.',
          'price' => 305.6,
          'image'=> 'img/product/l-product-3.jpg',
          'avaible' => true,
          'description' => 'It is a long established fact that a reader will
           be distracted by the readable content of a page when looking at its layout.
           The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'
      ]);
      DB::table('products')->insert([
          'name' => 'Nigel Cabourn.',
          'price' => 305.6,
          'image'=> 'img/product/l-product-4.jpg',
          'avaible' => true,
          'description' => 'It is a long established fact that a reader will
           be distracted by the readable content of a page when looking at its layout.
           The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'
      ]);
      DB::table('products')->insert([
          'name' => 'Nigel Cabourn.',
          'price' => 305.6,
          'image'=> 'img/product/l-product-5.jpg',
          'avaible' => true,
          'description' => 'It is a long established fact that a reader will
           be distracted by the readable content of a page when looking at its layout.
           The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'
      ]);
      DB::table('products')->insert([
          'name' => 'Nigel Cabourn.',
          'price' => 305.6,
          'image'=> 'img/product/l-product-6.jpg',
          'avaible' => true,
          'description' => 'It is a long established fact that a reader will
           be distracted by the readable content of a page when looking at its layout.
           The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'
      ]);
      DB::table('products')->insert([
          'name' => 'Nigel Cabourn.',
          'price' => 305.6,
          'image'=> 'img/product/l-product-7.jpg',
          'avaible' => true,
          'description' => 'It is a long established fact that a reader will
           be distracted by the readable content of a page when looking at its layout.
           The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'
      ]);
      DB::table('products')->insert([
          'name' => 'Nigel Cabourn.',
          'price' => 305.6,
          'image'=> 'img/product/l-product-8.jpg',
          'avaible' => true,
          'description' => 'It is a long established fact that a reader will
           be distracted by the readable content of a page when looking at its layout.
           The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'
      ]);
    }
}
