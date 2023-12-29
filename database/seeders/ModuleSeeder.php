<?php

namespace Database\Seeders;

use App\Models\Module;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ModuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'title' => 'Module ABC',
                'project_id' => 1,
            ],
            [
                'title' => 'Module 123',
                'project_id' => 2,
            ],
            [
                'title' => 'Test Module',
                'project_id' => 3,
            ],
            [
                'title' => 'Module Test',
                'project_id' => 4,
            ]
        ];

        foreach ($data as $key => $row){
            Module::create($row);
        }
    }
}