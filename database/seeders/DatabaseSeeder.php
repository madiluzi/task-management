<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Project;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'admin@app',
            'email' => 'admin@app.com',
            'password' => bcrypt('password'),
        ]);

        $this->call([
            ProjectSeeder::class,
            ModuleSeeder::class,
            TaskSeeder::class,
            PageSeeder::class,
            // UserSeeder::class,
        ]);
    }
}