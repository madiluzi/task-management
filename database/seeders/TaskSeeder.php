<?php

namespace Database\Seeders;

use App\Models\Task;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'content' => 'Task ABC',
                'project_id' => 1,
                'module_id' => 1,
                'status_id' => 4,
            ], [
                'content' => 'Task 123',
                'project_id' => 2,
                'module_id' => 2,
                'status_id' => 1,
            ], [
                'content' => 'Task Test',
                'project_id' => 2,
                'module_id' => 1,
                'status_id' => 4,
            ], [
                'content' => 'Tasks',
                'project_id' => 1,
                'module_id' => 3,
                'status_id' => 2,
            ]
        ];

        foreach ($data as $key => $row){
            Task::create($row);
        }
    }
}