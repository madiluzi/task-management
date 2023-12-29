<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'title' => 'Project ABC',
                'user_id' => 1,
                'priority_id' => 2,
                'status_id' => 4,
            ],
            [
                'title' => 'Project 123',
                'user_id' => 1,
                'priority_id' => 3,
                'status_id' => 2,
            ],
            [
                'title' => 'Test Project',
                'user_id' => 1,
                'priority_id' => 1,
                'status_id' => 3,
            ],
            [
                'title' => 'Project A1',
                'user_id' => 1,
                'priority_id' => 1,
                'status_id' => 4,
            ],
            [
                'title' => 'Project Qwerty',
                'user_id' => 1,
                'priority_id' => 2,
                'status_id' => 1,
            ]
        ];

        foreach ($data as $key => $row){
            Project::create($row);
        }
    }
}